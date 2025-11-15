"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { Mail, Calendar, User, MessageSquare, Trash2, Eye, EyeOff } from 'lucide-react'

interface Contact {
  id: number
  name: string
  email: string
  subject: string
  message: string
  status: string
  created_at: string
  updated_at: string
}

export function ContactManager() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedContact, setExpandedContact] = useState<number | null>(null)

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/contacts')
      if (response.ok) {
        const data = await response.json()
        setContacts(data)
      }
    } catch (error) {
      console.error('Failed to fetch contacts:', error)
      toast.error('Failed to load contacts')
    } finally {
      setLoading(false)
    }
  }

  const updateContactStatus = async (id: number, status: string) => {
    try {
      const response = await fetch(`/api/contacts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      })

      if (response.ok) {
        setContacts(contacts.map(contact => 
          contact.id === id ? { ...contact, status } : contact
        ))
        toast.success('Contact status updated')
      }
    } catch (error) {
      console.error('Failed to update contact:', error)
      toast.error('Failed to update contact status')
    }
  }

  const deleteContact = async (id: number) => {
    if (!confirm('Are you sure you want to delete this contact?')) return

    try {
      const response = await fetch(`/api/contacts/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setContacts(contacts.filter(contact => contact.id !== id))
        toast.success('Contact deleted successfully')
      }
    } catch (error) {
      console.error('Failed to delete contact:', error)
      toast.error('Failed to delete contact')
    }
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500'
      case 'read': return 'bg-yellow-500'
      case 'replied': return 'bg-green-500'
      case 'archived': return 'bg-gray-500'
      default: return 'bg-blue-500'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return <div className="text-center py-8">Loading contacts...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Contact Messages</h2>
          <p className="text-muted-foreground">
            Manage contact form submissions from your portfolio
          </p>
        </div>
        <Button onClick={fetchContacts} variant="outline">
          Refresh
        </Button>
      </div>

      {contacts.length === 0 ? (
        <Card>
          <CardContent className="py-8">
            <div className="text-center text-muted-foreground">
              <Mail className="h-12 w-12 mx-auto mb-4" />
              <p>No contacts yet</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <Card key={contact.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {contact.name}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {contact.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(contact.created_at)}
                      </span>
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(contact.status)}>
                      {contact.status}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedContact(
                        expandedContact === contact.id ? null : contact.id
                      )}
                    >
                      {expandedContact === contact.id ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="mb-3">
                  <h4 className="font-medium mb-1 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Subject: {contact.subject || 'No subject'}
                  </h4>
                </div>

                {expandedContact === contact.id && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message:</label>
                      <Textarea
                        value={contact.message}
                        readOnly
                        className="min-h-[120px] resize-none bg-muted/50"
                      />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        variant={contact.status === 'new' ? 'default' : 'outline'}
                        onClick={() => updateContactStatus(contact.id, 'new')}
                      >
                        Mark as New
                      </Button>
                      <Button
                        size="sm"
                        variant={contact.status === 'read' ? 'default' : 'outline'}
                        onClick={() => updateContactStatus(contact.id, 'read')}
                      >
                        Mark as Read
                      </Button>
                      <Button
                        size="sm"
                        variant={contact.status === 'replied' ? 'default' : 'outline'}
                        onClick={() => updateContactStatus(contact.id, 'replied')}
                      >
                        Mark as Replied
                      </Button>
                      <Button
                        size="sm"
                        variant={contact.status === 'archived' ? 'default' : 'outline'}
                        onClick={() => updateContactStatus(contact.id, 'archived')}
                      >
                        Archive
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteContact(contact.id)}
                        className="ml-auto"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <p>Contact ID: {contact.id}</p>
                      <p>Created: {formatDate(contact.created_at)}</p>
                      {contact.updated_at !== contact.created_at && (
                        <p>Updated: {formatDate(contact.updated_at)}</p>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}