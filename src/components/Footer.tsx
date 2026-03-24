import { Link } from "react-router-dom";
import leopayLogo from "../assets/LP Final Logo - Metallic Green - White Shadow (1).svg";

const Footer = () => {
  return (
    <footer className="surface-dark" style={{ background: "#0d2b0f" }}>
      <div className="container py-12 md:py-16">
        {/* Legal text */}
        <div className="text-sm leading-relaxed max-w-4xl mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
          <p>
            MAXI-PAY INC (company number BC1523499) is an entity that operates under the LeoPay brand
            and is incorporated in Canada, having its registered office at 22420 Dewdney Trunk Road,
            suite 300, Maple Ridge, British Columbia, Canada, V2X 3J5. MAXI-PAY INC is an Authorised
            Money Service Business (MSB) regulated by the Financial Transactions and Reports Analysis
            Centre of Canada (FINTRAC) (C100000747).
          </p>
          <p className="mt-3">
            All of LeoPay's entities provide users of the platform (or clients) access to payment
            services in a number of operating jurisdictions.
          </p>
        </div>

        {/* Contact */}
        <div className="text-sm mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
          <p>
            For business and partnership inquiries, reach us at{" "}
            <a href="mailto:partnership@leopay.tech" className="text-accent hover:underline">
              partnership@leopay.tech
            </a>
          </p>
          <p className="mt-1">
            For compliance or support matters, contact us at{" "}
            <a href="mailto:compliance@leopay.tech" className="text-accent hover:underline">
              compliance@leopay.tech
            </a>
          </p>
        </div>

        {/*Bottom bar */}
         <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-accent/10">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={leopayLogo} alt="LeoPay" style={{ height: '33px', width: 'auto', display: 'block' }} />
          </div>

          <div className="flex items-center gap-6 text-sm">
            <span style={{ color: "rgba(255,255,255,0.65)" }}>©2025 LeoPay. All Rights Reserved.</span>
            <Link
              to="/privacy"
              style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
            >Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
