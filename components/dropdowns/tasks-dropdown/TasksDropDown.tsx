'use client'

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MENU_ITEMS } from "./constants";
import { MenuItem } from "./MenuItems";
import { SubLabelMenu } from "./SubLabelMenu";
import { Trash } from "lucide-react";

export function TasksDropDown(){
    const [selectedLabel, setSelectedLabel] = useState("Bug");

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"ghost"}>
                    <BsThreeDots />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 poppins">
                <DropdownMenuGroup>
                    {MENU_ITEMS.map((item) => (
                        <MenuItem 
                            key={item.label} 
                            Icon={item.icon}
                            label={item.label}
                            shortcut={item.shortcut}
                        />
                    ))}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <SubLabelMenu
                        value={selectedLabel}
                        onValueChange={setSelectedLabel}
                    />
                    <DropdownMenuSeparator />
                    <MenuItem 
                            Icon={Trash}
                            label='Delete'
                            shortcut='⇧⌘Q'
                            className="text-red-500"
                        />
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}