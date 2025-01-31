import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { URLS } from "@/constants/urls"

export default function FirstPage() {
  return (
    <div className="min-h-[100dvh] bg-[#8B5CF6] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col items-center space-y-6 p-4">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-white">Oi !!!</h1>
            <p className="text-xl text-white">o que voce achou desse cachorro?</p>
          </div>

          <div className="w-full h-auto aspect-square relative rounded-lg overflow-hidden max-w-[280px]">
            <Image
              src={URLS.IMAGES.FIRST_DOG || "/placeholder.svg"}
              alt="Cute puppy"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col w-full gap-3 max-w-[280px]">
            <Link href="/2" className="w-full">
              <Button variant="default" className="w-full bg-black hover:bg-gray-800 text-white rounded-full">
                bonitinho
              </Button>
            </Link>
            <Link href="/3" className="w-full">
              <Button variant="default" className="w-full bg-black hover:bg-gray-800 text-white rounded-full">
                feio gordo bola
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

