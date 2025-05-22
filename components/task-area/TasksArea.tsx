import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import SearchInput from './SearchInput'
import { Button } from '../ui/button'
import { IoCloseSharp } from 'react-icons/io5'
import PriorityDropDown from '../dropdowns/PriorityDropDown'
import StatusDropDown from '../dropdowns/StatusDropDown'

const TasksArea = () => {
    return (
        <div className='px-7 mt-5'>
            <Card>
                <CardHeader>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <SearchInput />
                            <StatusDropDown />
                            <PriorityDropDown />

                            <Button variant={'ghost'} className='h-10'>
                                <span>Reset</span>
                                <IoCloseSharp />
                            </Button>
                        </div>
                        {/* DropDownViewColums*/}
                    </div>
                </CardHeader>
                <CardContent>{/* table */}</CardContent>
                <CardFooter>{/* pagination */}</CardFooter>
            </Card>
        </div>
    )
}

export default TasksArea
