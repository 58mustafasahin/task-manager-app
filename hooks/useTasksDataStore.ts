import { Task, tasks } from "@/data/TasksData";
import { create } from "zustand";

export interface useTasksDataStoreInterface {
    tasks: Task[] | null;
    selectedTask: Task | null;
    setSelectedTask: (task: Task | null) => void;
    setTasks: (tasks: Task[]) => void;
    fetchTasks: () => Promise<void>;
    updateTasks: (
        tasks: Task[],
        operation?: string | undefined
    ) => Promise<{ success: boolean; message: string }>;
}

export const useTasksDataStore = create<useTasksDataStoreInterface>((set) => ({
    tasks: null,
    selectedTask: null,

    setTasks: (tasksProp) => {
        set({ tasks: tasksProp });
    },

    setSelectedTask: (task) => {
        set({ selectedTask: task });
    },

    fetchTasks: async () => {
        try {
            console.log("fetching data");

            await new Promise<void>((resolve) => {
                setTimeout(() => {
                    set({ tasks });
                    resolve();
                }, 1000);
            });
        } catch (error) {
            console.error("Failed to fetch tasks:", error);
            set({ tasks });
        }
    },
    
    updateTasks: async (
        updatedTasksArray: Task[],
        operation: string | undefined
    ) => {
        let successMessage = "";

        switch (operation) {
            case "copy":
                successMessage = "Task has been copied successfully!";
                break;
            case "delete":
                successMessage = "Task has been deleted successfully!";
                break;
            case "favorite":
                successMessage = "Task is set as favorite successfully!";
                break;
            default:
                successMessage = "Operation completed successfully!";
                break;
        }

        try {
            const result = await new Promise<{ success: boolean; message: string }>(
                (resolve) => {
                    setTimeout(() => {
                        set({ tasks: updatedTasksArray });

                        resolve({
                            success: true,
                            message: successMessage,
                        });
                    }, 1500);
                }
            );

            return result;
        } catch (error: unknown) {
            console.log(error);

            return { success: false, message: "Something went wrong!" };
        }
    },
}));