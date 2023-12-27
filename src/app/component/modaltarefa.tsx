'use client'

import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { Plus } from "lucide-react";



export default function ModalTarefa() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="h-12 w-32 text-white focus:duration-100 text-small focus:bg-[#819aff] bg-[#5b7cfd] rounded-xl flex justify-center items-center gap-2">Adicionar <Plus color="#ffffff" /></Button>
      <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 bg-slate-200 text-[#5b7cfd] text-2xl">Criar Tarefa</ModalHeader>
              <ModalBody className="bg-slate-200 flex flex-col">
                <div className="w-full h-20 flex flex-col">
                    <span className="text-[#5b7cfd] text-xl">Nome</span>
                    <input type="text" name="" id="" className="w-full h-12 bg-white outline-none rounded-lg text-black pl-4 border border-[#5b7cfd]" />
                </div>
                <div className="w-full h-20 flex">
                    <div className="h-full w-[48%] flex flex-col">
                        <span className="text-[#5b7cfd] text-xl">Data</span>
                        <input type="date" name="" id="" className="w-full h-14 bg-white outline-none rounded-lg text-black pl-4 border border-[#5b7cfd]" />
                    </div>
                </div>
                <div className="w-full h-fit flex flex-col">
                    <span className="text-[#5b7cfd] text-xl">Assunto</span>
                    <input type="text" name="" id="" className="w-full h-24 bg-white outline-none rounded-lg text-black pl-4 border items-start border-[#5b7cfd]" />
                </div>
               
              </ModalBody>
              <ModalFooter className="bg-slate-200">
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
