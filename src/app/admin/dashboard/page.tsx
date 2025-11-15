"use client"

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ProjectManager } from '@/components/admin/ProjectManager'
import { BlogManager } from '@/components/admin/BlogManager'
import { PersonalInfoManager } from '@/components/admin/PersonalInfoManager'
import { ExperienceManager } from '@/components/admin/ExperienceManager'
import { ContactManager } from '@/components/admin/ContactManager'
import { AdminAuthWrapper } from '@/components/AdminAuthWrapper'
import { LogOut, Settings } from 'lucide-react'

export default function AdminDashboard() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth/logout', { method: 'POST' })
      router.push('/admin')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <AdminAuthWrapper>
      <div className="min-h-screen bg-background">
        <header className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Settings className="w-6 h-6" />
            <h1 className="text-2xl font-bold">Portfolio Admin</h1>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-lg text-muted-foreground">
            Manage your portfolio content and personal information
          </h2>
        </div>

        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="blogs">Blogs</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <PersonalInfoManager />
          </TabsContent>

          <TabsContent value="experience">
            <ExperienceManager />
          </TabsContent>

          <TabsContent value="projects">
            <ProjectManager />
          </TabsContent>

          <TabsContent value="blogs">
            <BlogManager />
          </TabsContent>

          <TabsContent value="contacts">
            <ContactManager />
          </TabsContent>
        </Tabs>
      </main>
    </div>
    </AdminAuthWrapper>
  )
}