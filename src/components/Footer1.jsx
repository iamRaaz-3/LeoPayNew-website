// const styles = `
//   @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

//   .f1-root *, .f1-root *::before, .f1-root *::after {
//     box-sizing: border-box; margin: 0; padding: 0;
//     font-family: 'DM Sans', sans-serif;
//   }

//   /* ── CTA Banner ── */
//   .f1-cta {
//     background: #0d2b0f;
//     padding: 80px 60px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     gap: 40px;
//     border-top: 1px solid rgba(255,255,255,0.06);
//   }
//   .f1-cta h2 {
//     font-size: clamp(24px, 3vw, 36px);
//     font-weight: 500;
//     color: #fff;
//     letter-spacing: -0.5px;
//     line-height: 1.2;
//     max-width: 480px;
//   }
//   .f1-cta-btn {
//     display: inline-flex;
//     align-items: center;
//     gap: 8px;
//     padding: 14px 28px;
//     background: #14cc3c;
//     color: #000;
//     font-family: 'DM Sans', sans-serif;
//     font-size: 15px;
//     font-weight: 500;
//     border: none;
//     border-radius: 999px;
//     cursor: pointer;
//     letter-spacing: -0.1px;
//     white-space: nowrap;
//     text-decoration: none;
//     transition: background 0.2s, transform 0.15s;
//     flex-shrink: 0;
//   }
//   .f1-cta-btn:hover { background: #0fb832; transform: translateY(-1px); }
//   .f1-cta-btn svg { width: 16px; height: 16px; }

//   /* ── Main footer ── */
//   .f1-footer {
//     background: #111;
//     padding: 64px 60px 0;
//     border-top: 1px solid rgba(255,255,255,0.07);
//   }

//   /* ── Top grid ── */
//   .f1-grid {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
//     gap: 40px;
//     padding-bottom: 56px;
//     border-bottom: 1px solid rgba(255,255,255,0.07);
//   }
//   .f1-col-label {
//     font-size: 11px;
//     font-weight: 600;
//     color: rgba(255,255,255,0.35);
//     letter-spacing: 0.12em;
//     text-transform: uppercase;
//     margin-bottom: 20px;
//   }
//   .f1-links {
//     display: flex;
//     flex-direction: column;
//     gap: 4px;
//   }
//   .f1-links a {
//     font-size: 14.5px;
//     font-weight: 400;
//     color: rgba(255,255,255,0.65);
//     text-decoration: none;
//     padding: 5px 0;
//     letter-spacing: -0.1px;
//     transition: color 0.15s;
//     display: block;
//   }
//   .f1-links a:hover { color: #fff; }

//   /* Newsletter column */
//   .f1-newsletter-col { display: flex; flex-direction: column; }
//   .f1-newsletter-desc {
//     font-size: 13.5px;
//     color: rgba(255,255,255,0.45);
//     line-height: 1.55;
//     margin-bottom: 20px;
//     letter-spacing: -0.1px;
//   }
//   .f1-newsletter-btn {
//     display: inline-flex;
//     align-items: center;
//     gap: 8px;
//     padding: 10px 20px;
//     background: transparent;
//     color: #fff;
//     font-family: 'DM Sans', sans-serif;
//     font-size: 13.5px;
//     font-weight: 400;
//     border: 1px solid rgba(255,255,255,0.2);
//     border-radius: 999px;
//     cursor: pointer;
//     text-decoration: none;
//     letter-spacing: -0.1px;
//     transition: border-color 0.15s, background 0.15s;
//     align-self: flex-start;
//   }
//   .f1-newsletter-btn:hover {
//     border-color: rgba(255,255,255,0.4);
//     background: rgba(255,255,255,0.05);
//   }
//   .f1-newsletter-btn svg { width: 14px; height: 14px; }

//   /* ── Bottom bar ── */
//   .f1-bottom {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 24px 0 28px;
//     gap: 24px;
//     flex-wrap: wrap;
//   }
//   .f1-logo {
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     text-decoration: none;
//     font-size: 20px;
//     font-weight: 600;
//     color: #fff;
//     letter-spacing: -0.4px;
//   }
//   .f1-logo-icon {
//     width: 28px; height: 28px;
//     border-radius: 50%;
//     background: #14cc3c;
//     display: flex; align-items: center; justify-content: center;
//     flex-shrink: 0;
//   }
//   .f1-bottom-links {
//     display: flex;
//     align-items: center;
//     gap: 24px;
//     flex-wrap: wrap;
//   }
//   .f1-bottom-links a {
//     font-size: 12.5px;
//     color: rgba(255,255,255,0.35);
//     text-decoration: none;
//     letter-spacing: -0.05px;
//     transition: color 0.15s;
//   }
//   .f1-bottom-links a:hover { color: rgba(255,255,255,0.7); }
//   .f1-copy {
//     font-size: 12.5px;
//     color: rgba(255,255,255,0.3);
//     letter-spacing: -0.05px;
//   }
//   .f1-locale {
//     display: flex;
//     align-items: center;
//     gap: 6px;
//     font-size: 12.5px;
//     color: rgba(255,255,255,0.35);
//     cursor: pointer;
//     padding: 6px 12px;
//     border: 1px solid rgba(255,255,255,0.1);
//     border-radius: 999px;
//     background: none;
//     font-family: 'DM Sans', sans-serif;
//     letter-spacing: -0.05px;
//     transition: border-color 0.15s, color 0.15s;
//     text-decoration: none;
//   }
//   .f1-locale:hover { border-color: rgba(255,255,255,0.25); color: rgba(255,255,255,0.6); }
//   .f1-locale svg { width: 13px; height: 13px; flex-shrink: 0; }

