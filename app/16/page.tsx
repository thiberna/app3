"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/contexts/ProgressContext";
import Link from "next/link";
import { URLS } from "@/constants/urls";
import { BsChevronDown } from "react-icons/bs"; // Ícone de rolagem

export default function Page16() {
  const { updateProgress } = useProgress();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateProgress(95);
  }, [updateProgress]);

  // Função para rolar suavemente até o final da página
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-[100dvh] bg-[#A855F7] flex flex-col justify-between items-center p-6 relative">
      
      {/* Botão de rolagem no canto superior direito */}
      <div className="absolute top-4 right-4 flex flex-col items-center">
        <button
          onClick={scrollToBottom}
          className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-800 transition"
        >
          <span className="text-sm">rola</span>
          <BsChevronDown size={20} />
        </button>
      </div>

      <Card className="w-full max-w-lg bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col items-center space-y-6 py-8">
          
          {/* Texto principal */}
          <div className="text-white text-center space-y-4 px-6">
            <p className="text-2xl font-bold">O mais é que eu prometo ser sua melhor companhia</p>
            <p className="text-lg leading-relaxed">
              e te acompanhar nos jogos do Paraná (até compro a camisa) e usar minha experiência no MMA 
              pra bater em torcida rival (<span className="font-bold">athleticu</span>)
            </p>
            <p className="text-lg leading-relaxed">
              ir assistir um show daquele grupo que você gosta tanto 
              <span className="font-bold">E QUE EU NÃO CONSIGO LEMBRAR O NOME</span>  
              <br/> PROCUREI PESQUISEI FUXIQUEI MUITO NÃO ACHEI
            </p>
            <p className="text-lg leading-relaxed">
              e depois a gente se aposentar viajando com sua kombi
            </p>
          </div>

          {/* Título da imagem */}
          <p className="text-lg text-white font-bold">absolute cinema</p>

          {/* Imagem maior */}
          <div className="w-56 h-56 relative rounded-lg overflow-hidden">
            <Image
              src={URLS.IMAGES.IMAGEM_16} // URL correta da imagem
              alt="Cachorro fofinho levantando as mãos"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Barra de progresso destacada */}
          <div className="w-full space-y-3">
            <p className="text-md text-white text-center">progresso para ver o negocio 😳</p>
            <Progress value={95} className="w-full h-4" />
          </div>
        </CardContent>
      </Card>

      {/* Botão ajustado dinamicamente para o final da tela */}
      <div className="w-full max-w-[300px] absolute bottom-4" ref={bottomRef}>
        <Link href="/17">
          <Button
            variant="default"
            className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-7 text-xl"
          >
            e ai
          </Button>
        </Link>
      </div>
    </div>
  );
}
