"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/contexts/ProgressContext";
import Link from "next/link";
import { URLS } from "@/constants/urls";

export default function Page12() {
  const { updateProgress } = useProgress();

  useEffect(() => {
    updateProgress(70);
  }, [updateProgress]);

  return (
    <div className="min-h-screen bg-[#A855F7] flex items-center justify-center p-4">
      <Card className="w-full max-w-xl bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col items-center space-y-6 py-6">
          
          {/* Texto principal melhor distribuído */}
          <div className="flex flex-col items-center text-white text-center space-y-6 px-4">
            <p className="text-2xl font-bold">Mas ele te promete</p>
            <p className="text-lg leading-snug">
              Que foi só um deslize de uma época ruim que mexeu com a cabeça de pug dele e que ele não é assim.
            </p>
            <p className="text-md leading-snug">
              E que você sempre foi tudo que ele procurava e precisava. Sempre foi muito atenciosa e carinhosa com ele.
              Ele gostava muito de tudo isso e, dentro da cabeça do meu mano, você era perfeita p ele.
            </p>
          </div>

          {/* Imagem maior e melhor ajustada */}
          <div className="w-48 h-48 relative rounded-lg overflow-hidden">
            <Image
              src={URLS.IMAGES.IMAGEM_12} // URL da imagem correta
              alt="Pug culpado"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Barra de progresso destacada */}
          <div className="w-full space-y-2">
            <p className="text-md text-white text-center">progresso para ver o negócio 😳</p>
            <Progress value={70} className="w-full h-4" />
          </div>

          {/* Botão de avanço maior */}
          <div className="w-full max-w-[280px]">
            <Link href="/14">
              <Button
                variant="default"
                className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-6 text-lg"
              >
                hm
              </Button>
            </Link>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
