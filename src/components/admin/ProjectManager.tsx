"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ProjectForm } from './ProjectForm'
import { Plus, Edit, Trash2, ExternalLink, Github, FolderOpen, Eye } from 'lucide-react'

// Transform database fields to frontend format
const transformProjectFromDB = (dbProject: any): Project => ({
  id: dbProject.id,
  title: dbProject.title,
  description: dbProject.description,
  tags: dbProject.tags || [],
  image: dbProject.image,
  slug: dbProject.slug,
  link: dbProject.link,
  year: dbProject.year,
  liveDemo: dbProject.live_demo || '',
  github: dbProject.github,
  overview: dbProject.overview || '',
  challenge: dbProject.challenge || '',
  solution: dbProject.solution || '',
  impact: dbProject.impact || ''
})

// Transform frontend format to database format
const transformProjectToDB = (project: Omit<Project, 'id'>) => ({
  title: project.title,
  description: project.description,
  tags: project.tags,
  image: project.image,
  slug: project.slug,
  link: project.link,
  year: project.year,
  live_demo: project.liveDemo,
  github: project.github,
  overview: project.overview,
  challenge: project.challenge,
  solution: project.solution,
  impact: project.impact
})

interface Project {
  id: number
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
}

export function ProjectManager() {
  const [projects, setProjects] = useState<Project[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [viewingProject, setViewingProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects')
      const data = await response.json()
      const transformedProjects = data.map(transformProjectFromDB)
      setProjects(transformedProjects)
    } catch (error) {
      console.error('Failed to fetch projects:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateProject = async (projectData: Omit<Project, 'id'>) => {
    try {
      const transformedData = transformProjectToDB(projectData)
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transformedData)
      })
      
      if (response.ok) {
        await fetchProjects()
        setShowForm(false)
      }
    } catch (error) {
      console.error('Failed to create project:', error)
    }
  }

  const handleUpdateProject = async (projectData: Omit<Project, 'id'>) => {
    if (!editingProject) return

    try {
      const transformedData = transformProjectToDB(projectData)
      const response = await fetch(`/api/projects/${editingProject.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transformedData)
      })
      
      if (response.ok) {
        await fetchProjects()
        setShowForm(false)
        setEditingProject(null)
      }
    } catch (error) {
      console.error('Failed to update project:', error)
    }
  }

  const handleDeleteProject = async (id: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return
    
    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE'
      })
      
      if (response.ok) {
        await fetchProjects()
      }
    } catch (error) {
      console.error('Failed to delete project:', error)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (showForm) {
    return (
      <ProjectForm
        project={editingProject || undefined}
        onSubmit={editingProject ? handleUpdateProject : handleCreateProject}
        onCancel={() => {
          setShowForm(false)
          setEditingProject(null)
        }}
      />
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FolderOpen className="w-5 h-5" />
          <h2 className="text-2xl font-bold">Project Management</h2>
        </div>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add New Project
        </Button>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {project.title}
                    <Badge variant="outline">{project.year}</Badge>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setViewingProject(project)}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setEditingProject(project)
                      setShowForm(true)
                    }}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteProject(project.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {(project.liveDemo || project.github) && (
                  <div className="flex gap-2">
                    {project.liveDemo && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Project Viewing Modal */}
      {viewingProject && (
        <Dialog open={!!viewingProject} onOpenChange={() => setViewingProject(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <span>{viewingProject.title}</span>
                <div className="flex gap-2">
                  {viewingProject.liveDemo && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={viewingProject.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {viewingProject.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={viewingProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              {viewingProject.image && (
                <div>
                  <img
                    src={viewingProject.image}
                    alt={viewingProject.title}
                    className="w-full h-64 object-cover rounded-lg border"
                  />
                </div>
              )}

              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {viewingProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {viewingProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>

              {viewingProject.overview && (
                <div className="p-6 border border-border rounded-lg bg-card">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Overview
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{viewingProject.overview}</p>
                </div>
              )}

              {viewingProject.challenge && (
                <div className="p-6 border border-border rounded-lg bg-card">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-2 h-2 bg-destructive rounded-full mr-3"></span>
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{viewingProject.challenge}</p>
                </div>
              )}

              {viewingProject.solution && (
                <div className="p-6 border border-border rounded-lg bg-card">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    The Solution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{viewingProject.solution}</p>
                </div>
              )}

              {viewingProject.impact && (
                <div className="p-6 border border-border rounded-lg bg-card">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Impact & Results
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{viewingProject.impact}</p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}