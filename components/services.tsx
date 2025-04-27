import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/lib/data"
import { ShieldAlert, Bell, GraduationCap, BarChart, HandHelpingIcon as Helping, Database } from "lucide-react"
import Link from "next/link"

export function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="h-10 w-10 text-primary" />
      case "Bell":
        return <Bell className="h-10 w-10 text-primary" />
      case "GraduationCap":
        return <GraduationCap className="h-10 w-10 text-primary" />
      case "BarChart":
        return <BarChart className="h-10 w-10 text-primary" />
      case "Helping":
        return <Helping className="h-10 w-10 text-primary" />
      case "Database":
        return <Database className="h-10 w-10 text-primary" />
      default:
        return <ShieldAlert className="h-10 w-10 text-primary" />
    }
  }

  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
          <p className="text-muted-foreground mt-4">
            NDRRMC provides a comprehensive range of services to help communities prepare for, respond to, and recover
            from disasters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link href={service.url} key={service.id} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-md group-hover:border-primary">
                <CardHeader>
                  <div className="mb-2">{getIcon(service.icon)}</div>
                  <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
