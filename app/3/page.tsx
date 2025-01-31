import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { URLS } from "@/constants/urls"

export default function WrongChoicePage() {
  return (
    <div className="min-h-[100dvh] bg-[#8B5CF6] flex items-center justify-center p-4 relative">
      {/* Top back buttons */}
      <div className="absolute top-4 left-4">
        <BackButton />
      </div>
      <div className="absolute top-4 right-4">
        <BackButton />
      </div>

      <Card className="w-full max-w-md bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col items-center space-y-6 p-4">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-white">mds q tipo de monstro vc e</h1>
          </div>

          <div className="w-full h-auto aspect-square relative rounded-lg overflow-hidden max-w-[280px] mx-auto">
            <Image
              src={URLS.IMAGES.DISAPPOINTED_DOG || "/placeholder.svg"}
              alt="Cute puppy looking disappointed"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-xl text-white text-center">{"Volta la e escolhe direito >:("}</p>

          {/* Bottom back buttons */}
          <div className="flex justify-between w-full max-w-[280px] mt-4">
            <BackButton />
            <BackButton />
            <BackButton />
          </div>
        </CardContent>
      </Card>

      {/* Left side back buttons */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <BackButton />
      </div>

      {/* Right side back buttons */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <BackButton />
      </div>
    </div>
  )
}

function BackButton() {
  return (
    <Link href="/1">
      <Button variant="default" size="icon" className="bg-black hover:bg-gray-800 text-white rounded-full w-12 h-12">
        <ArrowLeft className="h-6 w-6" />
      </Button>
    </Link>
  )
}

