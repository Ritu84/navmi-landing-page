'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface LinkedInDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConnect: () => void
}

export function LinkedInDialog({ open, onOpenChange, onConnect }: LinkedInDialogProps) {
  const [stepsCompleted, setStepsCompleted] = useState(false)

  const handleConnect = () => {
    if (stepsCompleted) {
      onConnect()
      onOpenChange(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect LinkedIn</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            To use Roger AI for sending LinkedIn connection requests, please follow these two steps:
          </p>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">1. Install Roger Extension in your browser</p>
              <Link href="https://chrome.google.com/webstore/detail/roger/extension-id" target="_blank" className="px-3 py-1.5 text-xs inline-flex items-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-500">
                Install Norton Extension
              </Link>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">2. Make sure you're logged into LinkedIn in the same browser</p>

              <Link href="https://linkedin.com" target="_blank" className="px-3 py-1.5 text-xs inline-flex items-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-500">
                Log in to LinkedIn
              </Link>
            </div>
          </div>
          {/* <div className="flex items-center space-x-2">
            <Checkbox
              id="steps"
              checked={stepsCompleted}
              onCheckedChange={(checked) => setStepsCompleted(checked as boolean)}
            />
            <label
              htmlFor="steps"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I have completed both of the above steps
            </label>
          </div> */}
        </div>
        <DialogFooter className="sm:justify-between">
          <Button
            type="button"
            variant="ghost"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            disabled={!stepsCompleted}
            onClick={handleConnect}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Connect LinkedIn
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 