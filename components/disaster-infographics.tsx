import { Button } from "@/components/ui/button"

export function DisasterInfographics() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="section-title">Disaster Preparedness Infographics</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center text-gray-500">
            Infographic Placeholder
          </div>
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center text-gray-500">
            Infographic Placeholder
          </div>
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center text-gray-500">
            Infographic Placeholder
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Button className="bg-primary hover:bg-primary/90 text-white">View More</Button>
        </div>
      </div>
    </section>
  )
}
