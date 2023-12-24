import { BookUser, GanttChartSquare, LayoutPanelLeft, Settings } from "lucide-react";
import Link from "next/link";


export default function VertMenu() {
    return(
        <div className=" h-fit w-full flex flex-col gap-4">
            <Link  href={"/"} className="h-16 w-full focus:bg-[#819aff] rounded-l-full flex items-center pl-7 gap-7 text-2xl" ><LayoutPanelLeft size={28} color="#ffffff" /> Home</Link>
            <Link  href={"/tarefas"} className="h-16 w-full focus:bg-[#819aff] rounded-l-full flex items-center pl-7 gap-7 text-2xl" ><GanttChartSquare size={28} color="#ffffff" /> Tarefas</Link>
            <Link  href={"/listatele"} className="h-16 w-full focus:bg-[#819aff] rounded-l-full flex items-center pl-7 gap-7 text-2xl" ><BookUser size={28} color="#ffffff" /> Lista Telefonica</Link>
            <Link  href={"/defini"} className="h-16 w-full focus:bg-[#819aff] rounded-l-full flex items-center pl-7 gap-7 text-2xl" ><Settings size={28} color="#ffffff" /> Definições</Link>
        </div>
    );
}