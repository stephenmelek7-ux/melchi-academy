import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Users, 
  UserPlus, 
  GraduationCap, 
  BookOpen, 
  FolderOpen,
  Calendar,
  CreditCard,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  Home,
  Eye,
  CheckCircle,
  AlertCircle,
  BarChart,
  MessageSquare,
  Image,
  Database,
  Shield
} from 'lucide-react'

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: Eye, label: 'Content Management', path: '/admin/content' },
    { icon: Users, label: 'Users', path: '/admin/users' },
    { icon: UserPlus, label: 'Approvals', path: '/admin/approvals' },
    { icon: GraduationCap, label: 'Students', path: '/admin/students' },
    { icon: BookOpen, label: 'Teachers', path: '/admin/teachers' },
    { icon: FolderOpen, label: 'Classes', path: '/admin/classes' },
    { icon: BookOpen, label: 'Subjects', path: '/admin/subjects' },
    { icon: CreditCard, label: 'Fees', path: '/admin/fees' },
    { icon: FileText, label: 'Results', path: '/admin/results' },
    { icon: BarChart, label: 'Reports', path: '/admin/reports' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ]

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleLogout = () => {
    // TODO: Implement logout
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu size={24} />
            </button>
            <button
              onClick={toggleSidebar}
              className="hidden md:block p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                MA
              </div>
              <div>
                <h1 className="text-lg font-bold text-primary-600 leading-tight">Melchi Academy</h1>
                <p className="text-xs text-gray-500">Admin Dashboard</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-1">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none px-2 py-1 text-sm w-40"
              />
            </div>
            <button className="p-2 rounded-lg hover:bg-gray-100 relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button
              onClick={handleLogout}
              className="p-2 rounded-lg hover:bg-gray-100 text-red-500"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 h-full bg-white shadow-lg transition-all duration-300 z-40 ${
          isSidebarOpen ? 'w-64' : 'w-20'
        } ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <nav className="h-full overflow-y-auto py-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center px-4 py-3 hover:bg-primary-50 hover:text-primary-600 transition group ${
                  window.location.pathname === item.path
                    ? 'bg-primary-50 text-primary-600 border-r-4 border-primary-600'
                    : 'text-gray-600'
                }`}
              >
                <Icon size={20} className={`${isSidebarOpen ? 'mr-3' : ''}`} />
                {isSidebarOpen && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`pt-16 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <div className="p-6">
          <Outlet />
        </div>
      </main>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  )
}

export default AdminLayout
