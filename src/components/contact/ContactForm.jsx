import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
        <p className="text-muted-foreground mb-6">We'll get back to you within 24-48 hours.</p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
          }}
          className="text-primary font-semibold hover:underline"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name *</Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Full name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject *</Label>
        <Select
          value={formData.subject}
          onValueChange={(val) => handleChange("subject", val)}
        >
          <SelectTrigger>
            <SelectValue placeholder="What is this about?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="donation">Donation Inquiry</SelectItem>
            <SelectItem value="volunteer">Volunteering</SelectItem>
            <SelectItem value="partnership">Partnership</SelectItem>
            <SelectItem value="media">Media & Press</SelectItem>
            <SelectItem value="general">General Question</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          required
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Tell us how we can help or how you'd like to get involved..."
          className="h-32"
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg min-h-[48px]"
      >
        <Send className="w-4 h-4" />
        Send Message
      </button>
    </form>
  );
}