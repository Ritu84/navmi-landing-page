'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { LinkedInDialog } from './linkedin-dialog'

interface OnboardingFormData {
  fullName: string
  linkedinProfileUrl: string
  companyUrl: string
}

interface OnboardingFormProps {
  onComplete: () => void
}

export default function OnboardingForm({ onComplete }: OnboardingFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [linkedinDialogOpen, setLinkedinDialogOpen] = useState(false)
  const [linkedinConnected, setLinkedinConnected] = useState(false)
  const [formData, setFormData] = useState<OnboardingFormData>({
    fullName: '',
    linkedinProfileUrl: '',
    companyUrl: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleLinkedinConnect = () => {
    setLinkedinConnected(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
  console.log()
  e.preventDefault()
  setLoading(true)
  setError(null)

  try {
    // Directly call onComplete to move to pricing page
    onComplete()
  } catch (err) {
    setError('Something went wrong. Please try again.')
  } finally {
    setLoading(false)
  }
  }

  return (
    <section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent dark:text-white">
      <div className="max-w-xl mx-auto w-full">
        <div className="mb-8">
          <Link href="/" className="flex items-center">
            <h3 className="text-lg font-semibold">Norton</h3>
          </Link>
          <h1 className="text-2xl font-semibold mt-8 mb-2">Let's get started by getting some information</h1>
          <p className="text-gray-600 dark:text-gray-400">Fill in your details to complete the setup</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-50 text-red-500 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Your Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Steve Jobs."
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedinProfileUrl">Your linkedin profile url</Label>
            <Input
              id="linkedinProfileUrl"
              name="linkedinProfileUrl"
              type="url"
              required
              placeholder="https://www.linkedin.com/in/steve-jobs/"
              value={formData.linkedinProfileUrl}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyUrl">Your portfolio/github/proof of work url</Label>
            <Input
              id="companyUrl"
              name="companyUrl"
              type="url"
              required
              placeholder="your-portfolio.com"
              value={formData.companyUrl}
              onChange={handleInputChange}
            />
            <p className="text-sm text-gray-500">If you work at a large company, put the url of the product page that you are responsible for selling</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Permissions</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="shrink-0">
                  <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">LinkedIn</h4>
                  <p className="text-sm text-gray-500">We use LinkedIn to send LinkedIn connection requests</p>
                </div>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={() => setLinkedinDialogOpen(true)}
                  className={linkedinConnected ? 'bg-green-50 text-green-600 border-green-200' : ''}
                >
                  {linkedinConnected ? 'Connected' : 'Connect'}
                </Button>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Saving...' : 'Continue'}
          </Button>
        </form>
      </div>

      <LinkedInDialog
        open={linkedinDialogOpen}
        onOpenChange={setLinkedinDialogOpen}
        onConnect={handleLinkedinConnect}
      />
    </section>
  )
} 