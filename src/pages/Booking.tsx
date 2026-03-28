import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Calendar, 
  MapPin, 
  Camera, 
  Heart, 
  Sparkles, 
  Clock, 
  Video, 
  Coffee, 
  Phone,
  User,
  Mail,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import ScrollReveal, { RevealItem } from '../components/ScrollReveal';
import Magnetic from '../components/Magnetic';

type ConsultationData = {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  consultationType: 'Video Call' | 'In-Person' | 'Phone Call';
  weddingDate: string;
  weddingLocation: string;
  message: string;
};

const INITIAL_DATA: ConsultationData = {
  fullName: '',
  email: '',
  phone: '',
  preferredDate: '',
  preferredTime: 'Morning',
  consultationType: 'Video Call',
  weddingDate: '',
  weddingLocation: '',
  message: '',
};

const STEPS = [
  { id: 1, title: 'The Connection', subtitle: 'Tell us who you are' },
  { id: 2, title: 'The Schedule', subtitle: 'When shall we meet?' },
  { id: 3, title: 'The Vision', subtitle: 'A brief overview of your day' },
  { id: 4, title: 'The Confirmation', subtitle: 'Review and finalize' },
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ConsultationData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateFields = (fields: Partial<ConsultationData>) => {
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
               validatePhone(formData.phone);
      case 2:
        return formData.preferredDate.trim() !== '' && 
               formData.consultationType !== undefined;
      case 3:
        return formData.weddingDate.trim() !== '' && 
               formData.weddingLocation.trim() !== '';
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (step < 4 && isStepValid()) setStep(s => s + 1);
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
    <div className="pt-32 min-h-screen bg-stone-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center -mt-32 overflow-hidden mb-24">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            alt="A beautifully decorated wedding venue, setting the stage for a personal consultation"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1920"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-stone-950/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center pt-20">
          <ScrollReveal direction="up" distance={40} duration={1.2}>
            <RevealItem>
              <div className="inline-block px-6 py-2 border border-white/20 rounded-full backdrop-blur-md mb-8">
                <span className="text-white/80 font-label uppercase tracking-[0.3rem] text-[10px]">BOOKING</span>
              </div>
            </RevealItem>
            
            <RevealItem delay={0.1}>
              <h1 className="font-headline text-4xl sm:text-5xl md:text-8xl text-white leading-[1.1] mb-8 tracking-tight">
                Let's craft your <br /> <i className="font-light italic text-amber-500">booking</i> legacy.
              </h1>
            </RevealItem>
            
            <RevealItem delay={0.2}>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                Our booking process is the first step in our collaborative journey. We'll discuss your vision, our approach, and how we can best tell your unique story.
              </p>
            </RevealItem>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left Side - Context/Info */}
          <div className="lg:col-span-5 space-y-12">
            <ScrollReveal direction="right">
              <RevealItem>
                <h2 className="font-headline text-4xl text-stone-900 mb-8">The Experience</h2>
              </RevealItem>
              <RevealItem delay={0.1}>
                <p className="text-stone-500 text-lg leading-relaxed font-light">
                  We believe that every couple deserves a tailored experience. Our consultations are designed to be relaxed, informative, and inspiring.
                </p>
              </RevealItem>
            </ScrollReveal>

            <div className="space-y-8 pt-12 border-t border-stone-200">
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex gap-6 items-center">
                  <div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center text-amber-700 shrink-0">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-headline text-xl text-stone-900">Virtual Discovery</h4>
                    <p className="text-stone-500 text-sm">A 30-minute video call to align our creative visions.</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.4}>
                <div className="flex gap-6 items-center">
                  <div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center text-amber-700 shrink-0">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-headline text-xl text-stone-900">In-Person Meeting</h4>
                    <p className="text-stone-500 text-sm">Meet at our studio for a more personal, tactile experience.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Side - Form Container */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-white shadow-2xl shadow-stone-900/5 rounded-2xl overflow-hidden relative">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-stone-100">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-amber-700"
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </div>

                <div className="p-8 md:p-16">
                  <AnimatePresence mode="wait">
                    {!isSuccess ? (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="space-y-12"
                      >
                        {/* Step Header */}
                        <div className="space-y-2">
                          <div className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.2rem]">Step {step} of 4</div>
                          <h3 className="text-3xl font-headline text-stone-900">Confirm Booking</h3>
                          <p className="text-sm text-stone-600 font-body italic">Review and finalize</p>
                        </div>

                        {/* Step Content */}
                        <div className="space-y-10">
                          {step === 1 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                              <InputField 
                                label="Full Name" 
                                value={formData.fullName}
                                onChange={v => updateFields({ fullName: v })}
                                placeholder="E.g. Ananya Sharma"
                                icon={<User size={16} />}
                              />
                              <InputField 
                                label="Email Address" 
                                type="email"
                                value={formData.email}
                                onChange={v => updateFields({ email: v })}
                                placeholder="ananya@example.com"
                                icon={<Mail size={16} />}
                              />
                              <div className="md:col-span-2">
                                <InputField 
                                  label="Phone Number" 
                                  type="tel"
                                  value={formData.phone}
                                  onChange={v => updateFields({ phone: v })}
                                  placeholder="+91 00000 00000"
                                  icon={<Phone size={16} />}
                                />
                              </div>
                            </div>
                          )}

                          {step === 2 && (
                            <div className="space-y-10">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <InputField 
                                  label="Preferred Date" 
                                  type="date"
                                  value={formData.preferredDate}
                                  onChange={v => updateFields({ preferredDate: v })}
                                  icon={<Calendar size={16} />}
                                />
                                <div className="space-y-4">
                                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-[0.2rem]">Preferred Time</label>
                                  <div className="grid grid-cols-3 gap-3">
                                    {['Morning', 'Afternoon', 'Evening'].map(time => (
                                      <button
                                        key={time}
                                        onClick={() => updateFields({ preferredTime: time as any })}
                                        className={cn(
                                          "px-3 py-3 text-[10px] font-label uppercase tracking-widest border transition-all duration-300",
                                          formData.preferredTime === time 
                                            ? "bg-stone-900 text-white border-stone-900" 
                                            : "bg-transparent text-stone-500 border-stone-200 hover:border-stone-400"
                                        )}
                                      >
                                        {time}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-4">
                                <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-[0.2rem]">Consultation Type</label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  {[
                                    { id: 'Video Call', icon: <Video size={16} /> },
                                    { id: 'In-Person', icon: <Coffee size={16} /> },
                                    { id: 'Phone Call', icon: <Phone size={16} /> }
                                  ].map(type => (
                                    <button
                                      key={type.id}
                                      onClick={() => updateFields({ consultationType: type.id as any })}
                                      className={cn(
                                        "flex flex-col items-center gap-4 p-6 border transition-all duration-500 group",
                                        formData.consultationType === type.id 
                                          ? "bg-stone-900 border-stone-900 text-white" 
                                          : "bg-stone-50 border-stone-100 text-stone-500 hover:border-stone-300"
                                      )}
                                    >
                                      <div className={cn(
                                        "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                                        formData.consultationType === type.id ? "bg-white/10" : "bg-white"
                                      )}>
                                        {type.icon}
                                      </div>
                                      <span className="text-[10px] font-bold uppercase tracking-widest">{type.id}</span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {step === 3 && (
                            <div className="space-y-10">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <InputField 
                                  label="Wedding Date" 
                                  type="date"
                                  value={formData.weddingDate}
                                  onChange={v => updateFields({ weddingDate: v })}
                                  icon={<Calendar size={16} />}
                                />
                                <InputField 
                                  label="Wedding Location" 
                                  value={formData.weddingLocation}
                                  onChange={v => updateFields({ weddingLocation: v })}
                                  placeholder="E.g. Udaipur, Rajasthan"
                                  icon={<MapPin size={16} />}
                                />
                              </div>
                              <div className="space-y-4">
                                <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-[0.2rem]">Additional Notes</label>
                                <textarea 
                                  value={formData.message}
                                  onChange={e => updateFields({ message: e.target.value })}
                                  placeholder="Tell us a little about your vision or any specific questions you have..."
                                  className="w-full bg-stone-50 border-none p-6 text-sm focus:ring-1 focus:ring-amber-700/20 focus:outline-none transition-all min-h-[150px] resize-none text-stone-900 placeholder:text-stone-400"
                                />
                              </div>
                            </div>
                          )}

                          {step === 4 && (
                            <div className="space-y-8">
                              <div className="bg-stone-50 p-8 rounded-xl space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  <SummaryItem label="Full Name" value={formData.fullName} />
                                  <SummaryItem label="Email" value={formData.email} />
                                  <SummaryItem label="Consultation" value={`${formData.consultationType} - ${formData.preferredTime}`} />
                                  <SummaryItem label="Date" value={formData.preferredDate} />
                                  <SummaryItem label="Wedding Date" value={formData.weddingDate} />
                                  <SummaryItem label="Location" value={formData.weddingLocation} />
                                </div>
                                <div className="pt-6 border-t border-stone-200">
                                  <SummaryItem label="Message" value={formData.message || 'No additional notes'} />
                                </div>
                              </div>
                              <div className="flex items-center gap-4 p-6 bg-amber-50 rounded-xl border border-amber-100">
                                <Clock className="text-amber-700 w-5 h-5 shrink-0" />
                                <p className="text-xs text-amber-900 leading-relaxed">
                                  We'll review your request and confirm the time within 12 hours via email.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-between pt-10 border-t border-stone-100">
                          {step > 1 ? (
                            <button 
                              onClick={prevStep}
                              className="flex items-center gap-2 text-[10px] font-bold text-stone-500 uppercase tracking-widest hover:text-stone-900 transition-colors"
                            >
                              <ArrowLeft size={14} />
                              Back
                            </button>
                          ) : <div />}

                          {step < 4 ? (
                            <Magnetic>
                              <button 
                                onClick={nextStep}
                                disabled={!isStepValid()}
                                className="bg-stone-900 text-white px-12 py-5 text-[11px] font-label uppercase tracking-[0.2rem] hover:bg-stone-800 transition-all flex items-center gap-3 disabled:opacity-30 disabled:cursor-not-allowed"
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
                                className="bg-gold-gradient text-white px-14 py-6 text-[11px] font-label uppercase tracking-[0.2rem] hover:brightness-110 transition-all flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-amber-900/20"
                              >
                                {isSubmitting ? 'Processing...' : 'Confirm Booking'}
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
                        className="text-center space-y-10 py-10"
                      >
                        <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center mx-auto">
                          <Check className="text-amber-700 w-12 h-12" />
                        </div>
                        <div className="space-y-6">
                          <h3 className="text-4xl font-headline text-stone-900">Booking Requested.</h3>
                          <p className="text-stone-600 font-body italic max-w-sm mx-auto leading-relaxed">
                            Thank you for reaching out. We've received your request and will be in touch shortly to confirm our meeting.
                          </p>
                        </div>
                        <div className="pt-10">
                          <Magnetic>
                            <Link 
                              to="/"
                              className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.2rem] border-b border-amber-700/30 pb-2 hover:border-amber-700 transition-all"
                            >
                              Return to Gallery
                            </Link>
                          </Magnetic>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
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
    <div className="relative space-y-3 group">
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
            "w-full bg-transparent border-b border-stone-200 py-4 text-sm focus:outline-none transition-all duration-500 placeholder:text-stone-400 text-stone-900",
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
    <div className="space-y-2">
      <div className="text-[9px] font-bold text-stone-500 uppercase tracking-widest">{label}</div>
      <div className="text-sm font-headline text-stone-900 truncate">{value || '—'}</div>
    </div>
  );
}
