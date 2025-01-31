"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useProgress } from "@/contexts/ProgressContext"
import Link from "next/link"

export default function Page10() {
  const { updateProgress } = useProgress()

  useEffect(() => {
    updateProgress(45) // Ajuste a barra de progresso para 80%
  }, [updateProgress])

  return (
    <div className="min-h-[100dvh] bg-[#8B5CF6] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col items-center space-y-12 p-4">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-white">depois disso ele passou momentos de trevas e de arrependimento</h1>
          </div>

          <div className="w-full h-auto aspect-square relative rounded-lg overflow-hidden max-w-[280px] mx-auto">
            <Image
              src="https://i.ibb.co/bRmcnF4D/imagem-2025-01-30-233424548.png"
              alt="Nova imagem"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-md text-white text-center">e também começou a ter certeza de que vc foi enviada pra tirar ele do lugar como sempre te disse!! n e possivel pqp.</p>

          <div className="w-full space-y-2">
            <p className="text-md text-white text-center">Progresso para ver o negocio 😳</p>
            <Progress value={45} className="w-full" />
          </div>

          <div className="w-full max-w-[280px]">
            <Link href="/11">
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
  )
}