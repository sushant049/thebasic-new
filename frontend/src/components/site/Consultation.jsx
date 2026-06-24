import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { toast } from "sonner";

const inputClasses =
  "h-12 w-full border-0 border-b border-[#5A7BA0]/50 rounded-none bg-transparent px-0 py-2 text-base text-[#0F2A47] placeholder:text-[#5A7BA0]/70 focus-visible:ring-0 focus-visible:border-[#C0561D] focus-visible:outline-none transition-colors font-light";

export const Consultation = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  });

  const handleChange = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.propertyType) {
      toast.error("Please complete the required fields.");
      return;
    }
    // Marketing-only site: simulate submission, show success state.
    setSubmitted(true);
    toast.success("Thank you. Our team will reach out within 24 hours.");
  };

  return (
    <section
      id="consultation"
      data-testid="consultation-section"
      className="relative bg-[#F2F6FB] py-24 md:py-36"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 md:sticky md:top-32 self-start"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#C0561D]" />
            <span className="eyebrow">Book a Consultation</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-light text-[#0F2A47] leading-[1.05] tracking-tight">
            Have a property,
            <br />
            <em className="not-italic text-[#C0561D]">villa, building,</em>
            <br />
            or land?
          </h2>
          <p className="mt-6 text-[#1F3A5F]/85 font-light text-base md:text-lg leading-relaxed max-w-md">
            Tell us about your asset. We&apos;ll come back with a yield-led
            assessment and a tailored path forward — design, operations, or
            both.{" "}
          </p>

          <div className="mt-10 pt-8 border-t border-[#D3E0EE] space-y-4">
            <div>
              <div className="text-[10px] tracking-[0.28em] uppercase text-[#5A7080] mb-1">
                Email
              </div>
              <a
                href="mailto:connect@thebasic.co.in"
                data-testid="contact-email"
                className="font-serif text-xl text-[#0F2A47] hover:text-[#C0561D] transition-colors"
              >
                connect@thebasic.co.in
              </a>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.28em] uppercase text-[#5A7080] mb-1">
                Mobile
              </div>
              <a
                href="tel:+917205000123"
                data-testid="contact-mobile"
                className="font-serif text-xl text-[#0F2A47] hover:text-[#C0561D] transition-colors"
              >
                +91 72050 00123
              </a>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.28em] uppercase text-[#5A7080] mb-1">
                Response time
              </div>
              <p className="font-serif text-xl text-[#0F2A47]">Within 24 hours</p>
            </div>
          </div>
        </motion.div>

        {/* Right column - form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="md:col-span-7"
        >
          {submitted ? (
            <div
              data-testid="consultation-success"
              className="bg-[#E6EEF7] border border-[#D3E0EE] p-10 md:p-14 flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-full bg-[#C0561D]/15 border border-[#C0561D]/30 flex items-center justify-center">
                <Check className="text-[#C0561D]" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-[#0F2A47] mt-6">
                Thank you, {form.name.split(" ")[0] || "there"}.
              </h3>
              <p className="mt-4 text-[#1F3A5F]/85 font-light leading-relaxed max-w-md">
                Your enquiry has been received. A member of our team will reach
                out within 24 hours to schedule a consultation.
              </p>
              <button
                data-testid="consultation-reset"
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", propertyType: "", message: "" }); }}
                className="mt-10 text-[11px] uppercase tracking-[0.28em] text-[#1F3A5F] hover:text-[#C0561D] transition-colors"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              data-testid="consultation-form"
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                <div>
                  <label className="text-[10px] tracking-[0.28em] uppercase text-[#5A7080] mb-2 block">
                    Full Name *
                  </label>
                  <Input
                    data-testid="form-name"
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder="Your name"
                    className={inputClasses}
                    required
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.28em] uppercase text-[#5A7080] mb-2 block">
                    Email *
                  </label>
                  <Input
                    data-testid="form-email"
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    placeholder="you@email.com"
                    className={inputClasses}
                    required
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.28em] uppercase text-[#5A7080] mb-2 block">
                    Phone
                  </label>
                  <Input
                    data-testid="form-phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    placeholder="+91 00000 00000"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.28em] uppercase text-[#5A7080] mb-2 block">
                    Property Type *
                  </label>
                  <Select
                    value={form.propertyType}
                    onValueChange={(v) => setForm((f) => ({ ...f, propertyType: v }))}
                  >
                    <SelectTrigger
                      data-testid="form-property-type"
                      className="h-12 w-full border-0 border-b border-[#5A7BA0]/50 rounded-none bg-transparent px-0 text-base text-[#0F2A47] focus:ring-0 focus:border-[#C0561D]"
                    >
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#F2F6FB] border border-[#D3E0EE]">
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="apartment">Apartment / Home</SelectItem>
                      <SelectItem value="building">Apartment Building</SelectItem>
                      <SelectItem value="land">Land Parcel</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-[10px] tracking-[0.28em] uppercase text-[#5A7080] mb-2 block">
                  Tell us about your property
                </label>
                <Textarea
                  data-testid="form-message"
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="Location, size, current status, and what you're hoping to achieve..."
                  rows={4}
                  className="w-full border-0 border-b border-[#5A7BA0]/50 rounded-none bg-transparent px-0 py-3 text-base text-[#0F2A47] placeholder:text-[#5A7BA0]/70 focus-visible:ring-0 focus-visible:border-[#C0561D] focus-visible:outline-none transition-colors font-light resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  data-testid="consultation-form-submit"
                  className="group inline-flex items-center justify-between gap-8 bg-[#0F2A47] text-[#F2F6FB] hover:bg-[#C0561D] transition-all duration-500 px-8 py-4 text-[11px] uppercase tracking-[0.28em]"
                >
                  Send Enquiry
                  <Send size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
                <p className="mt-5 text-xs text-[#5A7080] font-light">
                  By submitting, you agree to be contacted by The Basic Ecosystem regarding your property.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
