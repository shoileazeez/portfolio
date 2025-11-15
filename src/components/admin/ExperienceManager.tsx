"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import { Plus, Edit, Trash2, X, Briefcase } from 'lucide-react'

interface Experience {
  id?: number
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

interface ExperienceFormProps {
  experience?: Experience
  onSubmit: (exp: Omit<Experience, 'id'>) => void
  onCancel: () => void
}

function ExperienceForm({ experience, onSubmit, onCancel }: ExperienceFormProps) {
  const [formData, setFormData] = useState<Omit<Experience, 'id'>>({
    title: experience?.title || '',
    company: experience?.company || '',
    period: experience?.period || '',
    description: experience?.description || '',
    achievements: experience?.achievements || [],
    technologies: experience?.technologies || []
  })
  
  const [currentAchievement, setCurrentAchievement] = useState('')
  const [currentTechnology, setCurrentTechnology] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const addAchievement = () => {
    if (currentAchievement.trim()) {
      setFormData(prev => ({
        ...prev,
        achievements: [...prev.achievements, currentAchievement.trim()]
      }))
      setCurrentAchievement('')
    }
  }

  const removeAchievement = (index: number) => {
    setFormData(prev => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index)
    }))
  }

  const addTechnology = () => {
    if (currentTechnology.trim() && !formData.technologies.includes(currentTechnology.trim())) {
      setFormData(prev => ({
        ...prev,
        technologies: [...prev.technologies, currentTechnology.trim()]
      }))
      setCurrentTechnology('')
    }
  }

  const removeTechnology = (tech: string) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.filter(t => t !== tech)
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{experience ? 'Edit Experience' : 'Add New Experience'}</CardTitle>
        <CardDescription>
          {experience ? 'Update experience details' : 'Add a new work experience'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="e.g. Full-Stack Developer"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                placeholder="e.g. Tech Company Inc."
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="period">Period</Label>
            <Input
              id="period"
              value={formData.period}
              onChange={(e) => setFormData(prev => ({ ...prev, period: e.target.value }))}
              placeholder="e.g. Jan 2023 - Present"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Brief description of your role and responsibilities..."
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Key Achievements</Label>
            <div className="flex gap-2">
              <Input
                value={currentAchievement}
                onChange={(e) => setCurrentAchievement(e.target.value)}
                placeholder="Add an achievement"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addAchievement())}
              />
              <Button type="button" onClick={addAchievement} size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2">
              {formData.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-2 p-2 bg-muted/50 rounded">
                  <span className="flex-1 text-sm">{achievement}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeAchievement(index)}
                    className="h-6 w-6 p-0"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Technologies Used</Label>
            <div className="flex gap-2">
              <Input
                value={currentTechnology}
                onChange={(e) => setCurrentTechnology(e.target.value)}
                placeholder="Add a technology"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTechnology())}
              />
              <Button type="button" onClick={addTechnology} size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="gap-1">
                  {tech}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 w-4"
                    onClick={() => removeTechnology(tech)}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <Button type="submit">
              {experience ? 'Update Experience' : 'Add Experience'}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export function ExperienceManager() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingExperience, setEditingExperience] = useState<Experience | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchExperiences()
  }, [])

  const fetchExperiences = async () => {
    try {
      const response = await fetch('/api/experience')
      const data = await response.json()
      setExperiences(data)
    } catch (error) {
      console.error('Failed to fetch experiences:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateExperience = async (expData: Omit<Experience, 'id'>) => {
    try {
      const response = await fetch('/api/experience', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(expData)
      })
      
      if (response.ok) {
        await fetchExperiences()
        setShowForm(false)
        toast.success('Experience added successfully')
      }
    } catch (error) {
      console.error('Failed to create experience:', error)
      toast.error('Failed to add experience')
    }
  }

  const handleUpdateExperience = async (expData: Omit<Experience, 'id'>) => {
    if (!editingExperience) return
    
    try {
      const response = await fetch(`/api/experience/${editingExperience.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(expData)
      })
      
      if (response.ok) {
        await fetchExperiences()
        setEditingExperience(null)
        setShowForm(false)
        toast.success('Experience updated successfully')
      }
    } catch (error) {
      console.error('Failed to update experience:', error)
      toast.error('Failed to update experience')
    }
  }

  const handleDeleteExperience = async (id: number) => {
    if (!confirm('Are you sure you want to delete this experience?')) return
    
    try {
      const response = await fetch(`/api/experience/${id}`, {
        method: 'DELETE'
      })
      
      if (response.ok) {
        await fetchExperiences()
        toast.success('Experience deleted successfully')
      }
    } catch (error) {
      console.error('Failed to delete experience:', error)
      toast.error('Failed to delete experience')
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (showForm) {
    return (
      <ExperienceForm
        experience={editingExperience || undefined}
        onSubmit={editingExperience ? handleUpdateExperience : handleCreateExperience}
        onCancel={() => {
          setShowForm(false)
          setEditingExperience(null)
        }}
      />
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5" />
          <h2 className="text-2xl font-bold">Experience Management</h2>
        </div>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Experience
        </Button>
      </div>

      <div className="grid gap-6">
        {experiences.map((exp) => (
          <Card key={exp.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{exp.title}</CardTitle>
                  <p className="text-muted-foreground">{exp.company} • {exp.period}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setEditingExperience(exp)
                      setShowForm(true)
                    }}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => exp.id && handleDeleteExperience(exp.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}