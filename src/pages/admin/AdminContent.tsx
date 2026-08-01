import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Edit, 
  Eye, 
  Save, 
  X, 
  Plus,
  Image,
  FileText,
  Layout,
  Settings,
  Globe,
  BookOpen,
  Calendar,
  Users,
  Award,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
import toast from 'react-hot-toast'

const AdminContent: React.FC = () => {
  const [editingSection, setEditingSection] = useState<string | null>(null)
  const [content, setContent] = useState({
    heroTitle: 'Welcome to Melchi Academy',
    heroSubtitle: 'Excellence in Education Since 2000',
    welcomeMessage: 'At Melchi Academy, we are committed to providing a holistic education that nurtures academic excellence, moral integrity, and spiritual growth.',
    vision: 'To be a center of academic excellence that produces well-rounded, responsible, and God-fearing individuals.',
    mission: 'To provide quality, affordable, and accessible education that integrates spiritual, moral, and academic development.',
    schoolName: 'Melchi Academy',
    motto: 'Building Character, Shaping Futures',
    contactEmail: 'info@melchiacademy.edu',
    contactPhone: '+234 800 000 0000',
    address: '123 Education Street, City, Country',
  })

  const [formData, setFormData] = useState(content)

  const sections = [
    { id: 'hero', title: 'Hero Section', icon: Layout },
    { id: 'welcome', title: 'Welcome Message', icon: FileText },
    { id: 'vision-mission', title: 'Vision & Mission', icon: Eye },
    { id: 'contact', title: 'Contact Information', icon: Mail },
    { id: 'school-details', title: 'School Details', icon: Settings },
  ]

  const handleEdit = (section: string) => {
    setEditingSection(section)
    setFormData(content)
  }

  const handleSave = () => {
    setContent(formData)
    setEditingSection(null)
    toast.success('Content updated successfully!')
  }

  const handleCancel = () => {
    setEditingSection(null)
    setFormData(content)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Content Management</h1>
          <p className="text-gray-500">Edit your website content without writing code</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <Link to="/" target="_blank" className="btn-secondary text-sm py-2 px-4 inline-flex items-center">
            <Eye size={16} className="mr-2" />
            Preview Site
          </Link>
          <button
            onClick={() => {
              toast.success('All content published successfully!')
            }}
            className="btn-primary text-sm py-2 px-4 inline-flex items-center"
          >
            <Save size={16} className="mr-2" />
            Publish All
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Layout size={20} className="text-primary-600" />
              <h2 className="font-bold text-gray-800">Hero Section</h2>
            </div>
            {editingSection !== 'hero' && (
              <button
                onClick={() => handleEdit('hero')}
                className="text-sm text-primary-600 hover:underline flex items-center"
              >
                <Edit size={14} className="mr-1" /> Edit
              </button>
            )}
          </div>
          {editingSection === 'hero' ? (
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-700">Hero Title</label>
                <input
                  type="text"
                  name="heroTitle"
                  value={formData.heroTitle}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Hero Subtitle</label>
                <input
                  type="text"
                  name="heroSubtitle"
                  value={formData.heroSubtitle}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div className="flex gap-3">
                <button onClick={handleSave} className="btn-primary text-sm py-2 px-4 flex items-center">
                  <Save size={14} className="mr-1" /> Save
                </button>
                <button onClick={handleCancel} className="btn-secondary text-sm py-2 px-4 flex items-center">
                  <X size={14} className="mr-1" /> Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="font-semibold text-gray-800">{content.heroTitle}</p>
              <p className="text-gray-600 text-sm">{content.heroSubtitle}</p>
            </div>
          )}
        </div>

        {/* Welcome Message */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FileText size={20} className="text-primary-600" />
              <h2 className="font-bold text-gray-800">Welcome Message</h2>
            </div>
            {editingSection !== 'welcome' && (
              <button
                onClick={() => handleEdit('welcome')}
                className="text-sm text-primary-600 hover:underline flex items-center"
              >
                <Edit size={14} className="mr-1" /> Edit
              </button>
            )}
          </div>
          {editingSection === 'welcome' ? (
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-700">Welcome Message</label>
                <textarea
                  name="welcomeMessage"
                  value={formData.welcomeMessage}
                  onChange={handleChange}
                  rows={3}
                  className="input-field"
                />
              </div>
              <div className="flex gap-3">
                <button onClick={handleSave} className="btn-primary text-sm py-2 px-4 flex items-center">
                  <Save size={14} className="mr-1" /> Save
                </button>
                <button onClick={handleCancel} className="btn-secondary text-sm py-2 px-4 flex items-center">
                  <X size={14} className="mr-1" /> Cancel
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-600 text-sm">{content.welcomeMessage}</p>
          )}
        </div>

        {/* Vision & Mission */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Eye size={20} className="text-primary-600" />
              <h2 className="font-bold text-gray-800">Vision & Mission</h2>
            </div>
            {editingSection !== 'vision-mission' && (
              <button
                onClick={() => handleEdit('vision-mission')}
                className="text-sm text-primary-600 hover:underline flex items-center"
              >
                <Edit size={14} className="mr-1" /> Edit
              </button>
            )}
          </div>
          {editingSection === 'vision-mission' ? (
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-700">Vision</label>
                <textarea
                  name="vision"
                  value={formData.vision}
                  onChange={handleChange}
                  rows={2}
                  className="input-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Mission</label>
                <textarea
                  name="mission"
                  value={formData.mission}
                  onChange={handleChange}
                  rows={2}
                  className="input-field"
                />
              </div>
              <div className="flex gap-3">
                <button onClick={handleSave} className="btn-primary text-sm py-2 px-4 flex items-center">
                  <Save size={14} className="mr-1" /> Save
                </button>
                <button onClick={handleCancel} className="btn-secondary text-sm py-2 px-4 flex items-center">
                  <X size={14} className="mr-1" /> Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-xs text-gray-500">Vision</p>
              <p className="text-sm text-gray-700 mb-2">{content.vision}</p>
              <p className="text-xs text-gray-500">Mission</p>
              <p className="text-sm text-gray-700">{content.mission}</p>
            </div>
          )}
        </div>

        {/* School Details */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Settings size={20} className="text-primary-600" />
              <h2 className="font-bold text-gray-800">School Details</h2>
            </div>
            {editingSection !== 'school-details' && (
              <button
                onClick={() => handleEdit('school-details')}
                className="text-sm text-primary-600 hover:underline flex items-center"
              >
                <Edit size={14} className="mr-1" /> Edit
              </button>
            )}
          </div>
          {editingSection === 'school-details' ? (
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-700">School Name</label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Motto</label>
                <input
                  type="text"
                  name="motto"
                  value={formData.motto}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div className="flex gap-3">
                <button onClick={handleSave} className="btn-primary text-sm py-2 px-4 flex items-center">
                  <Save size={14} className="mr-1" /> Save
                </button>
                <button onClick={handleCancel} className="btn-secondary text-sm py-2 px-4 flex items-center">
                  <X size={14} className="mr-1" /> Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="font-semibold text-gray-800">{content.schoolName}</p>
              <p className="text-sm text-gray-600">"{content.motto}"</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
        <h2 className="font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition text-center">
            <Image size={24} className="mx-auto text-primary-600 mb-2" />
            <span className="text-sm text-gray-600">Upload Images</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition text-center">
            <FileText size={24} className="mx-auto text-primary-600 mb-2" />
            <span className="text-sm text-gray-600">Edit Pages</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition text-center">
            <Calendar size={24} className="mx-auto text-primary-600 mb-2" />
            <span className="text-sm text-gray-600">Update Calendar</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition text-center">
            <Globe size={24} className="mx-auto text-primary-600 mb-2" />
            <span className="text-sm text-gray-600">SEO Settings</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminContent
