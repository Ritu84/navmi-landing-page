import { FC } from 'react'
import Link from 'next/link'
import { Button } from "../ui/button"

interface SidebarItem {
  name: string;
  href: string;
}

const sidebarItems: SidebarItem[] = [
  { name: 'Roger AI', href: '/ai' },
  { name: 'Lead Finder', href: '/leads' },
  { name: 'Contacts',  href: '/contacts' },
  { name: 'Companies',  href: '/companies' },
  { name: 'Conversations', href: '/conversations' },
  { name: 'Sequences', href: '/sequences' },
  { name: 'Campaigns', href: '/campaigns' },
  { name: 'Settings', href: '/settings' },
]

const Dashboard: FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        {/* Logo/Brand */}
        <div className="p-4 border-b">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Norton</span>
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="p-3 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-center">
            <div className="mb-4 p-4 rounded-full bg-gray-100 inline-block">
              <span className="text-4xl">📋</span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">No Campaigns Found</h2>
            <p className="text-gray-600 mb-6">
              You don't have any campaigns yet. Start by adding a new campaign.
            </p>
            <Button>
              <span className="mr-2">+</span>
              Create Campaign
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard 