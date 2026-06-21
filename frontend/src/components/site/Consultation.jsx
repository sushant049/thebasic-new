import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { toast } from "sonner";

const inputClasses =
  "h-12 w-full border-0 border-b border-[#8C7A6B]/50 rounded-none bg-transparent px-0 py-2 text-base text-[#2C2420] placeholder:text-[#8C7A6B]/70 focus-visible:ring-0 focus-visible:border-[#C19A6B] focus-visible:outline-none transition-colors font-light";

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
      className="relative bg-[#F9F7F4] py-24 md:py-36"
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
            <span className="h-px w-10 bg-[#C19A6B]" />
            <span className="eyebrow">Book a Consultation</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-light text-[#2C2420] leading-[1.05] tracking-tight">
            Have a property,
            <br />
            <em className="not-italic text-[#C19A6B]">villa, building,</em>
            <br />
            or land?
          </h2>
          <p className="mt-6 text-[#4A3B32]/85 font-light text-base md:text-lg leading-relaxed max-w-md">
            Tell us about your asset. We&apos;ll come back with a yield-led
            assessment and a tailored path forward — design, operations, or
            both.{" "}
          </p>

          <div className="mt-10 pt-8 border-t border-[#E5DFD5] space-y-4">
            <div>
              <div className="text-[10px] tracking-[0.28em] uppercase text-[#73655D] mb-1">
                Email
              </div>
              <a
                href="mailto:hello@thebasicecosystem.com"
                data-testid="contact-email"
                className="font-serif text-xl text-[#2C2420] hover:text-[#C19A6B] transition-colors"
              >
                hello@thebasicecosystem.com
              </a>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.28em] uppercase text-[#73655D] mb-1">
                Response time
              </div>
              <p className="font-serif text-xl text-[#2C2420]">Within 24 hours</p>
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
              className="bg-[#F2EFE9] border border-[#E5DFD5] p-10 md:p-14 flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-full bg-[#C19A6B]/15 border border-[#C19A6B]/30 flex items-center justify-center">
                <Check className="text-[#C19A6B]" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-[#2C2420] mt-6">
                Thank you, {form.name.split(" ")[0] || "there"}.
              </h3>
              <p className="mt-4 text-[#4A3B32]/85 font-light leading-relaxed max-w-md">
                Your enquiry has been received. A member of our team will reach
                out within 24 hours to schedule a consultation.
              </p>
              <button
                data-testid="consultation-reset"
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", propertyType: "", message: "" }); }}
                className="mt-10 text-[11px] uppercase tracking-[0.28em] text-[#4A3B32] hover:text-[#C19A6B] transition-colors"
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
                  <label className="text-[10px] tracking-[0.28em] uppercase text-[#73655D] mb-2 block">
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
                  <label className="text-[10px] tracking-[0.28em] uppercase text-[#73655D] mb-2 block">
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
                  <label className="text-[10px] tracking-[0.28em] uppercase text-[#73655D] mb-2 block">
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
                  <label className="text-[10px] tracking-[0.28em] uppercase text-[#73655D] mb-2 block">
                    Property Type *
                  </label>
                  <Select
                    value={form.propertyType}
                    onValueChange={(v) => setForm((f) => ({ ...f, propertyType: v }))}
                  >
                    <SelectTrigger
                      data-testid="form-property-type"
                      className="h-12 w-full border-0 border-b border-[#8C7A6B]/50 rounded-none bg-transparent px-0 text-base text-[#2C2420] focus:ring-0 focus:border-[#C19A6B]"
                    >
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#F9F7F4] border border-[#E5DFD5]">
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
                <label className="text-[10px] tracking-[0.28em] uppercase text-[#73655D] mb-2 block">
                  Tell us about your property
                </label>
                <Textarea
                  data-testid="form-message"
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="Location, size, current status, and what you're hoping to achieve..."
                  rows={4}
                  className="w-full border-0 border-b border-[#8C7A6B]/50 rounded-none bg-transparent px-0 py-3 text-base text-[#2C2420] placeholder:text-[#8C7A6B]/70 focus-visible:ring-0 focus-visible:border-[#C19A6B] focus-visible:outline-none transition-colors font-light resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  data-testid="consultation-form-submit"
                  className="group inline-flex items-center justify-between gap-8 bg-[#2C2420] text-[#F9F7F4] hover:bg-[#C19A6B] transition-all duration-500 px-8 py-4 text-[11px] uppercase tracking-[0.28em]"
                >
                  Send Enquiry
                  <Send size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
                <p className="mt-5 text-xs text-[#73655D] font-light">
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
