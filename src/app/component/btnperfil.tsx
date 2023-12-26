import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BtnPerfil() {
    return(
        <div className='h-fit w-40 flex justify-end gap-6'>
            <button><Bell size={40} color="#000000" /></button>
            <Link href={""} className="h-12 w-12 rounded-full overflow-hidden" ><Image src="/assets/noah.jpg" width={100} height={100} alt="" /></Link>
        </div>
    );
}