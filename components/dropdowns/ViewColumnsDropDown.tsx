'use client'
import { FaColumns } from 'react-icons/fa'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Task } from '@/data/TasksData'
import { Table } from '@tanstack/react-table'
import { useTasksDataStore } from '@/hooks/useTasksDataStore'

const ViewColumnsDropDown = ({ table }: { table: Table<Task> }) => {
    const { tasks } = useTasksDataStore();

    const columnsToHide = ["priority", "status", "createdAt"];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    disabled={!tasks}
                    variant={'outline'} 
                    className='h-11 px-8 poppins'
                >
                    <FaColumns />
                    <span>View</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56 poppins'>
                {table
                    .getAllColumns()
                    .filter(
                        (column) => column.getCanHide() && columnsToHide.includes(column.id)
                    )
                    .map((column) => {
                        return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                className='capitalize'
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                            >
                                {column.id}
                            </DropdownMenuCheckboxItem>
                        );
                    })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ViewColumnsDropDown
