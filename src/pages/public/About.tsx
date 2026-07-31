import React from 'react'
import { Link } from 'react-router-dom'

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="container-custom py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">MA</div>
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

      <section className="pt-20 bg-gradient-to-r from-primary-600 to-secondary-500 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Melchi Academy</h1>
          <p className="text-xl max-w-3xl mx-auto">Excellence in Education Since 2000</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Our History</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Melchi Academy was founded in the year 2000 with a vision to provide quality education that combines academic excellence with moral and spiritual development.
            </p>
            <h2 className="text-3xl font-bold mb-4 mt-8">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">To be a center of academic excellence that produces well-rounded, responsible, and God-fearing individuals.</p>
            <h2 className="text-3xl font-bold mb-4 mt-8">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">To provide quality education that integrates spiritual, moral, and academic development for every child.</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container-custom text-center">
          <p>© 2024 Melchi Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default About
