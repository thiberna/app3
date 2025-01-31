"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/contexts/ProgressContext";
import Link from "next/link";

export default function Page11() {
  const { updateProgress } = useProgress();

  useEffect(() => {
    updateProgress(55);
  }, [updateProgress]);

  return (
    <div className="min-h-[100dvh] bg-[#8B5CF6] flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col items-center space-y-8 p-6">
          
          {/* Texto principal */}
          <div className="flex flex-col items-center text-white space-y-12 text-center">
            <p className="text-3xl ">pq ele sempre</p>
            <p className="text-xl ">lembrava</p>
            <p className="text-xl">de vc</p>
            <p className="text-3xl font-bold mt-4">EM TODO</p>
            <p className="text-3xl font-bold">LUGAR</p>
          </div>

          {/* Imagem maior */}
          <div className="w-60 h-60 relative rounded-lg overflow-hidden">
            <Image
              src="https://i.ibb.co/W4mRWYvQ/imagem-2025-01-30-234355778.png"
              alt="Nova imagem"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Barra de progresso */}
          <div className="w-full space-y-2">
            <p className="text-sm text-white text-center">progresso para ver o negocio 😳</p>
            <Progress value={55} className="w-full" />
          </div>

          {/* Botão de avanço */}
          <div className="w-full max-w-[280px]">
            <Link href="/12">
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
