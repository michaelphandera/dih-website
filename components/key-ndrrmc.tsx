import Image from "next/image"
import { keyPersonnel } from "@/lib/data"

export function KeyNdrrmc() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="section-title">Key NDRRMC Personnel</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {keyPersonnel.map((person) => (
            <div key={person.id} className="flex items-center gap-4">
              <div className="relative h-16 w-16 flex-shrink-0">
                <Image
                  src={person.image || "/placeholder.svg"}
                  alt={person.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-bold">{person.name}</h3>
                <p className="text-gray-600 text-sm">{person.title}</p>
                <p className="text-primary text-sm">{person.contact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
