import React, { useState } from "react";
import "./Login.css";
import leopayLogo from "../../assets/LP Final Logo - All Black - White Shadow (3).svg";

export default function LoginPage() {
  const [mode, setMode] = useState("live");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="lp-login-container">
      <div className="lp-login-left">
        <div className="lp-login-logo">
          <img src={leopayLogo} alt="LeoPay" style={{height:'46px', width:'auto', display:'block'}} />
        </div>
        <h1>Log in</h1>
        {/* <div className="lp-login-toggle">
          <button className={mode === "live" ? "active" : ""} onClick={() => setMode("live")}>Live</button>
          <button className={mode === "test" ? "active" : ""} onClick={() => setMode("test")}>Test</button>
        </div> */}
        <div className="lp-login-field">
          <label>Username</label>
          <div className="lp-login-input-wrap">
            <input type="email" placeholder="you@example.com" />
          </div>
        </div>
        <div className="lp-login-field">
          <label>Password</label>
          <div className="lp-login-input-wrap">
            <input type={showPassword ? "text" : "password"} placeholder="••••••••" />
            <button className="lp-login-eye-btn" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "🙈" : "👁"}</button>
          </div>
        </div>
        <div className="lp-login-btn-row">
          <button className="lp-login-btn-submit">Log in</button>
          {/* <button className="lp-login-btn-switch">Switch user</button> */}
        </div>
        <a href="#" className="lp-login-forgot">Forgot your password?</a>
        {/* <div className="lp-login-notice">
          <div className="lp-login-notice-icon">i</div>
          <p>When you visit LeoPay's login page, we collect and process data. Read our <a href="#">privacy statement ↗</a></p>
        </div> */}
      </div>
      <div className="lp-login-right">
        <div className="lp-login-illustration-grid">
          <div className="lp-login-card lp-login-card-1">
            <div className="lp-lamp-wire"></div>
            <div className="lp-lamp-coil"></div>
            <div className="lp-tri-dark"></div>
            <div className="lp-tri-green"></div>
          </div>
          <div className="lp-login-card lp-login-card-2">
            <svg viewBox="0 0 120 140" width="100%" height="100%">
              <rect x="34" y="72" width="52" height="55" rx="6" fill="#0d2b0f"/>
              <ellipse cx="60" cy="46" rx="24" ry="26" fill="#c97a50"/>
              <ellipse cx="60" cy="30" rx="26" ry="22" fill="#1a1a1a"/>
              <circle cx="37" cy="50" r="7" fill="#0abf53"/>
            </svg>
          </div>
          <div className="lp-login-card lp-login-card-3">
            <div className="lp-green-circle"></div>
            <svg viewBox="0 0 120 140" width="100%" height="100%" style={{position:'relative',zIndex:1}}>
              <rect x="36" y="78" width="48" height="50" rx="6" fill="#0d2b0f"/>
              <ellipse cx="60" cy="50" rx="22" ry="24" fill="#c97a50"/>
              <ellipse cx="60" cy="36" rx="23" ry="18" fill="#1a1a1a"/>
            </svg>
          </div>
          <div className="lp-login-card lp-login-card-4">
            <div className="lp-tri-green-big"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
