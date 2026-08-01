import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  CreditCard,
  TrendingUp,
  Calendar,
  Bell,
  ArrowRight,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const AdminDashboard: React.FC = () => {
  const stats = [
    { 
      title: 'Total Students', 
      value: '2,547', 
      change: '+12%', 
      icon: GraduationCap, 
      color: 'bg-blue-500',
      path: '/admin/students'
    },
    { 
      title: 'Total Teachers', 
      value: '52', 
      change: '+5%', 
      icon: BookOpen, 
      color: 'bg-green-500',
      path: '/admin/teachers'
    },
    { 
      title: 'Pending Approvals', 
      value: '8', 
      change: '3 new', 
      icon: Users, 
      color: 'bg-yellow-500',
      path: '/admin/approvals'
    },
    { 
      title: 'Revenue This Month', 
      value: '₦1.2M', 
      change: '+18%', 
      icon: CreditCard, 
      color: 'bg-purple-500',
      path: '/admin/fees'
    },
  ]

  const recentActivities = [
    { user: 'John Doe', action: 'Registered as parent', time: '2 hours ago' },
    { user: 'Jane Smith', action: 'Approved student admission', time: '3 hours ago' },
    { user: 'Mr. Johnson', action: 'Posted exam results', time: '5 hours ago' },
    { user: 'Mrs. Adebayo', action: 'Updated school fees', time: '1 day ago' },
    { user: 'Dr. Grace', action: 'Created new class schedule', time: '2 days ago' },
  ]

  const upcomingEvents = [
    { title: 'PTA Meeting', date: 'Dec 15, 2024', time: '3:00 PM' },
    { title: 'Sports Day', date: 'Dec 20, 2024', time: '9:00 AM' },
    { title: 'Graduation Ceremony', date: 'Jan 10, 2025', time: '10:00 AM' },
  ]

  const pendingTasks = [
    { title: 'Approve new student registrations', count: 8, priority: 'high' },
    { title: 'Review fee payments', count: 15, priority: 'medium' },
    { title: 'Publish upcoming exam results', count: 3, priority: 'low' },
  ]

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500">Welcome back, Administrator</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <Link to="/admin/content" className="btn-secondary text-sm py-2 px-4">
            Manage Content
          </Link>
          <Link to="/admin/reports" className="btn-primary text-sm py-2 px-4">
            Generate Reports
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Link
              key={index}
              to={stat.path}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                  <span className="text-xs text-green-500">{stat.change}</span>
                </div>
                <div className={`${stat.color} p-3 rounded-lg text-white`}>
                  <Icon size={24} />
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-800">Recent Activity</h2>
            <Link to="/admin/activity-logs" className="text-sm text-primary-600 hover:underline">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div>
                  <p className="font-medium text-gray-800">{activity.user}</p>
                  <p className="text-sm text-gray-500">{activity.action}</p>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-800">Upcoming Events</h2>
            <Link to="/admin/calendar" className="text-sm text-primary-600 hover:underline">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-xs text-primary-600 font-bold">
                    {event.date.split(' ')[0]}
                  </span>
                  <span className="text-xs text-primary-600">
                    {event.date.split(' ')[1]}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">{event.title}</p>
                  <p className="text-sm text-gray-500">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pending Tasks */}
      <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
        <h2 className="font-bold text-gray-800 mb-4">Pending Tasks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pendingTasks.map((task, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${
                task.priority === 'high'
                  ? 'border-red-200 bg-red-50'
                  : task.priority === 'medium'
                  ? 'border-yellow-200 bg-yellow-50'
                  : 'border-blue-200 bg-blue-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{task.title}</span>
                <span className={`text-sm font-bold ${
                  task.priority === 'high'
                    ? 'text-red-600'
                    : task.priority === 'medium'
                    ? 'text-yellow-600'
                    : 'text-blue-600'
                }`}>
                  {task.count}
                </span>
              </div>
              <Link
                to="#"
                className="text-xs text-primary-600 hover:underline mt-2 inline-block"
              >
                Take Action →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
