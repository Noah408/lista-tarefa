'use client'

import {NextUIProvider} from '@nextui-org/react'
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import Link from 'next/link';

export default function DropdownCategoria() {
 
  return (
    <Dropdown className='bg-[#5b7cfd]'>
      <DropdownTrigger>
        <Button variant="bordered" className='h-12 w-28 text-white focus:duration-100 font-medium focus:bg-[#819aff] bg-[#5b7cfd] rounded-full border-none'>
          Categoria
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" className='bg-[#5b7cfd]'>
        <DropdownItem><Link href={""}>Eventos</Link></DropdownItem>
        <DropdownItem><Link href={""}>Eventos</Link></DropdownItem>
        <DropdownItem><Link href={""}>Eventos</Link></DropdownItem>
        <DropdownItem><Link href={""}>Eventos</Link></DropdownItem>
        <DropdownItem><Link href={""}>Eventos</Link></DropdownItem>
        <DropdownItem><Link href={""}>Eventos</Link></DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
