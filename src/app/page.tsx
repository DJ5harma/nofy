'use client';
import Login from '@/components/login'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

function page() {
  return (
    <SessionProvider>
      <Login/>
    </SessionProvider>
  )
}

export default page