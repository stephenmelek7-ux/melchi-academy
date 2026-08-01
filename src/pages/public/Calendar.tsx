import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(0) // 0 = January
  const [currentYear, setCurrentYear] = useState(2024)

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const events = [
    { date: 5, title: 'School Resumes', type: 'academic' },
    { date: 10, title: 'PTA Meeting', type: 'meeting' },
    { date: 15, title: 'Sports Day', type: 'sports' },
    { date: 20, title: 'Cultural Day', type: 'cultural' },
    { date: 25, title: 'Mid-Term Break', type: 'holiday' },
    { date: 28, title: 'Inter-House Debate', type: 'academic' }
  ]

  const getEventTypeColor = (type: string) => {
    switch(type) {
      case 'academic': return 'bg-blue-500'
      case 'meeting': return 'bg-green-500'
      case 'sports': return 'bg-red-500'
      case 'cultural': return 'bg-purple-500'
      case 'holiday': return 'bg-yellow-500'
      default: return 'bg-gray-500'
    }
  }

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const daysInMonth = getDaysInMonth(currentMonth, currentYear)
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear)

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const getEventsForDate = (day: number) => {
    return events.filter(event => event.date === day)
  }

  const upcomingEvents = [
    { date: 'December 15, 2024', title: 'Sports Day Competition', time: '9:00 AM', location: 'Sports Complex' },
    { date: 'December 20, 2024', title: 'Cultural Day Celebration', time: '10:00 AM', location: 'School Auditorium' },
    { date: 'December 25, 2024', title: 'Christmas Break Begins', time: 'All Day', location: 'School Closed' },
    { date: 'January 5, 2025', title: 'School Resumes', time: '8:00 AM', location: 'All Classes' },
    { date: 'January 10, 2025', title: 'PTA Meeting', time: '3:00 PM', location: 'School Hall' },
    { date: 'January 25, 2025', title: 'Academic Assembly', time: '9:00 AM', location: 'School Auditorium' }
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
            <Link to="/calendar" className="text-gray-700 hover:text-primary-600 font-semibold">Calendar</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">School Calendar</h1>
          <p className="text-xl max-w-3xl mx-auto">Stay informed about important dates and events</p>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Calendar Header */}
            <div className="bg-primary-600 text-white p-4 flex justify-between items-center">
              <button onClick={prevMonth} className="hover:bg-primary-700 p-2 rounded-lg transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h2 className="text-xl font-bold">{months[currentMonth]} {currentYear}</h2>
              <button onClick={nextMonth} className="hover:bg-primary-700 p-2 rounded-lg transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="p-4">
              {/* Day Names */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center font-semibold text-gray-600 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Days */}
              <div className="grid grid-cols-7 gap-1">
                {/* Empty cells for days before first day of month */}
                {Array.from({ length: firstDay }).map((_, index) => (
                  <div key={`empty-${index}`} className="h-24 border border-gray-100 rounded-lg bg-gray-50"></div>
                ))}

                {/* Actual days */}
                {Array.from({ length: daysInMonth }).map((_, index) => {
                  const day = index + 1
                  const dayEvents = getEventsForDate(day)
                  return (
                    <div key={day} className="h-24 border border-gray-100 rounded-lg p-1 hover:shadow-md transition relative">
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-semibold text-gray-700">{day}</span>
                        {dayEvents.length > 0 && (
                          <span className="text-xs bg-primary-100 text-primary-600 px-1 rounded-full">
                            {dayEvents.length}
                          </span>
                        )}
                      </div>
                      <div className="mt-1 space-y-0.5">
                        {dayEvents.map((event, i) => (
                          <div key={i} className={`${getEventTypeColor(event.type)} w-2 h-2 rounded-full inline-block mr-0.5`} title={event.title}></div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="p-4 border-t border-gray-200 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Academic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Meeting</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Sports</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Cultural</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Holiday</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Upcoming Events</h2>
          <div className="max-w-3xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition mb-4">
                <div className="w-32 text-center p-3 bg-primary-50 rounded-lg flex-shrink-0">
                  <div className="text-sm text-primary-600 font-semibold">{event.date}</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{event.title}</h3>
                  <p className="text-sm text-gray-500">🕐 {event.time} • 📍 {event.location}</p>
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
                Excellence in Education since 2000.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link to="/calendar" className="hover:text-white transition">Calendar</Link></li>
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

export default Calendar
