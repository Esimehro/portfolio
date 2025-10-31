import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setError("Please fill in all fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Use FormData instead of JSON for better compatibility
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("_subject", `Website Contact: ${formData.name}`);
      formDataToSend.append("_replyto", formData.email);

      const response = await fetch("https://formspree.io/f/mblpjzrn", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      console.log("Formspree response status:", response.status);

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSent(false), 5000);

        // Log success for debugging
        console.log("Form submitted successfully to Formspree");
      } else {
        const errorData = await response.json();
        console.error("Formspree error:", errorData);
        throw new Error(errorData.error || "Form submission failed");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError(
        "Failed to send message. Please email me directly at loisomodibo@gmail.com"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contactme" className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Contact Me</h1>
        <p className={styles.subtitle}>
          Let's create something amazing together
        </p>
      </div>

      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <h2 className={styles.sectionTitle}>
            <span>💬</span>
            Get In Touch
          </h2>
          <p className={styles.subtitle}>
            Send me a message and I'll get back to you as soon as possible.
          </p>

          <div className={styles.contactMethods}>
            <div className={styles.contactMethod}>
              <div className={styles.methodIcon}>📧</div>
              <div className={styles.methodText}>
                <div className={styles.methodTitle}>Direct to My Inbox</div>
                <div className={styles.methodDescription}>
                  Messages come straight to my email
                </div>
              </div>
            </div>

            <div className={styles.contactMethod}>
              <div className={styles.methodIcon}>⚡</div>
              <div className={styles.methodText}>
                <div className={styles.methodTitle}>Quick Response</div>
                <div className={styles.methodDescription}>
                  I typically reply within a few hours
                </div>
              </div>
            </div>

            <div className={styles.contactMethod}>
              <div className={styles.methodIcon}>💬</div>
              <div className={styles.methodText}>
                <div className={styles.methodTitle}>Let's Collaborate</div>
                <div className={styles.methodDescription}>
                  Tell me about your project ideas
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            {isSent && (
              <div className={styles.successMessage}>
                <span>✅</span>
                <div>
                  <strong>Message sent successfully!</strong>
                  <div style={{ fontSize: "0.9rem", marginTop: "0.25rem" }}>
                    Formspree received your message. Check your email inbox.
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className={styles.errorMessage}>
                <span>❌</span>
                <div>
                  <strong>Error</strong>
                  <div style={{ fontSize: "0.9rem", marginTop: "0.25rem" }}>
                    {error}
                  </div>
                </div>
              </div>
            )}

            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="John Doe"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className={styles.loadingSpinner}></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <span className={styles.buttonIcon}>↗</span>
                </>
              )}
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <p style={{ color: "#475569", fontSize: "0.9rem" }}>
              Or email directly: <strong>loisomodibo@gmail.com</strong>
            </p>
          </div>

          <div className={styles.contactSocials}>
            <p className={styles.socialConnectText}>Or connect with me on:</p>
            <div className={styles.socialLinks}>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactSocialLink}
                aria-label="Visit my LinkedIn profile"
              >
                <svg
                  className={styles.contactSocialIcon}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactSocialLink}
                aria-label="Visit my GitHub profile"
              >
                <svg
                  className={styles.contactSocialIcon}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
