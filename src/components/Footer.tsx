const Footer = () => {
  return (
    <footer className="surface-dark">
      <div className="container py-12 md:py-16">
        {/* Legal text */}
        <div className="text-sm leading-relaxed opacity-60 max-w-4xl mb-8">
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
        <div className="text-sm opacity-60 mb-10">
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

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-accent/10">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" className="text-accent">
              <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2" />
              <path d="M9 14 L13 18 L19 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-semibold text-lg">LeoPay</span>
          </div>

          <div className="flex items-center gap-6 text-sm opacity-50">
            <span>©2025 LeoPay. All Rights Reserved.</span>
            <a href="#" className="hover:text-accent hover:opacity-100 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
