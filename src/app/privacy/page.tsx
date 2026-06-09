import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for AI Vault — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: "780px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#e2e8f0", marginBottom: "0.5rem" }}>
        Privacy Policy
      </h1>
      <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "3rem" }}>
        Last updated: June 9, 2025
      </p>

      <div style={{ color: "#cbd5e1", lineHeight: 1.8, fontSize: "1rem" }}>

        <Section title="1. Who We Are">
          <p>
            AI Vault is a blog publishing reviews, tutorials, and comparisons of artificial
            intelligence tools. The website is available at{" "}
            <strong style={{ color: "#e2e8f0" }}>www.aivaultblog.com</strong>. If you have
            any questions about this Privacy Policy, you can contact us at{" "}
            <a href="mailto:mahidey420@gmail.com" style={{ color: "#a855f7" }}>
              mahidey420@gmail.com
            </a>.
          </p>
        </Section>

        <Section title="2. What Data We Collect">
          <p>We collect two types of data:</p>
          <SubHeading>a) Data you provide directly</SubHeading>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
            <li style={{ marginBottom: "0.4rem" }}>
              <strong>Email address</strong> — if you subscribe to our newsletter. We only
              collect this when you voluntarily submit the sign-up form.
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              <strong>Name (optional)</strong> — if you include it in a contact form submission.
            </li>
          </ul>

          <SubHeading>b) Data collected automatically</SubHeading>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
            <li style={{ marginBottom: "0.4rem" }}>
              <strong>Analytics data</strong> — we use Google Analytics 4 (GA4) to understand
              how visitors use our website. This includes pages visited, time spent, approximate
              location (country/city level), device type, and traffic source. This data is
              anonymised and aggregated — we cannot identify individual visitors from it.
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              <strong>Server logs</strong> — our hosting provider, Vercel, may automatically
              log standard technical information such as your IP address, browser type, and
              the pages you request. These logs are used for security and performance monitoring.
            </li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Data">
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.4rem" }}>To send our newsletter to subscribers who have explicitly opted in</li>
            <li style={{ marginBottom: "0.4rem" }}>To understand which content is useful to our readers (via analytics)</li>
            <li style={{ marginBottom: "0.4rem" }}>To improve the performance and user experience of the website</li>
            <li style={{ marginBottom: "0.4rem" }}>To respond to enquiries sent via our contact form</li>
          </ul>
          <p style={{ marginTop: "1rem" }}>
            We do not sell your personal data to third parties. We do not use your data for
            advertising targeting.
          </p>
        </Section>

        <Section title="4. Cookies">
          <p>
            This website uses cookies in the following ways:
          </p>
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.4rem" }}>
              <strong>Google Analytics cookies</strong> — these help us measure website traffic
              and understand visitor behaviour. You can opt out of Google Analytics tracking
              by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#a855f7" }}
              >
                Google Analytics Opt-out Browser Add-on
              </a>.
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              <strong>Functional cookies</strong> — used by our hosting provider (Vercel) for
              basic website functionality.
            </li>
          </ul>
          <p style={{ marginTop: "1rem" }}>
            Most browsers allow you to control cookies through their settings. Blocking all
            cookies may affect some website functionality.
          </p>
        </Section>

        <Section title="5. Third-Party Services">
          <p>We use the following third-party services, each with their own privacy policies:</p>
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.4rem" }}>
              <strong>Vercel</strong> — website hosting.{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "#a855f7" }}>
                Vercel Privacy Policy
              </a>
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              <strong>Google Analytics</strong> — website analytics.{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#a855f7" }}>
                Google Privacy Policy
              </a>
            </li>
          </ul>
          <p style={{ marginTop: "1rem" }}>
            This website also contains affiliate links to third-party products and services.
            When you click these links, the third-party company may set their own cookies.
            Please refer to our{" "}
            <a href="/disclosure" style={{ color: "#a855f7" }}>
              Affiliate Disclosure
            </a>{" "}
            and the relevant company&apos;s privacy policy for details.
          </p>
        </Section>

        <Section title="6. Data Retention">
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.4rem" }}>
              <strong>Newsletter subscriber data</strong> — retained until you unsubscribe. You
              can unsubscribe at any time using the link in any newsletter email.
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              <strong>Analytics data</strong> — retained for 14 months in Google Analytics, as
              per Google&apos;s default settings.
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              <strong>Contact form data</strong> — retained only as long as needed to respond
              to your enquiry.
            </li>
          </ul>
        </Section>

        <Section title="7. Your Rights">
          <p>
            Depending on where you are located, you may have the following rights regarding your
            personal data:
          </p>
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.4rem" }}>The right to access the personal data we hold about you</li>
            <li style={{ marginBottom: "0.4rem" }}>The right to correct inaccurate data</li>
            <li style={{ marginBottom: "0.4rem" }}>The right to request deletion of your data</li>
            <li style={{ marginBottom: "0.4rem" }}>The right to withdraw consent at any time (e.g., unsubscribe from newsletter)</li>
            <li style={{ marginBottom: "0.4rem" }}>The right to object to processing</li>
          </ul>
          <p style={{ marginTop: "1rem" }}>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:mahidey420@gmail.com" style={{ color: "#a855f7" }}>
              mahidey420@gmail.com
            </a>. We will respond within 30 days.
          </p>
        </Section>

        <Section title="8. Children's Privacy">
          <p>
            This website is not directed at children under the age of 13. We do not knowingly
            collect personal data from children. If you believe a child has provided us with
            personal information, please contact us and we will delete it promptly.
          </p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. When we do, we will update the
            &quot;Last updated&quot; date at the top of this page. We encourage you to review this
            policy periodically. Continued use of the website after changes constitutes
            acceptance of the updated policy.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us:
          </p>
          <div
            style={{
              background: "#1a1a28",
              border: "1px solid #2a2a3d",
              borderRadius: "8px",
              padding: "1rem 1.25rem",
              marginTop: "0.75rem",
            }}
          >
            <p style={{ margin: 0 }}>
              <strong style={{ color: "#e2e8f0" }}>AI Vault</strong><br />
              Email:{" "}
              <a href="mailto:mahidey420@gmail.com" style={{ color: "#a855f7" }}>
                mahidey420@gmail.com
              </a><br />
              Website: www.aivaultblog.com
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontSize: "1.15rem",
          fontWeight: 700,
          color: "#e2e8f0",
          marginBottom: "0.75rem",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid #2a2a3d",
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontWeight: 600, color: "#e2e8f0", marginBottom: "0.4rem", marginTop: "0.75rem" }}>
      {children}
    </p>
  );
}
