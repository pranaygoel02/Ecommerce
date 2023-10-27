'use client'
import Link from 'next/link'
import {useSession} from 'next-auth/react'

function CheckoutBtn() {
  
    const {data: session, status} = useSession()

    const isAuthenticated = status === 'authenticated'

    if(!isAuthenticated) return <Link href={'/signin'} className="btn btn-primary w-full text-center">Please sign in to place order</Link>
    
    return (
    <button className="btn btn-primary w-full">Proceed to checkout</button>
  )
}

export default CheckoutBtn