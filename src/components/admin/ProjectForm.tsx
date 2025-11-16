"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plus, X } from 'lucide-react'

interface Project {
  id?: number
  title: string
  description: string
  tags: string[]
  image: string
  slug: string
  link: string
  year: string
  liveDemo: string
  github: string
  overview: string
  challenge: string
  solution: string
  impact: string
  platform?: string
  pypi_url?: string
  api_docs_url?: string
}

interface ProjectFormProps {
  project?: Project
  onSubmit: (project: Omit<Project, 'id'>) => void
  onCancel: () => void
}

export function ProjectForm({ project, onSubmit, onCancel }: ProjectFormProps) {
  const [formData, setFormData] = useState<Omit<Project, 'id'>>({
    title: project?.title || '',
    description: project?.description || '',
    tags: project?.tags || [],
    image: project?.image || '',
    slug: project?.slug || '',
    link: project?.link || '',
    year: project?.year || new Date().getFullYear().toString(),
    liveDemo: project?.liveDemo || '',
    github: project?.github || '',
    overview: project?.overview || '',
    challenge: project?.challenge || '',
    solution: project?.solution || '',
    impact: project?.impact || '',
    platform: project?.platform || '',
    pypi_url: project?.pypi_url || '',
    api_docs_url: project?.api_docs_url || ''
  })
  
  const [currentTag, setCurrentTag] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const addTag = () => {
    if (currentTag && !formData.tags.includes(currentTag)) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag]
      }))
      setCurrentTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{project ? 'Edit Project' : 'Create New Project'}</CardTitle>
        <CardDescription>
          {project ? 'Update project details' : 'Add a new project to your portfolio'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => {
                  const title = e.target.value
                  setFormData(prev => ({
                    ...prev,
                    title,
                    slug: generateSlug(title)
                  }))
                }}
                placeholder="Project title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                placeholder="project-slug"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="year">Year</Label>
              <Input
                id="year"
                value={formData.year}
                onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                placeholder="2025"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                value={formData.image}
                onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                placeholder="https://images.unsplash.com/..."
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="liveDemo">Live Demo URL</Label>
              <Input
                id="liveDemo"
                value={formData.liveDemo}
                onChange={(e) => setFormData(prev => ({ ...prev, liveDemo: e.target.value }))}
                placeholder="https://example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="github">GitHub URL</Label>
              <Input
                id="github"
                value={formData.github}
                onChange={(e) => setFormData(prev => ({ ...prev, github: e.target.value }))}
                placeholder="https://github.com/user/repo"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="platform">Platform (for plugins/packages)</Label>
              <Input
                id="platform"
                value={formData.platform}
                onChange={(e) => setFormData(prev => ({ ...prev, platform: e.target.value }))}
                placeholder="e.g., PyPI, npm, etc."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pypi_url">Package URL (PyPI, npm, etc.)</Label>
              <Input
                id="pypi_url"
                value={formData.pypi_url}
                onChange={(e) => setFormData(prev => ({ ...prev, pypi_url: e.target.value }))}
                placeholder="https://pypi.org/project/package-name/"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="api_docs_url">API Documentation URL</Label>
              <Input
                id="api_docs_url"
                value={formData.api_docs_url}
                onChange={(e) => setFormData(prev => ({ ...prev, api_docs_url: e.target.value }))}
                placeholder="https://api-docs.example.com/"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Brief description of the project"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="flex gap-2">
              <Input
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                placeholder="Add a tag"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              />
              <Button type="button" onClick={addTag} size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="gap-1">
                  {tag}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 w-4"
                    onClick={() => removeTag(tag)}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="overview">Overview</Label>
            <Textarea
              id="overview"
              value={formData.overview}
              onChange={(e) => setFormData(prev => ({ ...prev, overview: e.target.value }))}
              placeholder="Detailed overview of the project"
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="challenge">Challenge</Label>
            <Textarea
              id="challenge"
              value={formData.challenge}
              onChange={(e) => setFormData(prev => ({ ...prev, challenge: e.target.value }))}
              placeholder="What challenges did you face?"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="solution">Solution</Label>
            <Textarea
              id="solution"
              value={formData.solution}
              onChange={(e) => setFormData(prev => ({ ...prev, solution: e.target.value }))}
              placeholder="How did you solve the challenges?"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="impact">Impact</Label>
            <Textarea
              id="impact"
              value={formData.impact}
              onChange={(e) => setFormData(prev => ({ ...prev, impact: e.target.value }))}
              placeholder="What was the impact of this project?"
              rows={3}
            />
          </div>

          <div className="flex gap-4">
            <Button type="submit">
              {project ? 'Update Project' : 'Create Project'}
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