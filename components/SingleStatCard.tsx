'use client'

import { SingleCard } from './StatsCards'
import { Card } from './ui/card'

const SingleStatCard = ({ SingleCard }: {SingleCard: SingleCard}) => {
    return (
        <Card className='p-4 flex flex-col gap-2 shadow-none'>
            <div className='flex items-center justify-between'>
                <span className='text-sm font-semibold text-slate-600'>
                    {SingleCard.title}
                </span>
                <div className='size-7 rounded-md flex items-center justify-center text-sm bg-primary/25 font-bold text-primary'>
                    {SingleCard.icon}
                </div>
            </div>
            <div className='text-3xl font-bold'>
                {SingleCard.value}
            </div>
        </Card>
    )
}

export default SingleStatCard
