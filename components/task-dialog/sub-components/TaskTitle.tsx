import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function TaskTitle() {
    return (
        <div className="flex flex-col gap-2">
            <Label className="opacity-75 text-sm font-medium">Task Title</Label>
            <Input placeholder="Joe Doe..." className="h-11" />
            <p className="text-red-500 text-sm">This is an error</p>
        </div>
    )
}