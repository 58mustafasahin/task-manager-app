import { DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "@/components/ui/dropdown-menu";
import { Tag } from "lucide-react";
import { LABEL_OPTIONS } from "./constants";

export function SubLabelMenu({
    value,
    onValueChange,
}: {
    value: string;
    onValueChange: (value: string) => void;
}) {
    return (
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>
                <Tag className="mr-2 h-4 w-4" />
                <span>Label</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
                <DropdownMenuSubContent className="poppins">
                    <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
                        {LABEL_OPTIONS.map((option) => (
                            <DropdownMenuRadioItem key={option} value={option.toLowerCase()}>
                                {option}
                            </DropdownMenuRadioItem>
                        ))}
                    </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
        </DropdownMenuSub>
    )
}