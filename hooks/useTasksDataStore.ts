import { Task, tasks } from "@/data/TasksData";
import { create } from "zustand";

export interface useTasksDataStoreInterface {
    tasks: Task[] | null;
    selectedTask: Task | null;
    setSelectedTask: (task: Task | null) => void;
    setTasks: (tasks: Task[]) => void;
    fetchTasks: () => Promise<void>;
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
}));