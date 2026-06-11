"use client";

import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";
import { megaFooterSubscribe } from "./megafooterContent";

export default function MegafooterSubscribe() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <div className="megafooter__subscribe">
      <h3 className="megafooter__section-title">{megaFooterSubscribe.title}</h3>
      <p className="megafooter__subscribe-text">{megaFooterSubscribe.description}</p>

      {isSubmitted ? (
        <p className="megafooter__subscribe-success" role="status">
          Thank you for subscribing. Health updates coming soon.
        </p>
      ) : (
        <form className="megafooter__subscribe-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="megafooter-email" className="sr-only">
            Email address
          </label>
          <input
            id="megafooter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email address"
            className="megafooter__subscribe-input"
            required
          />
          <button type="submit" className="megafooter__subscribe-button" aria-label="Subscribe">
            <Mail size={18} aria-hidden="true" />
          </button>
        </form>
      )}
    </div>
  );
}
