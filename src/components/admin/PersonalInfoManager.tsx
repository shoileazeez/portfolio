"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'
import { Save, User } from 'lucide-react'

interface PersonalInfo {
  id?: number
  name: string
  title: string
  bio: string
  intro: string
  avatar: string
  github: string
  linkedin: string
  email: string
}

export function PersonalInfoManager() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: '',
    title: '',
    bio: '',
    intro: '',
    avatar: '',
    github: '',
    linkedin: '',
    email: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    fetchPersonalInfo()
  }, [])

  const fetchPersonalInfo = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/personal-info')
      if (response.ok) {
        const data = await response.json()
        setPersonalInfo(data)
      }
    } catch (error) {
      toast.error('Failed to load personal information')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    try {
      const response = await fetch('/api/personal-info', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(personalInfo)
      })

      if (response.ok) {
        toast.success('Personal information updated successfully')
      } else {
        toast.error('Failed to update personal information')
      }
    } catch (error) {
      toast.error('An error occurred while saving')
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-muted rounded w-1/4"></div>
            <div className="h-10 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-1/4"></div>
            <div className="h-10 bg-muted rounded"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <User className="w-5 h-5" />
          <CardTitle>Personal Information</CardTitle>
        </div>
        <CardDescription>
          Update your personal details that appear on your portfolio
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={personalInfo.name}
                onChange={(e) => setPersonalInfo(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Professional Title</Label>
              <Input
                id="title"
                value={personalInfo.title}
                onChange={(e) => setPersonalInfo(prev => ({ ...prev, title: e.target.value }))}
                placeholder="e.g. Full-Stack Developer"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={personalInfo.email}
                onChange={(e) => setPersonalInfo(prev => ({ ...prev, email: e.target.value }))}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="avatar">Avatar URL</Label>
              <Input
                id="avatar"
                value={personalInfo.avatar}
                onChange={(e) => setPersonalInfo(prev => ({ ...prev, avatar: e.target.value }))}
                placeholder="https://example.com/avatar.jpg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="github">GitHub URL</Label>
              <Input
                id="github"
                value={personalInfo.github}
                onChange={(e) => setPersonalInfo(prev => ({ ...prev, github: e.target.value }))}
                placeholder="https://github.com/yourusername"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn URL</Label>
              <Input
                id="linkedin"
                value={personalInfo.linkedin}
                onChange={(e) => setPersonalInfo(prev => ({ ...prev, linkedin: e.target.value }))}
                placeholder="https://linkedin.com/in/yourusername"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio (Short)</Label>
            <Textarea
              id="bio"
              value={personalInfo.bio}
              onChange={(e) => setPersonalInfo(prev => ({ ...prev, bio: e.target.value }))}
              placeholder="A short bio that appears in your about section..."
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="intro">Introduction (Detailed)</Label>
            <Textarea
              id="intro"
              value={personalInfo.intro}
              onChange={(e) => setPersonalInfo(prev => ({ ...prev, intro: e.target.value }))}
              placeholder="A more detailed introduction about yourself..."
              rows={6}
              required
            />
          </div>

          <div className="flex gap-4">
            <Button type="submit" disabled={isSaving} className="flex items-center gap-2">
              <Save className="w-4 h-4" />
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}