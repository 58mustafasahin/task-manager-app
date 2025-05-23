import { Task } from "@/data/TasksData";
import { ColumnDef, ColumnFiltersState, FilterFn, flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from "@tanstack/react-table"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "../ui/table";
import { useQueryStore } from "@/hooks/useQuertyStore";
import { useEffect, useState } from "react";
import { titleFilter } from "./filters/titleFilter";

declare module "@tanstack/table-core" {
    interface FilterFns {
        titleFilter: FilterFn<Task>;
    }
}

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue> [],
    data: TData[];
}

export function TasksTable<TData extends Task, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const { query } = useQueryStore();
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnFiltersChange: setColumnFilters,
        state: {
            columnFilters,
        },
        filterFns: { titleFilter },
    });

    useEffect(() => {
        const newFilter: ColumnFiltersState = [];

        if(query) {
            newFilter.push({ id: 'title', value: query});
        }

        setColumnFilters(newFilter);
    }, [query]);

    return (
        <div className="rounded-md border mt-2">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) =>{
                                return(
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder 
                                        ? null 
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="px-4 py-2 border-t">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <td colSpan={columns.length} className="text-center py-4">
                                No data available.
                            </td>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default TasksTable
