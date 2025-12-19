import React, { useState } from "react";

import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_ihs7nlu"; 
    const publicKey = "Xl0YiUrjlLb-iG5rJ"; 

    const tensorTemplateId = "template_c1ghb1t"; // Template ID for Tensor
    const thankYouTemplateId = "template_gptaq39"; // Template ID for Thank You email

    // Send the original message to Tensor
    emailjs
      .send(serviceId, tensorTemplateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }, publicKey)
      .then(() => {
        // Send a thank-you email to the user
        return emailjs.send(serviceId, thankYouTemplateId, { 
          to_email: formData.email,
          from_name: formData.name,
        }, publicKey);
      })
      .then(() => {
        alert("Message sent successfully! You will receive a confirmation email soon.");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send message.");
      });
  };

  return (
    <div className="flex justify-center items-center mb-5 sm:mb-10">
      <form
        className="max-sm:m-7 w-full sm:w-[500px] md:w-[600px] xl:w-[700px] flex flex-col gap-4 bg-white shadow-2xl rounded-lg p-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
