import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { resources } from "@/lib/data"
import { FileText, Phone, Map, ClipboardList, BookOpen, Cloud } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Resources() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FileText":
        return <FileText className="h-8 w-8" />
      case "Phone":
        return <Phone className="h-8 w-8" />
      case "Map":
        return <Map className="h-8 w-8" />
      case "ClipboardList":
        return <ClipboardList className="h-8 w-8" />
      case "BookOpen":
        return <BookOpen className="h-8 w-8" />
      case "Cloud":
        return <Cloud className="h-8 w-8" />
      default:
        return <FileText className="h-8 w-8" />
    }
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Disaster Resources</h2>
          <p className="text-muted-foreground mt-4">
            Access important resources to help you prepare for and respond to disasters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card key={resource.id} className="overflow-hidden group">
              <Link href={resource.url}>
                <CardHeader className="pb-2 group-hover:text-primary transition-colors">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <div className="bg-muted rounded-full p-3">{getIcon(resource.icon)}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{resource.description}</CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium bg-muted px-2 py-1 rounded">{resource.type}</span>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Access Resource
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
