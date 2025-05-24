'use client'

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MENU_ITEMS } from "./constants";
import { MenuItem } from "./MenuItems";
import { SubLabelMenu } from "./SubLabelMenu";
import { Trash } from "lucide-react";
import { useTasksDataStore } from "@/hooks/useTasksDataStore";
import { MenuItemType } from "./types";

export function TasksDropDown({
    onOpen,
    onClose,
}: {
    onOpen: () => void;
    onClose: () => void;
}){
    const [selectedLabel, setSelectedLabel] = useState("Bug");

    const { selectedTask } = useTasksDataStore();

    const [menuItemsArray, setMenuItemsArray] = useState<MenuItemType[]>(MENU_ITEMS);

    useEffect(() => {
        setMenuItemsArray((prev) => 
            prev.map((item) => {
                if(item.kind === "favorite") {
                    return {
                        ...item,
                        label: selectedTask?.isFavorite ? "Unfavorite" : "Favorite",
                    };
                }
                return item;
            })
        );
    }, [selectedTask]);

    return(
        <DropdownMenu
            onOpenChange={(open: boolean) => (open ? onOpen() : onClose())}
        >
            <DropdownMenuTrigger asChild>
                <Button variant={"ghost"}>
                    <BsThreeDots />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 poppins">
                <DropdownMenuGroup>
                    {menuItemsArray.map((item) => (
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