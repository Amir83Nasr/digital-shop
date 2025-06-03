import { MonitorSmartphone } from 'lucide-react'
import Link from 'next/link'

import { Button } from './ui'

export default function Welcome() {
  return (
    <div className="mt-6 flex flex-col items-center justify-center">
      <span>Welcome to</span>
      <div className="flex items-center gap-x-2">
        <MonitorSmartphone />
        <h1 className="text-2xl font-bold text-gray-800">Digital Shop</h1>
      </div>
      <Button asChild className="mt-6">
        <Link href="/products">Go to products</Link>
      </Button>
    </div>
  )
}
