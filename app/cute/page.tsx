import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function CutePage() {
  return (
    <div className="min-h-screen bg-[#8B5CF6] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col items-center space-y-6 p-4">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-white">bls,</h1>
            <p className="text-xl text-white">O nome dele e thiago</p>
          </div>

          <div className="w-full aspect-square max-w-[300px] relative rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SunRA2M7nopfRvojD7TG6ZjrpZmNL9.png"
              alt="Cute white puppy"
              fill
              className="object-cover"
              priority
            />
          </div>

          <Link href="/" className="w-full">
            <Button variant="default" className="w-full bg-black hover:bg-gray-800 text-white rounded-full">
              Nem fodendo
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

