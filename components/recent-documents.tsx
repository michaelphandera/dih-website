import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { recentDocuments } from "@/lib/data"
import { Download } from "lucide-react"

export function RecentDocuments() {
  return (
    <section className="py-8">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Recent Document Uploads</h2>

        <div className="bg-white rounded-md shadow overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[400px]">Document Name</TableHead>
                <TableHead className="w-[200px]">Date</TableHead>
                <TableHead className="w-[100px]">Size</TableHead>
                <TableHead className="w-[100px]">Type</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentDocuments.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium">{doc.title}</TableCell>
                  <TableCell>{doc.date}</TableCell>
                  <TableCell>{doc.size}</TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                      <Download className="h-4 w-4 mr-1" /> Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-center mt-6">
          <Button className="bg-primary hover:bg-primary/90 text-white">View More</Button>
        </div>
      </div>
    </section>
  )
}
