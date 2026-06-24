import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { SiteShell } from "@/components/site/SiteShell";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";
import { initiateMpesaStk } from "@/lib/mpesa.functions";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Smartphone,
  CreditCard,
  Building2,
  Upload,
  Loader2,
  Clock,
} from "lucide-react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a session | Recro Group" },
      {
        name: "description",
        content:
          "Book a Recro Group session — choose a service, pick a time, share a short intake, and pay via M-Pesa or SBM.",
      },
    ],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  component: BookingPage,
});

type ServiceDef = {
  key: string;
  label: string;
  description: string;
  duration: string;
  durationMin: number;
  amount: number; // 0 = free / quote
};

const SERVICES: ServiceDef[] = [
  { key: "individual", label: "Individual Therapy", description: "50-minute one-on-one session for adults.", duration: "50 min", durationMin: 50, amount: 6500 },
  { key: "couples", label: "Couples Therapy", description: "75-minute session for partners.", duration: "75 min", durationMin: 75, amount: 10000 },
  { key: "family", label: "Family Therapy", description: "75-minute session for the family system.", duration: "75 min", durationMin: 75, amount: 12000 },
  { key: "group", label: "Group Therapy (intake)", description: "Screening conversation for an upcoming group.", duration: "30 min", durationMin: 30, amount: 0 },
  { key: "children", label: "Grief Camp", description: "50-minute session tailored for young clients.", duration: "50 min", durationMin: 50, amount: 6000 },
  { key: "corporate", label: "Corporate Scoping Call", description: "30-minute scoping for a corporate engagement.", duration: "30 min", durationMin: 30, amount: 0 },
];

const CLINICIANS = [
  { id: "michelle", name: "Dr. Michelle Karume", role: "Founder · Clinical Psychologist · Grief Specialist" },
];

const TIME_SLOTS = ["9:00", "10:05", "11:10", "12:15", "13:20", "14:25", "15:30"];

const STEPS = ["Service", "Time", "Intake", "Pay"] as const;

function getDateStrip(daysAhead = 14) {
  const out: { date: Date; key: string; dow: string; day: string; mon: string }[] = [];
  const today = new Date();
  for (let i = 0; i < daysAhead; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    out.push({
      date: d,
      key: d.toISOString().slice(0, 10),
      dow: d.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
      day: String(d.getDate()),
      mon: d.toLocaleDateString("en-US", { month: "short" }),
    });
  }
  return out;
}

function BookingPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { service: serviceParam } = Route.useSearch();
  const stkPush = useServerFn(initiateMpesaStk);

  const dateStrip = useMemo(() => getDateStrip(14), []);

  const initialServiceKey = SERVICES.find((s) => s.key === serviceParam)?.key ?? SERVICES[0].key;
  const [step, setStep] = useState(serviceParam ? 1 : 0);
  const [serviceKey, setServiceKey] = useState(initialServiceKey);
  const [clinicianId, setClinicianId] = useState(CLINICIANS[0].id);
  const [dateKey, setDateKey] = useState(dateStrip[1]?.key ?? dateStrip[0].key);
  const [time, setTime] = useState("12:15");
  const [format, setFormat] = useState<"in_person" | "video">("in_person");
  const [notes, setNotes] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [bookingId, setBookingId] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [paid, setPaid] = useState(false);

  const service = SERVICES.find((s) => s.key === serviceKey)!;
  const clinician = CLINICIANS.find((c) => c.id === clinicianId)!;
  const selectedDate = dateStrip.find((d) => d.key === dateKey) ?? dateStrip[0];

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/join-us" });
  }, [loading, user, navigate]);

  useEffect(() => {
    if (user) {
      setName((n) => n || user.user_metadata?.full_name || "");
      setEmail((e) => e || user.email || "");
      setPhone((p) => p || (user.user_metadata as { phone?: string })?.phone || "");
    }
  }, [user]);

  const whenLabel = `${selectedDate.dow.charAt(0)}${selectedDate.dow.slice(1).toLowerCase()} ${selectedDate.day} ${selectedDate.mon}, ${time}`;

  const createBookingIfNeeded = async () => {
    if (bookingId || !user) return bookingId;
    setCreating(true);
    const reference = "RG-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    const { data, error } = await supabase
      .from("bookings")
      .insert({
        user_id: user.id,
        reference,
        client_name: name || user.email || "Client",
        client_email: email || user.email || "",
        client_phone: phone,
        preferred_date: dateKey,
        preferred_time: time,
        notes: `${service.label} · ${format === "video" ? "Video" : "In person"} · ${clinician.name}${notes ? "\n" + notes : ""}`,
        amount_kes: service.amount,
        status: "pending",
        payment_status: "pending",
      })
      .select()
      .single();
    setCreating(false);
    if (error) {
      toast.error(error.message);
      return null;
    }
    setBookingId(data.id);
    return data.id as string;
  };

  const onNext = async () => {
    if (step === 2) {
      if (!notes.trim()) {
        toast.error("Please share a short note so your clinician can prepare.");
        return;
      }
      const id = await createBookingIfNeeded();
      if (!id) return;
    }
    setStep(Math.min(STEPS.length, step + 1));
  };

  if (loading) {
    return (
      <SiteShell>
        <div className="container-page py-20 text-center text-muted-foreground">Loading…</div>
      </SiteShell>
    );
  }

  const showSummary = step >= 1; // summary visible from Time step onward

  return (
    <SiteShell>
      <section className="container-page py-12">
        <span className="eyebrow">Booking</span>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl font-semibold tracking-tight">
          Book a session
        </h1>

        {/* Stepper */}
        <ol className="mt-8 flex items-center gap-3 flex-wrap">
          {STEPS.map((s, i) => {
            const done = i < step;
            const active = i === step;
            return (
              <li key={s} className="flex items-center gap-3">
                <span
                  className={`grid h-9 w-9 place-items-center rounded-full text-sm font-semibold transition ${done
                      ? "bg-primary text-primary-foreground"
                      : active
                        ? "border-2 border-primary text-primary-deep bg-background"
                        : "border-2 border-border text-muted-foreground bg-background"
                    }`}
                >
                  {done ? <Check size={16} /> : i + 1}
                </span>
                <span
                  className={`text-xs tracking-[0.18em] font-semibold uppercase ${active ? "text-foreground" : "text-muted-foreground"
                    }`}
                >
                  {s}
                </span>
                {i < STEPS.length - 1 && <span className="hidden sm:block w-10 h-px bg-border" />}
              </li>
            );
          })}
        </ol>

        <div className="mt-8 border-t border-border" />

        <div className={`mt-10 grid gap-10 ${showSummary && step === 3 ? "lg:grid-cols-[1fr_360px]" : ""}`}>
          <div>
            {step === 0 && (
              <div className="grid md:grid-cols-2 gap-5">
                {SERVICES.map((s) => {
                  const selected = s.key === serviceKey;
                  return (
                    <button
                      key={s.key}
                      type="button"
                      onClick={() => setServiceKey(s.key)}
                      className={`text-left rounded-2xl border bg-card p-6 md:p-7 transition shadow-[var(--shadow-soft)] hover:border-primary ${selected ? "border-primary ring-1 ring-primary" : "border-border"
                        }`}
                    >
                      <h3 className="font-serif text-2xl font-semibold">{s.label}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                      <div className="mt-6 flex items-center justify-between text-sm">
                        <span className="inline-flex items-center gap-2 text-muted-foreground">
                          <Clock size={15} /> {s.duration}
                        </span>
                        <span className="font-semibold">
                          {s.amount ? `Ksh ${s.amount.toLocaleString()}` : "Free"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="font-serif text-2xl font-semibold">Choose a clinician</h2>
                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                  {CLINICIANS.map((c) => {
                    const sel = c.id === clinicianId;
                    return (
                      <button
                        key={c.id}
                        onClick={() => setClinicianId(c.id)}
                        className={`text-left rounded-2xl border p-5 transition ${sel ? "border-primary ring-1 ring-primary bg-background" : "border-border bg-card hover:border-primary"
                          }`}
                      >
                        <p className="font-serif text-xl font-semibold">{c.name}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{c.role}</p>
                      </button>
                    );
                  })}
                </div>

                <h2 className="mt-10 font-serif text-2xl font-semibold">Pick a date</h2>
                <div className="mt-4 -mx-2 overflow-x-auto pb-2">
                  <div className="px-2 flex gap-3 min-w-max">
                    {dateStrip.map((d) => {
                      const sel = d.key === dateKey;
                      return (
                        <button
                          key={d.key}
                          onClick={() => setDateKey(d.key)}
                          className={`shrink-0 w-[88px] rounded-2xl border px-3 py-3 text-center transition ${sel
                              ? "bg-primary text-primary-foreground border-primary"
                              : "border-border bg-card hover:border-primary"
                            }`}
                        >
                          <p className={`text-[11px] tracking-[0.18em] font-semibold ${sel ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                            {d.dow}
                          </p>
                          <p className="mt-1 text-2xl font-serif font-semibold leading-none">{d.day}</p>
                          <p className={`mt-1 text-xs ${sel ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                            {d.mon}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <h2 className="mt-10 font-serif text-2xl font-semibold">Pick a time</h2>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {TIME_SLOTS.map((t) => {
                    const sel = t === time;
                    return (
                      <button
                        key={t}
                        onClick={() => setTime(t)}
                        className={`rounded-2xl border px-4 py-3 text-sm font-medium transition ${sel
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border bg-card hover:border-primary"
                          }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <p className="text-[11px] tracking-[0.18em] font-semibold uppercase text-muted-foreground">Session format</p>
                <div className="mt-3 grid sm:grid-cols-2 gap-4">
                  {(
                    [
                      { id: "in_person", label: "In person", sub: "Nairobi practice" },
                      { id: "video", label: "Video", sub: "Secure link sent on confirm" },
                    ] as const
                  ).map((f) => {
                    const sel = f.id === format;
                    return (
                      <button
                        key={f.id}
                        onClick={() => setFormat(f.id)}
                        className={`text-left rounded-2xl border p-5 transition ${sel ? "border-primary ring-1 ring-primary bg-background" : "border-border bg-card hover:border-primary"
                          }`}
                      >
                        <p className="font-serif text-xl font-semibold">{f.label}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{f.sub}</p>
                      </button>
                    );
                  })}
                </div>

                <p className="mt-8 text-[11px] tracking-[0.18em] font-semibold uppercase text-muted-foreground">
                  What brings you in? *
                </p>
                <textarea
                  rows={6}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="A short paragraph helps your therapist prepare. Confidential — only your clinician sees this."
                  className="mt-3 w-full rounded-2xl border border-border bg-card px-5 py-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-y"
                />

                <div className="mt-6 grid sm:grid-cols-3 gap-4">
                  <Field label="Full name" value={name} onChange={setName} placeholder="Jane Doe" />
                  <Field label="Email" type="email" value={email} onChange={setEmail} placeholder="jane@example.com" />
                  <Field label="Phone" value={phone} onChange={setPhone} placeholder="+254 7XX XXX XXX" />
                </div>
              </div>
            )}

            {step === 3 && bookingId && (
              <PaymentStep
                bookingId={bookingId}
                phone={phone}
                amount={service.amount}
                onPaid={() => {
                  setPaid(true);
                  setStep(4);
                }}
                stkPush={stkPush}
                userId={user!.id}
              />
            )}

            {step === 4 && <ConfirmStep paid={paid} />}
          </div>

          {/* Summary sidebar — visible on Pay step */}
          {step === 3 && (
            <aside className="rounded-2xl border border-border bg-card p-6 md:p-7 shadow-[var(--shadow-soft)] h-fit">
              <h3 className="font-serif text-2xl font-semibold">Booking summary</h3>
              <dl className="mt-5 space-y-4 text-sm">
                <Row k="Service" v={service.label} />
                <Row k="Clinician" v={clinician.name} />
                <Row k="When" v={whenLabel} />
                <Row k="Duration" v={service.duration} />
                <Row k="Format" v={format === "video" ? "Video" : "In person"} />
              </dl>
              <div className="my-5 border-t border-border" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total</span>
                <span className="font-serif text-2xl font-semibold">
                  {service.amount ? `Ksh ${service.amount.toLocaleString()}` : "Free"}
                </span>
              </div>
            </aside>
          )}
        </div>

        {/* Bottom nav */}
        <div className="mt-10 flex items-center justify-between">
          {step > 0 && step < 4 ? (
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
            >
              <ArrowLeft size={16} /> Back
            </button>
          ) : (
            <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground">
              ← Back to services
            </Link>
          )}

          {step < 3 ? (
            <button onClick={onNext} disabled={creating} className="btn-primary disabled:opacity-50">
              {creating ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Creating…
                </>
              ) : (
                <>
                  Continue <ArrowRight size={15} />
                </>
              )}
            </button>
          ) : step === 4 ? (
            <Link to="/profile" className="btn-primary">
              View my bookings <Check size={15} />
            </Link>
          ) : null}
        </div>
      </section>
    </SiteShell>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="font-medium text-right">{v}</dd>
    </div>
  );
}

function PaymentStep({
  bookingId,
  phone,
  amount,
  onPaid,
  stkPush,
  userId,
}: {
  bookingId: string;
  phone: string;
  amount: number;
  onPaid: () => void;
  stkPush: (args: { data: { bookingId: string; phone: string; amountKes: number } }) => Promise<any>;
  userId: string;
}) {
  const [method, setMethod] = useState<"mpesa" | "bank">("mpesa");
  const [mpesaPhone, setMpesaPhone] = useState(phone);
  const [stkBusy, setStkBusy] = useState(false);
  const [proof, setProof] = useState<File | null>(null);
  const [bankRef, setBankRef] = useState("");
  const [uploading, setUploading] = useState(false);

  const triggerStk = async () => {
    if (!amount) {
      toast.error("This service requires a quote — we'll be in touch.");
      return;
    }
    if (!mpesaPhone) {
      toast.error("Enter your M-Pesa phone number");
      return;
    }
    setStkBusy(true);
    try {
      const res = await stkPush({ data: { bookingId, phone: mpesaPhone, amountKes: amount } });
      if (res?.dummy) {
        toast.success("STK push simulated (Daraja keys not yet configured). A pending payment was recorded.");
      } else {
        toast.success("STK push sent. Check your phone to authorise the payment.");
      }
      onPaid();
    } catch (e: any) {
      toast.error(e?.message ?? "STK push failed");
    } finally {
      setStkBusy(false);
    }
  };

  const submitBank = async () => {
    if (!proof) {
      toast.error("Please upload your bank slip");
      return;
    }
    if (!bankRef.trim()) {
      toast.error("Enter the transfer reference");
      return;
    }
    setUploading(true);
    try {
      const ext = proof.name.split(".").pop() ?? "pdf";
      const path = `${userId}/${bookingId}-${Date.now()}.${ext}`;
      const up = await supabase.storage.from("payment-proofs").upload(path, proof, { upsert: false });
      if (up.error) throw up.error;
      const { error } = await supabase.from("payments").insert({
        booking_id: bookingId,
        user_id: userId,
        method: "bank",
        amount_kes: amount,
        reference: bankRef.trim(),
        proof_url: path,
        status: "pending",
        notes: "SBM Bank transfer — awaiting admin verification",
      });
      if (error) throw error;
      toast.success("Proof uploaded. We'll verify and confirm by email.");
      onPaid();
    } catch (e: any) {
      toast.error(e?.message ?? "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2 className="font-serif text-3xl font-semibold">Payment</h2>

      <div className="mt-5 grid sm:grid-cols-2 gap-4">
        <button
          onClick={() => setMethod("mpesa")}
          className={`text-left rounded-2xl border p-5 transition ${method === "mpesa" ? "border-primary ring-1 ring-primary bg-background" : "border-border bg-card hover:border-primary"
            }`}
        >
          <div className="flex items-center gap-2.5 font-semibold">
            <Smartphone size={18} /> M-Pesa STK
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Pay via your Safaricom line. We'll prompt your phone.
          </p>
        </button>
        <button
          onClick={() => setMethod("bank")}
          className={`text-left rounded-2xl border p-5 transition ${method === "bank" ? "border-primary ring-1 ring-primary bg-background" : "border-border bg-card hover:border-primary"
            }`}
        >
          <div className="flex items-center gap-2.5 font-semibold">
            <Building2 size={18} /> SBM Bank transfer
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            KES / USD accounts · upload your slip for verification.
          </p>
        </button>
      </div>

      {method === "mpesa" ? (
        <div className="mt-6 space-y-4">
          <p className="text-[11px] tracking-[0.18em] font-semibold uppercase text-muted-foreground">
            M-Pesa number *
          </p>
          <input
            value={mpesaPhone}
            onChange={(e) => setMpesaPhone(e.target.value)}
            placeholder="07XX XXX XXX"
            className="w-full rounded-2xl border border-border bg-card px-5 py-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <p className="text-xs rounded-full bg-primary-soft text-primary-deep px-3 py-1.5 inline-block">
            Buy Goods · Till 747736 · Recro Group Limited
          </p>
          <div>
            <button onClick={triggerStk} disabled={stkBusy} className="btn-primary disabled:opacity-50">
              {stkBusy ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Sending STK…
                </>
              ) : (
                <>
                  <CreditCard size={15} /> Pay &amp; confirm
                </>
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-3">
            <div className="rounded-2xl bg-primary-soft p-4 text-xs leading-relaxed">
              <p className="font-semibold text-primary-deep mb-1">Kenya Shilling Account</p>
              <p><strong>Bank:</strong> SBM Bank</p>
              <p><strong>Account name:</strong> Recro Group Limited</p>
              <p><strong>Account number:</strong> 0182074946001</p>
              <p><strong>Swift:</strong> CKENKENA</p>
            </div>
            <div className="rounded-2xl bg-surface p-4 text-xs leading-relaxed border border-border">
              <p className="font-semibold text-primary-deep mb-1">USD Account</p>
              <p><strong>Bank:</strong> SBM Bank</p>
              <p><strong>Account name:</strong> Recro Group Limited</p>
              <p><strong>Account number:</strong> 0182074946003</p>
              <p><strong>Swift:</strong> SBMKKENA</p>
            </div>
          </div>
          <Field label="Bank reference / slip number" value={bankRef} onChange={setBankRef} placeholder="e.g. TXN20260620-9381" />
          <label className="block">
            <span className="text-[11px] tracking-[0.18em] font-semibold uppercase text-muted-foreground">
              Proof of payment (PDF or image)
            </span>
            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={(e) => setProof(e.target.files?.[0] ?? null)}
              className="mt-2 block w-full text-sm"
            />
          </label>
          <button onClick={submitBank} disabled={uploading} className="btn-primary disabled:opacity-50">
            {uploading ? (
              <>
                <Loader2 size={15} className="animate-spin" /> Uploading…
              </>
            ) : (
              <>
                <Upload size={15} /> Submit for verification
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

function ConfirmStep({ paid }: { paid: boolean }) {
  return (
    <div className="text-center py-12 rounded-3xl border border-border bg-card">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)]">
        <Check size={26} />
      </span>
      <h2 className="mt-5 font-serif text-3xl font-semibold">
        {paid ? "Payment received" : "You're all set"}
      </h2>
      <p className="mt-2 text-muted-foreground max-w-md mx-auto">
        We've recorded your booking. A coordinator will confirm your session by email shortly. You
        can track status in your profile.
      </p>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[11px] tracking-[0.18em] font-semibold uppercase text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-2xl border border-border bg-card px-5 py-3.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
