import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function MakeADifference() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="container relative z-10 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Best Way To Make A Difference In The Lives Of Others</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Join our efforts to build safer, more resilient communities through disaster preparedness and response.
        </p>
        <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/20">
          <Play className="h-5 w-5 mr-2" /> Watch Video
        </Button>
      </div>
    </section>
  )
}
