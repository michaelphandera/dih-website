import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { latestNews } from "@/lib/data"

export function LatestNews() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="section-title">Latest Updates News</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestNews.map((news) => (
            <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{news.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{news.summary}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{news.date}</span>
                  <Link href={news.url} className="text-primary text-sm font-medium">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Button className="bg-primary hover:bg-primary/90 text-white">View More</Button>
        </div>
      </div>
    </section>
  )
}
