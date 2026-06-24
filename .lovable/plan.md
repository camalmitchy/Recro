# Recro Auth + RBAC Upgrade Plan

This is a large, multi-system upgrade. I'll enable **Lovable Cloud** (backend) to power auth, profiles, roles, and CRUD persistence — without it none of "session persistence", "RBAC", or "functional admin buttons" can actually work.

## 1. Backend (Lovable Cloud)

Enable Cloud, then create migrations for:

- `profiles` (id → auth.users, full_name, phone, account_type: customer|guardian|corporate, comms prefs, created_at)
- `app_role` enum: `admin | customer | therapist | finance | content_manager`
- `user_roles` (separate table; `has_role()` security-definer function — per Lovable RBAC rules)
- Trigger: auto-create profile + assign default `customer` role on signup
- Domain tables for admin CRUD: `services`, `therapists`, `media_items`, `blog_posts`, `bookings`, `appointments`, `payments`, `grief_applications`, `saved_resources`
- RLS on every table; GRANTs to `authenticated` (+ `anon` for public-read tables only: services, therapists, media, blog)
- Admin-only write policies use `has_role(auth.uid(), 'admin')`

## 2. Auth UI

- `/join-us` — landing card: "Sign In" / "Create Account"
- `/login` — email + password, forgot password link, link to signup
- `/signup` — full name, email, phone, password, confirm, account type select; uses `emailRedirectTo: window.location.origin`
- `/reset-password` — required companion page
- `AuthProvider` (React context) using `supabase.auth.onAuthStateChange` + `getSession` on mount; exposes `user`, `roles`, `hasRole()`, `signOut()`
- Post-login redirect: admin → `/admin`, else → `/profile`

## 3. Header logic

Update `SiteHeader.tsx`:
- Replace **every** "Book Session" CTA across site with **"Join Us"** (links to `/join-us` when logged out)
- When authenticated: hide "Join Us", show avatar dropdown
  - Customer menu: My Profile, My Appointments, My Bookings, My Payments, Settings, Logout
  - Admin menu: Admin Dashboard, My Profile, Manage Bookings, Manage Payments, Content, Settings, Logout
- Menu items rendered conditionally via `hasRole('admin')`

## 4. Customer profile `/profile`

Tabbed dashboard:
- **Overview** — upcoming appointment, booking status, payment status, saved resources, grief-camp status cards
- **Personal Info** — editable name/phone/account type/comms prefs (writes to `profiles`)
- **Appointments** — upcoming/past with status badges
- **Bookings** — history table with ref ID + payment status
- **Payments** — M-Pesa / bank / card sections with status badges + receipt download stub
- **Resources** — saved articles/media
- **Settings** — password update (`supabase.auth.updateUser`), notification + privacy toggles

Route lives under `_authenticated/` so the integration's managed gate protects it.

## 5. Admin CRUD wiring

Convert the existing admin pages from static demo data to live Supabase queries via TanStack Query + `createServerFn` (where privileged) or direct authenticated client (where RLS-scoped):

- Services / Therapists / Media / Blog / FAQs / Testimonials: full add / edit / delete with dialog forms, confirmation modal on delete, toast on success/error, loading state on submit
- Bookings: assign therapist, confirm, mark completed, cancel
- Payments: mark paid, verify bank transfer, link to booking, reject
- Grief camp: add/update application status, upload flyer, publish updates

All destructive actions use `AlertDialog`. All async actions show spinner + Sonner toast.

## 6. RBAC (UI-level as requested)

- `useAuth()` exposes `roles: string[]` and `hasRole(r)`
- Header dropdown, profile page, and admin shell links gated by `hasRole`
- `_authenticated/` gate covers `/profile` and `/admin/*`
- Admin route additionally checks `hasRole('admin')` in a `beforeLoad` → redirects non-admins to `/profile`
- Backend RLS already enforces real permissions; UI gating is the "interim" layer

## 7. Navigation sweep

Global find-replace "Book Session" → "Join Us" across: home hero, services, grief-camp, footer, any CTAs. Target → `/join-us` (logged-out) or hidden (logged-in).

## Technical notes

- Stack: TanStack Start + Supabase via Lovable Cloud (already approved pattern)
- Default email auth + Google sign-in button on `/login` and `/signup` (per Cloud defaults)
- Profile data: yes — using `profiles` table with trigger
- Roles in **separate** `user_roles` table (security requirement, never on profiles)
- Session: `supabase.auth` persists in localStorage automatically; root `onAuthStateChange` listener invalidates router/query cache
- All new server fns that need user context use `requireSupabaseAuth` middleware

## Out of scope (interim)

- Full backend permission enforcement beyond RLS basics (per your "UI-level only" note)
- Therapist/finance/content-manager role dashboards (enum exists, dashboards later)
- Real M-Pesa STK push, real card payments (status tracking only; integrations later)
- Email/SMS notifications

## Confirmation needed

1. OK to **enable Lovable Cloud** now? (required — no way to do auth/RBAC/persistence without it)
2. Include **Google sign-in** alongside email/password? (Cloud default)
3. Should the first signed-up user be auto-promoted to `admin`, or will you set admin role manually via the Cloud users table?
