import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, User, LogOut, LayoutDashboard, ChevronDown } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import logoIcon from "@/assets/icons/logo_icon.png";
import individualIcon from "@/assets/icons/individual-therapy.svg";
import familyIcon from "@/assets/icons/family-therapy.svg";
import couplesIcon from "@/assets/icons/couples-therapy.svg";
import groupIcon from "@/assets/icons/group-therapy.svg";
import griefIcon from "@/assets/icons/grief-camp.svg";
import corporateIcon from "@/assets/icons/corporate-speaking.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  { slug: "individual", label: "Individual Therapy", icon: individualIcon, description: "One-on-one psychotherapy" },
  { slug: "couples", label: "Couples Therapy", icon: couplesIcon, description: "Relationship counselling" },
  { slug: "family", label: "Family Therapy", icon: familyIcon, description: "Whole-family sessions" },
  { slug: "group", label: "Group Therapy", icon: groupIcon, description: "Shared healing experience" },
  { slug: "children", label: "Grief Camps", icon: griefIcon, description: "Support for children" },
  { slug: "corporate", label: "Corporate Speaking", icon: corporateIcon, description: "Workplace wellness" },
];

const nav = [
  { to: "/", label: "Home" },
  { to: "/grief-camp", label: "Grief Camp" },
  { to: "/about", label: "About" },
  { to: "/insights", label: "Insights" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

function initials(name?: string | null, email?: string | null) {
  const src = (name || email || "U").trim();
  const parts = src.split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return src.slice(0, 2).toUpperCase();
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate({ to: "/" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" preload="intent">
          <img src={logoIcon} alt="Recro Group Logo" className="h-11 w-11 object-contain" loading="lazy" width={44} height={44} />
          <span className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-foreground">Recro Group</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">Restoring families</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-primary-deep bg-primary-soft" }}
            className="px-3 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
          >
            Home
          </Link>

          <Link
            to="/grief-camp"
            activeProps={{ className: "text-primary-deep bg-primary-soft" }}
            className="px-3 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
          >
            Grief Camp
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              activeProps={{ className: "text-primary-deep bg-primary-soft" }}
              className="px-3 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface transition-colors inline-flex items-center gap-1"
            >
              Services
              <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </Link>

            {servicesOpen && (
              <div className="absolute top-full left-0 pt-1 w-[320px]">
                <div className="rounded-2xl border border-border bg-background shadow-[var(--shadow-lift)] overflow-hidden">
                  <div className="p-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to="/services/$slug"
                        params={{ slug: service.slug }}
                        className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-primary-soft transition-colors group"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="mt-0.5 h-10 w-10 rounded-full bg-muted-foreground/[0.08] flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                          <img src={service.icon} alt="" className="h-5 w-5 object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary-deep transition-colors">
                            {service.label}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-border bg-surface/50 px-4 py-2.5">
                    <Link
                      to="/services"
                      className="text-xs font-semibold text-primary-deep hover:text-primary transition-colors inline-flex items-center gap-1"
                      onClick={() => setServicesOpen(false)}
                    >
                      View all services →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/about"
            activeProps={{ className: "text-primary-deep bg-primary-soft" }}
            className="px-3 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
          >
            About
          </Link>

          <Link
            to="/insights"
            activeProps={{ className: "text-primary-deep bg-primary-soft" }}
            className="px-3 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
          >
            Insights
          </Link>

          <Link
            to="/faq"
            activeProps={{ className: "text-primary-deep bg-primary-soft" }}
            className="px-3 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
          >
            FAQ
          </Link>

          <Link
            to="/contact"
            activeProps={{ className: "text-primary-deep bg-primary-soft" }}
            className="px-3 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {!user ? (
            <Link to="/join-us" preload="intent" className="hidden sm:inline-flex btn-primary">Join Us</Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-primary-deep text-sm font-semibold border border-border hover:bg-primary/15 transition" aria-label="Account menu">
                {initials(user.user_metadata?.full_name, user.email)}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold truncate">{user.user_metadata?.full_name || user.email}</span>
                  <span className="text-[11px] font-normal text-muted-foreground truncate">{user.email}</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="focus:bg-primary-soft focus:text-primary-deep">
                  <Link to="/admin" preload="intent">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Admin Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="focus:bg-primary-soft focus:text-primary-deep">
                  <Link to="/profile" preload="intent">
                    <User className="mr-2 h-4 w-4" />
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="text-destructive focus:text-destructive focus:bg-destructive/10">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border bg-background"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-3 flex flex-col gap-1">
            <Link
              to="/"
              preload="intent"
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-primary-soft"
            >
              Home
            </Link>

            <Link
              to="/grief-camp"
              preload="intent"
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-primary-soft"
            >
              Grief Camp
            </Link>

            {/* Mobile Services Section */}
            <div className="mt-1 mb-1">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-primary-soft"
              >
                Services
                <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="mt-1 pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to="/services/$slug"
                      params={{ slug: service.slug }}
                      onClick={() => {
                        setOpen(false);
                        setServicesOpen(false);
                      }}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
                    >
                      <img src={service.icon} alt="" className="h-5 w-5 object-contain opacity-60" />
                      {service.label}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    onClick={() => {
                      setOpen(false);
                      setServicesOpen(false);
                    }}
                    className="block px-3 py-2 rounded-lg text-sm text-primary-deep hover:bg-primary-soft transition-colors font-medium"
                  >
                    View all services →
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              preload="intent"
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-primary-soft"
            >
              About
            </Link>

            <Link
              to="/insights"
              preload="intent"
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-primary-soft"
            >
              Insights
            </Link>

            <Link
              to="/faq"
              preload="intent"
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-primary-soft"
            >
              FAQ
            </Link>

            <Link
              to="/contact"
              preload="intent"
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-primary-soft"
            >
              Contact
            </Link>

            {!user && (
              <Link to="/join-us" preload="intent" onClick={() => setOpen(false)} className="btn-primary mt-2">Join Us</Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
