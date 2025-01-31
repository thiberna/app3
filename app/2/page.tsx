import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { URLS } from "@/constants/urls"

export default function SecondPage() {
  return (
    <div className="min-h-[100dvh] bg-[#8B5CF6] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col items-center space-y-8 p-4">
          <div className="text-center space-y-1">
            <h1 className="text-4xl font-bold text-white mb-2">bls,</h1>
            <p className="text-2xl text-white">O nome dele e thiago</p>
          </div>

          <div className="w-full h-auto aspect-square relative rounded-lg overflow-hidden max-w-[280px] mx-auto">
            <Image
              src={URLS.IMAGES.IMAGEM_AJUSTE_1 || "/placeholder.svg"}
              alt="Cute white puppy smiling"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="w-full max-w-[280px] mt-4">
            <Link href="/4" className="w-full block">
              <Button
                variant="default"
                className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-6 text-lg"
              >
                Nem fodendo
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

