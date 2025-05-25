import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Task } from "@/data/TasksData"
import { Label } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IoArrowBack, IoArrowDown, IoArrowUp } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { TaskFormData } from "../TaskDialogSchema";

type Priority = {
    value: Task["priority"];
    icon: IconType;
}

const priorities: Priority[] = [
    {
        value:"Low",
        icon: IoArrowDown,
    },
    {
        value:"Medium",
        icon: IoArrowBack,
    },
    {
        value:"High",
        icon: IoArrowUp,
    },
];

export default function TaskPriority() {
    const { control } = useFormContext<TaskFormData>();
    
    return (
        <div className="flex flex-col gap-2">
            <Label className="opacity text-sm font-medium">Task Priority</Label>
            <Controller
                name="priority"
                defaultValue="Low"
                control={control}
                render={({ field }) => {
                    return ( 
                        <Select
                            value={field.value}
                            onValueChange={(value: TaskFormData["priority"]) => {
                                field.onChange(value)
                            }}
                        >
                            <SelectTrigger className="w-full h-11">
                                <SelectValue placeholder="Select a priority..." />
                            </SelectTrigger>
                            <SelectContent className="poppins">
                                <SelectGroup>
                                    {priorities.map((priority, index) => (
                                        <SelectItem key={index} value={priority.value}>
                                            <div className="flex items-center gap-2">
                                                <priority.icon size={15} />
                                                <span>{priority.value}</span>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    );
                }}
            />
        </div>
    )
}