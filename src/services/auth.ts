import { supabase } from './supabase'

export interface User {
  id: string
  email: string
  full_name: string
  role: 'admin' | 'teacher' | 'staff' | 'parent' | 'student'
  phone?: string
  avatar_url?: string
  is_active: boolean
  is_approved: boolean
}

export const authService = {
  // Register user
  async register(email: string, password: string, userData: any) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: userData.full_name,
          role: userData.role,
          phone: userData.phone || '',
          is_active: true,
          is_approved: false,
        }
      }
    })
    if (error) throw error
    
    // Also create user in the users table
    if (data.user) {
      const { error: insertError } = await supabase
        .from('users')
        .insert([
          {
            id: data.user.id,
            email: data.user.email,
            full_name: userData.full_name,
            role: userData.role,
            phone: userData.phone || '',
            is_active: true,
            is_approved: false,
          }
        ])
      if (insertError) {
        console.error('Error creating user profile:', insertError)
      }
    }
    
    return data
  },

  // Login user
  async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) throw error
    return data
  },

  // Logout user
  async logout() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  // Get current user
  async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) throw error
    return user
  },

  // Get user profile from users table
  async getUserProfile(userId: string) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single()
    if (error) throw error
    return data as User
  },

  // Reset password
  async resetPassword(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    if (error) throw error
  },

  // Update user profile
  async updateProfile(userId: string, updates: Partial<User>) {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', userId)
      .select()
      .single()
    if (error) throw error
    return data
  },

  // Check if user is admin
  async isAdmin(userId: string): Promise<boolean> {
    const { data, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', userId)
      .single()
    if (error) return false
    return data?.role === 'admin'
  },

  // Get user role
  async getUserRole(userId: string): Promise<string | null> {
    const { data, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', userId)
      .single()
    if (error) return null
    return data?.role || null
  }
}
