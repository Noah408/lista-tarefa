import BtnPerfil from "../component/btnperfil";
import VertMenu from "../component/vertmenu";

export default function ListaTelefonica() {
    return(
        <main className='bg-slate-200 h-screen w-screen flex'>
      <div className='h-full w-96 flex-col justify-between'>
        <div className='w-full h-36'>

        </div>
        <div className='bg-[#5b7cfd] w-full h-[calc(100%-9rem)] radiustopright pt-36 pl-5'>
          <VertMenu/>
        </div>
      </div>
      <div className='h-full w-[calc(100%-24rem)] flex flex-col items-center'>
        <div className='h-36 w-[90%] flex justify-between items-center'>
          <span className='text-black text-5xl font-bold'>Lista Telefonica</span>
          <BtnPerfil/>
        </div>
        <div className='bg-red-600 h-[calc(95%-9rem)] w-[90%]'>

        </div>
      </div>
    </main>
    );
}