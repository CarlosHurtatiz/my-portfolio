"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactmeSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };  

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // EmailJS parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };
    // Your EmailJS Service ID, Template ID, and User ID
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || '';
    const userId = process.env.NEXT_PUBLIC_USER_ID || '';

    // Sending email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error('Email error:', error);
      });
  };

  return (
    <section id="contact">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h2 className="text-center font-custom text-4xl">
          Contact Me
          <hr className="w-6 h-1 mx-auto my-4 bg-azulC border-0 rounded"></hr>
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-azulC text-white font-custom  text-lg py-2 px-4 rounded-md hover:bg-azulH"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactmeSection;
