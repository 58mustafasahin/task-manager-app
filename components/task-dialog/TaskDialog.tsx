import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Separator } from "../ui/separator";
import TaskLabel from "./sub-components/TaskLabel";
import TaskPriority from "./sub-components/TaskPriority";
import TaskStatus from "./sub-components/TaskStatus";
import TaskTitle from "./sub-components/TaskTitle";


export default function TaskDialog(){
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add New Task</Button>
            </DialogTrigger>
            <DialogContent className="poppins max-w-4xl">
                <DialogHeader>
                    <DialogTitle className="text-xl">Add New Task</DialogTitle>
                    <DialogDescription>Fill in the form to add a task</DialogDescription>
                    <div className="mt-4">
                        <Separator className="mt-3" />
                    </div>
                </DialogHeader>
                <div className="my-8">
                    <div className="grid grid-cols-2 gap-5">
                        <TaskTitle />
                        <TaskStatus />
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-6">
                        <TaskPriority />
                        <TaskLabel />
                    </div>
                </div>
                <DialogFooter className="mb-4 mt-9">
                    <DialogClose asChild>
                        <Button type="button" variant={'secondary'} className="px-9">
                            Close
                        </Button>
                    </DialogClose>
                    <Button type="submit">Add new Task</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}