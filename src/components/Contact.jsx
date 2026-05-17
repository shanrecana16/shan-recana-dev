import { useState } from "react";
import * as motion from "motion/react-client";
import { Section, SectionTitle } from "./UI";
import DATA from "../data/portfolio";
import emailjs from "@emailjs/browser";

const CONTACT_ITEMS = [
  { label: "Email", key: "email", icon: "✉" },
  { label: "Phone", key: "phone", icon: "◎" },
  { label: "Based in", key: "location", icon: "◈" },
];

const TEXT_FIELDS = [
  { name: "name", label: "Your name", type: "text", placeholder: "Jane Smith" },
  {
    name: "email",
    label: "Email address",
    type: "email",
    placeholder: "jane@company.com",
  },
];

const inputBase = (t) => ({
  width: "100%",
  padding: "12px 16px",
  border: `1.5px solid ${t.border}`,
  borderRadius: 12,
  background: t.surface,
  color: t.text,
  fontSize: 15,
  fontFamily: "'Google Sans', sans-serif",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
});

export default function Contact({ t }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;

    try {
      await emailjs.send(
        "service_9459qw7", // ← paste from EmailJS
        "template_3phogni", // ← paste from EmailJS
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "HgV5yqvCJiHVPzznc", // Publishable key from EmailJS
      );
      setSent(true);
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }
    setSent(true);
  };

  return (
    <Section id="contact" t={t} style={{ borderTop: `1px solid ${t.border}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* Left — contact info */}
          <div>
            <SectionTitle t={t}>Let's talk</SectionTitle>
            <p
              style={{
                fontFamily: "'Google Sans', sans-serif",
                fontSize: 16,
                color: t.muted,
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              I'm open to full-time roles, freelance projects, and design
              collaborations. If you have a great idea, let's make it happen.
            </p>

            {CONTACT_ITEMS.map(({ label, key, icon }) => (
              <div
                key={key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: t.accentSoft,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    color: t.accent,
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: t.hint,
                      fontFamily: "'Google Sans', sans-serif",
                      fontWeight: 500,
                      letterSpacing: "0.6px",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: t.text,
                      fontFamily: "'Google Sans', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {DATA[key]}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — form / success */}
          <div>
            {sent ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ textAlign: "center", padding: "48px 24px" }}
              >
                <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
                <h3
                  style={{
                    fontFamily: "'Google Sans', sans-serif",
                    fontSize: 20,
                    color: t.green,
                    fontWeight: 500,
                    margin: "0 0 8px",
                  }}
                >
                  Message sent!
                </h3>
                <p
                  style={{
                    fontFamily: "'Google Sans', sans-serif",
                    color: t.muted,
                    fontSize: 15,
                  }}
                >
                  I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                {TEXT_FIELDS.map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label
                      style={{
                        fontSize: 13,
                        color: t.muted,
                        fontFamily: "'Google Sans', sans-serif",
                        fontWeight: 500,
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      value={form[name]}
                      onChange={handleChange}
                      style={inputBase(t)}
                      onFocus={(e) => (e.target.style.borderColor = t.accent)}
                      onBlur={(e) => (e.target.style.borderColor = t.border)}
                    />
                  </div>
                ))}

                <div>
                  <label
                    style={{
                      fontSize: 13,
                      color: t.muted,
                      fontFamily: "'Google Sans', sans-serif",
                      fontWeight: 500,
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputBase(t), resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = t.accent)}
                    onBlur={(e) => (e.target.style.borderColor = t.border)}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  style={{
                    background: t.accent,
                    color: "#fff",
                    border: "none",
                    borderRadius: 99,
                    padding: "14px 32px",
                    fontSize: 15,
                    fontFamily: "'Google Sans', sans-serif",
                    fontWeight: 500,
                    cursor: "pointer",
                    alignSelf: "flex-start",
                  }}
                >
                  Send message →
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
