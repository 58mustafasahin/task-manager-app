import { Task } from "@/data/TasksData";
import { FilterFn } from "@tanstack/react-table";

export const priorityFilter: FilterFn<Task> = (
    row,
    columnId, 
    filterValue: string
) => {
    const priority: string = row.getValue(columnId);
    return filterValue.includes(priority);
};