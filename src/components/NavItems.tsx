'use client'
import { PRODUCT_CATEGORIES } from '@/config'
import React, { useState,useRef } from 'react'
import NavItem from './NavItem'
import { useOnClickOutside } from '@/hooks/use-on-click-outside'

const NavItems = () => {
    const [activeIndex,setactiveIndex]=useState<null|number>(null)
    const isAnyOpen = activeIndex !== null
    const navRef = useRef<HTMLDivElement | null>(null)

    useOnClickOutside(navRef,()=>setactiveIndex(null))
  return (
    <div className='flex gap-4 h-full'ref={navRef} >
        {PRODUCT_CATEGORIES.map((category,i)=>{
            const handleOpen = ()=>{
                if(activeIndex===i){
                    setactiveIndex(null)
                }
                else{
                    setactiveIndex(i)
                }
            }
            const isOpen = i === activeIndex;
            return(
                <NavItem category={category} handleopen={handleOpen} isOpen={isOpen} key={category.value} isAnyOpen={isAnyOpen}  />
            )
        })}
    </div>
  )
}

export default NavItems