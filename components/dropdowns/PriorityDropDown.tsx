import { useState } from "react";
import { IoArrowBack, IoArrowDown, IoArrowUp } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { FaPlusCircle } from "react-icons/fa";
import { Checkbox } from "../ui/checkbox";


type Status = {
    value: string;
    label: string;
    icon: IconType
}

const statuses: Status[] = [
    {
        value: 'low',
        label: 'Low',
        icon: IoArrowDown,
    },
    {
        value: 'medium',
        label: 'Medium',
        icon: IoArrowBack,
    },
    {
        value: 'high',
        label: 'High',
        icon: IoArrowUp,
    },
];

const PriorityDropDown = () => {
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
                                <span>Priority</span>
                            </div>
                            <Separator orientation="vertical" className="h-6 border-1 border-gray-300" />
                            <div className='flex items-center gap-2'>
                                <Badge variant={'secondary'} >Low</Badge>
                                <Badge variant={'secondary'} >Medium</Badge>
                            </div>
                        </div>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 poppins w-52">
                    <Command>
                        <CommandInput placeholder="Change priority..." />
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
                                        <div className="flex items-center gap-2">
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

export default PriorityDropDown
