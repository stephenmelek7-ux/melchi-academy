import React from 'react'
import { Link } from 'react-router-dom'
import { Eye, Target, Heart, CheckCircle, Calendar, Users, Award, BookOpen } from 'lucide-react'

const About: React.FC = () => {
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our History</h2>
              <div className="w-16 h-1 bg-primary-600 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">Melchi Academy was founded in the year 2000 with a vision to provide quality education that combines academic excellence with moral and spiritual development.</p>
              <p className="text-gray-600 leading-relaxed">Over the past two decades, we have grown from a small nursery school to a full-fledged educational institution.</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center"><Calendar className="text-primary-600 mr-2" size={20} /><span className="text-gray-700">Founded 2000</span></div>
                <div className="flex items-center"><Users className="text-primary-600 mr-2" size={20} /><span className="text-gray-700">2,500+ Students</span></div>
                <div className="flex items-center"><Award className="text-primary-600 mr-2" size={20} /><span className="text-gray-700">98% Pass Rate</span></div>
                <div className="flex items-center"><BookOpen className="text-primary-600 mr-2" size={20} /><span className="text-gray-700">50+ Teachers</span></div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop" alt="School History" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4">Our Identity</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">The guiding principles that shape everything we do</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4"><Eye className="text-primary-600" size={32} /></div>
              <h3 className="text-xl font-bold mb-3">Vision</h3>
              <p className="text-gray-600 leading-relaxed">To be a center of academic excellence that produces well-rounded individuals.</p>
            </div>
            <div className="card">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-4"><Target className="text-secondary-500" size={32} /></div>
              <h3 className="text-xl font-bold mb-3">Mission</h3>
              <p className="text-gray-600 leading-relaxed">To provide quality education that integrates spiritual, moral, and academic development.</p>
            </div>
            <div className="card">
              <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-4"><Heart className="text-success" size={32} /></div>
              <h3 className="text-xl font-bold mb-3">Core Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle className="text-success mr-2" size={16} /> Excellence</li>
                <li className="flex items-center"><CheckCircle className="text-success mr-2" size={16} /> Integrity</li>
                <li className="flex items-center"><CheckCircle className="text-success mr-2" size={16} /> Respect</li>
              </ul>
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

export default About