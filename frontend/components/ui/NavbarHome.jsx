import { useState } from 'react'

export default function NavbarHome({ isOpen, handleClick }) {
  return (
    <div className="text-white font-[Convergence] mx-40">
      <button onClick={handleClick} className="flex flex-col items-start">
        <div className="flex items-center">
          <span className="text-md">Home</span>
          <span className="ml-2">{isOpen ? 'v' : '^'}</span>
        </div>
        <span className="text-xs">Kāinga</span>
      </button>
    </div>
  )
}
