"use client";

import React, { useState } from "react";
import { BiMapPin, BiPhone } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
import { LuFacebook, LuLinkedin, LuInstagram, LuTwitter } from "react-icons/lu";
import Link from "next/link";

const contactIcon = [
  { name: "Facebook", icon: LuFacebook, link: "https://www.facebook.com/ansh.dewangan.3538" },
  { name: "Instagram", icon: LuInstagram, link: "https://www.instagram.com/i_m_ansh19/?__pwa=1#" },
  { name: "Linkedin", icon: LuLinkedin, link: "https://www.linkedin.com/in/ansh-dewangan-570b99329/" },
  { name: "Twitter", icon: LuTwitter, link: "https://x.com/AnshDewang50812" },
];

const MyDetails = {
  phone: "+91-9589984635",
  email: "anshdewangan12@gmail.com",
  location: "Durg, Chhattisgarh, India",
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const ContactPage = () => {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateName = (name: string) => name.length >= 3;
  const validatePhone = (num: string) => /^[0-9]{10}$/.test(num);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    if (!validateName(form.name)) newErrors.name = "Name must be at least 3 characters.";
    if (!validateEmail(form.email)) newErrors.email = "Enter a valid email.";
    if (!validatePhone(form.phone)) newErrors.phone = "Phone must be exactly 10 digits.";
    if (!form.message) newErrors.message = "Message is required.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message || data.error);

      if (data.success) setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <section className="w-full text-white py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6">

        {/* LEFT */}
        <div data-aos="fade-up" data-achor-placement="top-center" data-aos-delay="200">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Schedule a call with <br /> me to see if I can help
          </h1>
          <p className="text-gray-400 mb-10 max-w-md">Reach out to me today and let’s discuss your goals.</p>
          <div className="space-y-5">
            <div className="flex items-center gap-4"><BiPhone className="text-blue-400" size={24} /><p className="text-lg">{MyDetails.phone}</p></div>
            <div className="flex items-center gap-4"><BsMailbox className="text-blue-400" size={24} /><p className="text-lg">{MyDetails.email}</p></div>
            <div className="flex items-center gap-4"><BiMapPin className="text-blue-400" size={24} /><p className="text-lg">{MyDetails.location}</p></div>
          </div>
          <div className="flex items-center gap-5 mt-10">
            {contactIcon.map((item, i) => {
              const IconComp = item.icon;
              return (
                <div key={i} className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 transition-all cursor-pointer">
                  <Link href={item.link} target="_blank"><IconComp size={22} /></Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div
          data-aos="flip-left" data-achor-placement="top-center" data-aos-delay="300"
          // bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/30
          className="bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/30">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* name */}
            <input type="text" placeholder="Name" value={form.name} className="w-full p-4 bg-[#1A1F2E] rounded-xl border border-white/10" onChange={e => setForm({ ...form, name: e.target.value })} />
            {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

            {/* email */}
            <input type="email" placeholder="Email Address" value={form.email} className="w-full p-4 bg-[#1A1F2E] rounded-xl border border-white/10" onChange={e => setForm({ ...form, email: e.target.value })} />
            {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}

            {/* phone */}
            <input type="tel" placeholder="Mobile Number" value={form.phone} className="w-full p-4 bg-[#1A1F2E] rounded-xl border border-white/10" onChange={e => setForm({ ...form, phone: e.target.value })} />
            {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}

            {/* message */}
            <textarea rows={5} placeholder="Your Message" value={form.message} className="w-full p-4 bg-[#1A1F2E] rounded-xl border border-white/10" onChange={e => setForm({ ...form, message: e.target.value })} />
            {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}

            <button
              type="submit"
              disabled={loading}
              className="group relative w-full overflow-hidden rounded-xl p-[1.5px] disabled:cursor-not-allowed"
            >
              {/* Animated border */}
              <span
                className="absolute inset-[-200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_140deg,#60a5fa_180deg,#818cf8_220deg,transparent_280deg,transparent_360deg)]"/>

              {/* Button */}
              <span className=" relative flex w-full items-center justify-center rounded-[10px] bg-gradient-to-r from-blue-700 to-indigo-700
                  px-6 py-4 text-lg font-semibold text-white transition-all duration-300 group-hover:from-blue-600 group-hover:to-indigo-600
                  group-hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] group-disabled:opacity-70">
                {loading ? (
                  <>
                    <svg className="mr-2 h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">

                      <circle className="opacity-25" cx="12"cy="12" r="9" stroke="currentColor" strokeWidth="3"/>

                      <path className="opacity-90" fill="currentColor" d="M21 12a9 9 0 0 0-9-9v3a6 6 0 0 1 6 6h3Z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </span>
            </button>
            {/* <button
              type="submit"
              disabled={loading}
              className="group relative w-full p-[2px] rounded-xl overflow-hidden"
            >
              {/* Animated Border */}
            {/* <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,#3b82f6_90deg,#6366f1_180deg,#a855f7_270deg,transparent_360deg)]" />

              {/* Button Content */}
            {/* <span className="relative flex w-full items-center justify-center py-4 rounded-[10px] bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-lg font-semibold transition-all">
                {loading ? "Sending..." : "Send Message"}
              </span>
            </button> */}
            {/* <button type="submit" disabled={loading} className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-lg font-semibold transition-all">
              {loading ? "Sending..." : "Send Message"}
            </button> */}
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactPage;
