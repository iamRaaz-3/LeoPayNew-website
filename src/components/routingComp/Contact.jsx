import React from "react";
import "./Contact.css";

export default function Contact() {
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
              {/* <span className="nav-link">Join our team</span> */}
            </div>
          </div>

          {/* Right */}
          <div className="panel-right">
            <h2>Contact Form</h2>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fname">First Name</label>
                <input id="fname" type="text" placeholder="Enter your first name" />
              </div>

              <div className="form-group">
                <label htmlFor="lname">Last Name</label>
                <input id="lname" type="text" placeholder="Enter your last name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Enter your business email" />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" placeholder="Enter your contact number" />
              </div>

              <div className="form-group full">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell us how we can help you"></textarea>
              </div>
            </div>

            <div className="form-footer">
              <button className="btn-submit">Submit</button>
            </div>

            <div className="email-line">
              <svg className="icon-mail" viewBox="0 0 24 24" strokeWidth="1.8">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
              Or email us directly at:<a href="mailto:partnership@leopay.tech">partnership@leopay.tech</a>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}