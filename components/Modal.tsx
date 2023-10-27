'use client'
import { useRouter } from "next/navigation"
import React from "react"

function Modal({children}: {children: React.ReactNode}) {

  const router = useRouter()
  
  function closeModal(e : React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.target as HTMLDivElement;
    if(target.classList.contains('fixed')) router.back()
  }

  return (
    <div onClick={closeModal} className='fixed top-0 left-0 z-10 bg-black/50 pt-[10vh] h-screen w-screen'>
        <section id="modal-div" className='bg-white p-8 rounded-xl w-max mx-auto'>
          {children}
        </section>
    </div>
  )
}

export default Modal