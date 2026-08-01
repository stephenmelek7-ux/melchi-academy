import React, { useState } from 'react'
import { 
  Search, 
  UserPlus, 
  Edit, 
  Trash2, 
  Eye,
  BookOpen,
  Mail,
  Phone,
  Award,
  Filter,
  CheckCircle,
  XCircle
} from 'lucide-react'
import toast from 'react-hot-toast'

const AdminTeachers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterSubject, setFilterSubject] = useState('all')

  const teachers = [
    {
      id: 1,
      name: 'Dr. Grace Adeyemi',
      email: 'grace@melchiacademy.edu',
      phone: '+234 800 000 0001',
      subject: 'Mathematics',
      classes: ['Primary 5A', 'Primary 5B'],
      status: 'active',
      joinDate: 'Jan 10, 2020'
    },
    {
      id: 2,
      name: 'Mr. Oluwaseun Johnson',
      email: 'seun@melchiacademy.edu',
      phone: '+234 800 000 0002',
      subject: 'English',
      classes: ['Secondary 1A', 'Secondary 1B'],
      status: 'active',
      joinDate: 'Feb 15, 2021'
    },
    {
      id: 3,
      name: 'Mrs. Ngozi Obi',
      email: 'ngozi@melchiacademy.edu',
      phone: '+234 800 000 0003',
      subject: 'Science',
      classes: ['Primary 4A', 'Primary 4B'],
      status: 'active',
      joinDate: 'Mar 1, 2020'
    },
    {
      id: 4,
      name: 'Mr. Chidi Okonkwo',
      email: 'chidi@melchiacademy.edu',
      phone: '+234 800 000 0004',
      subject: 'History',
      classes: ['Secondary 2A', 'Secondary 2B'],
      status: 'inactive',
      joinDate: 'Jun 15, 2022'
    },
    {
      id: 5,
      name: 'Miss Esther Adebayo',
      email: 'esther@melchiacademy.edu',
      phone: '+234 800 000 0005',
      subject: 'Art & Music',
      classes: ['Nursery 3A', 'Nursery 3B'],
      status: 'active',
      joinDate: 'Sep 1, 2023'
    },
    {
      id: 6,
      name: 'Dr. Michael Obi',
      email: 'michael@melchiacademy.edu',
      phone: '+234 800 000 0006',
      subject: 'Physics',
      classes: ['Secondary 3A', 'Secondary 3B'],
      status: 'active',
      joinDate: 'Jan 20, 2019'
    }
  ]

  const subjects = ['All', 'Mathematics', 'English', 'Science', 'History', 'Art & Music', 'Physics']

  const filteredTeachers = teachers
    .filter(teacher => teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                     teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(teacher => filterSubject === 'all' || teacher.subject === filterSubject)

  const getStatusBadge = (status: string) => {
    if (status === 'active') {
      return <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Active</span>
    } else {
      return <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Inactive</span>
    }
  }

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this teacher?')) {
      toast.success('Teacher deleted successfully!')
    }
  }

  const handleToggleStatus = (id: number) => {
    toast.success('Teacher status updated!')
  }

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Teachers</h1>
          <p className="text-gray-500">Manage all teachers and their assignments</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="btn-primary text-sm py-2 px-4 inline-flex items-center">
            <UserPlus size={16} className="mr-2" />
            Add Teacher
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-gray-800">{teachers.length}</p>
          <p className="text-sm text-gray-500">Total Teachers</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-green-600">
            {teachers.filter(t => t.status === 'active').length}
          </p>
          <p className="text-sm text-gray-500">Active</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">
            {new Set(teachers.map(t => t.subject)).size}
          </p>
          <p className="text-sm text-gray-500">Subjects Taught</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-purple-600">
            {teachers.reduce((acc, t) => acc + t.classes.length, 0)}
          </p>
          <p className="text-sm text-gray-500">Total Classes</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search teachers..."
            className="input-field pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="input-field md:w-48"
          value={filterSubject}
          onChange={(e) => setFilterSubject(e.target.value)}
        >
          {subjects.map((subject) => (
            <option key={subject} value={subject === 'All' ? 'all' : subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      {/* Teachers Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Classes</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-800">{teacher.name}</p>
                      <p className="text-sm text-gray-500">{teacher.email}</p>
                      <p className="text-xs text-gray-400">{teacher.phone}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-700">{teacher.subject}</span>
                    <p className="text-xs text-gray-400">Joined: {teacher.joinDate}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {teacher.classes.map((cls, i) => (
                        <span key={i} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                          {cls}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">{getStatusBadge(teacher.status)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded-lg transition" title="View">
                        <Eye size={18} />
                      </button>
                      <button className="p-1 text-gray-600 hover:bg-gray-50 rounded-lg transition" title="Edit">
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleToggleStatus(teacher.id)}
                        className="p-1 text-green-600 hover:bg-green-50 rounded-lg transition"
                        title="Toggle Status"
                      >
                        {teacher.status === 'active' ? <XCircle size={18} /> : <CheckCircle size={18} />}
                      </button>
                      <button
                        onClick={() => handleDelete(teacher.id)}
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
        {filteredTeachers.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No teachers found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminTeachers
