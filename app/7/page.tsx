"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { URLS } from "@/constants/urls"
import { useProgress } from "@/contexts/ProgressContext"
import Link from "next/link"

export default function TalkingPage() {
  const { updateProgress } = useProgress()

  useEffect(() => {
    updateProgress(10)
  }, [updateProgress])

  return (
    <div className="min-h-[100dvh] bg-[#8B5CF6] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col items-center space-y-6 p-4">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-white">mas antes ele quer te fala algumas coisa bls</h1>
          </div>

          <div className="w-full h-auto aspect-square relative rounded-lg overflow-hidden max-w-[280px] mx-auto">
            <Image
              src={URLS.IMAGES.TALKING_THIAGO || "/placeholder.svg"}
              alt="Cute puppy talking"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="w-full space-y-2">
            <p className="text-sm text-white text-center">progresso pra ver o negocio 😳</p>
            <Progress value={10} className="w-full" />
          </div>

          <p className="text-sm text-white text-center">
            sim to prendendo tua atencao mesmo antes q vc me deixe falando sozinho aqui
          </p>

          <div className="w-full max-w-[280px]">
            <Link href="/8">
              <Button
                variant="default"
                className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-6 text-lg"
              >
                hm
              </Button>
            </Link>
          </div>

          <p className="text-sm text-white text-center">eu nao, esse meu amigo thiago ai</p>
        </CardContent>
      </Card>
    </div>
  )
}

