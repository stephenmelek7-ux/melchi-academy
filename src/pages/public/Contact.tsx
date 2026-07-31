import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import toast from 'react-hot-toast'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Message sent successfully! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="container-custom py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              MA
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-600 leading-tight">Melchi Academy</h1>
              <p className="text-xs text-gray-500">Excellence in Education</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600 font-semibold">Contact</Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">Login</Link>
            <Link to="/register" className="btn-primary text-sm py-2 px-4">Register</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-20 bg-gradient-to-r from-primary-600 to-secondary-500 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">We'd love to hear from you.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Form */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="label-field">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="input-field"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="label-field">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="input-field"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="label-field">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="input-field"
                    placeholder="Enter message subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="label-field">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="input-field"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="w-full btn-primary flex items-center justify-center">
                  Send Message <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-700 flex items-center">
                    <MapPin size={20} className="mr-2 text-primary-600" />
                    Address
                  </h3>
                  <p className="text-gray-600 ml-7">123 Education Street, City, Country</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 flex items-center">
                    <Phone size={20} className="mr-2 text-primary-600" />
                    Phone
                  </h3>
                  <p className="text-gray-600 ml-7">+234 800 000 0000</p>
                  <p className="text-gray-600 ml-7">+234 800 000 0001</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 flex items-center">
                    <Mail size={20} className="mr-2 text-primary-600" />
                    Email
                  </h3>
                  <p className="text-gray-600 ml-7">info@melchiacademy.edu</p>
                  <p className="text-gray-600 ml-7">admissions@melchiacademy.edu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container-custom text-center">
          <p>© 2024 Melchi Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Contact
