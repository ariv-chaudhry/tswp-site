"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface EmailSignupFormProps {
  prompt?: string;
  submitLabel?: string;
}

/** Client-side notify form — wires to mailto until a form backend is added */
export function EmailSignupForm({
  prompt = "Get notified",
  submitLabel = "Submit",
}: EmailSignupFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(prompt);
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nPlease add me to the notification list.`,
    );
    window.location.href = `mailto:studentwaterproject@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-xl bg-water/10 px-4 py-3 text-sm text-navy">
        Thanks! Your email client should open so you can send your signup to
        studentwaterproject@gmail.com.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <p className="text-sm text-navy/70">{prompt}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">First name</span>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy outline-none focus:border-water"
          />
        </label>
        <label className="block">
          <span className="sr-only">Last name</span>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy outline-none focus:border-water"
          />
        </label>
      </div>
      <label className="block">
        <span className="sr-only">Email</span>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy outline-none focus:border-water"
        />
      </label>
      <Button type="submit" variant="secondary">
        {submitLabel}
      </Button>
    </form>
  );
}
