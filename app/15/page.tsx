"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/contexts/ProgressContext";
import Link from "next/link";
import { URLS } from "@/constants/urls";

export default function Page15() {
  const { updateProgress } = useProgress();

  useEffect(() => {
    updateProgress(80);
  }, [updateProgress]);

  return (
    <div className="min-h-[100dvh] bg-[#A855F7] flex items-center justify-center p-6">
      <Card className="w-full max-w-lg bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col items-center space-y-8 py-10">
          
          {/* Texto principal */}
          <div className="text-white text-center space-y-4 px-5">
            <p className="text-2xl font-bold">não é só isso bls</p>
            <p className="text-lg leading-relaxed">
              ele te promete que se vc der a chance, ele vai te mostrar que pode te dar tudo que você merece 
              (<span className="font-bold">o melhor dele</span>)
            </p>
            <p className="text-lg leading-relaxed">
              pq vc é muito mais importante do que imagina pra mim, e é por isso
            </p>
            <p className="text-lg leading-relaxed">
              que eu já falei que entendo você não querer mais nada comigo e mesmo assim 
              não parei de te encher o saco até agora kkkkkkkkkkkkkkkkk
            </p>
          </div>

          {/* Imagem maior */}
          <div className="w-56 h-56 relative rounded-lg overflow-hidden">
            <Image
              src={URLS.IMAGES.IMAGEM_15} // URL correta da imagem
              alt="Cachorro fofinho"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Barra de progresso destacada */}
          <div className="w-full space-y-3">
            <p className="text-md text-white text-center">progresso para ver o negocio 😳</p>
            <Progress value={80} className="w-full h-4" />
          </div>

          {/* Botão de avanço maior */}
          <div className="w-full max-w-[300px]">
            <Link href="/16">
              <Button
                variant="default"
                className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-7 text-xl"
              >
                e o que mais?
              </Button>
            </Link>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
