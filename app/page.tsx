'use client'

import Navbar from "@/components/Navbar";
import StatsCards from "@/components/StatsCards";
import TasksArea from "@/components/task-area/TasksArea";
import { useTheme } from "next-themes";

export default function Home() {

  const {theme} = useTheme();
  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-slate-50';

  return (
    <div className={`poppins min-h-screen ${bgColor} `}>
      <Navbar />
      <StatsCards />
      <TasksArea />
    </div>
  );
}
