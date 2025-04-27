import { statistics } from "@/lib/data"
import { Users, Home, AlertTriangle, ArrowRight } from "lucide-react"

export function Statistics() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="h-10 w-10 text-primary" />
      case "Home":
        return <Home className="h-10 w-10 text-primary" />
      case "AlertTriangle":
        return <AlertTriangle className="h-10 w-10 text-primary" />
      case "ArrowRight":
        return <ArrowRight className="h-10 w-10 text-primary" />
      default:
        return <Users className="h-10 w-10 text-primary" />
    }
  }

  return (
    <section className="py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Our Impact</h2>
          <p className="mt-4 text-primary-foreground/80">
            NDRRMC is committed to building resilient communities across the Philippines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="mx-auto bg-white/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4">
                {getIcon(stat.icon)}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-primary-foreground/80">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
