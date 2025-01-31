"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { URLS } from "@/constants/urls";
import { FiCopy } from "react-icons/fi"; // Ícone de copiar número

export default function Page() {  
  const [isCensored, setIsCensored] = useState(true);
  const [copied, setCopied] = useState(false);

  const phoneNumber = "+55 41 99590-2291";
  const whatsappMessage = encodeURIComponent(
    "oi td bem eu te perdoo vou voltar pra vc e deixar vc me fazer a mulher mais feliz do mundo vamos nos ver o mais rapido possível por favor!!"
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText("41995902291");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Remove o feedback de cópia após 2s
  };

  return (
    <div className="min-h-screen bg-[#7B3FAF] flex flex-col items-center justify-center p-6">
      <Card className="w-full max-w-lg bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col items-center space-y-6 py-8">
          
          {/* Título */}
          <div className="text-white text-center space-y-4">
            <p className="text-3xl font-bold">O NEGÓCIO</p>

            {/* Caixa do número de telefone */}
            <div className="bg-[#652D8A] text-white px-4 py-3 rounded-md flex items-center justify-between w-64 shadow-md">
              <span className="text-lg font-semibold">{phoneNumber}</span>
              <button onClick={copyToClipboard} className="text-gray-300 hover:text-white">
                <FiCopy size={20} />
              </button>
            </div>
            {copied && <p className="text-sm text-green-300">Número copiado!</p>}
          </div>

          {/* Frase antes da censura */}
          <p className="text-white text-lg text-center font-bold">Dizem que se mandar a seguinte frase:</p>

          {/* Texto censurado */}
          <div 
            className="bg-[#5A2C74] text-white px-4 py-3 rounded-md text-center w-72 shadow-md cursor-pointer"
            onClick={() => setIsCensored(false)}
          >
            {isCensored ? (
              <p className="text-gray-300 font-bold">🔒 Clique para tirar a censura</p>
            ) : (
              <p className="text-lg leading-relaxed">
                oi td bem eu te perdoo vou voltar pra vc e deixar vc me fazer a mulher mais feliz do mundo 
                vamos nos ver o mais rápido possível por favor!!
              </p>
            )}
          </div>

          {/* Frase bônus */}
          <p className="text-xl text-white font-bold">o paraná clube vira campeão!!!</p>

          {/* Imagem */}
          <div className="w-56 h-56 relative rounded-lg overflow-hidden">
            <Image
              src={URLS.IMAGES.IMAGEM_18} // URL correta da imagem
              alt="Cachorro vitorioso"
              fill
              className="object-cover"
              priority
            />
          </div>
        </CardContent>
      </Card>

      {/* Botão final para abrir o WhatsApp */}
      <div className="w-full max-w-[300px] mt-6">
        <Link href={`https://wa.me/5541995902291?text=${whatsappMessage}`} target="_blank">
          <Button
            variant="default"
            className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-7 text-xl transition-all duration-500"
          >
            Voltar pra mim!
          </Button>
        </Link>
      </div>
    </div>
  );
}
