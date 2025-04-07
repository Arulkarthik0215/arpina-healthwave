// src/components/home/ContactSection.tsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_7lltw4m",     // 🔁 Replace with your actual Service ID
        "template_8utne9w",    // 🔁 Replace with your Template ID
        form.current,
        "-jaiTss8erjrF23VE"      // 🔁 Replace with your Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto space-y-4 bg-white p-6 rounded shadow">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="border p-2 w-full rounded"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="border p-2 w-full rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
