import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import SearchInput from './SearchInput'
import { Button } from '../ui/button'
import { IoCloseSharp } from 'react-icons/io5'
import PriorityDropDown from '../dropdowns/PriorityDropDown'
import StatusDropDown from '../dropdowns/StatusDropDown'
import ViewColumnsDropDown from '../dropdowns/ViewColumnsDropDown'
import TasksTable from './TasksTable'
import { tasksColumns } from './TasksColumns'
import PaginationArea from './pagination/PaginationArea'
import { useCheckedPrioritiesStore } from '@/hooks/useCheckedPrioritiesStore'
import { useCheckedStatusesStore } from '@/hooks/useCheckedStatusesStore'
import { useTasksDataStore } from '@/hooks/useTasksDataStore'
import TableSkeleton from './TableSkeleton'
import { useQueryStore } from '@/hooks/useQueryStore'
import { ColumnFiltersState, getCoreRowModel, getFilteredRowModel, useReactTable } from '@tanstack/react-table'
import { useEffect, useState } from 'react'
import { titleFilter } from "./filters/titleFilter";
import { priorityFilter } from "./filters/priorityFilter";
import { statusFilter } from "./filters/statusFilter";

const TasksArea = () => {
    const { setCheckedPriorities, checkedPriorities} = useCheckedPrioritiesStore();
    const { setCheckedStatuses, checkedStatuses} = useCheckedStatusesStore();
    const { tasks } = useTasksDataStore();

    const { query } = useQueryStore();
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const table = useReactTable({
        data: tasks || [],
        columns: tasksColumns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnFiltersChange: setColumnFilters,
        state: {
            columnFilters,
        },
        filterFns: { titleFilter, priorityFilter, statusFilter },
    });

    useEffect(() => {
        const newFilter: ColumnFiltersState = [];

        if(query) {
            newFilter.push({ id: 'title', value: query});
        }
        
        if(checkedPriorities.length > 0) {
            newFilter.push({ id: 'priority', value: checkedPriorities});
        }
        
        if(checkedStatuses.length > 0) {
            newFilter.push({ id: 'status', value: checkedStatuses});
        }

        setColumnFilters(newFilter);
    }, [query, checkedPriorities, checkedStatuses]);

    return (
        <div className='px-7 mt-5'>
            <Card>
                <CardHeader>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <SearchInput />
                            <StatusDropDown />
                            <PriorityDropDown />

                            <Button 
                                onClick={() => {
                                    setCheckedPriorities([]);
                                    setCheckedStatuses([]);
                                }}
                                variant={'ghost'} 
                                className='h-10'
                            >
                                <span>Reset</span>
                                <IoCloseSharp />
                            </Button>
                        </div>
                        <ViewColumnsDropDown table={table} />
                    </div>
                </CardHeader>
                <CardContent>
                    {!tasks ? (
                        <TableSkeleton />
                    ) : (
                        <TasksTable columns={tasksColumns} table={table} />
                    )}
                </CardContent>
                <CardFooter>
                    <PaginationArea />
                </CardFooter>
            </Card>
        </div>
    )
}

export default TasksArea
