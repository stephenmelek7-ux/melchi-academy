import React from 'react'
import { Link } from 'react-router-dom'

const CoreValues: React.FC = () => {
  const values = [
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, encouraging our students to pursue excellence in academics, character, and service.',
      color: 'primary'
    },
    {
      icon: '🔍',
      title: 'Integrity',
      description: 'We uphold honesty, transparency, and moral principles in all our actions, teaching our students to be truthful and trustworthy individuals.',
      color: 'secondary'
    },
    {
      icon: '🤝',
      title: 'Respect',
      description: 'We value every individual and treat all with dignity, kindness, and consideration, fostering a culture of mutual respect and understanding.',
      color: 'green'
    },
    {
      icon: '💪',
      title: 'Discipline',
      description: 'We cultivate self-control, responsibility, and dedication, helping our students develop the discipline needed for lifelong success.',
      color: 'primary'
    },
    {
      icon: '❤️',
      title: 'Compassion',
      description: 'We show kindness, empathy, and service to others, encouraging our students to make a positive difference in their communities.',
      color: 'secondary'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace creativity, critical thinking, and continuous improvement, preparing our students to adapt and thrive in a changing world.',
      color: 'green'
    }
  ]

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'primary':
        return {
          bg: 'bg-primary-100',
          text: 'text-primary-600',
          border: 'border-primary-200',
          lightBg: 'bg-primary-50'
        }
      case 'secondary':
        return {
          bg: 'bg-secondary-100',
          text: 'text-secondary-500',
          border: 'border-secondary-200',
          lightBg: 'bg-secondary-50'
        }
      case 'green':
        return {
          bg: 'bg-green-100',
          text: 'text-green-600',
          border: 'border-green-200',
          lightBg: 'bg-green-50'
        }
      default:
        return {
          bg: 'bg-primary-100',
          text: 'text-primary-600',
          border: 'border-primary-200',
          lightBg: 'bg-primary-50'
        }
    }
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
            <Link to="/vision-mission" className="text-gray-700 hover:text-primary-600">Vision & Mission</Link>
            <Link to="/core-values" className="text-gray-700 hover:text-primary-600 font-semibold">Core Values</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h1>
          <p className="text-xl max-w-3xl mx-auto">The principles that guide everything we do at Melchi Academy</p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Stand For</h2>
            <p className="text-gray-600 leading-relaxed">
              Our core values are the foundation of our school community. They shape our culture, 
              guide our decisions, and define who we are as an institution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const colors = getColorClasses(value.color)
              return (
                <div key={index} className="card hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4 text-3xl`}>
                    {value.icon}
                  </div>
                  <h3 className={`text-xl font-bold text-center ${colors.text} mb-3`}>{value.title}</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Values in Action */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values in Action</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary-500">
                <h3 className="font-bold text-gray-800 text-lg mb-2">📚 Excellence in the Classroom</h3>
                <p className="text-gray-600">Every lesson is designed to inspire curiosity and foster academic growth. Our teachers are dedicated to bringing out the best in every student.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-secondary-500">
                <h3 className="font-bold text-gray-800 text-lg mb-2">🤝 Integrity in Our Actions</h3>
                <p className="text-gray-600">We model honesty and transparency in all our interactions—with students, parents, and the community.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                <h3 className="font-bold text-gray-800 text-lg mb-2">❤️ Respect for Every Individual</h3>
                <p className="text-gray-600">Every student is valued and respected. We create a safe, inclusive environment where everyone belongs.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary-500">
                <h3 className="font-bold text-gray-800 text-lg mb-2">💪 Discipline and Dedication</h3>
                <p className="text-gray-600">Students are encouraged to develop self-discipline through structured routines, goal-setting, and positive reinforcement.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-secondary-500">
                <h3 className="font-bold text-gray-800 text-lg mb-2">🌍 Compassion and Service</h3>
                <p className="text-gray-600">We encourage students to serve their communities through outreach programs and acts of kindness.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                <h3 className="font-bold text-gray-800 text-lg mb-2">💡 Innovation and Growth</h3>
                <p className="text-gray-600">We embrace new ideas and technologies to prepare students for the future.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Quote */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-500 text-white">
        <div className="container-custom text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic max-w-3xl mx-auto">
            "Character is the foundation of all true excellence. Our values define who we are and who our students will become."
          </blockquote>
          <p className="mt-4 text-white/80">— Melchi Academy Philosophy</p>
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
                <li><Link to="/vision-mission" className="hover:text-white transition">Vision & Mission</Link></li>
                <li><Link to="/core-values" className="hover:text-white transition">Core Values</Link></li>
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

export default CoreValues
