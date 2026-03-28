import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowLeft, Check, Calendar, MapPin, Camera, Heart, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  weddingDate: string;
  location: string;
  eventType: string;
  budgetRange: string;
  vision: string;
  referenceStyle: string;
};

const INITIAL_DATA: FormData = {
  fullName: '',
  email: '',
  phone: '',
  weddingDate: '',
  location: '',
  eventType: 'Wedding',
  budgetRange: '₹2,00,000 - ₹5,00,000',
  vision: '',
  referenceStyle: '',
};

const STEPS = [
  { id: 1, title: 'The Basics', subtitle: 'Let’s start your story' },
  { id: 2, title: 'The Vision', subtitle: 'Tell us about your celebration' },
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trapping
  useEffect(() => {
    if (isOpen) {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements?.[0] as HTMLElement;
      const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

      const handleTab = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement?.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement?.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleTab);
      firstElement?.focus();

      return () => document.removeEventListener('keydown', handleTab);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset after animation
      const timer = setTimeout(() => {
        setStep(1);
        setFormData(INITIAL_DATA);
        setIsSuccess(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const updateFields = (fields: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^\+?[\d\s-]{10,}$/.test(phone);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.fullName.trim() !== '' && 
               validateEmail(formData.email) && 
               validatePhone(formData.phone) &&
               formData.weddingDate.trim() !== '' && 
               formData.location.trim() !== '';
      case 2:
        return true;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (step < 2 && isStepValid()) setStep(s => s + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(s => s - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStepValid()) return;
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const progress = (step / STEPS.length) * 100;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full max-w-4xl bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:min-h-[700px]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Left Side - Visual/Context */}
            <div className="hidden md:flex md:w-1/3 bg-stone-900 relative overflow-hidden flex-col justify-between p-12 text-white">
              <div className="absolute inset-0 opacity-40">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" 
                  alt="Wedding aesthetic bride portrait"
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 to-stone-950/80" />
              </div>

              <div className="relative z-10">
                <div className="text-xs font-label uppercase tracking-[0.3em] text-amber-500 mb-4">Mukheshwari</div>
                <h2 className="font-headline text-3xl leading-tight">Preserving your <br /><i className="font-light italic">eternal</i> legacy.</h2>
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4 text-white/60">
                  <div className="w-8 h-px bg-white/20" />
                  <span className="text-[10px] font-label uppercase tracking-widest">Step {step} of 2</span>
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-headline">{STEPS[step - 1].title}</div>
                  <div className="text-xs text-white/70 font-body italic">{STEPS[step - 1].subtitle}</div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 bg-white p-6 md:p-16 flex flex-col overflow-y-auto">
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 transition-colors p-2 z-10"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-stone-100">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-amber-700"
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </div>

              <div className="flex-1 flex flex-col justify-center max-w-lg mx-auto w-full">
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="space-y-10"
                    >
                      {/* Step Content */}
                      {step === 1 && (
                        <div className="space-y-8">
                          <div className="space-y-2">
                            <h3 className="text-2xl font-headline text-stone-900">The Basics</h3>
                            <p className="text-sm text-stone-600 font-body italic">Essential details to check our availability.</p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            <InputField 
                              label="Full Name" 
                              value={formData.fullName}
                              onChange={v => updateFields({ fullName: v })}
                              placeholder="E.g. Ananya Sharma"
                            />
                            <InputField 
                              label="Email Address" 
                              type="email"
                              value={formData.email}
                              onChange={v => updateFields({ email: v })}
                              placeholder="ananya@example.com"
                            />
                            <InputField 
                              label="Phone Number" 
                              type="tel"
                              value={formData.phone}
                              onChange={v => updateFields({ phone: v })}
                              placeholder="+91 00000 00000"
                            />
                            <InputField 
                              label="Wedding Date" 
                              type="date"
                              value={formData.weddingDate}
                              onChange={v => updateFields({ weddingDate: v })}
                              icon={<Calendar size={16} />}
                            />
                            <div className="md:col-span-2">
                              <InputField 
                                label="Location / Venue" 
                                value={formData.location}
                                onChange={v => updateFields({ location: v })}
                                placeholder="E.g. Taj Falaknuma Palace, Hyderabad"
                                icon={<MapPin size={16} />}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-8">
                          <div className="space-y-2">
                            <h3 className="text-2xl font-headline text-stone-900">The Vision</h3>
                            <p className="text-sm text-stone-600 font-body italic">Tell us about your celebration.</p>
                          </div>
                          <div className="space-y-10">
                            <div className="space-y-4">
                              <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-[0.2rem]">Type of Event</label>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {['Wedding', 'Pre-Wedding', 'Engagement', 'Destination'].map(type => (
                                  <button
                                    key={type}
                                    type="button"
                                    onClick={() => updateFields({ eventType: type })}
                                    className={cn(
                                      "px-3 py-3 text-[9px] font-label uppercase tracking-widest border transition-all duration-300",
                                      formData.eventType === type 
                                        ? "bg-stone-900 text-white border-stone-900" 
                                        : "bg-transparent text-stone-600 border-stone-200 hover:border-stone-400"
                                    )}
                                  >
                                    {type}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div className="space-y-4">
                              <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-[0.2rem]">Budget Range</label>
                              <select 
                                value={formData.budgetRange}
                                onChange={e => updateFields({ budgetRange: e.target.value })}
                                className="w-full bg-transparent border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-amber-700 transition-colors appearance-none cursor-pointer text-stone-900"
                              >
                                <option>₹2,00,000 - ₹5,00,000</option>
                                <option>₹5,00,000 - ₹10,00,000</option>
                                <option>₹10,00,000 - ₹20,00,000</option>
                                <option>₹20,00,000+</option>
                              </select>
                            </div>
                            <div className="space-y-4">
                              <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-[0.2rem]">Your Vision (Optional)</label>
                              <textarea 
                                value={formData.vision}
                                onChange={e => updateFields({ vision: e.target.value })}
                                placeholder="Tell us about your vision..."
                                className="w-full bg-stone-50 border-none p-4 text-sm focus:ring-1 focus:ring-amber-700/20 focus:outline-none transition-all min-h-[100px] resize-none text-stone-900 placeholder:text-stone-400"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex items-center justify-between pt-10">
                        {step > 1 ? (
                          <button 
                            type="button"
                            onClick={prevStep}
                            className="flex items-center gap-2 text-[10px] font-bold text-stone-500 uppercase tracking-widest hover:text-stone-900 transition-colors"
                          >
                            <ArrowLeft size={14} />
                            Back
                          </button>
                        ) : <div />}

                        {step < 2 ? (
                          <Magnetic>
                            <button 
                              type="button"
                              onClick={nextStep}
                              disabled={!isStepValid()}
                              className="bg-stone-900 text-white px-10 py-4 text-[11px] font-label uppercase tracking-[0.2rem] hover:bg-stone-800 transition-all flex items-center gap-3 disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              Continue
                              <ArrowRight size={14} />
                            </button>
                          </Magnetic>
                        ) : (
                          <Magnetic>
                            <button 
                              onClick={handleSubmit}
                              disabled={isSubmitting || !isStepValid()}
                              className="bg-stone-900 text-white px-12 py-5 text-[11px] font-label uppercase tracking-[0.2rem] hover:bg-stone-800 transition-all flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {isSubmitting ? 'Processing...' : 'Check Availability'}
                              {!isSubmitting && <Sparkles size={14} className="fill-current" />}
                            </button>
                          </Magnetic>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center space-y-8"
                    >
                      <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto">
                        <Check className="text-amber-700 w-10 h-10" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-3xl font-headline text-stone-900">Your story has begun.</h3>
                        <p className="text-stone-600 font-body italic max-w-xs mx-auto">
                          Thank you for trusting us with your legacy. We will review your vision and reach out within 24 hours.
                        </p>
                      </div>
                      <button 
                        onClick={onClose}
                        className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.2rem] border-b border-amber-700/30 pb-1 hover:border-amber-700 transition-all"
                      >
                        Return to Gallery
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function InputField({ 
  label, 
  value, 
  onChange, 
  type = 'text', 
  placeholder, 
  icon 
}: { 
  label: string; 
  value: string; 
  onChange: (v: string) => void; 
  type?: string; 
  placeholder?: string;
  icon?: React.ReactNode;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative space-y-2 group">
      <label className={cn(
        "block text-[10px] font-bold uppercase tracking-[0.2rem] transition-all duration-300",
        isFocused ? "text-amber-700" : "text-stone-500"
      )}>
        {label}
      </label>
      <div className="relative flex items-center">
        {icon && <div className="absolute left-0 text-stone-400 group-focus-within:text-amber-700 transition-colors">{icon}</div>}
        <input 
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={cn(
            "w-full bg-transparent border-b border-stone-200 py-3 text-sm focus:outline-none transition-all duration-500 placeholder:text-stone-400 text-stone-900",
            isFocused ? "border-amber-700" : "border-stone-200",
            icon && "pl-8"
          )}
        />
        <motion.div 
          initial={false}
          animate={{ scaleX: isFocused ? 1 : 0 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-amber-700 origin-left"
        />
      </div>
    </div>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <div className="text-[9px] font-bold text-stone-500 uppercase tracking-widest">{label}</div>
      <div className="text-sm font-headline text-stone-900 truncate">{value || '—'}</div>
    </div>
  );
}

function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    if (ref.current) {
      ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    }
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = `translate(0px, 0px)`;
    }
  };

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-300 ease-out"
    >
      {children}
    </div>
  );
}
