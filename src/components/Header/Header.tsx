"use client"

import Link from "next/link"
import {CiMenuFries} from "react-icons/ci"
import {BsTelephone} from "react-icons/bs"

import { Navbar } from "../Navbar"
import { useState } from "react"


export function Header() {

    const [openMobileMenu,setOpenMobileMenu] = useState (false)



    return (

        <div className="container mx-auto  my-5 ">
            <div className="flex items-center justify-between px-5  md:px-0">
                <Link href="/">
                     <h1 className="font-serif text-4xl text-center tracking-wide text-[#b18457] py-5 italic">Samsara SPA</h1>

                </Link>

        <CiMenuFries className="block text-2xl md:hiden" onClick={( ) => setOpenMobileMenu(!openMobileMenu)}/>
                    
        <Navbar openMobileMenu = {openMobileMenu } />

        <div className="flex items-center gap-2 md:gap-5">
            <Link href="tel:1029184" className="flex items-center gap-4 courser-pointer">
            <BsTelephone />
            <span className="hidden md:block"> +57 321 292 5998   </span>
            </Link >

           {/* <Link href="/login"  className="px-3 py-2 text-white  rounded-lg  bg-secondary hover:bg-black "> Login</Link> */}


        </div>

            </div>

        </div>
    )
}
