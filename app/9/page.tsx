"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { URLS } from "@/constants/urls"
import { useProgress } from "@/contexts/ProgressContext"
import Link from "next/link"

export default function LostPage() {
  const { updateProgress } = useProgress()

  useEffect(() => {
    updateProgress(35) // Ajuste a barra de progresso para 70%
  }, [updateProgress])

  return (
    <div className="min-h-[100dvh] bg-[#8B5CF6] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col items-center space-y-6 p-4">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-white">mas ele te perdeu :(</h1>
          </div>

          <div className="w-full h-auto aspect-square relative rounded-lg overflow-hidden max-w-[280px] mx-auto">
            <Image
              src={URLS.IMAGES.LOST_THIAGO || "/placeholder.svg"}
              alt="Sad puppy in red"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-sm text-white text-center">e ai entrou 3 facada bem assim no coracao dele por dias</p>

          <div className="w-full space-y-2">
            <p className="text-sm text-white text-center">progresso pra ver o negocio 😳</p>
            <Progress value={35} className="w-full" />
          </div>

          <div className="w-full max-w-[280px]">
            <Link href="/10">
              <Button
                variant="default"
                className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-6 text-lg"
              >
                hm
              </Button>
            </Link>
          </div>

          <div className="w-full max-w-[280px]">
            <Link href="/10">
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