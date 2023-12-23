import Image from 'next/image'
import VertMenu from './component/vertmenu'

export default function Home() {
  return (
    <main className='bg-slate-200 h-screen w-screen flex'>
      <div className='h-full w-96 flex-col justify-between'>
        <div className='w-full h-40'>

        </div>
        <div className='bg-[#5b7cfd] w-full h-[calc(100%-10rem)] radiustopright pt-40 pl-5'>
          <VertMenu/>
        </div>
      </div>
      <div className='h-full w-[calc(100%-24rem)] flex flex-col items-center'>
        <div className='bg-black h-40 w-[90%]'>
          
        </div>
        <div className='bg-red-600 h-[calc(95%-10rem)] w-[90%]'>

        </div>
      </div>
    </main>
  )
}
