"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { contactInfo } from "@/data/contact";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`TSWP Contact from ${name || "Website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-xl bg-water/10 px-4 py-3 text-sm text-navy">
        Thanks! Your email client should open so you can send your message to{" "}
        {contactInfo.email}.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="font-semibold text-navy">Write us a message!</p>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy">Name</span>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy outline-none focus:border-water"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy">Email</span>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy outline-none focus:border-water"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy">
          Write your message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy outline-none focus:border-water"
        />
      </label>
      <Button type="submit" variant="secondary">
        Submit
      </Button>
    </form>
  );
}
