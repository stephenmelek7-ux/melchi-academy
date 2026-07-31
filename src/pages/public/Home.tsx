import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Award, 
  Users, 
  BookOpen, 
  GraduationCap,
  Star,
  Facebook,
  Twitter,
  Instagram,
  CheckCircle,
  Eye,
  Target,
  Heart
} from 'lucide-react'

const Home: React.FC = () => {
  const stats = [
    { icon: Users, value: '2,500+', label: 'Students Enrolled' },
    { icon: Award, value: '98%', label: 'Pass Rate' },
    { icon: BookOpen, value: '50+', label: 'Qualified Teachers' },
    { icon: GraduationCap, value: '15+', label: 'Years of Excellence' }
  ]

  const testimonials = [
    {
      name: 'Mrs. Sarah Johnson',
      role: 'Parent',
      content: 'Melchi Academy has transformed my child\'s life. The teachers are dedicated, and the learning environment is exceptional.',
      rating: 5
    },
    {
      name: 'Mr. David Okafor',
      role: 'Alumni Parent',
      content: 'My children received the best education here. The moral and academic foundation built at Melchi is unmatched.',
      rating: 5
    },
    {
      name: 'Dr. Grace Adebayo',
      role: 'Parent',
      content: 'The school\'s commitment to excellence is evident in every aspect. Highly recommended for any parent.',
      rating: 5
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm uppercase tracking-wider text-primary-600 font-semibold mb-2">
              Welcome to Melchi Academy
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              "Building Character, Shaping Futures"
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Melchi Academy, we are committed to providing a holistic education that 
              nurtures academic excellence, moral integrity, and spiritual growth. Our 
              dedicated team of educators works tirelessly to ensure every child reaches 
              their full potential in a safe, supportive, and inspiring environment.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-500">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center text-white">
                  <div className="flex justify-center mb-3">
                    <Icon size={40} className="text-white/80" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                  <div className="text-sm md:text-base text-white/80">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Identity
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Discover what makes Melchi Academy a unique and exceptional place for learning
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="card hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Eye className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a center of academic excellence that produces well-rounded, 
                responsible, and God-fearing individuals who will make a positive 
                impact in their communities and the world at large.
              </p>
            </div>

            {/* Mission */}
            <div className="card hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-4">
                <Target className="text-secondary-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide quality, affordable, and accessible education that integrates 
                spiritual, moral, and academic development, preparing students for 
                lifelong learning and responsible citizenship.
              </p>
            </div>

            {/* Core Values */}
            <div className="card hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-4">
                <Heart className="text-success" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Core Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-success mr-2" size={16} />
                  Excellence in all endeavors
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-success mr-2" size={16} />
                  Integrity and honesty
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-success mr-2" size={16} />
                  Respect for all individuals
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-success mr-2" size={16} />
                  Discipline and hard work
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-success mr-2" size={16} />
                  Compassion and service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Parents Say
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Real stories from our school community
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
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
                Excellence in Education since 2000. Building character and shaping futures 
                through quality education.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
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
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition">
                  <Instagram size={20} />
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for updates
              </p>
              <div className="flex mt-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-primary-500"
                />
                <button className="bg-primary-600 px-4 py-2 rounded-r-lg text-sm font-semibold hover:bg-primary-700 transition">
                  Subscribe
                </button>
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

export default Home
