import { Task } from "@/data/TasksData";
import { Kind } from "./types";
import { useTasksDataStoreInterface } from "@/hooks/useTasksDataStore";
import { toast } from "sonner";

export async function handleMenuItemClick(
    kind: Kind,
    tasks: Task[] | null,
    selectedTask: Task | null,
    updateTasks: useTasksDataStoreInterface["updateTasks"]
) {
    if(!tasks || !selectedTask) return;

    switch (kind) {
        case "favorite":
            const taskToUpdate: Task = {
                ...selectedTask,
                isFavorite: !selectedTask.isFavorite,
            };
            const updateTasksArray = tasks.map((task) => 
                task.taskId === selectedTask.taskId ? taskToUpdate : task
            );
            const favoriteResult = await updateTasks(updateTasksArray);
            if(!favoriteResult.success) {
                console.log("failed");
            }
            break;
        default:
            break;
    }
}