import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logoIcon from "@/assets/icons/logo_icon.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="Recro Group Logo" className="h-11 w-11 object-contain" />
            <span className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight">Recro Group</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">Restoring families</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Behavioral health and relationship-focused care for individuals, couples, families, children and corporate teams.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary-deep">About us</Link></li>
            <li><Link to="/services" className="hover:text-primary-deep">Services</Link></li>
            <li><Link to="/grief-camp" className="hover:text-primary-deep">Grief Camp</Link></li>
            <li><Link to="/insights" className="hover:text-primary-deep">Insights</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Engage</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/booking" search={{ service: undefined }} className="hover:text-primary-deep">Book a Session</Link></li>
            <li><Link to="/contact" className="hover:text-primary-deep">Contact us</Link></li>
            <li><Link to="/faq" className="hover:text-primary-deep">FAQs</Link></li>
            <li><Link to="/join-us" className="hover:text-primary-deep">Join us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Reach us</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5"><Phone size={15} className="mt-0.5 text-primary" /> +254 700 000 000</li>
            <li className="flex items-start gap-2.5"><Mail size={15} className="mt-0.5 text-primary" /> hello@recrogroup.org</li>
            <li className="flex items-start gap-2.5"><MapPin size={15} className="mt-0.5 text-primary" /> Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>Copyright © 2017 - 2024 Recro Group Limited. Restoring families.</p>
          <p className="flex items-center gap-4">
            <Link to="/" className="hover:text-foreground">Privacy</Link>
            <Link to="/" className="hover:text-foreground">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
