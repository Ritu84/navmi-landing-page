'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

interface PricingPlan {
  name: string
  description: string
  price: string
  features?: string[]
}

const pricingPlans: PricingPlan[] = [
//   {
//     name: "BASIC",
//     description: "Basic plan for small businesses",
//     price: "$600/month"
//   },
//   {
//     name: "GROWTH",
//     description: "The plan to use Roger's full set of features",
//     price: "$1750/month"
//   },
  {
    name: "PRO",
    description: "For unlimited Access of all of our features",
    price: "₹499/month"
  }
]

export default function PricingPage() {
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [promoCode, setPromoCode] = useState('')

  const handleStartTrial = () => {
    if (!selectedPlan) return
    // Handle trial start logic here
    router.push('/dashboard')
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Left side - Pricing Plans */}
      <div className="w-1/3 p-8 bg-white dark:bg-gray-800 shadow-xl animate-fade-in">
        <Link href="/" className="inline-block mb-8 transition-transform hover:scale-105">
          <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gray-900">Norton</h3>
        </Link>
        
        <h1 className="text-4xl font-semibold mb-4 animate-slide-up">You're one step closer to an autonomous sales rep</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6 animate-slide-up delay-100">Select a plan</p>

        <div className="space-y-6">
          {pricingPlans.map((plan, index) => (
            <button
              key={plan.name}
              onClick={() => setSelectedPlan(plan.name)}
              className={`w-full p-6 text-left border rounded-lg transition-all transform hover:scale-[1.02] hover:shadow-lg ${
                selectedPlan === plan.name 
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                  : 'border-gray-200 hover:border-gray-300 dark:border-gray-700'
              } animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-lg">{plan.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{plan.description}</p>
                </div>
                <span className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-black">{plan.price}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-6 animate-slide-up delay-300">
          <div className="transition-all duration-200 hover:transform hover:translate-y-[-2px]">
            <Label htmlFor="cardName" className="text-sm font-medium">Name on Card</Label>
            <Input 
              id="cardName" 
              type="text" 
              className="w-full mt-2 transition-shadow focus:shadow-md" 
            />
          </div>
          
          <div className="transition-all duration-200 hover:transform hover:translate-y-[-2px]">
            <Label htmlFor="cardDetails" className="text-sm font-medium">Card number</Label>
            <div className="flex gap-3 mt-2">
              <Input 
                id="cardDetails" 
                type="text" 
                placeholder="Card number" 
                className="flex-1 transition-shadow focus:shadow-md" 
              />
              <Input 
                type="text" 
                placeholder="MM/YY"
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '')
                  if (value.length <= 4) {
                    e.target.value = value.replace(/(\d{2})(\d{0,2})/, '$1/$2')
                  }
                }}
                maxLength={5}
                className="w-28 transition-shadow focus:shadow-md" 
              />
              <Input 
                type="text" 
                placeholder="CVC" 
                className="w-24 transition-shadow focus:shadow-md" 
              />
            </div>
          </div>

          <div className="transition-all duration-200 hover:transform hover:translate-y-[-2px]">
            <Label htmlFor="promoCode" className="text-sm font-medium">Discount Code</Label>
            <div className="flex gap-3 mt-2">
              <Input
                id="promoCode"
                type="text"
                placeholder="Enter promotion code (optional)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 transition-shadow focus:shadow-md"
              />
              <Button 
                variant="outline" 
                type="button" 
                className="whitespace-nowrap hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Apply Code
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <Button 
              onClick={handleStartTrial}
              disabled={!selectedPlan}
              className="w-full bg-gradient-to-r from-blue-400 to-black text-white hover:opacity-90 transition-all duration-200 transform hover:scale-[1.02]"
            >
              Buy Now
            </Button>

            <Button 
              onClick={handleStartTrial}
              className="w-full transition-all bg-zinc-800  text-amber-50 duration-200 transform hover:scale-[1.02]"
              variant="outline"
            >
              Start my 14-day free trial
            </Button>
          </div>
        </div>
      </div>

      {/* Right side - Preview/Benefits */}
      <div className="flex-1 p-8 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-lg animate-fade-in delay-500">
          <h2 className="text-3xl font-semibold mb-6">Benefits of Pro Plan</h2>
          <ul className="space-y-4">
            {[
              'Unlimited connection requests',
              'Advanced message templates',
              'Analytics dashboard',
              'Priority support',
              'Custom automation workflows'
            ].map((benefit, index) => (
              <li 
                key={index} 
                className="flex items-center gap-3 text-lg animate-slide-up"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  )
} 
