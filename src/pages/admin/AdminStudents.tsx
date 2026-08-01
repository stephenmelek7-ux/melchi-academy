import React, { useState } from 'react'
import { 
  Search, 
  UserPlus, 
  Edit, 
  Trash2, 
  Eye,
  GraduationCap,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Filter
} from 'lucide-react'
import toast from 'react-hot-toast'

const AdminStudents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterSection, setFilterSection] = useState('all')

  const students = [
    { 
      id: 1, 
      name: 'Chidi Okonkwo', 
      admissionNumber: 'MA-2024-001',
      class: 'Primary 5A',
      section: 'primary',
      gender: 'Male',
      parent: 'Mr. Okonkwo',
      status: 'active'
    },
    { 
      id: 2, 
      name: 'Amara Eze', 
      admissionNumber: 'MA-2024-002',
      class: 'Nursery 3A',
      section: 'nursery',
      gender: 'Female',
      parent: 'Mrs. Eze',
      status: 'active'
    },
    { 
      id: 3, 
      name: 'Oluwafemi Adeyemi', 
      admissionNumber: 'MA-2024-003',
      class: 'Secondary 2B',
      section: 'secondary',
      gender: 'Male',
      parent: 'Dr. Adeyemi',
      status: 'active'
    },
    { 
      id: 4, 
      name: 'Zainab Ibrahim', 
      admissionNumber: 'MA-2024-004',
      class: 'Primary 3A',
      section: 'primary',
      gender: 'Female',
      parent: 'Mr. Ibrahim',
      status: 'pending'
    },
    { 
      id: 5, 
      name: 'Tunde Balogun', 
      admissionNumber: 'MA-2024-005',
      class: 'Secondary 1A',
      section: 'secondary',
      gender: 'Male',
      parent: 'Mrs. Balogun',
      status: 'active'
    },
    { 
      id: 6, 
      name: 'Ngozi Obi', 
      admissionNumber: 'MA-2024-006',
      class: 'Nursery 2A',
      section: 'nursery',
      gender: 'Female',
      parent: 'Mr. Obi',
      status: 'inactive'
    },
  ]

  const filteredStudents = students
    .filter(student => student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                     student.admissionNumber.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(student => filterSection === 'all' || student.section === filterSection)

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
    } else if (status === 'pending') {
      return <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Pending</span>
    } else {
      return <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Inactive</span>
    }
  }

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      toast.success('Student deleted successfully!')
    }
  }

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Students</h1>
          <p className="text-gray-500">Manage all students in the school</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="btn-primary text-sm py-2 px-4 inline-flex items-center">
            <UserPlus size={16} className="mr-2" />
            Add Student
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-gray-800">{students.length}</p>
          <p className="text-sm text-gray-500">Total Students</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-green-600">
            {students.filter(s => s.status === 'active').length}
          </p>
          <p className="text-sm text-gray-500">Active</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-yellow-600">
            {students.filter(s => s.status === 'pending').length}
          </p>
          <p className="text-sm text-gray-500">Pending</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-red-600">
            {students.filter(s => s.status === 'inactive').length}
          </p>
          <p className="text-sm text-gray-500">Inactive</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or admission number..."
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

      {/* Students Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Admission #</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-800">{student.name}</p>
                      <p className="text-sm text-gray-500">Parent: {student.parent}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-gray-600">{student.admissionNumber}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.class}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-3 py-1 rounded-full ${getSectionBadge(student.section)}`}>
                      {student.section.charAt(0).toUpperCase() + student.section.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">{getStatusBadge(student.status)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded-lg transition" title="View">
                        <Eye size={18} />
                      </button>
                      <button className="p-1 text-gray-600 hover:bg-gray-50 rounded-lg transition" title="Edit">
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(student.id)}
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
        {filteredStudents.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No students found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminStudents
