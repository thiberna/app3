"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/contexts/ProgressContext";
import Link from "next/link";
import { URLS } from "@/constants/urls";

export default function Page14() {
  const { updateProgress } = useProgress();

  useEffect(() => {
    updateProgress(75);
  }, [updateProgress]);

  return (
    <div className="min-h-[100dvh] bg-[#A855F7] flex items-center justify-center p-6">
      <Card className="w-full max-w-lg bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col items-center space-y-8 py-10">
          
          {/* Bloco de texto superior destacado */}
          <div className="bg-[#9333EA] text-white text-center rounded-lg px-6 py-4">
            <p className="text-2xl font-bold">e só pra te provar isso</p>
            <p className="text-lg leading-relaxed mt-2">
              ele fez todo esse appzinho que durou um tempão só pra te encher o saco e mostrar que não tá brincando ou falando da boca pra fora
            </p>
          </div>

          {/* Imagem maior */}
          <div className="w-60 h-60 relative overflow-hidden">
            <Image
              src={URLS.IMAGES.IMAGEM_14} // URL da imagem correta
              alt="Pug estiloso"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Texto extra abaixo da imagem */}
          <p className="text-xl text-white text-center">e que também gosta muito de você hehehe</p>

          {/* Barra de progresso destacada */}
          <div className="w-full space-y-3">
            <p className="text-md text-white text-center">progresso para ver o negocio 😳</p>
            <Progress value={75} className="w-full h-4" />
          </div>

          {/* Botão de avanço maior */}
          <div className="w-full max-w-[300px]">
            <Link href="/15">
              <Button
                variant="default"
                className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-7 text-xl"
              >
                só isso?
              </Button>
            </Link>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
