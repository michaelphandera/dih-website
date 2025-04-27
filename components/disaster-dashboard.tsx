import Image from "next/image"
import { dashboardStats } from "@/lib/data"

export function DisasterDashboard() {
  return (
    <section className="py-12 bg-primary">
      <div className="container">
        <h2 className="section-title text-white">Mauritius Disaster Status Dashboard</h2>

        <div className="bg-white/90 p-4 rounded-lg mb-8">
          <h3 className="text-center text-lg font-medium mb-2">Mauritius Disaster Risk Map</h3>
          <div className="h-64 bg-[#e8f5e9] rounded flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=250&width=700"
              alt="Mauritius Map"
              width={700}
              height={250}
              className="mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dashboardStats.map((stat) => (
            <div key={stat.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">{stat.title}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
              <div className="h-40 relative">
                <Image src={stat.image || "/placeholder.svg"} alt={stat.title} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
