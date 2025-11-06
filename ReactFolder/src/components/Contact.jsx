import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-20 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Contact</h2>
      <div className="text-center">
        <p className="text-lg mb-4">📍 Pune, India</p>
        <p className="text-lg mb-4">📧 raushanroy8825@gmail.com || +91 8825226809</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://www.linkedin.com/in/raushan-kumar-8825-r226809" className="text-blue-700 font-medium hover:underline" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/raushan8544" className="text-blue-700 font-medium hover:underline" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
