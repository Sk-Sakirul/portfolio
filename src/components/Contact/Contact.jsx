import styles from "./Contact.module.css";
import { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send using EmailJS
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // replace with your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY // replace with your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message. Try again!");
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.content}>
        {/* LEFT SECTION */}
        <div className={styles.leftSection}>
          <h2 className={styles.title}>Let's talk</h2>
          <p className={styles.description}>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on.
          </p>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>
                  sksakirul484@gmail.com
                </span>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>+91-6296114526</span>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>Kolkata, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className={styles.rightSection}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className={styles.formInput}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className={styles.formInput}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Write your message here
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                className={styles.formTextarea}
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send via Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
