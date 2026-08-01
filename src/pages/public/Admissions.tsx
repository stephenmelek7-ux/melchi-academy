import React from 'react'
import { Link } from 'react-router-dom'

const Admissions: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Fill Registration Form',
      description: 'Complete the online registration form with your child\'s details and your contact information.',
      icon: '📝'
    },
    {
      number: '02',
      title: 'Submit Documents',
      description: 'Upload required documents including birth certificate, previous school records, and passport photographs.',
      icon: '📄'
    },
    {
      number: '03',
      title: 'Pay Registration Fee',
      description: 'Pay the non-refundable registration fee to secure your child\'s place in the admission process.',
      icon: '💰'
    },
    {
      number: '04',
      title: 'Entrance Assessment',
      description: 'Your child will take an age-appropriate assessment to determine their academic level and placement.',
      icon: '📝'
    },
    {
      number: '05',
      title: 'Admission Interview',
      description: 'Parents and child will meet with school administrators for a brief interview and orientation.',
      icon: '🤝'
    },
    {
      number: '06',
      title: 'Acceptance & Enrollment',
      description: 'Upon successful completion, receive an acceptance letter and complete the final enrollment process.',
      icon: '🎉'
    }
  ]

  const requirements = [
    'Birth certificate',
    'Previous school records (if applicable)',
    'Passport photographs (2 copies)',
    'Immunization records',
    'Parent/Guardian identification',
    'Completed registration form'
  ]

  const fees = [
    {
      item: 'Registration Fee',
      amount: '₦15,000',
      description: 'One-time non-refundable registration fee'
    },
    {
      item: 'Tuition Fee (Nursery)',
      amount: '₦150,000',
      description: 'Annual tuition fee for Nursery students'
    },
    {
      item: 'Tuition Fee (Primary)',
      amount: '₦180,000',
      description: 'Annual tuition fee for Primary students'
    },
    {
      item: 'Tuition Fee (Secondary)',
      amount: '₦220,000',
      description: 'Annual tuition fee for Secondary students'
    },
    {
      item: 'Development Levy',
      amount: '₦20,000',
      description: 'Annual school development and maintenance fee'
    }
  ]

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
            <Link to="/admissions" className="text-gray-700 hover:text-primary-600 font-semibold">Admissions</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600">Contact</Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">Login</Link>
            <Link to="/register" className="btn-primary text-sm py-2 px-4">Register</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-r from-primary-600 to-secondary-500 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto">Begin your child's educational journey at Melchi Academy</p>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Admission Process</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Our admission process is designed to be simple, transparent, and welcoming.
            Follow these steps to enroll your child.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300 text-3xl">
                    <span className="hidden md:inline">→</span>
                  </div>
                )}
                <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition h-full">
                  <div className="text-4xl mb-3">{step.icon}</div>
                  <div className="text-primary-600 font-bold text-sm mb-1">STEP {step.number}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Admission Requirements</h2>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <span className="text-primary-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Important Dates</h2>
              <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Admission Opens</span>
                  <span className="font-semibold text-gray-800">January 15, 2024</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Application Deadline</span>
                  <span className="font-semibold text-gray-800">March 31, 2024</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Assessment Day</span>
                  <span className="font-semibold text-gray-800">April 10, 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">New Session Begins</span>
                  <span className="font-semibold text-gray-800">September 1, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Fee Structure</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Our fees are designed to be affordable while maintaining the highest quality education.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="grid grid-cols-3 bg-primary-600 text-white p-4 font-semibold">
                <div>Item</div>
                <div>Amount</div>
                <div>Description</div>
              </div>
              {fees.map((fee, index) => (
                <div key={index} className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} items-center`}>
                  <div className="font-medium text-gray-800">{fee.item}</div>
                  <div className="text-primary-600 font-bold">{fee.amount}</div>
                  <div className="text-gray-500 text-sm">{fee.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
            Join the Melchi Academy family today and give your child the gift of quality education.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
              Apply Now
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition inline-block">
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center font-bold">
                  MA
                </div>
                <span className="font-bold text-xl">Melchi Academy</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Excellence in Education since 2000.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link to="/admissions" className="hover:text-white transition">Admissions</Link></li>
                <li><Link to="/academic-programmes" className="hover:text-white transition">Programmes</Link></li>
                <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/login" className="hover:text-white transition">Login</Link></li>
                <li><Link to="/register" className="hover:text-white transition">Register</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 Melchi Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Admissions
