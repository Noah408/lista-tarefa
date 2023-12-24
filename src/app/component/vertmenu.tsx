'use client'

import { BookUser, GanttChartSquare, LayoutPanelLeft, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";


export default function VertMenu() {
    const router = usePathname()
    return(
        <div className=" h-fit w-full flex flex-col gap-4">
            <Link  href={"/"} className={`${router==="/"&&"bg-[#819aff]"} h-16 w-full focus:bg-[#819aff] rounded-l-full flex items-center pl-7 gap-7 text-2xl focus:duration-500`} ><LayoutPanelLeft size={28} color="#ffffff" /> Home</Link>
            <Link  href={"/tarefas"} className={`${router==="/tarefas"&&"bg-[#819aff]"} h-16 w-full focus:bg-[#819aff] rounded-l-full flex items-center pl-7 gap-7 text-2xl focus:duration-500`} ><GanttChartSquare size={28} color="#ffffff" /> Tarefas</Link>
            <Link  href={"/listatele"} className={`${router==="/listatele"&&"bg-[#819aff]"} h-16 w-full focus:bg-[#819aff] rounded-l-full flex items-center pl-7 gap-7 text-2xl focus:duration-500`} ><BookUser size={28} color="#ffffff" /> Lista Telefonica</Link>
            <Link  href={"/defini"} className={`${router==="/defini"&&"bg-[#819aff]"} h-16 w-full focus:bg-[#819aff] rounded-l-full flex items-center pl-7 gap-7 text-2xl focus:duration-500`} ><Settings size={28} color="#ffffff" /> Definições</Link>
        </div>
    );
}