import React, { useState } from 'react'
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Users,
  BookOpen,
  UserCheck,
  Filter,
  GraduationCap
} from 'lucide-react'
import toast from 'react-hot-toast'

const AdminClasses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterSection, setFilterSection] = useState('all')

  const classes = [
    { id: 1, name: 'Nursery 1A', section: 'nursery', teacher: 'Miss Esther Adebayo', students: 18, capacity: 25 },
    { id: 2, name: 'Nursery 2A', section: 'nursery', teacher: 'Mrs. Ngozi Obi', students: 20, capacity: 25 },
    { id: 3, name: 'Nursery 3A', section: 'nursery', teacher: 'Miss Esther Adebayo', students: 22, capacity: 25 },
    { id: 4, name: 'Primary 1A', section: 'primary', teacher: 'Mr. Oluwaseun Johnson', students: 24, capacity: 30 },
    { id: 5, name: 'Primary 2A', section: 'primary', teacher: 'Mrs. Ngozi Obi', students: 26, capacity: 30 },
    { id: 6, name: 'Primary 3A', section: 'primary', teacher: 'Mr. Chidi Okonkwo', students: 28, capacity: 30 },
    { id: 7, name: 'Primary 4A', section: 'primary', teacher: 'Dr. Grace Adeyemi', students: 25, capacity: 30 },
    { id: 8, name: 'Primary 5A', section: 'primary', teacher: 'Mr. Oluwaseun Johnson', students: 27, capacity: 30 },
    { id: 9, name: 'Secondary 1A', section: 'secondary', teacher: 'Dr. Michael Obi', students: 30, capacity: 35 },
    { id: 10, name: 'Secondary 1B', section: 'secondary', teacher: 'Dr. Michael Obi', students: 28, capacity: 35 },
    { id: 11, name: 'Secondary 2A', section: 'secondary', teacher: 'Mr. Chidi Okonkwo', students: 32, capacity: 35 },
    { id: 12, name: 'Secondary 2B', section: 'secondary', teacher: 'Dr. Grace Adeyemi', students: 29, capacity: 35 },
    { id: 13, name: 'Secondary 3A', section: 'secondary', teacher: 'Dr. Michael Obi', students: 33, capacity: 35 },
    { id: 14, name: 'Secondary 3B', section: 'secondary', teacher: 'Mr. Oluwaseun Johnson', students: 31, capacity: 35 },
  ]

  const filteredClasses = classes
    .filter(cls => cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                   cls.teacher.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(cls => filterSection === 'all' || cls.section === filterSection)

  const getSectionBadge = (section: string) => {
    const colors = {
      nursery: 'bg-green-100 text-green-700',
      primary: 'bg-blue-100 text-blue-700',
      secondary: 'bg-purple-100 text-purple-700',
    }
    return colors[section as keyof typeof colors] || 'bg-gray-100 text-gray-700'
  }

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this class?')) {
      toast.success('Class deleted successfully!')
    }
  }

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Classes</h1>
          <p className="text-gray-500">Manage all classes and their assignments</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="btn-primary text-sm py-2 px-4 inline-flex items-center">
            <Plus size={16} className="mr-2" />
            Add Class
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-gray-800">{classes.length}</p>
          <p className="text-sm text-gray-500">Total Classes</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-green-600">
            {classes.filter(c => c.section === 'nursery').length}
          </p>
          <p className="text-sm text-gray-500">Nursery</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">
            {classes.filter(c => c.section === 'primary').length}
          </p>
          <p className="text-sm text-gray-500">Primary</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-purple-600">
            {classes.filter(c => c.section === 'secondary').length}
          </p>
          <p className="text-sm text-gray-500">Secondary</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search classes..."
            className="input-field pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="input-field md:w-48"
          value={filterSection}
          onChange={(e) => setFilterSection(e.target.value)}
        >
          <option value="all">All Sections</option>
          <option value="nursery">Nursery</option>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
        </select>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.map((cls) => (
          <div key={cls.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-gray-800 text-lg">{cls.name}</h3>
                <span className={`text-xs px-3 py-1 rounded-full ${getSectionBadge(cls.section)}`}>
                  {cls.section.charAt(0).toUpperCase() + cls.section.slice(1)}
                </span>
              </div>
              <div className="flex gap-2">
                <button className="p-1 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                  <Eye size={16} />
                </button>
                <button className="p-1 text-gray-600 hover:bg-gray-50 rounded-lg transition">
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => handleDelete(cls.id)}
                  className="p-1 text-red-600 hover:bg-red-50 rounded-lg transition"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <UserCheck size={16} className="mr-2 text-gray-400" />
                <span>Teacher: <span className="font-medium text-gray-800">{cls.teacher}</span></span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users size={16} className="mr-2 text-gray-400" />
                <span>
                  Students: <span className="font-medium text-gray-800">{cls.students}</span>
                  <span className="text-gray-400"> / {cls.capacity}</span>
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div
                  className="bg-primary-600 h-2 rounded-full transition-all"
                  style={{ width: `${(cls.students / cls.capacity) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredClasses.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <p className="text-gray-500">No classes found</p>
        </div>
      )}
    </div>
  )
}

export default AdminClasses
