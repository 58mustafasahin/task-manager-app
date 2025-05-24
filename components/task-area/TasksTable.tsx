import { Task } from "@/data/TasksData";
import { ColumnDef, FilterFn, flexRender, Table } from "@tanstack/react-table"
import { Table as ShadcnTable, TableBody, TableHead, TableHeader, TableRow } from "../ui/table";


declare module "@tanstack/table-core" {
    interface FilterFns {
        titleFilter: FilterFn<Task>;
        priorityFilter: FilterFn<Task>;
        statusFilter: FilterFn<Task>;
    }
}

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue> [],
    table: Table<Task>;
}

export function TasksTable<TData extends Task, TValue>({
    columns,
    table,
}: DataTableProps<TData, TValue>) {
    
    return (
        <div className="rounded-md border mt-2">
            <ShadcnTable>
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
            </ShadcnTable>
        </div>
    )
}

export default TasksTable
