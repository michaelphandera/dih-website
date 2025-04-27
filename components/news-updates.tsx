import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { newsUpdates } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export function NewsUpdates() {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Latest News & Updates</h2>
            <p className="text-muted-foreground mt-2">Stay informed with the latest news and updates from NDRRMC</p>
          </div>
          <Button variant="link" className="hidden md:flex items-center gap-1 mt-2 md:mt-0" asChild>
            <Link href="/news">
              View all news <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsUpdates.map((news) => (
            <Card key={news.id} className="h-full flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
                  {news.category}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl line-clamp-2">{news.title}</CardTitle>
                <CardDescription>{news.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="line-clamp-3 text-sm">{news.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href={news.url}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <Button variant="outline" asChild>
            <Link href="/news">View all news</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
