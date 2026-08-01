import React, { useState } from 'react'
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  BookOpen,
  Users,
  Filter,
  CheckCircle,
  XCircle
} from 'lucide-react'
import toast from 'react-hot-toast'

const AdminSubjects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterSection, setFilterSection] = useState('all')

  const subjects = [
    { id: 1, name: 'Mathematics', code: 'MTH101', section: 'primary', teacher: 'Dr. Grace Adeyemi', students: 45, status: 'active' },
    { id: 2, name: 'English Language', code: 'ENG101', section: 'primary', teacher: 'Mr. Oluwaseun Johnson', students: 50, status: 'active' },
    { id: 3, name: 'Basic Science', code: 'SCI101', section: 'primary', teacher: 'Mrs. Ngozi Obi', students: 42, status: 'active' },
    { id: 4, name: 'Social Studies', code: 'SST101', section: 'primary', teacher: 'Mr. Chidi Okonkwo', students: 38, status: 'active' },
    { id: 5, name: 'Mathematics', code: 'MTH201', section: 'secondary', teacher: 'Dr. Michael Obi', students: 55, status: 'active' },
    { id: 6, name: 'English Language', code: 'ENG201', section: 'secondary', teacher: 'Mr. Oluwaseun Johnson', students: 52, status: 'active' },
    { id: 7, name: 'Physics', code: 'PHY201', section: 'secondary', teacher: 'Dr. Michael Obi', students: 48, status: 'active' },
    { id: 8, name: 'Chemistry', code: 'CHE201', section: 'secondary', teacher: 'Dr. Grace Adeyemi', students: 45, status: 'active' },
    { id: 9, name: 'History', code: 'HIS201', section: 'secondary', teacher: 'Mr. Chidi Okonkwo', students: 40, status: 'inactive' },
    { id: 10, name: 'Art & Design', code: 'ART101', section: 'nursery', teacher: 'Miss Esther Adebayo', students: 30, status: 'active' },
    { id: 11, name: 'Music', code: 'MUS101', section: 'nursery', teacher: 'Miss Esther Adebayo', students: 28, status: 'active' },
    { id: 12, name: 'Physical Education', code: 'PED101', section: 'primary', teacher: 'Mr. Oluwaseun Johnson', students: 35, status: 'active' },
  ]

  const filteredSubjects = subjects
    .filter(sub => sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                   sub.code.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(sub => filterSection === 'all' || sub.section === filterSection)

  const getSectionBadge = (section: string) => {
    const colors = {
      nursery: 'bg-green-100 text-green-700',
      primary: 'bg-blue-100 text-blue-700',
      secondary: 'bg-purple-100 text-purple-700',
    }
    return colors[section as keyof typeof colors] || 'bg-gray-100 text-gray-700'
  }

  const getStatusBadge = (status: string) => {
    if (status === 'active') {
      return <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Active</span>
    } else {
      return <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Inactive</span>
    }
  }

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this subject?')) {
      toast.success('Subject deleted successfully!')
    }
  }

  const handleToggleStatus = (id: number) => {
    toast.success('Subject status updated!')
  }

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Subjects</h1>
          <p className="text-gray-500">Manage all subjects offered in the school</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="btn-primary text-sm py-2 px-4 inline-flex items-center">
            <Plus size={16} className="mr-2" />
            Add Subject
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-gray-800">{subjects.length}</p>
          <p className="text-sm text-gray-500">Total Subjects</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-green-600">
            {subjects.filter(s => s.status === 'active').length}
          </p>
          <p className="text-sm text-gray-500">Active</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">
            {new Set(subjects.map(s => s.teacher)).size}
          </p>
          <p className="text-sm text-gray-500">Teachers</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-purple-600">
            {subjects.reduce((acc, s) => acc + s.students, 0)}
          </p>
          <p className="text-sm text-gray-500">Total Students</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search subjects..."
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

      {/* Subjects Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredSubjects.map((subject) => (
                <tr key={subject.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-800">{subject.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-mono text-gray-600">{subject.code}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-3 py-1 rounded-full ${getSectionBadge(subject.section)}`}>
                      {subject.section.charAt(0).toUpperCase() + subject.section.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{subject.teacher}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{subject.students}</td>
                  <td className="px-6 py-4">{getStatusBadge(subject.status)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded-lg transition" title="View">
                        <Eye size={18} />
                      </button>
                      <button className="p-1 text-gray-600 hover:bg-gray-50 rounded-lg transition" title="Edit">
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleToggleStatus(subject.id)}
                        className="p-1 text-green-600 hover:bg-green-50 rounded-lg transition"
                        title="Toggle Status"
                      >
                        {subject.status === 'active' ? <XCircle size={18} /> : <CheckCircle size={18} />}
                      </button>
                      <button
                        onClick={() => handleDelete(subject.id)}
                        className="p-1 text-red-600 hover:bg-red-50 rounded-lg transition"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredSubjects.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No subjects found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminSubjects
