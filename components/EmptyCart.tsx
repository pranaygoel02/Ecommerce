"use client"

import Image from "next/image"
import Cart from '@/assets/cart_empty.png' 
import Link from "next/link"

function EmptyCart({text}: {text : string}) {
  return (
    <section className="flex flex-col items-center text-center justify-center gap-4">
        <Image className="mix-blend-multiply w-[300px]" alt="" src={Cart} width={500} height={500} />
        <p className="text-center font-bold text-2xl">Your {text} is empty</p>
        <p className="text-neutral-600 text-sm">Seems like you have not added anything into the {text} yet.</p>
        <Link className="btn btn-primary" href="/">Go to shop</Link>
    </section>
  )
}

export default EmptyCart