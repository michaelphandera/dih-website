import Image from "next/image"
import { Button } from "@/components/ui/button"
import { galleryImages } from "@/lib/data"
import Link from "next/link"
import { Maximize } from "lucide-react"

export function GallerySection() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="section-title">Photo Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <div className="relative h-64 w-full">
                <Image src={image.image || "/placeholder.svg"} alt={image.title} fill className="object-cover" />
                <div className="gallery-item-overlay">
                  <Button variant="ghost" className="text-white border border-white hover:bg-white/20">
                    <Maximize className="h-5 w-5 mr-2" />
                    View
                  </Button>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-lg">{image.title}</h3>
                <p className="text-gray-600 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-ndrrmc-blue hover:bg-blue-700" asChild>
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
