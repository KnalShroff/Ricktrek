'use client'
import React, { useState } from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from 'lucide-react';
import { useRouter } from 'next/navigation';


const navLinks = [
    {
        name: 'Home',
        src: '/home'
    },
    {
        name:'Dashboard',
        src:'/dashboard'
    },
    {
        name: 'Referrals',
        src: '/referrals'
    },
    {
        name: 'Coupons',
        src: '/coupons'
    },
    {
        name:'Withdrawls',
        src:'/withdrawls'
    },
    {
        name: 'Profile',
        src: '/profile'
    }
]

function NavBar() {
    return (
        <nav className='h-24 bg-blue-400 '>
            <div className='flex py-4 px-4'>
                <SmNav />
            </div>
        </nav>
    )
}

function SmNav() {
    const [open, setOpen] = useState(false);
    const router = useRouter()
    const handleClick=(src)=>{
        router.push(src);
        setOpen(false)
    }

    function changeOpen(e){
        setOpen(e)
    }
    return (
        <Sheet open={open} onOpenChange={changeOpen}>
            <SheetTrigger><AlignJustify /></SheetTrigger>
            <SheetContent side='left' className='px-1'>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription className='list-none flex flex-col w-full'>
                        {
                            navLinks.map(link => (
                                <li onClick={()=>handleClick(link.src)} key={link.name} className=' cursor-pointer py-4 pl-6 mb-1 font-medium text-[16px] hover:bg-gradient-to-r from-gray-100 to-gray-300 text-[#6BBFE6] shadow-sm'>
                                    <p className='float-left'>{link.name}</p>
                                </li>
                            ))
                        }

                        <li className='bg-red-400 text-white font-medium py-3 mx-4 mt-6'>Logout</li>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default NavBar