import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
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
              <h1 className="text-xl font-bold text-primary-600 leading-tight">
                Melchi Academy
              </h1>
              <p className="text-xs text-gray-500">Excellence in Education</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600">About</Link>
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
          <h1 className="text-5xl font-bold mb-4">Welcome to Melchi Academy</h1>
          <p className="text-xl max-w-2xl mx-auto">Excellence in Education Since 2000</p>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Building Character, Shaping Futures</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Melchi Academy, we are committed to providing a holistic education that 
            nurtures academic excellence, moral integrity, and spiritual growth.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-500">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div><div className="text-3xl md:text-4xl font-bold">2,500+</div><div className="text-sm">Students</div></div>
            <div><div className="text-3xl md:text-4xl font-bold">98%</div><div className="text-sm">Pass Rate</div></div>
            <div><div className="text-3xl md:text-4xl font-bold">50+</div><div className="text-sm">Teachers</div></div>
            <div><div className="text-3xl md:text-4xl font-bold">15+</div><div className="text-sm">Years</div></div>
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

export default Home
