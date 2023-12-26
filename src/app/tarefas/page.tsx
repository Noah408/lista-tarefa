import { Search } from "lucide-react";


export default function Tarefas() {
    return(
      <div className="w-full h-full flex flex-col gap-2">
        <div className="w-full h-24 bg-black flex justify-between">
          <div>

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