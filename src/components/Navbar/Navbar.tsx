import { useEffect, useState } from "react"
import { dataHeader } from "../Header/Header.data"
import {NavbarProps} from "./Navbar.types"
import { AnimatePresence,motion } from "framer-motion";
import Link from "next/link";
import { toASCII } from "punycode";
import { Transition } from "../Transition";
import { exit } from "process";
 

export function Navbar(props: NavbarProps) {

    const { openMobileMenu } = props;
    const  [isScrolling, setIsScrolling] = useState (false)

    const handleScroll = () => {

        if(window.scrollY >= window.innerHeight - 600 ) {

            setIsScrolling(true)
            
        }else {
            setIsScrolling (true)

        } 
        
        useEffect (() => {
        window.addEventListener ("scroll" , handleScroll)
        return ()=> {
            window.removeEventListener ("scroll",handleScroll)
        }


        
        }, [ ])

    }

    return (
        <AnimatePresence>

            {isScrolling ? (
            <motion.nav key= {1}
               variants = {animationNavbar}
               initial ="initial"
               animate ="animate"
               exit="exit"
               className = "ml-auto mr-auto md:fixed z-[9999] right-0 left-0  px-6 py-3 text-white bg-gray-400/40 top-10 rounded-3xl backdrop-blur w-fit"
               >

            <div className="items-center hidden gap-5 md:flex">
               {dataHeader.map (({id , name , link})  =>  (
                <link key={id} href={link}  className=" hover:text-secondary hover:border-b-[1xp]  hover:border-secondary" > {name}</link>

            ))} 
            <Link href="/login" className="px-3 py-2 text-white rounded-lg  bg-secondary hover:bg-black" >Login</Link>

            </div>

            <div className="items-center hidden gap-5 md:flex ">
            {dataHeader.map(({id,name,link}) =>  (
                <Link key={id}  href={link} className=" hover:text-secondary hover:border-b-[1xp]  hover:border-secondary ">{name}</Link> 
                ))}
                <link href="/login"  className=" px-3 py-2  text-white rounded-lg  bg-secondary  hover:bg-black">login</link>
            </div>
            </motion.nav> 

            

            ) : ( 
                <div className={`${openMobileMenu ?  `absolute z-[1] left-0 top-20  bg-white r-0 w-full  px-4  py-4 ` : `hiden`} gap-5 md:flex `}>
            {dataHeader.map(({id,name,link}) =>  (
                <Link key={id}  href={link} className="block hover:text-secondary hover:border-b-[1xp]">{name}</Link> 
                ))}
            </div>

        
            )}
            
        </AnimatePresence>
        
    )
}

const animationNavbar ={

    initial : {
        y : -20,
        opacity :0
    },

    animate : {
        y:0,
        opacity :1,
        Transition :{

            stiffnes: 100,
            damping : 20,
            type : "spring"

        }
    },

    exit : {
         y:-20,
         opacity :0
    }
}