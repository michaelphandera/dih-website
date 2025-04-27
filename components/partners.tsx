import Image from "next/image"
import Link from "next/link"
import { partners } from "@/lib/data"

export function Partners() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Our Partners</h2>
          <p className="text-muted-foreground mt-4">
            NDRRMC works with various government agencies and organizations to ensure effective disaster management.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <Link
              href={partner.url}
              key={partner.id}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative h-16 w-full">
                <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
