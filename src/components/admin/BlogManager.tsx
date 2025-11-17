"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { BlogForm } from './BlogForm'
import { Plus, Edit, Trash2, Eye, Calendar, Clock } from 'lucide-react'

// Transform database fields to frontend format
const transformBlogFromDB = (dbBlog: any): Blog => ({
  id: dbBlog.id,
  title: dbBlog.title,
  description: dbBlog.description,
  excerpt: dbBlog.excerpt,
  date: dbBlog.date,
  slug: dbBlog.slug,
  coverImage: dbBlog.cover_image || '',
  tags: dbBlog.tags || [],
  readTime: dbBlog.read_time || '',
  content: dbBlog.content || '',
  views: Number(dbBlog.views || 0)
})

// Transform frontend format to database format
const transformBlogToDB = (blog: Omit<Blog, 'id'>) => ({
  title: blog.title,
  description: blog.description,
  excerpt: blog.excerpt,
  date: blog.date,
  slug: blog.slug,
  cover_image: blog.coverImage,
  tags: blog.tags,
  read_time: blog.readTime,
  content: blog.content
})

interface Blog {
  id: number
  title: string
  description: string
  excerpt: string
  date: string
  slug: string
  coverImage: string
  tags: string[]
  readTime: string
  content: string
  views?: number
}

export function BlogManager() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null)
  const [viewingBlog, setViewingBlog] = useState<Blog | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs')
      const data = await response.json()
      const transformedBlogs = data.map(transformBlogFromDB)
      setBlogs(transformedBlogs)
    } catch (error) {
      console.error('Failed to fetch blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateBlog = async (blogData: Omit<Blog, 'id'>) => {
    try {
      const transformedData = transformBlogToDB(blogData)
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transformedData)
      })
      
      if (response.ok) {
        await fetchBlogs()
        setShowForm(false)
      }
    } catch (error) {
      console.error('Failed to create blog:', error)
    }
  }

  const handleUpdateBlog = async (blogData: Omit<Blog, 'id'>) => {
    if (!editingBlog) return
    
    try {
      const transformedData = transformBlogToDB(blogData)
      const response = await fetch(`/api/blogs/${editingBlog.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transformedData)
      })
      
      if (response.ok) {
        await fetchBlogs()
        setShowForm(false)
        setEditingBlog(null)
      }
    } catch (error) {
      console.error('Failed to update blog:', error)
    }
  }

  const handleDeleteBlog = async (id: number) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return
    
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE'
      })
      
      if (response.ok) {
        await fetchBlogs()
      }
    } catch (error) {
      console.error('Failed to delete blog:', error)
    }
  }

  const handleClearViews = async (id: number) => {
    if (!confirm('Clear all recorded views for this blog?')) return

    try {
      const response = await fetch(`/api/blogs/${id}/view`, {
        method: 'DELETE',
        credentials: 'same-origin'
      })

      if (response.ok) {
        await fetchBlogs()
      } else {
        console.error('Failed to clear views')
      }
    } catch (error) {
      console.error('Failed to clear views:', error)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (showForm) {
    return (
      <BlogForm
        blog={editingBlog || undefined}
        onSubmit={editingBlog ? handleUpdateBlog : handleCreateBlog}
        onCancel={() => {
          setShowForm(false)
          setEditingBlog(null)
        }}
      />
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Blog Management</h2>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add New Blog Post
        </Button>
      </div>

      <div className="grid gap-6">
        {blogs.map((blog) => (
          <Card key={blog.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{blog.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {blog.date} • {blog.readTime}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex items-center gap-2 mr-2">
                    <Badge variant="outline" className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">{blog.views ?? 0}</span>
                    </Badge>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setViewingBlog(blog)}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setEditingBlog(blog)
                      setShowForm(true)
                    }}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteBlog(blog.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleClearViews(blog.id)}
                    title="Clear views"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">{blog.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Blog Viewing Modal */}
      {viewingBlog && (
        <Dialog open={!!viewingBlog} onOpenChange={() => setViewingBlog(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{viewingBlog.title}</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              {viewingBlog.coverImage && (
                <div>
                  <img
                    src={viewingBlog.coverImage}
                    alt={viewingBlog.title}
                    className="w-full h-64 object-cover rounded-lg border"
                  />
                </div>
              )}

              <div className="space-y-4">
                <p className="text-lg bg-gradient-to-r from-muted-foreground to-muted-foreground/70 bg-clip-text text-transparent leading-relaxed">
                  {viewingBlog.description}
                </p>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="bg-gradient-to-r from-muted-foreground to-muted-foreground/70 bg-clip-text text-transparent">
                      {new Date(viewingBlog.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="bg-gradient-to-r from-muted-foreground to-muted-foreground/70 bg-clip-text text-transparent">
                      {viewingBlog.readTime}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {viewingBlog.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>

              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-4">Content</h3>
                <div className="space-y-4 leading-relaxed text-base">
                  {viewingBlog.content.split('\\n\\n').map((paragraph, index) => {
                    if (paragraph.trim() === '') return null;
                    
                    // Handle different content types
                    if (paragraph.startsWith('# ')) {
                      return (
                        <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                          {paragraph.replace('# ', '')}
                        </h2>
                      );
                    }
                    
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
                          {paragraph.replace('## ', '')}
                        </h3>
                      );
                    }
                    
                    // Handle lists
                    if (paragraph.includes('\\n- ') || paragraph.startsWith('- ')) {
                      const listItems = paragraph.split('\\n').filter(item => item.trim().startsWith('- '));
                      return (
                        <ul key={index} className="space-y-2 ml-4">
                          {listItems.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="bg-gradient-to-r from-muted-foreground to-muted-foreground/70 bg-clip-text text-transparent">
                                {item.replace('- ', '')}
                              </span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    
                    // Regular paragraph
                    return (
                      <p key={index} className="leading-relaxed bg-gradient-to-r from-muted-foreground to-muted-foreground/70 bg-clip-text text-transparent">
                        {paragraph.split('\\n').map((line, lineIndex) => (
                          <React.Fragment key={lineIndex}>
                            {line}
                            {lineIndex < paragraph.split('\\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}