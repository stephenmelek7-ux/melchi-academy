import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronLeft, ChevronRight, Award, Users, BookOpen, Star, 
  Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, 
  Linkedin, ArrowRight, GraduationCap, Heart, Target, Eye, CheckCircle 
} from 'lucide-react'

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop',
      title: 'Welcome to Melchi Academy',
      subtitle: 'Excellence in Education Since 2000',
      cta: 'Learn More'
    },
    {
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&h=600&fit=crop',
      title: 'Nurturing Young Minds',
      subtitle: 'Building Future Leaders Through Quality Education',
      cta: 'Admissions Open'
    },
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1200&h=600&fit=crop',
      title: 'Excellence in Education',
      subtitle: 'Where Every Child Matters and Every Dream Counts',
      cta: 'Explore Programs'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)

  const stats = [
    { icon: Users, value: '2,500+', label: 'Students Enrolled' },
    { icon: Award, value: '98%', label: 'Pass Rate' },
    { icon: BookOpen, value: '50+', label: 'Qualified Teachers' },
    { icon: GraduationCap, value: '15+', label: 'Years of Excellence' }
  ]

  const galleryImages = [
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=300&h=200&fit=crop',
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

  const newsItems = [
    {
      title: 'Annual Graduation Ceremony 2024',
      date: 'July 15, 2024',
      excerpt: 'Join us as we celebrate the achievements of our graduating class of 2024...',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=400&h=200&fit=crop'
    },
    {
      title: 'Sports Day Competition',
      date: 'July 10, 2024',
      excerpt: 'Our annual sports day is coming up! Students will compete in various athletic events...',
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=200&fit=crop'
    },
    {
      title: 'Admissions Open for 2024/2025',
      date: 'June 28, 2024',
      excerpt: 'We are now accepting applications for the new academic session...',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=200&fit=crop'
    }
  ]

  const events = [
    { title: 'Graduation Ceremony', date: 'July 15, 2024', time: '10:00 AM' },
    { title: 'PTA Meeting', date: 'July 20, 2024', time: '3:00 PM' },
    { title: 'Inter-House Sports', date: 'July 25, 2024', time: '8:00 AM' },
    { title: 'Cultural Day', date: 'August 5, 2024', time: '9:00 AM' }
  ]

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

      <section className="pt-16">
        <div className="relative h-[600px] overflow-hidden">
          {slides.map((slide, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>
              <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-8 text-shadow">{slide.subtitle}</p>
                  <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105">{slide.cta}</button>
                </div>
              </div>
            </div>
          ))}
          <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition"><ChevronLeft size={24} /></button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition"><ChevronRight size={24} /></button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm uppercase tracking-wider text-primary-600 font-semibold mb-2">Welcome to Melchi Academy</h2>
            <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">"Building Character, Shaping Futures"</p>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">At Melchi Academy, we are committed to providing a holistic education that nurtures academic excellence, moral integrity, and spiritual growth.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-500">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center text-white">
                  <div className="flex justify-center mb-3"><Icon size={40} className="text-white/80" /></div>
                  <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                  <div className="text-sm md:text-base text-white/80">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Identity</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Discover what makes Melchi Academy unique</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4"><Eye className="text-primary-600" size={32} /></div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">To be a center of academic excellence that produces well-rounded, responsible, and God-fearing individuals.</p>
            </div>
            <div className="card hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-4"><Target className="text-secondary-500" size={32} /></div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">To provide quality education that integrates spiritual, moral, and academic development.</p>
            </div>
            <div className="card hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-4"><Heart className="text-success" size={32} /></div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Core Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle className="text-success mr-2" size={16} /> Excellence</li>
                <li className="flex items-center"><CheckCircle className="text-success mr-2" size={16} /> Integrity</li>
                <li className="flex items-center"><CheckCircle className="text-success mr-2" size={16} /> Respect</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Photo Gallery</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">A glimpse into life at Melchi Academy</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg group cursor-pointer">
                <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover group-hover:scale-110 transition duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Parents Say</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Real stories from our school community</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex text-yellow-400 mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} size={20} fill="currentColor" />))}</div>
                <p className="text-gray-600 leading-relaxed mb-4">"{testimonial.content}"</p>
                <div><h4 className="font-semibold text-gray-800">{testimonial.name}</h4><p className="text-sm text-gray-500">{testimonial.role}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center font-bold">MA</div>
                <span className="font-bold text-xl">Melchi Academy</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">Excellence in Education since 2000.</p>
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
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition"><Facebook size={20} /></a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition"><Twitter size={20} /></a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition"><Instagram size={20} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 Melchi Academy Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home