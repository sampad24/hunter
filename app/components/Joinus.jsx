'use client';
import { useState } from 'react';
import axios from 'axios';
import Dropdown from '../Dropdown';
import React from 'react';

export default function Joinus() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!firstname || !lastname || !phone || !course) {
      setError("Please fill in all required fields");
      setSuccess(false);
      return;
    }

    const formData = {
      firstname,
      lastname,
      phone,
      course,
    };
    if (whatsapp) formData.whatsapp = whatsapp;
    if (email) formData.email = email;

    try {
      const response = await axios.post("/api/join", formData);
      setSuccess(true);
      setError("");

      // Reset form
      setFirstName("");
      setLastName("");
      setPhone("");
      setWhatsapp("");
      setEmail("");
      setCourse("");
    } catch (err) {
      console.error("Error submitting form:", err);
      if (err.response && err.response.data && err.response.data.msg) {
        setError(err.response.data.msg.join(", "));
      } else {
        setError("Failed to submit form. Please try again.");
      }
      setSuccess(false);
    }
  };

  return (
    <div id="join" className='w-full'>
      <div className='h-full w-full back1 py-16'>
        <div className='flex flex-col items-center'>
          <h1 className='text-6xl font-bold text-white mb-6'>JOIN US</h1>
          <div className='w-32 h-1 bg-white opacity-20 mb-8'></div>
          <div className='text-white text-center space-y-4 mb-12'>
            <h2 className='text-4xl'>POWER-UP YOUR CAREER</h2>
            <h3 className='text-2xl font-semibold mt-8'>Join The Team</h3>
            <p className='text-xl'>Welcome to JGVFX VFX Careers</p>
            <p className='text-lg max-w-2xl mx-auto'>
              We are always on the lookout for talent to join our crew. Keep reading to find out how you can join JGVFX VFX ONLINE INSTITUTE.
            </p>
          </div>

          {/* Form Container */}
          <div className='w-full max-w-2xl mx-auto bg-black/30 backdrop-blur p-8 rounded-xl shadow-lg'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Grid layout for form fields */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* First Name */}
                <div>
                  <label className='block text-white text-sm font-medium mb-2'>First Name*</label>
                  <input
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    className='w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                    required
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className='block text-white text-sm font-medium mb-2'>Last Name*</label>
                  <input
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    className='w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                    required
                  />
                </div>



                {/* Phone */}
                <div>
                  <label className='block text-white text-sm font-medium mb-2'>Phone Number*</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className='w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                    required
                  />
                </div>

                {/* Course Selection */}
                <div>
                  <label className='block text-white text-sm font-medium mb-2'>Select Course*</label>
                  <Dropdown onSelect={(value) => setCourse(value)} />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className='block text-white text-sm font-medium mb-2'>WhatsApp Number</label>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className='w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                  />
                </div>
              </div>

              {/* Email field (full width) */}
              <div>
                <label className='block text-white text-sm font-medium mb-2'>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                />
              </div>

              {/* Submit Button */}
              <div className='flex justify-center pt-4'>
                <button
                  type="submit"
                  className='px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300'
                >
                  Submit Application
                </button>
              </div>
            </form>

            {/* Success/Error Messages */}
            {success && (
              <div className='mt-4 p-3 bg-green-900/50 text-green-400 rounded-lg text-center'>
                Application submitted successfully!
              </div>
            )}
            {error && (
              <div className='mt-4 p-3 bg-red-900/50 text-red-400 rounded-lg text-center'>
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-white h-0.5 opacity-15 left-0"></div>
    </div>
  );
}
