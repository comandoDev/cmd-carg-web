'use client'

import { useRouter } from 'next/navigation'
import { Button } from './Button'
import { LogOut } from 'lucide-react'
import { storage } from '@/utils/localStorage'
import { useEffect } from 'react'

export function Header() {
  const router = useRouter()

  const user = storage.getUser()

  useEffect(() => {
    if (!user) router.replace('/login')
  })

  if (user && user.name) {
    const userArray = user.name.split(' ')
    const userFormatted =
      userArray.length > 1
        ? userArray[0] + ' ' + userArray[userArray.length - 1]
        : userArray[0]

    const handleLogout = () => {
      router.replace('/login')
      storage.clear()
    }

    return (
      <div className="flex justify-center items-center w-full py-2 bg-white shadow-sm">
        <div className="container px-6 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <span className="text-2xl font-bold text-purple-950 uppercase">
              {user.branch}
            </span>
          </div>
          <Button onClick={handleLogout} variant="ghost" className="p-4">
            {userFormatted}
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }
  return <div></div>
}
