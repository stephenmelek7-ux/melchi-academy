import React, { useState } from 'react'
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  FileText,
  Filter,
  CheckCircle,
  XCircle,
  Download,
  Printer,
  TrendingUp,
  TrendingDown,
  Award
} from 'lucide-react'
import toast from 'react-hot-toast'

const AdminResults: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterClass, setFilterClass] = useState('all')
  const [filterTerm, setFilterTerm] = useState('all')

  const results = [
    { 
      id: 1, 
      student: 'Chidi Okonkwo', 
      class: 'Primary 5A', 
      subject: 'Mathematics', 
      score: 85, 
      grade: 'A',
      term: 'First Term',
      status: 'published'
    },
    { 
      id: 2, 
      student: 'Amara Eze', 
      class: 'Nursery 3A', 
      subject: 'English', 
      score: 78, 
      grade: 'B',
      term: 'First Term',
      status: 'published'
    },
    { 
      id: 3, 
      student: 'Oluwafemi Adeyemi', 
      class: 'Secondary 2B', 
      subject: 'Physics', 
      score: 92, 
      grade: 'A',
      term: 'First Term',
      status: 'pending'
    },
    { 
      id: 4, 
      student: 'Zainab Ibrahim', 
      class: 'Primary 3A', 
      subject: 'Science', 
      score: 65, 
      grade: 'C',
      term: 'First Term',
      status: 'published'
    },
    { 
      id: 5, 
      student: 'Tunde Balogun', 
      class: 'Secondary 1A', 
      subject: 'Mathematics', 
      score: 88, 
      grade: 'A',
      term: 'First Term',
      status: 'pending'
    },
    { 
      id: 6, 
      student: 'Ngozi Obi', 
      class: 'Nursery 2A', 
      subject: 'Art', 
      score: 95, 
      grade: 'A',
      term: 'First Term',
      status: 'published'
    },
  ]

  const filteredResults = results
    .filter(result => result.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
                     result.subject.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(result => filterClass === 'all' || result.class === filterClass)
    .filter(result => filterTerm === 'all' || result.term === filterTerm)

  const getGradeBadge = (grade: string) => {
    const colors = {
      'A': 'bg-green-100 text-green-700',
      'B': 'bg-blue-100 text-blue-700',
      'C': 'bg-yellow-100 text-yellow-700',
      'D': 'bg-orange-100 text-orange-700',
      'F': 'bg-red-100 text-red-700',
    }
    return colors[grade as keyof typeof colors] || 'bg-gray-100 text-gray-700'
  }

  const getStatusBadge = (status: string) => {
    if (status === 'published') {
      return <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Published</span>
    } else {
      return <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Pending</span>
    }
  }

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this result?')) {
      toast.success('Result deleted successfully!')
    }
  }

  const handlePublish = (id: number) => {
    toast.success('Result published successfully!')
  }

  const classes = ['All', 'Primary 5A', 'Nursery 3A', 'Secondary 2B', 'Primary 3A', 'Secondary 1A', 'Nursery 2A']
  const terms = ['All', 'First Term', 'Second Term', 'Third Term']

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Results Management</h1>
          <p className="text-gray-500">Manage and publish student results</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="btn-secondary text-sm py-2 px-4 inline-flex items-center">
            <Download size={16} className="mr-2" />
            Export Results
          </button>
          <button className="btn-primary text-sm py-2 px-4 inline-flex items-center">
            <Plus size={16} className="mr-2" />
            Add Result
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-gray-800">{results.length}</p>
          <p className="text-sm text-gray-500">Total Results</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-green-600">
            {results.filter(r => r.status === 'published').length}
          </p>
          <p className="text-sm text-gray-500">Published</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-yellow-600">
            {results.filter(r => r.status === 'pending').length}
          </p>
          <p className="text-sm text-gray-500">Pending</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">
            {results.filter(r => r.grade === 'A').length}
          </p>
          <p className="text-sm text-gray-500">A Grades</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by student or subject..."
            className="input-field pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="input-field md:w-48"
          value={filterClass}
          onChange={(e) => setFilterClass(e.target.value)}
        >
          {classes.map((cls) => (
            <option key={cls} value={cls === 'All' ? 'all' : cls}>{cls}</option>
          ))}
        </select>
        <select
          className="input-field md:w-48"
          value={filterTerm}
          onChange={(e) => setFilterTerm(e.target.value)}
        >
          {terms.map((term) => (
            <option key={term} value={term === 'All' ? 'all' : term}>{term}</option>
          ))}
        </select>
      </div>

      {/* Results Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Term</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredResults.map((result) => (
                <tr key={result.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-800">{result.student}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{result.class}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{result.subject}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold ${
                        result.score >= 70 ? 'text-green-600' : 
                        result.score >= 50 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {result.score}%
                      </span>
                      {result.score >= 70 && <TrendingUp size={16} className="text-green-600" />}
                      {result.score < 50 && <TrendingDown size={16} className="text-red-600" />}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-3 py-1 rounded-full font-bold ${getGradeBadge(result.grade)}`}>
                      {result.grade}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{result.term}</td>
                  <td className="px-6 py-4">{getStatusBadge(result.status)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {result.status === 'pending' && (
                        <button
                          onClick={() => handlePublish(result.id)}
                          className="p-1 text-green-600 hover:bg-green-50 rounded-lg transition"
                          title="Publish"
                        >
                          <CheckCircle size={18} />
                        </button>
                      )}
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded-lg transition" title="View">
                        <Eye size={18} />
                      </button>
                      <button className="p-1 text-gray-600 hover:bg-gray-50 rounded-lg transition" title="Edit">
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(result.id)}
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
        {filteredResults.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No results found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminResults
