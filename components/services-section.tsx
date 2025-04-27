import Image from "next/image"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/data"
import { ShieldCheck, Siren, Building, Shield } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="h-12 w-12 text-ndrrmc-blue" />
      case "Siren":
        return <Siren className="h-12 w-12 text-ndrrmc-blue" />
      case "Building":
        return <Building className="h-12 w-12 text-ndrrmc-blue" />
      case "Shield":
        return <Shield className="h-12 w-12 text-ndrrmc-blue" />
      default:
        return <ShieldCheck className="h-12 w-12 text-ndrrmc-blue" />
    }
  }

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="section-title">Our Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="p-6 text-center">
                {getIcon(service.icon)}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button
                  variant="outline"
                  className="border-ndrrmc-blue text-ndrrmc-blue hover:bg-ndrrmc-blue hover:text-white"
                  asChild
                >
                  <Link href={`/services/${service.id}`}>Learn More</Link>
                </Button>
              </div>
              <div className="relative h-48 w-full">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-ndrrmc-blue hover:bg-blue-700" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
