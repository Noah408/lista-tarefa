'use client'

import { Inter } from 'next/font/google'
import BtnPerfil from '../btnperfil'
import VertMenu from '../vertmenu'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode
}) {
    const rota = usePathname()
    function Page(){
        if(rota === '/')return'Home'
        if(rota === '/tarefas')return'Tarefas'
        if(rota === '/defini')return'Definições'
        if(rota === '/listatele')return'Lista Telefonica'
        return null
    } 
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className='bg-slate-200 h-screen w-screen flex'>
      <div className='h-full w-96 flex-col justify-between'>
        <div className='w-full h-36 overflow-hidden'>
            <Link href={"/"} className='w-full h-full overflow-hidden flex items-center pt-8'>
                <Image width={500} height={400} src="/assets/Agenda_Pro_Logo_-removebg-preview.png" alt="" />
            </Link>
        </div>
        <div className='bg-[#5b7cfd] w-full h-[calc(100%-9rem)] radiustopright pt-36 pl-5'>
          <VertMenu/>
        </div>
      </div>
      <div className='h-full w-[calc(100%-24rem)] flex flex-col items-center'>
        <div className='h-32 w-[90%] flex justify-between items-center'>
          <span className='text-black text-5xl font-bold'><Page/></span>
          <BtnPerfil/>
        </div>
        <div className='h-[calc(98%-8rem)] w-[90%]'>
        {children}
        </div>
      </div>
    </main>
      </body>
    </html>
  )
}
