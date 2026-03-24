import React from "react";
import Navbar from "../Navbar1";
import Footer from "../Footer";
import "./Privacy.css";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Navbar />
      <main className="privacy-main">
        <div className="privacy-container">

          <h1 className="privacy-title">Privacy Policy</h1>

          <p className="privacy-dates">
            Previous Version: 10.06.2025 <br />
            Last Updated: 20.03.2026
          </p>

          <div className="privacy-body">

            <div className="privacy-section">
              <h2>1.0 Who We Are</h2>
              <p>
                MAXI-PAY INC ("LeoPay", "we", "our" or "us") is a company incorporated in Canada, with its registered office at 22420 Dewdney Trunk Road, Suite 300, Maple Ridge, British Columbia, Canada, V2X 3J5. LeoPay, together with its subsidiaries and affiliates ("LeoPay"), operates as a non-banking financial technologies provider, enabling cross-border payment rails powered by stablecoins and related blockchain-based financial infrastructure.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, store, and share your Personal Data when you use our platform, website, APIs, and other related online services (collectively, the "Services").
              </p>
            </div>

            <div className="privacy-section">
              <h2>1.1 Please Read This Privacy Policy</h2>
              <p>
                Your privacy is of the utmost importance to us. This Privacy Policy sets out important details about how and why we process your Personal Data, your rights under applicable data protection laws, and how you can contact us or a relevant data protection authority if you have any questions or complaints regarding your data or our privacy practices.
              </p>
            </div>

            <div className="privacy-section">
              <h2>1.3 Data Controller</h2>
              <p>
                LeoPay is the data controller of Personal Data collected via the Services and other related platforms (including official social media channels). Hence, LeoPay complies with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable Canadian privacy laws, as well as any applicable local and international data protection legislation.
              </p>
            </div>

            <div className="privacy-section">
              <h2>1.4 Third-Party Links and Integrations</h2>
              <p>Our Services may include links to, or integrations with, websites, applications, and services operated by trusted third parties. These may include:</p>
              <ul>
                <li>Identity verification service providers,</li>
                <li>Payment or blockchain network partners,</li>
                <li>Custodian or compliance solution providers, and</li>
                <li>Partner platforms offering access to LeoPay's APIs.</li>
              </ul>
              <p>
                Such third-party platforms may collect data about you according to their own privacy policies, which we encourage you to review. LeoPay is not responsible for the privacy practices or content of third-party websites.
              </p>
            </div>

            <div className="privacy-section">
              <h2>1.5 Updates to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically to reflect operational, legal, or regulatory changes. When material changes are made, we will notify you through appropriate channels; for example, via email or a prominent notice on our website.
              </p>
              <p>Please review this Policy periodically to stay informed of how we protect your information.</p>
            </div>

            <div className="privacy-section">
              <h2>Definitions</h2>
              <p><strong>"LeoPay Website"</strong> means our official website available at https://www.leopay.io and any other domains operated by LeoPay or its affiliates.</p>
              <p><strong>"Services"</strong> means the LeoPay Website, online platform, APIs, payment gateways, and any other digital or cross-border financial service offered by LeoPay.</p>
              <p><strong>"EEA"</strong> means the European Economic Area.</p>
              <p><strong>"EU GDPR"</strong> refers to the European Union's General Data Protection Regulation (Regulation (EU) 2016/679) and any laws implementing or supplementing it.</p>
              <p><strong>"Personal Data"</strong> means any information relating to an identified or identifiable natural person.</p>
              <p><strong>"User(s)" or "You"</strong> means individuals or entities using our Services, including clients, counterparties, and their representatives.</p>
              <p><strong>"Privacy Policy"</strong> means this document.</p>
            </div>

            <div className="privacy-section">
              <h2>2.0 The Types of Personal Data We Collect</h2>
              <p>
                The categories of Personal Data we collect depend on your relationship with LeoPay and how you interact with our Services. Certain Personal Data is essential to provide you with access to our stablecoin-based payment infrastructure and related compliance obligations. Without such data, we may be unable to onboard or continue providing Services to you.
              </p>

              <h3>2.1 Information You Provide to Us</h3>
              <p>This includes information that you voluntarily provide while using our Services or when communicating with us directly. Such information may include (but is not limited to):</p>
              <ul>
                <li>Basic identification details: full name, date of birth, nationality, job title, and contact details (email, phone number, postal address, city, and country).</li>
                <li>Verification and KYC information: government-issued ID numbers, photographs, proof of address, and any documentation required under Anti-Money Laundering (AML) or Counter-Terrorist Financing (CFT) laws.</li>
                <li>Financial and transactional details: wallet addresses, bank account details, stablecoin transaction history, payment method information, or linked accounts.</li>
                <li>Login and account credentials: hashed passwords and authentication details.</li>
                <li>Any other information you voluntarily provide through forms, surveys, or direct correspondence.</li>
              </ul>

              <h3>2.2 Information We Collect Automatically</h3>
              <p>When you interact with the Services, we automatically collect certain technical and usage information to maintain platform integrity and enhance user experience. This may include:</p>
              <ul>
                <li>IP address, browser type, device identifiers, and operating system data.</li>
                <li>Log data (including session duration, access times, and error diagnostics).</li>
                <li>Geo-location data, network connectivity, and activity metrics.</li>
                <li>Behavioural data such as pages visited, actions performed, and clickstream data.</li>
              </ul>
              <p>This information does not generally reveal your exact identity but helps us ensure security, fraud prevention, regulatory compliance, and service optimisation.</p>

              <h3>2.3 Information We Receive from Third Parties</h3>
              <p>We may also receive Personal Data about you from third-party sources, such as:</p>
              <ul>
                <li>Identity and AML verification providers (for KYC and screening checks).</li>
                <li>Blockchain analytics partners assisting with compliance monitoring.</li>
                <li>Payment service providers or financial institutions facilitating cross-border settlements.</li>
                <li>Publicly available databases or regulatory authorities, as required by law.</li>
              </ul>
              <p>If we combine such third-party data with data collected directly from you, the combined information will be treated in accordance with this Privacy Policy unless stated otherwise.</p>
            </div>

            <div className="privacy-section">
              <h2>3. Contractual Information and Related Correspondence</h2>

              <h3>3.1 Communications and Correspondence</h3>
              <p>Any communication or interaction with us, whether by email, telephone, web forms, social media, or other electronic means, may involve the collection of Personal Data, such as your name, contact details, and the content of your message. This includes:</p>
              <ul>
                <li>General enquiries, onboarding queries, or service-related discussions;</li>
                <li>Support requests, operational follow-ups, or complaints;</li>
                <li>Dispute-related correspondence between you and LeoPay.</li>
              </ul>
              <p>We process such information to:</p>
              <ul>
                <li>Administer and deliver the Services;</li>
                <li>Fulfil contractual and legal obligations;</li>
                <li>Maintain accurate business records;</li>
                <li>Ensure compliance with regulatory and audit requirements; and</li>
                <li>Improve service quality and client engagement.</li>
              </ul>

              <h3>3.2 Call and Contact Records</h3>
              <p>We may record or log details of your communication with LeoPay (e.g., date, time, duration, phone number, and nature of the call). If calls are recorded, we will inform you in advance and, where required by law, obtain your explicit consent.</p>
              <p>Such recordings are retained only for as long as necessary to comply with legal, contractual, or compliance purposes, including fraud prevention and dispute resolution.</p>

              <h3>3.3 Purpose of Processing</h3>
              <p>We retain and process this information as necessary to:</p>
              <ul>
                <li>Perform our obligations under a contract or regulatory framework;</li>
                <li>Comply with record-keeping, financial audit, and tax requirements;</li>
                <li>Address client concerns, investigations, or claims; and</li>
                <li>Advance our legitimate business interests in ensuring transparency, quality assurance, and lawful administration of our Services.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>4. Marketing Communications</h2>

              <h3>4.1 Direct Marketing</h3>
              <p>We may collect your name, contact details (email, phone number, and address), and professional affiliation to inform you about LeoPay's services, new product offerings, compliance updates, or industry developments relevant to your interests.</p>
              <p>We may collect this information directly from you or, where lawful, from third parties such as partners or event organisers.</p>

              <h3>4.2 Your Rights to Opt Out</h3>
              <p>Individuals have the right to access, correct, and withdraw consent for the processing of their personal information, subject to legal and regulatory requirements, by contacting us at compliance@leopay.tech. Once you opt out, we will add your contact details to a suppression list to ensure you no longer receive marketing communications.</p>
              <p>However, we may still contact you for operational or compliance-related matters (such as account notifications or service updates).</p>

              <h3>4.3 Lawful Basis</h3>
              <p>If you are an existing customer or acting in a professional capacity for a company, we may rely on legitimate interest as our lawful basis for marketing communications, where permitted by law. Further, If you are not an existing customer or acting outside a professional capacity, we will contact you for marketing purposes only with your explicit consent.</p>

              <h3>4.4 Third Parties and Marketing Service Providers</h3>
              <p>LeoPay does not sell or share your personal contact details with unaffiliated third parties for their marketing purposes. We may use third-party email and analytics providers to deliver our marketing content; however, such processors act only on our instructions, under confidentiality and data protection agreements.</p>

              <h3>4.5 Marketing Analytics</h3>
              <p>When sending marketing communications, we may use web beacons or similar tools to collect limited engagement data, such as:</p>
              <ul>
                <li>Whether and when an email was opened;</li>
                <li>Device and browser type; and</li>
                <li>IP address or interaction data.</li>
              </ul>
              <p>This helps us measure the effectiveness of our campaigns and refine communications. Such processing is based on legitimate interests or, where required, your consent.</p>
            </div>

            <div className="privacy-section">
              <h2>5. Website Information</h2>

              <h3>5.1 Data Collected via Website and Platform</h3>
              <p>When you visit or interact with the LeoPay Website or our associated platforms, we and authorised third-party providers may collect information automatically through cookies, web beacons, and analytics tools.</p>
              <p>This may include:</p>
              <ul>
                <li>IP address and geolocation data;</li>
                <li>Browser type, version, and language;</li>
                <li>Device identifiers and operating system;</li>
                <li>Login timestamps, access duration, and user interaction metrics; and</li>
                <li>Aggregated analytics and performance data.</li>
              </ul>
              <p>We use this information for:</p>
              <ul>
                <li>Ensuring website functionality and security;</li>
                <li>Analyzing usage patterns to improve performance;</li>
                <li>Detecting anomalies or unauthorized activity; and</li>
                <li>Developing marketing insights, where legally permitted.</li>
              </ul>

              <h3>5.2 Advertising and Personalization</h3>
              <p>We may, directly or via third-party partners, use website data to:</p>
              <ul>
                <li>Display or tailor marketing and informational content; or</li>
                <li>Evaluate the effectiveness of online campaigns.</li>
              </ul>
              <p>Such personalisation is conducted without using identifiable information and, in all cases, in accordance with applicable consent requirements.</p>

              <h3>5.3 External Links and Third-Party Integrations</h3>
              <p>Our website may contain links to or integrations with third-party websites, applications, or plug-ins. LeoPay does not control and is not responsible for the privacy practices of these external entities.</p>
              <p>Further, we strongly encourage you to review the privacy policies of any external website you visit.</p>
            </div>

            <div className="privacy-section">
              <h2>6. Business and Partner Contact Information</h2>

              <h3>6.1 Business Relationships</h3>
              <p>If you are an employee, representative, or contact of a LeoPay customer, vendor, service provider, or business partner, we may collect and process:</p>
              <ul>
                <li>Your name, position, and professional contact details;</li>
                <li>Details of your company or organization; and</li>
                <li>Records of communications or interactions related to the business relationship.</li>
              </ul>
              <p>This information is processed as necessary for our legitimate interests in managing relationships, fulfilling contracts, and conducting due diligence under applicable laws.</p>
            </div>

            <div className="privacy-section">
              <h2>7. Information Collected at LeoPay Premises</h2>

              <h3>7.1 Visitor Records</h3>
              <p>When you visit our offices or physical premises, we may record information such as:</p>
              <ul>
                <li>Your name, employer, contact details, date, and time of visit;</li>
                <li>Person you are meeting; and</li>
                <li>Vehicle registration details (if applicable).</li>
              </ul>
              <p>This is necessary for security, health, and safety purposes, and to ensure a secure and compliant environment.</p>

              <h3>7.2 CCTV and Physical Security</h3>
              <p>LeoPay premises may be monitored by CCTV surveillance for security, safety, and fraud prevention. Recorded footage may capture your image and activities and will be retained only as long as necessary for legitimate security or legal purposes.</p>
              <p>We will disclose footage only:</p>
              <ul>
                <li>To law enforcement under formal request; or</li>
                <li>Where required to resolve a dispute or legal claim.</li>
              </ul>

              <h3>7.3 Retention</h3>
              <p>Visitor data is retained only as long as necessary for security or regulatory purposes, typically up to 5 years, and accident or safety-related reports may be retained for up to 6 years, in compliance with legal obligations.</p>
            </div>

            <div className="privacy-section">
              <h2>8. Legal Claims</h2>
              <p>In the event LeoPay reasonably anticipates, is subject to, or intends to initiate legal proceedings, we may retain and process your personal information to the extent necessary to establish, exercise, or defend our legal rights. Such processing shall be based on our legitimate interest in protecting our legal and commercial interests, ensuring the integrity of our operations, and complying with legal obligations.</p>
              <p>Where relevant, such information may also be disclosed to our legal advisors, insurers, regulators, or law enforcement authorities. The retention period for such information shall depend on the nature of the claim, the applicable limitation period, and the duration for which we consider there to be a reasonable risk of legal exposure.</p>
            </div>

            <div className="privacy-section">
              <h2>9. Data Collected During Anti-Money Laundering (AML) and Compliance Reviews</h2>

              <h3>9.1 Statutory And Regulatory Obligations</h3>
              <p>As part of LeoPay's statutory and regulatory obligations under applicable Anti-Money Laundering (AML), Counter-Terrorism Financing (CTF), and Know Your Customer (KYC) frameworks, we may collect and process the following categories of personal information:</p>
              <ul>
                <li>Full name, email address, nationality, country of residence, contact number, occupation, and job title;</li>
                <li>Government-issued identification documents and verification details;</li>
                <li>Wallet addresses, blockchain transaction hashes, and on-chain activity patterns;</li>
                <li>Publicly available online information, including social media links or profiles.</li>
              </ul>
              <p>Such data processing is carried out on the basis of legal and regulatory obligations as well as legitimate interests in preventing fraud, financial crime, and the misuse of our services. Further, the data may be sourced directly from you, our compliance partners, regulated financial institutions, and publicly available sources, including the open web and, where permitted by law, monitored data from non-indexed networks (Deep Web) for AML intelligence purposes.</p>
            </div>

            <div className="privacy-section">
              <h2>10. Information Received from Third Parties</h2>

              <h3>10.1 Third-Party Sources</h3>
              <p>LeoPay may receive and process personal information about you from the following third-party sources:</p>
              <ul>
                <li>Service Partners: including regulated financial institutions, liquidity providers, blockchain analytics partners, payment processors, KYC/AML verification vendors, and compliance data aggregators.</li>
                <li>Business Affiliates and Group Entities: with whom we have contractual arrangements for the purpose of providing, maintaining, or enhancing our services.</li>
                <li>Public Sources: including social media platforms (LinkedIn, X/Twitter, etc.), sanction lists, or other publicly available registries.</li>
                <li>Credit and Risk Agencies: for creditworthiness assessment, fraud prevention, and counterparty verification.</li>
              </ul>
              <p>Any personal information received from third parties will be processed in accordance with this Privacy Policy and applicable data protection laws.</p>
            </div>

            <div className="privacy-section">
              <h2>11. Legal Basis for Processing Personal Information</h2>

              <h3>11.1 Legal Obligations</h3>
              <p>LeoPay will only process your personal information where permitted under applicable law. Typically, this will occur under one or more of the following legal bases:</p>
              <ul>
                <li>Contractual necessity: to perform obligations under a contract or facilitate services you request.</li>
                <li>Legal obligation: to comply with anti-money laundering and counter-terrorist financing obligations under applicable laws, including reporting to FINTRAC or other competent authorities.</li>
                <li>Legitimate interests: for fraud prevention, business continuity, service enhancement, and security monitoring, provided that such interests do not override your rights and freedoms.</li>
                <li>Consent: where expressly required, for specific purposes such as marketing or third-party data sharing.</li>
              </ul>
              <p>In limited circumstances, we may process your data to protect vital interests, the public interest, or the interests of others.</p>
            </div>

            <div className="privacy-section">
              <h2>12. Disclosure of Personal Information to Third Parties</h2>
              <p>LeoPay does not sell, rent, or trade your personal information. However, we may share it with selected third parties strictly for legitimate business or regulatory purposes, including but not limited to:</p>
              <ul>
                <li>Service providers assisting with KYC/AML verification, payment processing, data hosting, customer support, marketing, analytics, and legal services.</li>
                <li>Regulatory authorities, law enforcement agencies, tax authorities, and courts, where disclosure is required by law or regulatory order.</li>
                <li>Affiliates and group entities for internal governance, system maintenance, reporting, and compliance consolidation.</li>
              </ul>
              <p>All third-party processors are contractually bound to maintain confidentiality and implement adequate technical and organisational safeguards. They are authorised to process your data solely under LeoPay's documented instructions and for the purposes specified herein. Further, in the event of a corporate restructuring, merger, or acquisition, your personal information may be transferred to the successor entity, provided that equivalent privacy protections are ensured.</p>
            </div>

            <div className="privacy-section">
              <h2>13. International Data Transfers</h2>
              <p>Your personal information may be processed and stored in jurisdictions outside Canada. Where such transfers occur, LeoPay ensures that appropriate safeguards are in place in accordance with PIPEDA.</p>
              <p>You may request further information or a copy of the applicable transfer safeguards by contacting <a href="mailto:compliance@leopay.tech">compliance@leopay.tech</a>.</p>
            </div>

            <div className="privacy-section">
              <h2>14. Data Security</h2>
              <p>LeoPay employs robust technical and organisational security measures designed to protect your personal information from accidental loss, unauthorised access, alteration, disclosure, or misuse. Further, access to personal data is restricted to personnel, contractors, and service providers who have a legitimate operational need and are bound by confidentiality and data protection obligations.</p>
              <p>We continuously monitor our systems and update our security measures in line with industry best practices, regulatory requirements, and emerging technological standards.</p>
            </div>

            <div className="privacy-section">
              <h2>15. Data Retention</h2>
              <p>We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, including to comply with applicable legal, accounting, taxation, anti-money laundering (AML), and regulatory reporting requirements.</p>
              <p>In order to determine the appropriate retention period, we assess the volume, nature, and sensitivity of the data; the risk of harm from unauthorised use or disclosure; the purposes for processing; and applicable legal or regulatory obligations in each jurisdiction where we operate, including India, the United States, the United Arab Emirates, and the European Union.</p>
              <p>Once the retention period expires, we securely delete, anonymise, or de-identify the data. Anonymised or de-identified data that cannot reasonably identify an individual may be retained and processed for analytics, compliance audits, or statistical purposes, without further notice. LeoPay ensures that any such data will not be re-identified.</p>
            </div>

            <div className="privacy-section">
              <h2>16. Your Rights</h2>
              <p>Depending on your place of residence, you may have certain rights under applicable data protection laws such as the EU General Data Protection Regulation (GDPR), the Personal Information Protection and Electronic Documents Act (PIPEDA) (Canada), the Digital Personal Data Protection Act, 2023 (India), the UAE Federal Decree-Law No. 45 of 2021, and relevant U.S. state privacy laws. These rights may vary depending on applicable law and may include, where applicable:</p>
              <ul>
                <li>Right to Withdraw Consent: You may withdraw your consent to the collection, use, or disclosure of your personal information, subject to legal and contractual restrictions.</li>
                <li>Right to Challenge Compliance: You may challenge our compliance with applicable privacy laws, including by contacting our Compliance Officer or the Office of the Privacy Commissioner of Canada.</li>
                <li>Access: You may request a copy of the personal information we hold about you, including the purposes for which it is used or disclosed.</li>
                <li>Rectification: You may request correction of incomplete or inaccurate personal information.</li>
                <li>Erasure: You may request deletion of personal information, subject to regulatory or legal retention obligations.</li>
                <li>Objection: You may object to our processing where it is based on legitimate interests or direct marketing purposes.</li>
                <li>Restriction: You may request limitation of processing in specific circumstances (e.g., pending verification of accuracy).</li>
                <li>Data Portability: You may request transfer of your data to another service provider, where processing is based on consent or contractual necessity.</li>
                <li>Withdrawal of Consent: Where processing is based on your consent, you may withdraw it at any time without affecting prior lawful processing.</li>
                <li>Lodge a Complaint: You may lodge a complaint with the competent data protection authority in your jurisdiction.</li>
              </ul>
              <p>For EU residents: European Data Protection Board – National DPAs</p>
              <p>For Indian residents: Data Protection Board of India (upon constitution)</p>
              <p>For UAE residents: UAE Data Office</p>
              <p>For U.S. residents: Respective state privacy regulator (e.g., California Privacy Protection Agency).</p>
              <p>You may exercise these rights by contacting us at <a href="mailto:compliance@leopay.tech">compliance@leopay.tech</a>. Please include sufficient details to verify your identity and the nature of your request.</p>
              <p>However, we may require supporting documentation (e.g., government-issued identification, registered email verification, or transaction reference) to confirm your identity. You may also authorise a representative through a written mandate or valid power of attorney to submit such requests on your behalf.</p>
              <p>While we do not ordinarily charge a fee for exercising these rights, we reserve the right to impose a reasonable fee or refuse repetitive, manifestly unfounded, or excessive requests. Further, we will acknowledge and respond to legitimate requests within the period prescribed under applicable law. Please note that exercising certain rights may limit or prevent our ability to provide services to you.</p>
            </div>

            <div className="privacy-section">
              <h2>17. Changes to This Policy</h2>
              <p>LeoPay reserves the right to modify or update this Privacy Policy at any time to reflect changes in our practices, technologies, regulatory environment, or operational requirements. Material changes will be communicated through our website, by email, or via your registered account.</p>
              <p>Continued use of LeoPay's services following such changes constitutes acceptance of the revised policy. Further, you are advised to review this Privacy Policy periodically to remain informed about how we protect and process your personal information.</p>
            </div>

            <div className="privacy-section">
              <h2>18. Blockchain-Specific Disclosures</h2>
              <p>LeoPay's services involve the use of blockchain and distributed ledger technologies for facilitating cross-border stablecoin transactions. You acknowledge and understand that data recorded on public blockchains (including wallet addresses and transaction details) may be immutable and globally accessible. Further, due to the decentralised and transparent nature of such networks, certain personal information (such as blockchain wallet addresses or transaction hashes) may become publicly visible and cannot be modified or erased. This technical limitation may restrict your ability to exercise certain data rights, including erasure, rectification, or objection.</p>
              <p>LeoPay will always work towards minimising the on-chain disclosure of identifiable data and ensure that all personally identifiable information is stored off-chain, processed securely, and disclosed only in accordance with applicable law or regulatory requests.</p>
              <p>You are solely responsible for safeguarding your wallet credentials, including private and public keys. LeoPay does not control your blockchain transactions and shall not be liable for any unauthorised access, loss, or misuse arising from your wallet management. Additionally, by engaging in transactions through LeoPay's infrastructure, you acknowledge that the blockchain's immutable characteristics may limit certain privacy protections.</p>
            </div>

            <div className="privacy-section">
              <h2>19. Governing Law and Jurisdiction</h2>
              <p>This Privacy Policy shall be governed by and construed in accordance with the laws of India, without prejudice to overriding mandatory provisions of the laws applicable in your country of residence.</p>
              <p>However, any dispute, controversy, or claim arising out of or relating to this Policy shall be subject to the exclusive jurisdiction of the competent courts of Bengaluru, India, except where otherwise required under applicable data protection or consumer protection laws.</p>
            </div>

            <p className="privacy-note">
              <b>Please Note:</b> We may update this Privacy Policy from time to time. Where material changes are made, we will provide reasonable notice in accordance with applicable laws.
            </p>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}