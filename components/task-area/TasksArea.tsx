import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import SearchInput from './SearchInput'
import { Button } from '../ui/button'
import { IoCloseSharp } from 'react-icons/io5'
import PriorityDropDown from '../dropdowns/PriorityDropDown'
import StatusDropDown from '../dropdowns/StatusDropDown'
import ViewColumnsDropDown from '../dropdowns/ViewColumnsDropDown'
import TasksTable from './TasksTable'
import { tasksColumns } from './TasksColumns'
import { tasks } from '@/data/TasksData'
import PaginationArea from './pagination/PaginationArea'
import { useCheckedPrioritiesStore } from '@/hooks/useCheckedPrioritiesStore'

const TasksArea = () => {
    const { setCheckedPriorities } = useCheckedPrioritiesStore();
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
                                }}
                                variant={'ghost'} 
                                className='h-10'
                            >
                                <span>Reset</span>
                                <IoCloseSharp />
                            </Button>
                        </div>
                        <ViewColumnsDropDown />
                    </div>
                </CardHeader>
                <CardContent>
                    <TasksTable columns={tasksColumns} data={tasks} />
                </CardContent>
                <CardFooter>
                    <PaginationArea />
                </CardFooter>
            </Card>
        </div>
    )
}

export default TasksArea
