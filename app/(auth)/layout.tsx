import '../globals.css'
import NextAuthProvider from '@/components/NextAuth/Provider'
import React from 'react'

function layout({children} : {children: React.ReactNode}) {
  return (

    <html lang="en">
      <body className="flex flex-col min-h-screen">
          <NextAuthProvider>
            <main className="flex-1 container">
              {children}
            </main>
          </NextAuthProvider>
        </body>
    </html>
  )
}

export default layout