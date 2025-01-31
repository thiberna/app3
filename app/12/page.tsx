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
    updateProgress(65);
  }, [updateProgress]);

  return (
    <div className="min-h-[100dvh] bg-[#A855F7] flex items-center justify-center p-6">
      <Card className="w-full max-w-lg bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col items-center space-y-8 py-10">
          
          {/* Bloco de texto superior destacado */}
          <div className="bg-[#9333EA] text-white text-center rounded-lg px-6 py-4">
            <p className="text-2xl font-bold">IRMAO LEMBRAVA TIPO</p>
            <p className="text-xl mt-2">QND VIA QLQR COISA SOBRE FUTEBOL</p>
            <p className="text-xl font-bold mt-2">SEMPRE QUE PISAVA NA ACADEMIA (????)</p>
          </div>

          {/* Texto extra */}
          <p className="text-lg text-white text-center leading-relaxed px-4">
            e sempre que ele fazia alguma coisa mt legal e não podia ir te contar affff
          </p>

          {/* Imagem maior */}
          <div className="w-56 h-56 relative rounded-lg overflow-hidden">
            <Image
              src={URLS.IMAGES.IMAGEM_12_NOVA} // URL correta da imagem
              alt="Cachorro triste"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Barra de progresso destacada */}
          <div className="w-full space-y-3">
            <p className="text-md text-white text-center">progresso para ver o negocio 😳</p>
            <Progress value={65} className="w-full h-4" />
          </div>

          {/* Botão de avanço maior */}
          <div className="w-full max-w-[300px]">
            <Link href="/13">
              <Button
                variant="default"
                className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-7 text-xl"
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
