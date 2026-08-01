import React, { useState } from 'react'
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  CreditCard,
  Users,
  Filter,
  CheckCircle,
  XCircle,
  Download,
  Printer
} from 'lucide-react'
import toast from 'react-hot-toast'

const AdminFees: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const fees = [
    { id: 1, student: 'Chidi Okonkwo', class: 'Primary 5A', amount: 150000, paid: 150000, balance: 0, status: 'paid', dueDate: 'Jan 31, 2024' },
    { id: 2, student: 'Amara Eze', class: 'Nursery 3A', amount: 120000, paid: 80000, balance: 40000, status: 'partial', dueDate: 'Jan 31, 2024' },
    { id: 3, student: 'Oluwafemi Adeyemi', class: 'Secondary 2B', amount: 220000, paid: 0, balance: 220000, status: 'unpaid', dueDate: 'Jan 31, 2024' },
    { id: 4, student: 'Zainab Ibrahim', class: 'Primary 3A', amount: 150000, paid: 150000, balance: 0, status: 'paid', dueDate: 'Jan 31, 2024' },
    { id: 5, student: 'Tunde Balogun', class: 'Secondary 1A', amount: 220000, paid: 220000, balance: 0, status: 'paid', dueDate: 'Jan 31, 2024' },
    { id: 6, student: 'Ngozi Obi', class: 'Nursery 2A', amount: 120000, paid: 60000, balance: 60000, status: 'partial', dueDate: 'Jan 31, 2024' },
    { id: 7, student: 'Obi Chukwu', class: 'Primary 4A', amount: 150000, paid: 0, balance: 150000, status: 'unpaid', dueDate: 'Feb 15, 2024' },
    { id: 8, student: 'Adaobi Eze', class: 'Secondary 3A', amount: 220000, paid: 220000, balance: 0, status: 'paid', dueDate: 'Jan 31, 2024' },
  ]

  const filteredFees = fees
    .filter(fee => fee.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
                   fee.class.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(fee => filterStatus === 'all' || fee.status === filterStatus)

  const getStatusBadge = (status: string) => {
    if (status === 'paid') {
      return <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Paid</span>
    } else if (status === 'partial') {
      return <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Partial</span>
    } else {
      return <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Unpaid</span>
    }
  }

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this fee record?')) {
      toast.success('Fee record deleted successfully!')
    }
  }

  const handleMarkPaid = (id: number) => {
    toast.success('Fee marked as paid!')
  }

  const totalFees = fees.reduce((acc, fee) => acc + fee.amount, 0)
  const totalPaid = fees.reduce((acc, fee) => acc + fee.paid, 0)
  const totalBalance = fees.reduce((acc, fee) => acc + fee.balance, 0)

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Fees Management</h1>
          <p className="text-gray-500">Manage all school fees and payments</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="btn-secondary text-sm py-2 px-4 inline-flex items-center">
            <Download size={16} className="mr-2" />
            Export Report
          </button>
          <button className="btn-primary text-sm py-2 px-4 inline-flex items-center">
            <Plus size={16} className="mr-2" />
            Add Fee
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-gray-800">₦{totalFees.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Total Fees</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-green-600">₦{totalPaid.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Total Paid</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-red-600">₦{totalBalance.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Total Balance</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">
            {fees.filter(f => f.status === 'paid').length}/{fees.length}
          </p>
          <p className="text-sm text-gray-500">Fully Paid</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by student or class..."
            className="input-field pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="input-field md:w-48"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="paid">Paid</option>
          <option value="partial">Partial</option>
          <option value="unpaid">Unpaid</option>
        </select>
      </div>

      {/* Fees Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Paid</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredFees.map((fee) => (
                <tr key={fee.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-800">{fee.student}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{fee.class}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">₦{fee.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-green-600">₦{fee.paid.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm font-medium text-red-600">₦{fee.balance.toLocaleString()}</td>
                  <td className="px-6 py-4">{getStatusBadge(fee.status)}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{fee.dueDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {fee.status !== 'paid' && (
                        <button
                          onClick={() => handleMarkPaid(fee.id)}
                          className="p-1 text-green-600 hover:bg-green-50 rounded-lg transition"
                          title="Mark as Paid"
                        >
                          <CheckCircle size={18} />
                        </button>
                      )}
                      <button className="p-1 text-gray-600 hover:bg-gray-50 rounded-lg transition" title="Edit">
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(fee.id)}
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
        {filteredFees.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No fee records found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminFees
