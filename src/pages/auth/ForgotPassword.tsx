import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast.error('Please enter your email address')
      return
    }

    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSubmitted(true)
      toast.success('Password reset link sent to your email!')
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="text-center">
          <Link to="/" className="inline-block">
            <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4">
              MA
            </div>
          </Link>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Reset Your Password
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        {/* Form */}
        {!isSubmitted ? (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email" className="label-field">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="input-field pl-10"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary flex items-center justify-center py-3"
              >
                {isLoading ? (
                  'Sending...'
                ) : (
                  <>
                    Send Reset Link
                  </>
                )}
              </button>
            </div>

            <div className="text-center">
              <Link to="/login" className="inline-flex items-center text-sm text-primary-600 hover:text-primary-500 font-medium">
                <ArrowLeft size={16} className="mr-2" />
                Back to Sign In
              </Link>
            </div>
          </form>
        ) : (
          // Success Message
          <div className="mt-8 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle size={64} className="text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Check Your Email</h3>
            <p className="text-gray-600 mb-6">
              We've sent a password reset link to <br />
              <span className="font-semibold text-gray-800">{email}</span>
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Didn't receive the email? Check your spam folder or try again.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full btn-primary flex items-center justify-center py-3"
              >
                Try Again
              </button>
              <Link to="/login" className="inline-flex items-center text-sm text-primary-600 hover:text-primary-500 font-medium">
                <ArrowLeft size={16} className="mr-2" />
                Back to Sign In
              </Link>
            </div>
          </div>
        )}

        {/* Footer Info */}
        <div className="text-center text-xs text-gray-500">
          <p>© 2024 Melchi Academy. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
