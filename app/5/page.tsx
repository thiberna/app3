"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { URLS } from "@/constants/urls"
import Link from "next/link"

export default function GuiltyPage() {
  return (
    <div className="min-h-[100dvh] bg-[#8B5CF6] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col items-center space-y-6 p-4">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-white">thiago sabe que fez caca</h1>
          </div>

          <div className="w-full h-auto aspect-square relative rounded-lg overflow-hidden max-w-[280px] mx-auto">
            <Image
              src={URLS.IMAGES.GUILTY_THIAGO || "/placeholder.svg"}
              alt="Guilty looking puppy"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-sm text-white text-center">Imagem real tirada agora dele 👆👆</p>

          <div className="w-full max-w-[280px]">
            <Link href="/6">
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

