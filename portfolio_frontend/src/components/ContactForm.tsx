"use client";

import { useState } from "react";
import { getApiBase } from "@/lib/config/env";

/**
 * PUBLIC_INTERFACE
 * ContactForm
 * Accessible contact form with name, email, message. Client-side validation.
 * If NEXT_PUBLIC_BACKEND_URL or NEXT_PUBLIC_API_BASE is present, POST to `${base}/contact`,
 * else simulate success.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const base = getApiBase();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    try {
      if (base) {
        const res = await fetch(`${base}/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // Demo success for static export without backend
        await new Promise((r) => setTimeout(r, 600));
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("We couldn’t send your message. Please try again later.");
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby="contact-help" className="card-surface p-6">
      <p id="contact-help" className="text-gray-400 mb-6">
        Your information is kept private. Fields marked with an asterisk are required.
      </p>

      {status === "success" && (
        <div role="status" aria-live="polite" className="mb-4 rounded-md bg-emerald-500/15 text-emerald-300 px-4 py-2 border border-emerald-500/30">
          Thanks! Your message has been sent.
        </div>
      )}
      {status === "error" && error && (
        <div role="alert" aria-live="assertive" className="mb-4 rounded-md bg-red-500/15 text-red-300 px-4 py-2 border border-red-500/30">
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name <span aria-hidden="true" className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            placeholder="Ada Lovelace"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email <span aria-hidden="true" className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message <span aria-hidden="true" className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          placeholder="Tell me about your project..."
        />
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          type="submit"
          className="btn btn-primary disabled:opacity-60"
          disabled={status === "submitting"}
          aria-disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
        {!base && (
          <span className="text-xs text-gray-400">
            Demo mode: no backend configured.
          </span>
        )}
      </div>
    </form>
  );
}
