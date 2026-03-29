"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import leopayLogo from "../assets/LP Final Logo - All Black - White Shadow (3).svg";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeItem,  setActiveItem]  = useState(null);
  const [mobileSub,   setMobileSub]   = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileSub = (key) => {
    setMobileSub(prev => prev === key ? null : key);
  };
  useEffect(() => {
  if (mobileOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [mobileOpen]);

  return (
    <div className="lp-root">

      {/* ── NAVBAR ── */}
      <header className={`lp-navbar${scrolled ? " scrolled" : ""}`}>
        <div className="lp-nav-inner">

          {/* Logo */}
          <a className="lp-logo" href="#">
            <img src={leopayLogo} alt="LeoPay" style={{height:'40px', width:'auto', display:'block'}} />
          </a>

          {/* Center nav */}
          <div className="lp-nav-center">

            {/* Product */}
            <div className="lp-nav-item">
              <button className="lp-nav-btn">Product</button>
            </div>

            {/* API Docs */}
            <div className="lp-nav-item">
              <button 
                className="lp-nav-btn" 
                onClick={() => window.open('https://leopay.gitbook.io/leopay-docs/', '_blank', 'noopener,noreferrer')}
              >
                API Docs
              </button>
            </div>

            {/* Company */}
            <div className="lp-nav-item">
              <button className="lp-nav-btn">Company</button>
            </div>

            {/* Resources */}
            <div
              className={`lp-nav-item${activeItem === "resources" ? " active" : ""}`}
              onMouseEnter={() => setActiveItem("resources")}
              onMouseLeave={() => setActiveItem(null)}
            >
              <button className="lp-nav-btn">
                Resources
                <svg className="lp-chevron" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M3 5l3.5 3.5L10 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="lp-dropdown lp-dropdown-rich">
                {/* Left links */}
                <div className="lp-dd-left">
                  <div className="lp-dd-heading">Resources</div>
                  <a className="lp-dd-link" href="#">Currencies</a>
                  <a className="lp-dd-link" href="#">Liquidity</a>
                  <a className="lp-dd-link" href="#">Blog</a>
                  <a className="lp-dd-link" href="#">FAQs</a>
                  <a className="lp-dd-link" href="#">Careers</a>
                </div>
                {/* Right card */}
                <div className="lp-dd-right">
                  <div className="lp-dd-cover">
                    <div className="lp-dd-cover-bg"></div>
                    <div className="lp-dd-book">
                      <div className="lp-dd-book-brand">LeoPay</div>
                      <div className="lp-dd-book-title">Stablecoins &amp; Cross-Border Payments</div>
                      <div className="lp-dd-book-date">Q1.2026</div>
                      <div className="lp-dd-book-img"></div>
                    </div>
                  </div>
                  <div className="lp-dd-tag">Q1 &nbsp;2026 &nbsp;REPORT</div>
                  <div className="lp-dd-title">Stablecoins &amp; Cross-Border Payments</div>
                  <button className="lp-dd-cta">View Report</button>
                </div>
              </div>
            </div>

          </div>{/* /lp-nav-center */}

          {/* Sign In */}
          <button className="lp-signin-btn" onClick={() => window.location.href = 'https://dash.leopay.tech/signin'}>Sign In</button>

          {/* Mobile toggle — ☰ closed / ✕ open */}
          <button
            className={`lp-mobile-toggle${mobileOpen ? " lp-mobile-toggle--open" : ""}`}
            onClick={() => setMobileOpen(prev => !prev)}
          >
            {mobileOpen ? (
              <svg width="35" height="35" viewBox="0 0 22 22" fill="none">
                <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="35" height="35" viewBox="0 0 22 22" fill="none">
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ── MOBILE OVERLAY ── */}
      <div
        className={`lp-mobile-overlay${mobileOpen ? " open" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── MOBILE DRAWER ── */}
      <div className={`lp-mobile-drawer${mobileOpen ? " open" : ""}`}>

        {/* Drawer header: logo left, close right */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
          <a className="lp-logo" href="#" onClick={() => setMobileOpen(false)}>
            <img src={leopayLogo} alt="LeoPay" style={{ height: '30px', width: 'auto', display: 'block' }} />
          </a>
          <button className="lp-mobile-close" style={{ marginBottom: 0 }} onClick={() => setMobileOpen(false)}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Product */}
        <div className="lp-mobile-nav-item">
          <button className="lp-mobile-nav-btn">Product</button>
        </div>

        {/* API Docs */}
        <div className="lp-mobile-nav-item">
          <button 
            className="lp-mobile-nav-btn" 
            onClick={() => window.open('https://leopay.gitbook.io/leopay-docs/', '_blank', 'noopener,noreferrer')}
          >
            API Docs
          </button>
        </div>

        {/* Company */}
        <div className="lp-mobile-nav-item">
          <button className="lp-mobile-nav-btn">Company</button>
        </div>

        {/* Resources */}
        <div className="lp-mobile-nav-item">
          <button
            className={`lp-mobile-nav-btn${mobileSub === "resources" ? " open" : ""}`}
            onClick={() => toggleMobileSub("resources")}
          >
            Resources
            <svg className="lp-chevron" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M3 5.5l4.5 4 4.5-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className={`lp-mobile-sub${mobileSub === "resources" ? " open" : ""}`}>
            <div className="lp-mobile-sub-inner">
              <div className="lp-mobile-link">Currencies</div>
              <div className="lp-mobile-link">Liquidity</div>
              <div className="lp-mobile-link">Blog</div>
              <div className="lp-mobile-link">FAQs</div>
              <div className="lp-mobile-link">Careers</div>
            </div>
          </div>
        </div>

        <button className="lp-mobile-signin" onClick={() => window.location.href = 'https://dash.leopay.tech/signin'}>Sign In</button>
      </div>

    </div>
  );
}