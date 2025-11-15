"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface AdminAuthWrapperProps {
  children: React.ReactNode
}

export function AdminAuthWrapper({ children }: AdminAuthWrapperProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    checkAuthentication()
  }, [])

  const checkAuthentication = async () => {
    try {
      const response = await fetch('/api/admin/auth/verify', {
        credentials: 'include'
      })
      
      if (response.ok) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
        router.push('/admin')
      }
    } catch (error) {
      console.error('Authentication check failed:', error)
      setIsAuthenticated(false)
      router.push('/admin')
    }
  }

  // Show loading state while checking authentication
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  // Show children only if authenticated
  if (isAuthenticated) {
    return <>{children}</>
  }

  // This should not render as user gets redirected, but just in case
  return null
}