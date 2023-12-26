import { Plus, Search } from "lucide-react";
import Link from "next/link";


export default function Tarefas() {
    return(
      <div className="w-full h-full flex flex-col gap-2">
        <div className="w-full h-24 flex justify-between">
          <div className="h-14 w-fit flex gap-4">
            <button className="h-12 w-28 text-white focus:duration-100 font-medium focus:bg-[#819aff] bg-[#5b7cfd] rounded-full">Categorias</button>
            <Link href={""} className="h-12 w-32 text-white focus:duration-100 font-medium focus:bg-[#819aff] bg-[#5b7cfd] rounded-full flex justify-center items-center gap-2">Adicionar <Plus color="#ffffff" /></Link>
          </div>
          <div className="w-96 h-12 bg-white rounded-xl overflow-hidden flex items-center">
            <button className="pl-5"><Search color="#6f6d6d" /></button>
            <input type="text" name="" id="" placeholder="search" className="w-full h-full outline-none pl-4 text-[#6f6d6d]" />
          </div>
        </div>
        <div className="w-full h-[] flex flex-col gap-2">

        </div>
      </div>
    );
}