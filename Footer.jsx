import React from "react";
import { Link } from "react-router-dom";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">N</span>
              </div>
              <span className="font-heading font-semibold text-xl">Nchite Foundation</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Empowering vulnerable school children in rural communities with the resources they need to thrive.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-6 text-primary">
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Our Work", path: "/our-work" },
                { label: "Get Involved", path: "/get-involved" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-background/60 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-6 text-primary">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-background/60 text-sm">Rural Communities, Malawi</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-background/60 text-sm">info@nchitefoundation.org</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-background/60 text-sm">+265 999 000 000</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-6 text-primary">
              Stay Connected
            </h4>
            <p className="text-background/60 text-sm mb-4">
              Get updates on our impact and stories from the field.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 bg-background/10 border border-background/20 rounded-lg text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-primary"
              />
              <button className="px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Nchite Foundation. All rights reserved.
          </p>
          <p className="text-background/40 text-sm flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> for every child
          </p>
        </div>
      </div>
    </footer>
  );
}