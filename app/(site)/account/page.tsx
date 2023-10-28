import UserProfileForm from '@/components/Auth/UserProfileForm'
import UserName from '@/components/UserName'
import React, { Suspense } from 'react'

function page() {
  return (
    <>
      <UserName className='rounded-lg sticky top-0'/>
        <UserProfileForm />
    </>
  )
}

export default page