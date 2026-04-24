import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import ScrollReveal from "../components/shared/ScrollReveal";
import ContactForm from "../components/contact/ContactForm";

const COMMUNITY_IMG = "https://media.base44.com/images/public/69e737f94c01a225a31a6ef1/438b38d90_generated_314b9ceb.png";

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Rural Communities, Malawi" },
  { icon: Mail, label: "Email", value: "info@nchitefoundation.org" },
  { icon: Phone, label: "Phone", value: "+265 999 000 000" },
  { icon: Clock, label: "Office Hours", value: "Mon–Fri, 8:00 AM – 5:00 PM" },
];

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
              Let's Build This
              <span className="text-primary"> Bridge Together</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you want to donate, volunteer, or learn more about our work,
              we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6 mb-8">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium text-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Community Image */}
                <div className="rounded-2xl overflow-hidden aspect-video">
                  <img
                    src={COMMUNITY_IMG}
                    alt="Aerial view of rural communities served by Nchite Foundation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.2}>
                <div className="p-6 lg:p-10 rounded-3xl bg-card border border-border/50 shadow-sm">
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground text-sm mb-6">
                    Fill out the form below and we'll respond within 24-48 hours.
                  </p>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map-like Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
                Communities We Serve
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                Our work spans across 15 rural communities, each with unique needs
                and incredible potential.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                "Mchinji", "Lilongwe Rural", "Kasungu", "Ntchisi", "Dowa",
                "Salima", "Nkhotakota", "Dedza", "Ntcheu", "Mangochi",
                "Balaka", "Machinga", "Zomba Rural", "Mulanje", "Thyolo",
              ].map((community) => (
                <div
                  key={community}
                  className="p-4 rounded-xl bg-card border border-border/50 text-center hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{community}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}