"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setStatus({ ...status, submitting: true });
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        
        setStatus({
          submitting: false,
          submitted: true,
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        });
      } else {
        setStatus({
          submitting: false,
          submitted: true,
          success: false,
          message: data.message || "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      });
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-24">
      <div className="container-custom">
        <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text animate-gradient">Get In Touch</h2>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-black/40 p-8 rounded-2xl shadow-lg border border-cyan-500/20 space-y-6 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-cyan-500/10"
          >
            {status.submitted && (
              <div className={`p-4 rounded-lg mb-6 ${status.success ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {status.message}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-gray-300 font-medium">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black/60 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  required
                  disabled={status.submitting}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-gray-300 font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black/60 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  required
                  disabled={status.submitting}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm text-gray-300 font-medium">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-black/60 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                disabled={status.submitting}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-gray-300 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us a bit about your project or inquiry"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-black/60 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                required
                disabled={status.submitting}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 rounded-lg font-semibold transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-cyan-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={status.submitting}
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Right Side */}
          <div className="space-y-8">
            <div className="overflow-hidden rounded-2xl border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/10 transition-all duration-500 hover:shadow-cyan-500/30 group">
              <Image
                src="/form.jpg"
                alt="Contact"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="bg-black/40 p-5 rounded-xl flex items-center gap-5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium">Email Us</p>
                <p className="font-medium text-white group-hover:text-cyan-400 transition-colors">developerbrothers@gmail.com</p>
              </div>
            </div>

            <div className="bg-black/40 p-5 rounded-xl flex items-center gap-5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium">Call Us</p>
                <p className="font-medium text-white group-hover:text-cyan-400 transition-colors">+91 9150989265</p>
              </div>
            </div>

            <div className="bg-black/40 p-5 rounded-xl flex items-center gap-5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium">Response Time</p>
                <p className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                  Fast replies are our thing, usually within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
