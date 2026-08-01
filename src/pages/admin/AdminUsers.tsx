import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, 
  Filter, 
  UserPlus, 
  Edit, 
  Trash2, 
  CheckCircle, 
  XCircle,
  Mail,
  Phone,
  Shield,
  MoreVertical,
  Eye
} from 'lucide-react'
import toast from 'react-hot-toast'

const AdminUsers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRole, setFilterRole] = useState('all')

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'parent', status: 'active', joined: 'Jan 15, 2024' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'teacher', status: 'active', joined: 'Jan 10, 2024' },
    { id: 3, name: 'Mr. Johnson', email: 'johnson@example.com', role: 'admin', status: 'active', joined: 'Dec 1, 2023' },
    { id: 4, name: 'Mrs. Adebayo', email: 'adebayo@example.com', role: 'parent', status: 'pending', joined: 'Feb 1, 2024' },
    { id: 5, name: 'Dr. Grace', email: 'grace@example.com', role: 'staff', status: 'active', joined: 'Nov 15, 2023' },
    { id: 6, name: 'David Okafor', email: 'david@example.com', role: 'teacher', status: 'inactive', joined: 'Jan 20, 2024' },
    { id: 7, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'parent', status: 'pending', joined: 'Feb 5, 2024' },
    { id: 8, name: 'Michael Obi', email: 'michael@example.com', role: 'student', status: 'active', joined: 'Sep 1, 2023' },
  ]

  const filteredUsers = users
    .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                     user.email.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(user => filterRole === 'all' || user.role === filterRole)

  const getRoleBadge = (role: string) => {
    const colors = {
      admin: 'bg-purple-100 text-purple-700',
      teacher: 'bg-blue-100 text-blue-700',
      parent: 'bg-green-100 text-green-700',
      student: 'bg-yellow-100 text-yellow-700',
      staff: 'bg-gray-100 text-gray-700',
    }
    return colors[role as keyof typeof colors] || 'bg-gray-100 text-gray-700'
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
    if (window.confirm('Are you sure you want to delete this user?')) {
      toast.success('User deleted successfully!')
    }
  }

  const handleApprove = (id: number) => {
    toast.success('User approved successfully!')
  }

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Users</h1>
          <p className="text-gray-500">Manage all users in the system</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="btn-primary text-sm py-2 px-4 inline-flex items-center">
            <UserPlus size={16} className="mr-2" />
            Add User
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
            className="input-field pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="input-field md:w-48"
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="teacher">Teacher</option>
          <option value="parent">Parent</option>
          <option value="student">Student</option>
          <option value="staff">Staff</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-800">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-3 py-1 rounded-full ${getRoleBadge(user.role)}`}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">{getStatusBadge(user.status)}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{user.joined}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {user
