import React from 'react'
import { Link } from 'react-router-dom'

const History: React.FC = () => {
  const timelineEvents = [
    {
      year: '2000',
      title: 'The Beginning',
      description: 'Melchi Academy was founded with just 25 students and 3 teachers in a small building. The vision was to provide quality education with strong moral values.',
      icon: '🌟'
    },
    {
      year: '2003',
      title: 'Expansion to Primary School',
      description: 'Due to growing demand, we expanded to include Primary education. The student population grew to 150 students.',
      icon: '📚'
    },
    {
      year: '2006',
      title: 'New Campus',
      description: 'Melchi Academy moved to a larger campus with modern classrooms, a library, and a playground.',
      icon: '🏫'
    },
    {
      year: '2010',
      title: 'Secondary School Launch',
      description: 'We launched our Secondary School program, offering a comprehensive curriculum for students aged 11-16.',
      icon: '🎓'
    },
    {
      year: '2013',
      title: 'Computer Lab & ICT Integration',
      description: 'A state-of-the-art computer lab was established, integrating technology into teaching and learning.',
      icon: '💻'
    },
    {
      year: '2016',
      title: 'Science Laboratory',
      description: 'A fully equipped science laboratory was built to support practical learning in Physics, Chemistry, and Biology.',
      icon: '🔬'
    },
    {
      year: '2018',
      title: 'Sports Complex',
      description: 'A multi-purpose sports complex was completed, including facilities for football, basketball, and athletics.',
      icon: '⚽'
    },
    {
      year: '2020',
      title: '20 Years of Excellence',
      description: 'Melchi Academy celebrated 20 years of providing quality education, with over 2,500 students and 50+ teachers.',
      icon: '🎉'
    },
    {
      year: '2022',
      title: 'Digital Learning',
      description: 'We introduced digital learning platforms and online resources to enhance the educational experience.',
      icon: '📱'
    },
    {
      year: '2024',
      title: 'Today & Beyond',
      description: 'Melchi Academy continues to grow, with a commitment to excellence, innovation, and holistic education for all students.',
      icon: '🚀'
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
            <Link to="/history" className="text-gray-700 hover:text-primary-600 font-semibold">History</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our History</h1>
          <p className="text-xl max-w-3xl mx-auto">A journey of excellence spanning over two decades</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              Melchi Academy was founded in the year 2000 with a simple yet powerful vision: 
              to provide quality education that combines academic excellence with moral and 
              spiritual development. Over the past two decades, we have grown from a small 
              nursery school to a full-fledged educational institution.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Journey Through the Years</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-300"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  {/* Year Badge */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className={`bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary-500 hover:shadow-xl transition ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>
                      <div className="flex items-center justify-between md:justify-start gap-3">
                        <span className="text-3xl">{event.icon}</span>
                        <span className="text-2xl font-bold text-primary-600">{event.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mt-2">{event.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-white z-10">
                    <div className="w-6 h-6 bg-primary-500 rounded-full animate-pulse"></div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12"></div>

                  {/* Mobile Dot */}
                  <div className="md:hidden w-6 h-6 bg-primary-500 rounded-full border-4 border-white mx-auto my-2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Key Milestones</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center card">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-primary-600">2,500+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            <div className="text-center card">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-2xl font-bold text-secondary-500">98%</h3>
              <p className="text-gray-600">Pass Rate</p>
            </div>
            <div className="text-center card">
              <div className="text-5xl mb-4">👨‍🏫</div>
              <h3 className="text-2xl font-bold text-green-600">50+</h3>
              <p className="text-gray-600">Qualified Teachers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-500 text-white">
        <div className="container-custom text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic max-w-3xl mx-auto">
            "The history of Melchi Academy is a story of faith, hard work, and a commitment to excellence. We are proud of our past and excited about our future."
          </blockquote>
          <p className="mt-4 text-white/80">— Melchi Johnson, Proprietor</p>
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
                <li><Link to="/history" className="hover:text-white transition">Our History</Link></li>
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

export default History
