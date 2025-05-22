import { ArrowUpCircle, CheckCircle2, Circle, HelpCircle, LucideIcon, XCircle } from 'lucide-react';
import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { FaPlusCircle } from 'react-icons/fa';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command';
import { Checkbox } from '../ui/checkbox';

type Status = {
    value: string;
    label: string;
    icon: LucideIcon
}

const statuses: Status[] = [
    {
        value: 'backlog',
        label: 'Backlog',
        icon: HelpCircle,
    },
    {
        value: 'todo',
        label: 'ToDo',
        icon: Circle,
    },
    {
        value: 'in progress',
        label: 'In Progress',
        icon: ArrowUpCircle,
    },
    {
        value: 'done',
        label: 'Done',
        icon: CheckCircle2,
    },
    {
        value: 'canceled',
        label: 'Canceled',
        icon: XCircle,
    },
];

const StatusDropDown = () => {
    const [open, setOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);
    
    return (
        <div className='flex items-center space-x-4'>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild >
                    <Button size='sm' variant={'outline'} className='h-10 justify-start border-dashed px-5'>
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center gap-2'>
                                <FaPlusCircle />
                                <span>Status</span>
                            </div>
                            <Separator orientation="vertical" className="h-6 border-1 border-gray-300" />
                            <div className='flex items-center gap-2'>
                                <Badge variant={'secondary'} >Todo</Badge>
                                <Badge variant={'secondary'} >Done</Badge>
                            </div>
                        </div>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 poppins" side='bottom' align='center'>
                    <Command>
                        <CommandInput placeholder="Change status..." />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                                {statuses.map((status) => (
                                    <CommandItem
                                        key={status.value}
                                        value={status.value}
                                        className="flex justify-between"
                                        onSelect={() => {
                                            setSelectedStatus(statuses.find((s) => s.value === status.value) || null);
                                            setOpen(false);
                                        }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Checkbox />
                                            <status.icon />
                                            <span>{status.label}</span>
                                        </div>  
                                        <span>23</span>                                      
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default StatusDropDown
