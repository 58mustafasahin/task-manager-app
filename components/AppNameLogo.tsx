'use client'

import { ListTodo } from 'lucide-react'
import React from 'react'

const AppNameLogo = () => {
    return (
        <header className='flex items-center gap-2 left-10 top-8'>
            <div className='size-9 bg-primary rounded-md flex justify-center items-center '>
                <ListTodo className='text-white text-xl' aria-hidden='true'/>
            </div>
            <h1 className='text-2xl font-semibold font-poppins max-md:hidden'>
                Task <span className='font-normal text-primary'>Board</span>
                </h1>            
        </header>
    )
}

export default AppNameLogo
