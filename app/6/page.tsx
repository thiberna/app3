"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { URLS } from "@/constants/urls"
import Link from "next/link"

export default function ApologyPage() {
  return (
    <div className="min-h-[100dvh] bg-[#8B5CF6] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col items-center space-y-6 p-4">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-white">{"ele quer se desculpar com voce 🫵🫵"}</h1>
          </div>

          <div className="w-full h-auto aspect-square relative rounded-lg overflow-hidden max-w-[280px] mx-auto">
            <Image
              src={URLS.IMAGES.SORRY_THIAGO || "/placeholder.svg"}
              alt="Happy puppy in dark outfit"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-sm text-white text-center">
            e ele nao ta nem ai se vc ja desculpou ele quer ser homem de verdade e te mostrar um negocio
          </p>

          <div className="w-full max-w-[280px]">
            <Link href="/7">
              <Button
                variant="default"
                className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-6 text-lg"
              >
                {"ver o negocio 😳"}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

