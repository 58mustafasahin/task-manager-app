'use client'

import Navbar from "@/components/Navbar";
import StatsCards from "@/components/StatsCards";
import TasksArea from "@/components/task-area/TasksArea";
import { useTasksDataStore } from "@/hooks/useTasksDataStore";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Home() {

  const {theme} = useTheme();
  const { fetchTasks } = useTasksDataStore();
  
  useEffect(() => {
    fetchTasks();
  }, []);

  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-slate-50';

  return (
    <div className={`poppins min-h-screen ${bgColor} `}>
      <Navbar />
      <StatsCards />
      <TasksArea />
    </div>
  );
}
