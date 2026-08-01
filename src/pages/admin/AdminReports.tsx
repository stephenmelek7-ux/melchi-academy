import React, { useState } from 'react'
import { 
  Download, 
  FileText, 
  Users, 
  GraduationCap, 
  BookOpen, 
  CreditCard,
  BarChart,
  PieChart,
  TrendingUp,
  Calendar,
  Filter,
  Printer,
  Mail
} from 'lucide-react'
import toast from 'react-hot-toast'

const AdminReports: React.FC = () => {
  const [reportType, setReportType] = useState('academic')
  const [dateRange, setDateRange] = useState('this-month')

  const reports = [
    { 
      id: 'academic', 
      title: 'Academic Performance Report', 
      description: 'Comprehensive report on student academic performance',
      icon: GraduationCap,
      color: 'bg-blue-500'
    },
    { 
      id: 'attendance', 
      title: 'Attendance Report', 
      description: 'Student attendance statistics and trends',
      icon: Calendar,
      color: 'bg-green-500'
    },
    { 
      id: 'financial', 
      title: 'Financial Report', 
      description: 'Fee collection, revenue, and financial summary',
      icon: CreditCard,
      color: 'bg-purple-500'
    },
    { 
      id: 'class', 
      title: 'Class Performance Report', 
      description: 'Performance analysis by class and subject',
      icon: BookOpen,
      color: 'bg-yellow-500'
    },
    { 
      id: 'teacher', 
      title: 'Teacher Performance Report', 
      description: 'Teacher effectiveness and student outcomes',
      icon: Users,
      color: 'bg-red-500'
    },
    { 
      id: 'promotion', 
      title: 'Promotion Report', 
      description: 'Student promotion and progression tracking',
      icon: TrendingUp,
      color: 'bg-indigo-500'
    },
    { 
      id: 'payment', 
      title: 'Payment Report', 
      description: 'Payment history and outstanding balances',
      icon: CreditCard,
      color: 'bg-pink-500'
    },
  ]

  const handleGenerateReport = (id: string) => {
    toast.success(`Generating ${id} report...`)
  }

  const handleExportPDF = () => {
    toast.success('Exporting to PDF...')
  }

  const handleExportExcel = () => {
    toast.success('Exporting to Excel...')
  }

  const handleEmailReport = () => {
    toast.success('Report sent to email!')
  }

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
          <p className="text-gray-500">Generate and manage school reports</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button onClick={handleExportPDF} className="btn-secondary text-sm py-2 px-4 inline-flex items-center">
            <Download size={16} className="mr-2" />
            Export PDF
          </button>
          <button onClick={handleExportExcel} className="btn-secondary text-sm py-2 px-4 inline-flex items-center">
            <FileText size={16} className="mr-2" />
            Export Excel
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700">Report Type</label>
          <select
            className="input-field mt-1"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option value="academic">Academic Report</option>
            <option value="attendance">Attendance Report</option>
            <option value="financial">Financial Report</option>
            <option value="class">Class Performance</option>
            <option value="teacher">Teacher Performance</option>
            <option value="promotion">Promotion Report</option>
            <option value="payment">Payment Report</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700">Date Range</label>
          <select
            className="input-field mt-1"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
            <option value="this-term">This Term</option>
            <option value="this-year">This Year</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={() => handleGenerateReport(reportType)}
            className="btn-primary py-2 px-6"
          >
            Generate Report
          </button>
        </div>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => {
          const Icon = report.icon
          return (
            <div key={report.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div className={`${report.color} p-3 rounded-lg text-white`}>
                  <Icon size={24} />
                </div>
                <button
                  onClick={() => handleGenerateReport(report.id)}
                  className="text-sm text-primary-600 hover:underline"
                >
                  Generate
                </button>
              </div>
              <h3 className="font-bold text-gray-800 mt-3">{report.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{report.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
                <button
                  onClick={handleExportPDF}
                  className="text-xs text-gray-500 hover:text-primary-600 transition flex items-center"
                >
                  <Download size={14} className="mr-1" /> PDF
                </button>
                <button
                  onClick={handleEmailReport}
                  className="text-xs text-gray-500 hover:text-primary-600 transition flex items-center"
                >
                  <Mail size={14} className="mr-1" /> Email
                </button>
                <button
                  onClick={handleExportPDF}
                  className="text-xs text-gray-500 hover:text-primary-600 transition flex items-center"
                >
                  <Printer size={14} className="mr-1" /> Print
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Stats */}
      <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
        <h2 className="font-bold text-gray-800 mb-4">Report Summary</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">1,247</p>
            <p className="text-sm text-gray-600">Total Students</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">92%</p>
            <p className="text-sm text-gray-600">Attendance Rate</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">₦4.2M</p>
            <p className="text-sm text-gray-600">Revenue Collected</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <p className="text-2xl font-bold text-yellow-600">78%</p>
            <p className="text-sm text-gray-600">Pass Rate</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminReports
