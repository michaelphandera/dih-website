import Image from "next/image"
import { Button } from "@/components/ui/button"
import { aboutContent } from "@/lib/data"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="section-title">About Us</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-ndrrmc-blue mb-4">{aboutContent.subtitle}</h3>
            <p className="text-gray-700 mb-6">{aboutContent.description}</p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Our Mission</h4>
              <p className="text-gray-700">{aboutContent.mission}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Our Vision</h4>
              <p className="text-gray-700">{aboutContent.vision}</p>
            </div>

            <Button className="bg-ndrrmc-blue hover:bg-blue-700" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={aboutContent.image || "/placeholder.svg"}
              alt="NDRRMC Operations"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
