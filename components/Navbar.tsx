'use client'

import { useTheme } from 'next-themes'
import { ModeToggle } from '@/app/mode-toggle';
import AppNameLogo from './AppNameLogo';
import TaskDialog from './task-dialog/TaskDialog';

const Navbar =  () => {
    const { theme } = useTheme();

    const bgColor = theme === 'dark' ? 'bg-black border-t' : 'bg-white';
    return (
        <div className={`poppins relative w-full h-[92px] overflow-hidden flex justify-between items-center px-6 border-b ${bgColor} `}>
            <AppNameLogo />
            <div className="flex items-center gap-3 justify-center">
                <TaskDialog />
                <ModeToggle />
            </div>
        </div>
    )
}

export default Navbar