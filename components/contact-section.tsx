import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactInfo } from "@/lib/data"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-ndrrmc-blue mb-6">Get in Touch</h3>

            <div className="contact-info-item">
              <MapPin className="contact-info-icon" />
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-gray-600">{contactInfo.address}</p>
              </div>
            </div>

            <div className="contact-info-item">
              <Phone className="contact-info-icon" />
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-gray-600">{contactInfo.phone}</p>
              </div>
            </div>

            <div className="contact-info-item">
              <Mail className="contact-info-icon" />
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-600">{contactInfo.email}</p>
              </div>
            </div>

            <div className="contact-info-item">
              <Clock className="contact-info-icon" />
              <div>
                <h4 className="font-semibold mb-1">Office Hours</h4>
                <p className="text-gray-600">{contactInfo.hours}</p>
              </div>
            </div>

            <div className="mt-8 h-64 w-full rounded-lg overflow-hidden">
              <iframe
                src={contactInfo.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NDRRMC Location"
              ></iframe>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-ndrrmc-blue mb-6">Send us a Message</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input id="subject" placeholder="Message subject" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={6} />
              </div>

              <Button type="submit" className="w-full bg-ndrrmc-blue hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
