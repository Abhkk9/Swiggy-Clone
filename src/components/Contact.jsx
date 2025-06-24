import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    setSubmitted(true);
    // Log correct email and query
    console.log("Submitted Email:", email);
    console.log("Submitted Query:", query);
  };

  return (
    <div className="contact-container max-w-xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <div className="contact-info mb-6 text-gray-700">
        <p><strong>Address:</strong> 123 Foodie Lane, Gourmet City, 456789</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Email:</strong> support@swiggyclone.com</p>
      </div>
      <form className="contact-form flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col font-medium">
          Your Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className={`mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 ${
              emailError ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your email"
          />
        </label>
        {emailError && <span className="text-red-500 text-sm">{emailError}</span>}
        <label className="flex flex-col font-medium">
          Your Query:
          <textarea
            value={query}
            onChange={e => setQuery(e.target.value)}
            required
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Type your message here"
          />
        </label>
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition font-semibold"
        >
          Submit
        </button>
      </form>
      {submitted && (
        <div className="submitted-info mt-6 bg-green-50 p-4 rounded-md">
          <h3 className="font-bold mb-2">Your Input:</h3>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Query:</strong> {query}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;