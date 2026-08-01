import React, { useState } from 'react'
import { CheckCircle, XCircle, Eye, UserPlus, Search, Filter } from 'lucide-react'
import toast from 'react-hot-toast'

const AdminApprovals: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')

  const pendingApprovals = [
    {
      id: 1,
      name: 'Mrs. Adebayo',
      email: 'adebayo@example.com',
      type: 'parent',
      date: 'Feb 1, 2024',
      status: 'pending',
      details: 'Parent registration for 2 children'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      type: 'parent',
      date: 'Feb 5, 2024',
      status: 'pending',
      details: 'Parent registration for 1 child'
    },
    {
      id: 3,
      name: 'Mr. Okonkwo',
      email: 'okonkwo@example.com',
      type: 'teacher',
      date: 'Feb 8, 2024',
      status: 'pending',
      details: 'Mathematics teacher application'
    },
    {
      id: 4,
      name: 'Miss Esther',
      email: 'esther@example.com',
      type: 'staff',
      date: 'Feb 10, 2024',
      status: 'pending',
      details: 'Library staff application'
    },
    {
      id: 5,
      name: 'Mr. Ibrahim',
      email: 'ibrahim@example.com',
      type: 'parent',
      date: 'Feb 12, 2024',
      status: 'pending',
      details: 'Parent registration for 3 children'
    },
    {
      id: 6,
      name: 'Dr. Okafor',
      email: 'okafor@example.com',
      type: 'teacher',
      date: 'Feb 14, 2024',
      status: 'pending',
      details: 'Science teacher application'
    }
  ]

  const filteredApprovals = pendingApprovals
    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                     item.email.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(item => filterType === 'all' || item.type === filterType)

  const handleApprove = (id: number) => {
    toast.success('Application approved successfully!')
  }

  const handleReject = (id: number) => {
    if (window.confirm('Are you sure you want to reject this application?')) {
      toast.success('Application rejected.')
    }
  }

  const getTypeBadge = (type: string) => {
    const colors = {
      parent: 'bg-green-100 text-green-700',
      teacher: 'bg-blue-100 text-blue-700',
      staff: 'bg-gray-100 text-gray-700',
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Pending Approvals</h1>
          <p className="text-gray-500">Review and approve new registrations</p>
        </div>
        <div className="mt-4 md:mt-0">
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
            {pendingApprovals.length} Pending
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search approvals..."
            className="input-field pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="input-field md:w-48"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="parent">Parent</option>
          <option value="teacher">Teacher</option>
          <option value="staff">Staff</option>
        </select>
      </div>

      {/* Approvals List */}
      <div className="space-y-4">
        {filteredApprovals.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-gray-800">{item.name}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full ${getTypeBadge(item.type)}`}>
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                    Pending
                  </span>
                </div>
                <p className="text-sm text-gray-500">{item.email}</p>
                <p className="text-sm text-gray-600 mt-1">{item.details}</p>
                <p className="text-xs text-gray-400 mt-1">Submitted: {item.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                  title="View Details"
                >
                  <Eye size={18} />
                </button>
                <button
                  onClick={() => handleApprove(item.id)}
                  className="btn-success text-sm py-2 px-4 flex items-center"
                >
                  <CheckCircle size={16} className="mr-1" /> Approve
                </button>
                <button
                  onClick={() => handleReject(item.id)}
                  className="btn-danger text-sm py-2 px-4 flex items-center"
                >
                  <XCircle size={16} className="mr-1" /> Reject
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredApprovals.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">All Caught Up!</h3>
            <p className="text-gray-500">No pending approvals at the moment.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminApprovals
