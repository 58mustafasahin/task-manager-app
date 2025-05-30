import { Task } from "@/data/TasksData";
import { FilterFn } from "@tanstack/react-table";

export const statusFilter: FilterFn<Task> = (
    row,
    columnId, 
    filterValue: string
) => {
    const status: string = row.getValue(columnId);
    return filterValue.includes(status);
};