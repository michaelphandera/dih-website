import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { newsUpdates } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="section-title">Latest News & Updates</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsUpdates.map((news) => (
            <Card key={news.id} className="h-full flex flex-col overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                <div className="absolute top-2 left-2 bg-ndrrmc-blue text-white text-xs px-2 py-1 rounded">
                  {news.category}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl line-clamp-2">{news.title}</CardTitle>
                <CardDescription>{news.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="line-clamp-3 text-gray-600">{news.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="text-ndrrmc-blue hover:text-ndrrmc-blue hover:bg-blue-50 w-full"
                  asChild
                >
                  <Link href={news.url}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-ndrrmc-blue hover:bg-blue-700" asChild>
            <Link href="/news">
              View All News <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
