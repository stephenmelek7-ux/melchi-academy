import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import toast from 'react-hot-toast'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast.success('Message sent successfully!')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      toast.error('Failed to send message.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="container-custom py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">MA</div>
            <div><h1 className="text-xl font-bold text-primary-600 leading-tight">Melchi Academy</h1><p className="text-xs text-gray-500">Excellence in Education</p></div>
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

      <section className="pt-20 bg-gradient-to-r from-primary-600 to-secondary-500 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">We'd love to hear from you.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"><MapPin className="text-primary-600" size={32} /></div>
              <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600 text-sm">123 Education Street, City</p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4"><Phone className="text-secondary-500" size={32} /></div>
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">+234 800 000 0000</p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4"><Mail className="text-success" size={32} /></div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">info@melchiacademy.edu</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="label-field">Your Name *</label>
                  <input type="text" name="name" required className="input-field" placeholder="Enter your full name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                  <label className="label-field">Email Address *</label>
                  <input type="email" name="email" required className="input-field" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                  <label className="label-field">Subject *</label>
                  <input type="text" name="subject" required className="input-field" placeholder="Enter subject" value={formData.subject} onChange={handleChange} />
                </div>
                <div>
                  <label className="label-field">Message *</label>
                  <textarea name="message" required rows={5} className="input-field" placeholder="Type your message..." value={formData.message} onChange={handleChange} />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full btn-primary flex items-center justify-center py-3">
                  {isSubmitting ? 'Sending...' : <>Send Message <Send size={18} className="ml-2" /></>}
                </button>
              </form>
            </div>
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Find Us</h2>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-2 text-primary-600" />
                  <p>Interactive Map Will Load Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container-custom">
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 Melchi Academy Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Contact