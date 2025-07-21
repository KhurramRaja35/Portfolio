import React, { useState } from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

const ContactUs = () => {
  return (
    <div id='contact' className="w-[90%] mx-auto py-8 md:py-10 lg:py-15">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left side - Contact Info */}
          <ContactInfo />
          
          {/* Right side - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactUs