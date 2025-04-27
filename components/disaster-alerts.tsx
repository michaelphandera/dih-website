import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { disasterAlerts } from "@/lib/data"
import { AlertTriangle, Info, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DisasterAlerts() {
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case "danger":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      default:
        return <Info className="h-5 w-5 text-blue-500" />
    }
  }

  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case "info":
        return "alert-badge-info"
      case "warning":
        return "alert-badge-warning"
      case "danger":
        return "alert-badge-danger"
      default:
        return "alert-badge-info"
    }
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Disaster Alerts</h2>
            <p className="text-muted-foreground mt-2">Current alerts and warnings across the Philippines</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link href="/alerts">View all alerts</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {disasterAlerts.map((alert) => (
            <Card key={alert.id} className="overflow-hidden">
              <div
                className={`h-2 w-full ${
                  alert.severity === "info"
                    ? "bg-blue-500"
                    : alert.severity === "warning"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                }`}
              />
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl flex items-center gap-2">
                    {getSeverityIcon(alert.severity)}
                    {alert.title}
                  </CardTitle>
                  <span className={`alert-badge ${getSeverityClass(alert.severity)}`}>
                    {alert.severity === "info" ? "Info" : alert.severity === "warning" ? "Warning" : "Danger"}
                  </span>
                </div>
                <CardDescription>{alert.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{alert.description}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold">Affected Regions:</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {alert.regions.map((region) => (
                        <span key={region} className="text-xs bg-muted px-2 py-1 rounded">
                          {region}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Recommended Actions:</h4>
                    <p className="text-sm mt-1">{alert.actions}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
