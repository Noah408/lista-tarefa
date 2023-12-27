'use client'

import { X } from "lucide-react";

interface TarefaPros {
    nome?: string
    data?: string
    assunto?: string
}

export default function LineTarefa({nome, data, assunto}:TarefaPros) {
    return(
        <div className="w-full h-16 bg-white rounded-xl flex items-center justify-between px-9">
            <span className="text-xl text-black">{nome}</span>
            <span className="text-xl text-black">{data}</span>
            <span className="text-xl text-black">{assunto}</span>
            <button><X color="#000000" /></button>
        </div>
    );
}