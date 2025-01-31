"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import { useProgress } from "../../contexts/ProgressContext";
import Link from "next/link";
import { URLS } from "../../constants/urls";
import confetti from "canvas-confetti"; // Efeito de confetes
import React from "react";

export default function Page17() {
  const { updateProgress } = useProgress();
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    updateProgress(100);

    // Animação da barra de progresso com um delay para parecer gradual
    const fillProgress = () => {
      setProgress(100);
      setTimeout(() => {
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.6 },
        });
        setShowButton(true);
      }, 500);
    };

    // Inicia a progressão depois de um pequeno delay para suavizar a animação
    setTimeout(fillProgress, 1000);

  }, [updateProgress]);

  return (
    <div className="min-h-screen bg-[#A855F7] flex flex-col items-center justify-center p-6">
      <Card className="w-full max-w-lg bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col items-center space-y-5 py-4">
          
          {/* Texto principal */}
          <div className="text-white text-center space-y-4 px-6">
            <p className="text-2xl font-bold">Mas agora tá na hora de ver o negócio</p>
            <p className="text-lg leading-relaxed">pq acabou minha criatividade e já tá mt tarde kkkkkkkkkkk</p>
          </div>

          {/* Barra de progresso animada */}
          <div className="w-full space-y-3">
            <p className="text-md text-white text-center">progresso para ver o negócio</p>
            <Progress value={progress} className="w-full h-4 transition-all duration-1000" />
          </div>

          {/* Imagem maior */}
          <div className="w-56 h-56 relative rounded-lg overflow-hidden">
            <Image
              src={URLS.IMAGES.IMAGEM_17} // URL correta da imagem
              alt="Cachorro fofo esperando"
              fill
              className="object-cover"
              priority
            />
          </div>
        </CardContent>
      </Card>

      {/* Botão aparece apenas quando a barra está cheia */}
      {showButton && (
        <div className="w-full max-w-[300px] mt-6">
          <Link href="/18">
            <Button
              variant="default"
              className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-7 text-xl transition-all duration-500"
            >
              Ver o negócio
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
