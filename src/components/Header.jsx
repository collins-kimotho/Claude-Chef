import React from 'react'
import chef from '../assets/cooking.png'

const Header = () => {
  return (
    <header className="flex items-center justify-center gap-8 bg-slate-300 h-20">
        <img 
            src={chef} 
            alt="" 
            className="" 
            width={50}
        />
        <h1 className="font-serif font-bold text-lg">Chef Claude</h1>
    </header>
  )
}

export default Header