//   /* ── Responsive ── */
//   @media (max-width: 1024px) {
//     .f1-grid { grid-template-columns: 1fr 1fr 1fr; }
//     .f1-cta { padding: 60px 40px; }
//     .f1-footer { padding: 48px 40px 0; }
//   }
//   @media (max-width: 680px) {
//     .f1-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
//     .f1-cta { flex-direction: column; padding: 48px 24px; align-items: flex-start; }
//     .f1-footer { padding: 40px 24px 0; }
//     .f1-bottom { flex-direction: column; align-items: flex-start; gap: 16px; }
//   }
//   @media (max-width: 400px) {
//     .f1-grid { grid-template-columns: 1fr; }
//   }
// `;
import "./Footer.css";


export default function Footer1() {
  return (
    <div className="f1-root">


      {/* ── CTA BANNER ── */}
      {/* <div className="f1-cta">
        <h2>If you're building for scale, there's no alternative</h2>
        <a className="f1-cta-btn" href="#">
          Contact us
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div> */}


      <div className="f1-cta" style={{ textAlign: "center", alignItems: "center", flexDirection: "column", gap: "32px" }}>
  <h2 style={{ fontSize: "clamp(50px, 10.5vw, 60px)", lineHeight: 1.1, maxWidth: "none" }}>
    If you're building for scale, there's no alternative
  </h2>
  <a className="f1-cta-btn" href="#">
    Contact us
    <svg viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </a>
</div>

      {/* ── FOOTER ── */}
      <footer className="f1-footer">
        <div className="f1-grid">

          {/* About */}
          <div>
            <div className="f1-col-label">About</div>
            <div className="f1-links">
              <a href="#">Press &amp; media</a>
              <a href="#">Careers</a>
              <a href="#">Investor Relations</a>
              <a href="#">Partner with us</a>
              <a href="#">Contact</a>
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="f1-col-label">Products</div>
            <div className="f1-links">
              <a href="#">Remittance</a>
              <a href="#">Virtual Accounts</a>
              <a href="#">Bussiness Payments</a>
              <a href="#">POBO / COBO</a>
              <a href="#">Pricing</a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <div className="f1-col-label">Resources</div>
            <div className="f1-links">
              <a href="#">Use Cases</a>
              <a href="#">Liquidity</a>
              <a href="#">API Reference</a>
              <a href="#">Newsletter</a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <div className="f1-col-label">Platform</div>
            <div className="f1-links">
              <a href="#">Infrastructure</a>
              <a href="#">Licenses</a>
              <a href="#">Legal</a>
              <a href="#">Terms &amp; Conditions</a>
              <a href="#">Responsible disclosure</a>
              <a href="#">Service Status</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="f1-newsletter-col">
            <div className="f1-col-label">Subscribe to our newsletter</div>
            <p className="f1-newsletter-desc">
              Stay up to date with the latest payments news, product updates, and industry insights.
            </p>
            <a className="f1-newsletter-btn" href="#">
              Subscribe to our newsletter
              <svg viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="f1-bottom">

          {/* Logo */}
          <a className="f1-logo" href="#">
            <div className="f1-logo-icon" style={{ background: "linear-gradient(135deg, #14cc3c 0%, #0aaf30 100%)", borderRadius: "10px", width: "32px", height: "32px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L5 9.5L8.5 21H15.5L19 9.5L12 3Z" fill="white" fillOpacity="0.95"/>
                <path d="M5 9.5H19" stroke="white" strokeWidth="1.2" strokeOpacity="0.5"/>
                <path d="M12 3L8.5 9.5M12 3L15.5 9.5" stroke="white" strokeWidth="1.2" strokeOpacity="0.6"/>
              </svg>
            </div>
            LeoPay
          </a>

          {/* Bottom links */}
          <div className="f1-bottom-links">
            <a href="#">Privacy</a>
            {/* <a href="#">Cookies</a> */}
            <a href="#">AML Policy Statement</a>
          </div>

          {/* Copyright */}
          <span className="f1-copy">© 2026 LeoPay</span>

          {/* Locale */}
          <a className="f1-locale" href="#">
            <svg viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.1"/>
              <ellipse cx="6.5" cy="6.5" rx="2.1" ry="5.5" stroke="currentColor" strokeWidth="1.1"/>
              <path d="M1 6.5h11" stroke="currentColor" strokeWidth="1.1"/>
            </svg>
            Global (English)
          </a>

        </div>
      </footer>
    </div>
  );
}
