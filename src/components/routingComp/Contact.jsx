import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// 1. Sign up at https://www.emailjs.com  (free)
// 2. Create a Service  → copy its ID  → replace YOUR_SERVICE_ID
// 3. Create a Template → copy its ID  → replace YOUR_TEMPLATE_ID
//    Template variables to use: {{from_name}}, {{from_email}}, {{phone}}, {{message}}
// 4. Go to Account → API Keys → copy Public Key → replace YOUR_PUBLIC_KEY
const EMAILJS_SERVICE_ID  = "service_rusuu4p";
const EMAILJS_TEMPLATE_ID = "template_fkr2bzx";
const EMAILJS_PUBLIC_KEY  = "VLQM5UCDvaefkwwG7";
// ─────────────────────────────────────────────────────────────────────────────

const INITIAL_FORM = { fname: "", lname: "", email: "", phone: "", message: "" };

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData]   = useState(INITIAL_FORM);
  const [status, setStatus]       = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg]   = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fname || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMsg("Please fill in First Name, Email, and Message.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const templateParams = {
      from_name:  `${formData.fname} ${formData.lname}`.trim(),
      from_email: formData.email,
      phone:      formData.phone || "Not provided",
      message:    formData.message,
      reply_to:   formData.email,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData(INITIAL_FORM);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <>
      <header className="page-header">
        <p className="label">Contact Us</p>
        <h1>
          We'd love to hear from<br />you
        </h1>
        <p>
          Whether you're a global enterprise or a small business, Leopay can help.
        </p>
      </header>

      <div className="card-wrapper">
        <div className="card">

          {/* Left */}
          <div className="panel-left">
            <div>
              <h2>Let's Connect</h2>
              <br /><br />
              <p>
                Fill out your details and a member of the Leopay team will be in touch shortly.
              </p>
            </div>
            <div className="nav-links">
              <span className="nav-link active">Contact us</span>
            </div>
          </div>

          {/* Right */}
          <div className="panel-right">
            <h2>Contact Form</h2>

            {/* ── Status banners ── */}
            {status === "success" && (
              <div className="form-banner form-banner--success">
                ✅ Message sent! We'll be in touch shortly.
              </div>
            )}
            {status === "error" && (
              <div className="form-banner form-banner--error">
                ⚠️ {errorMsg}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="fname">First Name *</label>
                  <input
                    id="fname"
                    type="text"
                    placeholder="Enter your first name"
                    value={formData.fname}
                    onChange={handleChange}
                    disabled={status === "loading"}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    id="lname"
                    type="text"
                    placeholder="Enter your last name"
                    value={formData.lname}
                    onChange={handleChange}
                    disabled={status === "loading"}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your business email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "loading"}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your contact number"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === "loading"}
                  />
                </div>

                <div className="form-group full">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    placeholder="Tell us how we can help you"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "loading"}
                  />
                </div>
              </div>

              <div className="form-footer">
                <button
                  type="submit"
                  className="btn-submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending…" : "Submit"}
                </button>
              </div>
            </form>

            <div className="email-line">
              <svg className="icon-mail" viewBox="0 0 24 24" strokeWidth="1.8">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
              Or email us directly at:&nbsp;
              <a href="mailto:partnership@leopay.tech">partnership@leopay.tech</a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}