import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { authService, User } from '../services/auth'
import { supabase } from '../services/supabase'

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  isAdmin: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  register: (email: string, password: string, userData: any) => Promise<void>
  resetPassword: (email: string) => Promise<void>
  updateProfile: (updates: Partial<User>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  // Check user on mount
  useEffect(() => {
    checkUser()
    
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          await loadUserProfile(session.user.id)
        } else {
          setUser(null)
          setIsAuthenticated(false)
          setIsAdmin(false)
        }
        setIsLoading(false)
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const loadUserProfile = async (userId: string) => {
    try {
      const profile = await authService.getUserProfile(userId)
      setUser(profile)
      setIsAuthenticated(true)
      setIsAdmin(profile.role === 'admin')
    } catch (error) {
      console.error('Error loading user profile:', error)
      setUser(null)
      setIsAuthenticated(false)
      setIsAdmin(false)
    }
  }

  const checkUser = async () => {
    setIsLoading(true)
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (session?.user) {
        await loadUserProfile(session.user.id)
      }
    } catch (error) {
      console.error('Error checking user:', error)
      setUser(null)
      setIsAuthenticated(false)
      setIsAdmin(false)
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const data = await authService.login(email, password)
      if (data.user) {
        await loadUserProfile(data.user.id)
      }
    } catch (error) {
      console.error('Login error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setIsLoading(true)
    try {
      await authService.logout()
      setUser(null)
      setIsAuthenticated(false)
      setIsAdmin(false)
    } catch (error) {
      console.error('Logout error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (email: string, password: string, userData: any) => {
    setIsLoading(true)
    try {
      await authService.register(email, password, userData)
    } catch (error) {
      console.error('Register error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const resetPassword = async (email: string) => {
    setIsLoading(true)
    try {
      await authService.resetPassword(email)
    } catch (error) {
      console.error('Reset password error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const updateProfile = async (updates: Partial<User>) => {
    if (!user) throw new Error('No user logged in')
    setIsLoading(true)
    try {
      const updated = await authService.updateProfile(user.id, updates)
      setUser(updated)
    } catch (error) {
      console.error('Update profile error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        isAdmin,
        login,
        logout,
        register,
        resetPassword,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
