import { ChevronDown, Plus, Search } from "lucide-react";
import Link from "next/link";
import DropdownCategoria from "../component/dropdowncategoria";
import LineTarefa from "../component/linetarefa";


export default function Tarefas() {
    return(
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-16 flex justify-between">
          <div className="h-14 w-fit flex gap-4">
            <DropdownCategoria/>
            <Link href={""} className="h-12 w-32 text-white focus:duration-100 text-small focus:bg-[#819aff] bg-[#5b7cfd] rounded-xl flex justify-center items-center gap-2">Adicionar <Plus color="#ffffff" /></Link>
          </div>
          <div className="w-96 h-12 bg-white rounded-xl overflow-hidden flex items-center">
            <button className="pl-5"><Search color="#6f6d6d" /></button>
            <input type="text" name="" id="" placeholder="search" className="w-full h-full outline-none pl-4 text-[#6f6d6d]" />
          </div>
        </div>
        <div className="w-full h-14 bg-[#5b7cfd] rounded-xl flex items-center justify-between px-9">
            <span className="text-white text-xl">Nome</span>
            <span className="text-white text-xl">Categotia</span>
            <span className="text-white text-xl">Data</span>
            <span className="text-white text-xl">Assunto</span>
            <ChevronDown color="#ffffff" />
        </div>
        <div className="w-full h-[calc()] flex flex-col gap-4 pt-4">
          <LineTarefa/>
        </div>
      </div>
    );
}