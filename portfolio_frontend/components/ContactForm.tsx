"use client";
import React, { useState } from "react";
import { Button } from "./Button";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email.";
    if (form.message.trim().length < 10) return "Message should be at least 10 characters.";
    return null;
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setError(data?.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-2xl">
      <div>
        <label htmlFor="name" className="block text-sm mb-1">Name</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={onChange}
          className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 focus-outline"
          placeholder="Your name"
          aria-required="true"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm mb-1">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 focus-outline"
          placeholder="you@example.com"
          aria-required="true"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={onChange}
          className="w-full min-h-[140px] rounded-xl bg-black/40 border border-white/10 px-4 py-3 focus-outline"
          placeholder="How can I help you?"
          aria-required="true"
          required
        />
      </div>
      {error && <p className="text-sm text-red-400" role="alert">{error}</p>}
      {status === "success" && <p className="text-sm text-secondary">Thanks! Your message has been sent.</p>}
      <div>
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
};
