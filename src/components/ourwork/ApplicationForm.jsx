import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ApplicationForm({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    school: "",
    grade: "",
    community: "",
    guardianName: "",
    guardianPhone: "",
    needs: "",
    story: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {submitted ? (
              <div className="p-8 lg:p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                </motion.div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  Application Received!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for applying. Our team will review your application and
                  get back to you soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors min-h-[48px]"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      Student Application
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Apply for educational support from Nchite Foundation
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-muted transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
                    aria-label="Close application form"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        placeholder="Student's full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        required
                        type="number"
                        value={formData.age}
                        onChange={(e) => handleChange("age", e.target.value)}
                        placeholder="Student's age"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="school">School Name *</Label>
                      <Input
                        id="school"
                        required
                        value={formData.school}
                        onChange={(e) => handleChange("school", e.target.value)}
                        placeholder="Current school"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="grade">Grade / Class *</Label>
                      <Select
                        value={formData.grade}
                        onValueChange={(val) => handleChange("grade", val)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          {["Standard 1", "Standard 2", "Standard 3", "Standard 4", "Standard 5", "Standard 6", "Standard 7", "Standard 8", "Form 1", "Form 2", "Form 3", "Form 4"].map((g) => (
                            <SelectItem key={g} value={g}>{g}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="community">Community / Village *</Label>
                    <Input
                      id="community"
                      required
                      value={formData.community}
                      onChange={(e) => handleChange("community", e.target.value)}
                      placeholder="Your community or village name"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="guardianName">Guardian Name *</Label>
                      <Input
                        id="guardianName"
                        required
                        value={formData.guardianName}
                        onChange={(e) => handleChange("guardianName", e.target.value)}
                        placeholder="Parent or guardian name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guardianPhone">Guardian Phone</Label>
                      <Input
                        id="guardianPhone"
                        value={formData.guardianPhone}
                        onChange={(e) => handleChange("guardianPhone", e.target.value)}
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>What do you need help with? *</Label>
                    <Select
                      value={formData.needs}
                      onValueChange={(val) => handleChange("needs", val)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select primary need" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="books">Books & Learning Materials</SelectItem>
                        <SelectItem value="uniforms">School Uniform</SelectItem>
                        <SelectItem value="fees">School Fees</SelectItem>
                        <SelectItem value="supplies">Pens & Supplies</SelectItem>
                        <SelectItem value="multiple">Multiple Needs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="story">Tell Us Your Story</Label>
                    <Textarea
                      id="story"
                      value={formData.story}
                      onChange={(e) => handleChange("story", e.target.value)}
                      placeholder="Share anything about your situation or why you need support..."
                      className="h-24"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg min-h-[48px]"
                  >
                    <Send className="w-4 h-4" />
                    Submit Application
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}