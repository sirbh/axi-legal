"use client";

import Link from "next/link";
import { useState } from "react";
import React from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ConsultationSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10">

        {/* LEFT: Booking Form */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1931] mb-6">
            Have a question? Reach out to us.
          </h2>

          <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="flex-1 border rounded-lg p-3"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="flex-1 border rounded-lg p-3"
                />
              </div>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full border rounded-lg p-3"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your legal issue..."
                rows={4}
                className="w-full border rounded-lg p-3"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-yellow-400 w-full py-3 rounded-lg font-bold text-[#0a1931] hover:bg-yellow-500 transition"
              >
                <Link href={"https://calendly.com/chauhansaurabh425/30min"} target="_blank"
              rel="noopener noreferrer">
                   Book Call Now 
                </Link>
              </button>

              {success && (
                <p className="text-green-600 text-sm text-center mt-2">
                  Message sent successfully.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* RIGHT: Benefits */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1931] mb-6">
            Why Axilegal?
          </h2>

          <div className="space-y-4">
            {[
              { icon: "📍", title: "High Expertise", desc: "Consult with our experts." },
              { icon: "⚖️", title: "Fixed & Transparent Pricing", desc: 'No hidden "lawyer fees." What you see is exactly what you pay.' },
              { icon: "⚡", title: "Fast-Track Processing", desc: "Our digital-first approach ensures results up to 40% faster than traditional firms." },
              { icon: "🔒", title: "Secure Documentation", desc: "Your sensitive legal and financial data is handled with bank-grade encryption." },
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <h4 className="font-semibold text-[#0a1931]">{benefit.title}</h4>
                  <p className="text-gray-700 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}