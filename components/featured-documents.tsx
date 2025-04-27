import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { featuredDocuments } from "@/lib/data"
import { FileText, ChevronLeft, ChevronRight } from "lucide-react"

export function FeaturedDocuments() {
  const getCategoryClass = (category: string) => {
    switch (category) {
      case "orange":
        return "document-card-orange"
      case "blue":
        return "document-card-blue"
      case "purple":
        return "document-card-purple"
      default:
        return "document-card-orange"
    }
  }

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Documents</h2>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="outline" className="h-8 w-8 bg-primary text-white rounded-full">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <div className="flex">
              <div className="pagination-dot active"></div>
              <div className="pagination-dot"></div>
              <div className="pagination-dot"></div>
            </div>
            <Button size="icon" variant="outline" className="h-8 w-8 bg-primary text-white rounded-full">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredDocuments.slice(0, 3).map((doc) => (
            <Card key={doc.id} className={`overflow-hidden shadow-md ${getCategoryClass(doc.category)}`}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="h-12 w-12 flex items-center justify-center bg-gray-100 rounded-full mb-2">
                      <FileText className="h-6 w-6 text-gray-600" />
                    </div>
                    <CardTitle className="text-lg">{doc.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-4">{doc.description}</CardDescription>
                <div className="flex gap-2 text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">{doc.fileType}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">{doc.fileSize}</span>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button className="bg-primary hover:bg-primary/90 text-white">Download</Button>
                <Button variant="outline" className="border-primary text-primary">
                  View
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
