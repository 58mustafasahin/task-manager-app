'use client'

import { FaCheckCircle, FaExclamationTriangle, FaTasks } from "react-icons/fa";
import SingleStatCard from "./SingleStatCard";

export type SingleCard = {
    title: string;
    value: string;
    icon: React.ReactNode;
}
const StatsCards = () => {
    const stats: SingleCard[] = [
        {
            title: 'Total Tasks',
            value: '120',
            icon: <FaTasks />
        },
        {
            title: 'Completed Tasks',
            value: '85',
            icon: <FaCheckCircle />
        },
        {
            title: 'High Priority Tasks',
            value: '15',
            icon: <FaExclamationTriangle />
        }
    ];
    return (
        <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-7 gap-6 p-6">
            {stats.map((stat: SingleCard, index: number) => (
                <SingleStatCard key={index} SingleCard={stat} />
            ))}
        </div>
    )
}

export default StatsCards
