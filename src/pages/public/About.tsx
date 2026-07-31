import React from 'react'
import { Link } from 'react-router-dom'

const About: React.FC = () => {
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
            <Link to="/about" className="text-gray-700 hover:text-primary-600 font-semibold">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600">Contact</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Melchi Academy</h1>
          <p className="text-xl max-w-3xl mx-auto">Excellence in Education Since 2000</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Our History</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Melchi Academy was founded in the year 2000 with a vision to provide 
              quality education that combines academic excellence with moral and 
              spiritual development.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Over the past two decades, we have grown from a small nursery school 
              to a full-fledged educational institution offering Nursery, Primary, 
              and Secondary education to thousands of students.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be a center of academic excellence that produces well-rounded, 
              responsible, and God-fearing individuals who will make a positive 
              impact in their communities and the world at large.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide quality, affordable, and accessible education that integrates 
              spiritual, moral, and academic development, preparing students for 
              lifelong learning and responsible citizenship.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8">Core Values</h2>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center">
                <span className="text-primary-600 mr-2">✓</span>
                Excellence in all endeavors
              </li>
              <li className="flex items-center">
                <span className="text-primary-600 mr-2">✓</span>
                Integrity and honesty
              </li>
              <li className="flex items-center">
                <span className="text-primary-600 mr-2">✓</span>
                Respect for all individuals
              </li>
              <li className="flex items-center">
                <span className="text-primary-600 mr-2">✓</span>
                Discipline and hard work
              </li>
              <li className="flex items-center">
                <span className="text-primary-600 mr-2">✓</span>
                Compassion and service
              </li>
            </ul>
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

export default About
