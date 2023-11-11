import '../globals.css'
import NextAuthProvider from '@/components/NextAuth/Provider'
import React from 'react'
import { Toaster } from 'react-hot-toast'

function layout({children} : {children: React.ReactNode}) {
  return (

    <html lang="en">
      <body className="">
          <NextAuthProvider>
            <Toaster/>
            <main className="flex flex-col items-center justify-center min-h-screen container w-[95vw] sm:w-[80vw] md:w-[75vw] lg:w-[30vw]">
              {children}
            </main>
          </NextAuthProvider>
        </body>
    </html>
  )
}

export default layout