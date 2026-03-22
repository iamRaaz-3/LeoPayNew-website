"use client";

import { useState, useEffect } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

  .lp-root *, .lp-root *::before, .lp-root *::after {
    box-sizing: border-box; margin: 0; padding: 0;
    font-family: 'DM Sans', sans-serif;
  }

  /* ── Header ── */
  .lp-navbar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(0,0,0,0.07);
    transition: box-shadow 0.3s;
  }
  .lp-navbar.scrolled {
    border-bottom: none;
    box-shadow: 0 1px 0 rgba(0,0,0,0.08), 0 4px 24px rgba(0,0,0,0.05);
  }
  .lp-nav-inner {
    max-width: 1280px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
    height: 68px; padding: 0 40px;
  }

  /* ── Logo ── */
  .lp-logo {
    display: flex; align-items: center; gap: 10px;
    font-size: 17px; font-weight: 600; color: #000;
    letter-spacing: -0.4px; cursor: pointer; text-decoration: none;
    flex-shrink: 0;
  }
  .lp-logo-icon {
    width: 32px; height: 32px; border-radius: 50%; background: #000;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }

  /* ── Center nav ── */
  .lp-nav-center {
    display: flex; align-items: center; gap: 2px;
  }
  .lp-nav-item {
    position: relative;
  }
  .lp-nav-btn {
    display: flex; align-items: center; gap: 4px;
    padding: 8px 16px; border-radius: 10px;
    background: none; border: none; cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px; font-weight: 400;
    color: rgba(0,0,0,0.5);
    letter-spacing: -0.1px;
    transition: color 0.15s, background 0.15s;
  }
  .lp-nav-btn:hover, .lp-nav-item.active .lp-nav-btn {
    color: #000;
  }
  .lp-nav-item.active .lp-nav-btn { font-weight: 500; }
  .lp-nav-btn .lp-chevron { transition: transform 0.18s; flex-shrink: 0; }
  .lp-nav-item.active .lp-nav-btn .lp-chevron { transform: rotate(180deg); }

  /* ── Dropdown base ── */
  .lp-dropdown {
    position: absolute;
    top: calc(100% + 10px);
    background: #fff;
    border-radius: 18px;
    border: 1px solid rgba(0,0,0,0.07);
    box-shadow: 0 8px 48px rgba(0,0,0,0.13);
    opacity: 0; transform: translateY(8px) scale(0.98);
    pointer-events: none;
    transition: opacity 0.16s ease, transform 0.16s ease;
  }
  .lp-nav-item.active .lp-dropdown {
    opacity: 1; transform: translateY(0) scale(1);
    pointer-events: all;
  }

  /* ── List dropdown (Solutions) ── */
  .lp-dropdown-list {
    width: 300px; padding: 10px;
    left: 50%; transform: translateX(-50%) translateY(8px) scale(0.98);
  }
  .lp-nav-item.active .lp-dropdown-list {
    transform: translateX(-50%) translateY(0) scale(1);
  }
  .lp-dd-item {
    display: flex; align-items: center; gap: 16px;
    padding: 14px 16px; border-radius: 12px; cursor: pointer;
    transition: background 0.15s;
  }
  .lp-dd-item:hover { background: rgba(0,0,0,0.035); }
  .lp-dd-icon {
    width: 36px; height: 36px; border-radius: 10px;
    background: rgba(0,0,0,0.05);
    display: flex; align-items: center; justify-content: center;
    color: rgba(0,0,0,0.45); flex-shrink: 0;
    transition: background 0.15s;
  }
  .lp-dd-item:hover .lp-dd-icon { background: rgba(0,0,0,0.08); }
  .lp-dd-label { font-size: 13.5px; font-weight: 500; color: #000; letter-spacing: -0.1px; }
  .lp-dd-desc  { font-size: 12px; font-weight: 400; color: rgba(0,0,0,0.4); margin-top: 2px; }

  /* ── Rich dropdown (Resources) ── */
  .lp-dropdown-rich {
    width: 560px; display: flex; overflow: hidden;
    right: 0;
    transform: translateY(8px) scale(0.98);
  }
  .lp-nav-item.active .lp-dropdown-rich {
    transform: translateY(0) scale(1);
  }
  .lp-dd-left {
    width: 215px; flex-shrink: 0; padding: 20px;
  }
  .lp-dd-heading {
    font-size: 10.5px; font-weight: 600; color: #16a34a;
    letter-spacing: 0.09em; text-transform: uppercase;
    margin-bottom: 12px; padding: 0 8px;
  }
  .lp-dd-link {
    display: block; padding: 10px 12px;
    font-size: 14.5px; font-weight: 400; color: rgba(0,0,0,0.7);
    border-radius: 12px; cursor: pointer; letter-spacing: -0.1px;
    transition: color 0.15s, background 0.15s; text-decoration: none;
  }
  .lp-dd-link:hover { color: #000; background: rgba(0,0,0,0.035); }
  .lp-dd-right {
    flex: 1; background: #183328;
    padding: 20px; display: flex; flex-direction: column;
  }
  .lp-dd-cover {
    flex: 1; border-radius: 12px; overflow: hidden;
    background: #d4e4d0; margin-bottom: 16px;
    min-height: 150px; position: relative;
    display: flex; align-items: center; justify-content: center;
  }
  .lp-dd-cover-bg {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 30% 65%, rgba(45,106,79,0.35) 0%, transparent 55%),
                radial-gradient(ellipse at 75% 25%, rgba(82,183,136,0.25) 0%, transparent 50%);
  }
  .lp-dd-book {
    position: relative; z-index: 1;
    background: #183328; border-radius: 8px;
    padding: 12px; width: 105px; box-shadow: 0 8px 32px rgba(0,0,0,0.35);
  }
  .lp-dd-book-brand { font-size: 6px; color: rgba(255,255,255,0.45); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 4px; }
  .lp-dd-book-title { font-size: 8.5px; font-weight: 500; color: #fff; line-height: 1.35; }
  .lp-dd-book-date  { font-size: 6.5px; color: #4ade80; margin-top: 6px; letter-spacing: 0.06em; }
  .lp-dd-book-img   { margin-top: 8px; height: 28px; border-radius: 5px; background: linear-gradient(135deg, #2d6a4f 0%, #52b788 100%); }
  .lp-dd-tag   { font-size: 9.5px; font-weight: 600; color: #4ade80; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 6px; }
  .lp-dd-title { font-size: 14.5px; font-weight: 500; color: #fff; letter-spacing: -0.2px; line-height: 1.4; margin-bottom: 16px; }
  .lp-dd-cta {
    display: inline-block; padding: 8px 20px;
    border: 1px solid rgba(255,255,255,0.25); border-radius: 999px;
    color: #fff; font-size: 13px; font-weight: 400; cursor: pointer;
    background: none; font-family: 'DM Sans', sans-serif;
    transition: background 0.15s;
  }
  .lp-dd-cta:hover { background: rgba(255,255,255,0.1); }

  /* ── Sign In ── */
  .lp-signin-btn {
    padding: 9px 20px; border-radius: 12px;
    background: rgba(0,0,0,0.06); border: none; cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px; font-weight: 450; color: rgba(0,0,0,0.8);
    letter-spacing: -0.1px;
    transition: background 0.15s, color 0.15s;
    flex-shrink: 0;
  }
  .lp-signin-btn:hover { background: rgba(0,0,0,0.10); color: #000; }

  /* ── Mobile toggle ── */
  .lp-mobile-toggle {
    display: none; background: none; border: none; cursor: pointer;
    color: rgba(0,0,0,0.6); align-items: center;
  }

  /* ── Mobile ── */
  @media (max-width: 768px) {
    .lp-nav-center, .lp-signin-btn { display: none; }
    .lp-mobile-toggle { display: flex; }
    .lp-nav-inner { padding: 0 24px; }
  }

  /* ── Mobile overlay ── */
  .lp-mobile-overlay {
    display: none; position: fixed; inset: 0;
    background: rgba(0,0,0,0.25); backdrop-filter: blur(4px); z-index: 200;
  }
  .lp-mobile-overlay.open { display: block; }

  /* ── Mobile drawer ── */
  .lp-mobile-drawer {
    position: fixed; top: 0; right: 0; bottom: 0;
    width: 80%; max-width: 360px; background: #fff;
    z-index: 201; padding: 28px; overflow-y: auto;
    transform: translateX(100%);
    transition: transform 0.26s cubic-bezier(0.32,0.72,0,1);
  }
  .lp-mobile-drawer.open { transform: translateX(0); }

  .lp-mobile-close {
    background: none; border: none; cursor: pointer;
    color: rgba(0,0,0,0.5); margin-bottom: 28px; display: flex;
  }
  .lp-mobile-nav-item { border-bottom: 1px solid rgba(0,0,0,0.07); }
  .lp-mobile-nav-item:last-of-type { border-bottom: none; }
  .lp-mobile-nav-btn {
    width: 100%; display: flex; justify-content: space-between; align-items: center;
    padding: 16px 0; background: none; border: none; cursor: pointer;
    font-family: 'DM Sans', sans-serif; font-size: 15px;
    font-weight: 400; color: rgba(0,0,0,0.65); letter-spacing: -0.1px;
    transition: color 0.15s;
  }
  .lp-mobile-nav-btn.open { color: #000; font-weight: 500; }
  .lp-mobile-nav-btn .lp-chevron { transition: transform 0.2s; }
  .lp-mobile-nav-btn.open .lp-chevron { transform: rotate(180deg); }

  .lp-mobile-sub { overflow: hidden; max-height: 0; transition: max-height 0.25s ease; }
  .lp-mobile-sub.open { max-height: 400px; }
  .lp-mobile-sub-inner { padding-bottom: 12px; padding-left: 4px; }

  .lp-mobile-sub-item {
    display: flex; align-items: center; gap: 12px;
    padding: 10px 12px; border-radius: 12px; cursor: pointer;
    transition: background 0.15s;
  }
  .lp-mobile-sub-item:hover { background: rgba(0,0,0,0.035); }
  .lp-mobile-sub-icon {
    width: 32px; height: 32px; border-radius: 8px;
    background: rgba(0,0,0,0.05); display: flex; align-items: center;
    justify-content: center; color: rgba(0,0,0,0.45); flex-shrink: 0;
  }
  .lp-mobile-link {
    display: block; padding: 10px 12px; font-size: 13.5px;
    color: rgba(0,0,0,0.6); border-radius: 12px; cursor: pointer;
    transition: color 0.15s, background 0.15s;
  }
  .lp-mobile-link:hover { color: #000; background: rgba(0,0,0,0.03); }
  .lp-mobile-signin {
    margin-top: 20px; width: 100%; padding: 12px;
    border-radius: 12px; background: rgba(0,0,0,0.06); border: none;
    font-family: 'DM Sans', sans-serif; font-size: 14.5px;
    font-weight: 450; color: #000; cursor: pointer;
    transition: background 0.15s;
  }
  .lp-mobile-signin:hover { background: rgba(0,0,0,0.10); }
`;

export default function Navbar() {
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

  return (
    <div className="lp-root">
      <style>{styles}</style>

      {/* ── NAVBAR ── */}
      <header className={`lp-navbar${scrolled ? " scrolled" : ""}`}>
        <div className="lp-nav-inner">

          {/* Logo */}
          <a className="lp-logo" href="#">
            <div className="lp-logo-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.5 9C5 6.5 6.8 4.5 8 4C10 5.5 12 8.5 12.5 11.5C10.5 13 5.5 13 3.5 11.5C2.8 10.7 3 9.7 3.5 9Z" fill="white"/>
                <circle cx="8" cy="8.5" r="1.5" fill="black"/>
              </svg>
            </div>
            LeoPay
          </a>

          {/* Center nav */}
          <div className="lp-nav-center">

            {/* Product */}
            <div className="lp-nav-item">
              <button className="lp-nav-btn">Product</button>
            </div>

            {/* Solutions */}
            <div
              className={`lp-nav-item${activeItem === "solutions" ? " active" : ""}`}
              onMouseEnter={() => setActiveItem("solutions")}
              onMouseLeave={() => setActiveItem(null)}
            >
              <button className="lp-nav-btn">
                Solutions
                <svg className="lp-chevron" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M3 5l3.5 3.5L10 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="lp-dropdown lp-dropdown-list">
                {/* Payment Service Providers */}
                <div className="lp-dd-item">
                  <div className="lp-dd-icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="1.5" y="3.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                      <path d="M1.5 7.5h15" stroke="currentColor" strokeWidth="1.4"/>
                      <rect x="3.5" y="10" width="4" height="2" rx="0.5" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <div className="lp-dd-label">Payment Service Providers</div>
                    <div className="lp-dd-desc">Scale without limits</div>
                  </div>
                </div>
                {/* Remittance Companies */}
                <div className="lp-dd-item">
                  <div className="lp-dd-icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4"/>
                      <ellipse cx="9" cy="9" rx="2.8" ry="7" stroke="currentColor" strokeWidth="1.4"/>
                      <path d="M2 9h14" stroke="currentColor" strokeWidth="1.4"/>
                    </svg>
                  </div>
                  <div>
                    <div className="lp-dd-label">Remittance Companies</div>
                    <div className="lp-dd-desc">Streamline money movement</div>
                  </div>
                </div>
                {/* On/Off Ramps */}
                <div className="lp-dd-item">
                  <div className="lp-dd-icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M2.5 14 L9 4 L15.5 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.5 14 L9 9.5 L11.5 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="lp-dd-label">On/Off Ramps</div>
                    <div className="lp-dd-desc">Go live instantly</div>
                  </div>
                </div>
              </div>
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
          <button className="lp-signin-btn">Sign In</button>

          {/* Mobile toggle */}
          <button className="lp-mobile-toggle" onClick={() => setMobileOpen(true)}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
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
        <button className="lp-mobile-close" onClick={() => setMobileOpen(false)}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Product */}
        <div className="lp-mobile-nav-item">
          <button className="lp-mobile-nav-btn">Product</button>
        </div>

        {/* Solutions */}
        <div className="lp-mobile-nav-item">
          <button
            className={`lp-mobile-nav-btn${mobileSub === "solutions" ? " open" : ""}`}
            onClick={() => toggleMobileSub("solutions")}
          >
            Solutions
            <svg className="lp-chevron" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M3 5.5l4.5 4 4.5-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className={`lp-mobile-sub${mobileSub === "solutions" ? " open" : ""}`}>
            <div className="lp-mobile-sub-inner">
              <div className="lp-mobile-sub-item">
                <div className="lp-mobile-sub-icon">
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                    <rect x="1.5" y="3.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M1.5 7.5h15" stroke="currentColor" strokeWidth="1.4"/>
                    <rect x="3.5" y="10" width="4" height="2" rx="0.5" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <div style={{fontSize:"13px",fontWeight:500,color:"#000"}}>Payment Service Providers</div>
                  <div style={{fontSize:"11.5px",color:"rgba(0,0,0,0.4)"}}>Scale without limits</div>
                </div>
              </div>
              <div className="lp-mobile-sub-item">
                <div className="lp-mobile-sub-icon">
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4"/>
                    <ellipse cx="9" cy="9" rx="2.8" ry="7" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M2 9h14" stroke="currentColor" strokeWidth="1.4"/>
                  </svg>
                </div>
                <div>
                  <div style={{fontSize:"13px",fontWeight:500,color:"#000"}}>Remittance Companies</div>
                  <div style={{fontSize:"11.5px",color:"rgba(0,0,0,0.4)"}}>Streamline money movement</div>
                </div>
              </div>
              <div className="lp-mobile-sub-item">
                <div className="lp-mobile-sub-icon">
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                    <path d="M2.5 14 L9 4 L15.5 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div style={{fontSize:"13px",fontWeight:500,color:"#000"}}>On/Off Ramps</div>
                  <div style={{fontSize:"11.5px",color:"rgba(0,0,0,0.4)"}}>Go live instantly</div>
                </div>
              </div>
            </div>
          </div>
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

        <button className="lp-mobile-signin">Sign In</button>
      </div>

    </div>
  );
}