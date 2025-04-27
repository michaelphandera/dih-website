export const navigationLinks = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "#",
    dropdown: true,
    submenu: [
      { name: "Know Us", href: "/about" },
      { name: "FAQs", href: "/faq" }
    ]
  },
  {
    name: "Councils",
    href: "#",
    dropdown: true,
    megaMenu: true,
    columns: [
      [
        { name: "Agriculture", href: "/council" },
        { name: "Civil Service", href: "/council" },
        { name: "Education", href: "/council" },
        { name: "External Affairs", href: "/council" },
        { name: "Disaster Management", href: "/council" }
      ],
      [
        { name: "External Communications", href: "/council" },
        { name: "Finance", href: "/council" },
        { name: "Fisheries", href: "/council" },
        { name: "Gender Equality", href: "/council" },
        { name: "Health", href: "/council" }
      ],
      [
        { name: "Home Affairs", href: "/council" },
        { name: "Housing and Lands", href: "/council" },
        { name: "Local Government", href: "/council" },
        { name: "Oceanography", href: "/council" }
      ],
      [
        { name: "Public Infrastructure", href: "/council" },
        { name: "Public Utilities", href: "/council" },
        { name: "Social Security", href: "/council" },
        { name: "Tourism", href: "/council" }
      ]
    ]
  },
  {
    name: "Districts",
    href: "#",
    dropdown: true,
    megaMenu: true,
    columns: [
      [
        { name: "Port Louis", href: "/district" },
        { name: "Black River", href: "/district" },
        { name: "Flacq", href: "/district" },
        { name: "Grand Port", href: "/district" }
      ],
      [
        { name: "Moka", href: "/district" },
        { name: "Pamplemousses", href: "/district" },
        { name: "Plaines Wilhems", href: "/district" },
        { name: "Rivière du Rempart", href: "/district" }
      ],
      [
        { name: "Savanne", href: "/district" },
        { name: "Rodrigues", href: "/district" },
        { name: "Agalega", href: "/district" },
        { name: "Cargados Carajos", href: "/district" }
      ]
    ]
  },
  {
    name: "Outer Islands",
    href: "#",
    dropdown: true,
    submenu: [
      { name: "Rodrigues Island", href: "/district" },
      { name: "Agaléga Islands", href: "/district" },
      { name: "Saint Brandon", href: "/district" },
      { name: "Tromelin Island", href: "/district" }
    ]
  },
  {
    name: "Resources",
    href: "#",
    dropdown: true,
    submenu: [
      { name: "Infographics", href: "/documents" },
      { name: "Documents", href: "/documents" },
      { name: "Interactive Maps", href: "/documents" },
      { name: "Forms", href: "/documents" },
      { name: "User Manuals", href: "/documents" }
    ]
  },
  { name: "Contact Us", href: "/contact" }
]

export const featuredDocuments = [
  {
    id: 1,
    title: "National Disaster Response Plan",
    description: "Comprehensive plan for coordinated disaster response across all agencies",
    category: "orange",
    fileType: "PDF",
    fileSize: "4.2 MB",
    url: "/documents/national-disaster-response-plan.pdf",
  },
  {
    id: 2,
    title: "Community-Based Disaster Risk Reduction Manual",
    description: "Guidelines for implementing disaster risk reduction at the community level",
    category: "blue",
    fileType: "PDF",
    fileSize: "3.8 MB",
    url: "/documents/community-based-drr-manual.pdf",
  },
  {
    id: 3,
    title: "Climate Change Adaptation Strategy",
    description: "Strategic framework for adapting to climate change impacts on vulnerable sectors",
    category: "purple",
    fileType: "PDF",
    fileSize: "5.1 MB",
    url: "/documents/climate-change-adaptation-strategy.pdf",
  },
  {
    id: 4,
    title: "Emergency Operations Protocol",
    description: "Standard operating procedures for emergency response operations",
    category: "orange",
    fileType: "PDF",
    fileSize: "2.3 MB",
    url: "/documents/emergency-operations-protocol.pdf",
  },
]

export const recentDocuments = [
  {
    id: 1,
    title: "Cyclone Preparedness Guide",
    date: "April 15, 2023",
    size: "3.2 MB",
    type: "PDF",
    url: "/documents/cyclone-preparedness-guide.pdf",
  },
  {
    id: 2,
    title: "Flood Evacuation Plans",
    date: "March 22, 2023",
    size: "2.8 MB",
    type: "PDF",
    url: "/documents/flood-evacuation-plans.pdf",
  },
  {
    id: 3,
    title: "Emergency Shelter Guidelines",
    date: "March 10, 2023",
    size: "4.5 MB",
    type: "PDF",
    url: "/documents/emergency-shelter-guidelines.pdf",
  },
  {
    id: 4,
    title: "Post-Disaster Needs Assessment",
    date: "February 28, 2023",
    size: "5.1 MB",
    type: "PDF",
    url: "/documents/post-disaster-needs-assessment.pdf",
  },
  {
    id: 5,
    title: "Disaster Contingency Plan",
    date: "February 15, 2023",
    size: "6.7 MB",
    type: "PDF",
    url: "/documents/disaster-contingency-plan.pdf",
  },
]

export const dashboardStats = [
  {
    id: 1,
    title: "Current Alerts by Region",
    image: "/placeholder.svg?height=150&width=250",
    description: "Active alerts across different regions",
  },
  {
    id: 2,
    title: "Past Disasters by Category",
    image: "/placeholder.svg?height=150&width=250",
    description: "Historical disaster events by type",
  },
  {
    id: 3,
    title: "Resource Distribution Status",
    image: "/placeholder.svg?height=150&width=250",
    description: "Current resource allocation across affected areas",
  },
]

export const keyPersonnel = [
  {
    id: 1,
    name: "Dr. John Smith",
    title: "Director General",
    image: "/placeholder.svg?height=100&width=100",
    contact: "+230 1234 5678",
  },
  {
    id: 2,
    name: "Eng. Mary Johnson",
    title: "Deputy Director for Operations",
    image: "/placeholder.svg?height=100&width=100",
    contact: "+230 1234 5679",
  },
  {
    id: 3,
    name: "Dr. Robert Williams",
    title: "Chief, Disaster Risk Reduction",
    image: "/placeholder.svg?height=100&width=100",
    contact: "+230 1234 5680",
  },
]

export const latestNews = [
  {
    id: 1,
    title: "NDRRMC Conducts Nationwide Disaster Preparedness Exercise",
    summary: "A nationwide disaster preparedness exercise was conducted to test emergency response capabilities",
    date: "April 20, 2023",
    image: "/placeholder.svg?height=150&width=250",
    url: "/news/nationwide-preparedness-exercise",
  },
  {
    id: 2,
    title: "New Early Warning System Deployed",
    summary: "State-of-the-art early warning systems have been installed in coastal areas",
    date: "April 12, 2023",
    image: "/placeholder.svg?height=150&width=250",
    url: "/news/early-warning-system",
  },
  {
    id: 3,
    title: "Community Resilience Program Launched",
    summary: "A new program aimed at building community resilience to disasters has been launched",
    date: "April 5, 2023",
    image: "/placeholder.svg?height=150&width=250",
    url: "/news/community-resilience-program",
  },
]

export const quickLinks = [
  { name: "Disaster Preparedness", href: "/preparedness" },
  { name: "Emergency Hotlines", href: "/hotlines" },
  { name: "Evacuation Centers", href: "/evacuation" },
  { name: "Safety Tips", href: "/safety-tips" },
  { name: "Volunteer", href: "/volunteer" },
  { name: "Donate", href: "/donate" },
]

export const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: "Facebook" },
  { name: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  { name: "YouTube", href: "https://youtube.com", icon: "Youtube" },
  { name: "Instagram", href: "https://instagram.com", icon: "Instagram" },
]

export const footerLinks = {
  aboutUs: [
    { name: "About NDRRMC", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Mission & Vision", href: "/mission-vision" },
    { name: "History", href: "/history" },
  ],
  quickLinks: [
    { name: "Emergency Alerts", href: "/alerts" },
    { name: "Disaster Stats", href: "/stats" },
    { name: "Resources", href: "/resources" },
    { name: "Donations", href: "/donate" },
  ],
  contactInfo: [
    { name: "Phone", value: "+230 1234 5678" },
    { name: "Email", value: "info@ndrrmc.org" },
    { name: "Address", value: "NDRRMC Building, Port Louis, Mauritius" },
  ],
}

export const aboutContent = {
  subtitle: "Protecting Lives and Properties",
  description:
    "The National Disaster Risk Reduction and Management Council (NDRRMC) is the primary government agency responsible for coordinating and integrating disaster risk reduction and management efforts in the Philippines.",
  mission:
    "To lead, manage, and coordinate the implementation of a comprehensive national disaster risk reduction and management system.",
  vision: "A disaster-resilient Philippines with safer, adaptive, and disaster-ready communities.",
  image: "/placeholder.svg?height=400&width=600",
}

export const services = [
  {
    id: 1,
    title: "Disaster Preparedness",
    description: "Equipping communities with the knowledge and tools to prepare for disasters.",
    icon: "ShieldCheck",
    image: "/placeholder.svg?height=200&width=300",
    url: "/services/preparedness",
  },
  {
    id: 2,
    title: "Emergency Response",
    description: "Providing immediate assistance and support during disasters.",
    icon: "Siren",
    image: "/placeholder.svg?height=200&width=300",
    url: "/services/response",
  },
  {
    id: 3,
    title: "Rehabilitation and Recovery",
    description: "Helping communities rebuild and recover after disasters.",
    icon: "Building",
    image: "/placeholder.svg?height=200&width=300",
    url: "/services/rehabilitation",
  },
  {
    id: 4,
    title: "Risk Assessment",
    description: "Identifying and assessing disaster risks to inform prevention and mitigation efforts.",
    icon: "Shield",
    image: "/placeholder.svg?height=200&width=300",
    url: "/services/risk-assessment",
  },
]

export const newsUpdates = [
  {
    id: 1,
    title: "NDRRMC Conducts Earthquake Drill in Metro Manila",
    excerpt:
      "The NDRRMC conducted a large-scale earthquake drill in Metro Manila to test the readiness of the public and government agencies.",
    date: "May 15, 2023",
    category: "Disaster Preparedness",
    image: "/placeholder.svg?height=200&width=300",
    url: "/news/earthquake-drill",
  },
  {
    id: 2,
    title: "Typhoon Season: NDRRMC Issues Advisory",
    excerpt:
      "With the onset of the typhoon season, the NDRRMC has issued an advisory to all local government units to activate their disaster response plans.",
    date: "May 10, 2023",
    category: "Weather Advisory",
    image: "/placeholder.svg?height=200&width=300",
    url: "/news/typhoon-advisory",
  },
  {
    id: 3,
    title: "NDRRMC Partners with NGOs for Relief Operations",
    excerpt:
      "The NDRRMC has partnered with several non-governmental organizations to provide relief assistance to communities affected by recent floods.",
    date: "May 5, 2023",
    category: "Relief Operations",
    image: "/placeholder.svg?height=200&width=300",
    url: "/news/relief-operations",
  },
]

export const galleryImages = [
  {
    id: 1,
    title: "Earthquake Drill",
    description: "Participants during the earthquake drill in Quezon City.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Flood Relief",
    description: "Distribution of relief goods to flood victims in Cagayan Valley.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Training Session",
    description: "NDRRMC personnel conducting a training session on disaster response.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export const contactInfo = {
  address: "NDRRMC Headquarters, Camp Aguinaldo, Quezon City, Philippines",
  phone: "+632 8911-5061 to 66",
  email: "info@ndrrmc.gov.ph",
  hours: "Monday to Friday, 8:00 AM to 5:00 PM",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.624944242483!2d121.0509717148379!3d14.60107878982494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b008720e8efd%3A0x25c0e964919d3c1f!2sNDRRMC!5e0!3m2!1sen!2sph!4v1684227844834!5m2!1sen!2sph",
}

export const disasterAlerts = [
  {
    id: 1,
    title: "Tropical Cyclone Warning",
    severity: "warning",
    date: "May 16, 2023",
    description: "A tropical cyclone is expected to make landfall in the next 24 hours.",
    regions: ["Metro Manila", "Central Luzon", "Southern Luzon"],
    actions: "Evacuate low-lying areas, secure homes, and monitor updates.",
  },
  {
    id: 2,
    title: "Earthquake Advisory",
    severity: "info",
    date: "May 15, 2023",
    description: "A minor earthquake was felt in several parts of the country. No damage reported.",
    regions: ["Metro Manila", "CALABARZON"],
    actions: "Stay calm, check for injuries, and inspect buildings for damage.",
  },
  {
    id: 3,
    title: "Volcanic Eruption Alert",
    severity: "danger",
    date: "May 14, 2023",
    description: "Mount Mayon is exhibiting increased volcanic activity. Eruption is imminent.",
    regions: ["Bicol Region"],
    actions: "Evacuate within the 8-kilometer radius, wear masks, and follow authorities' instructions.",
  },
]

export const resources = [
  {
    id: 1,
    title: "Disaster Preparedness Guide",
    description: "A comprehensive guide on how to prepare for different types of disasters.",
    type: "Guide",
    icon: "FileText",
    url: "/resources/disaster-preparedness-guide",
  },
  {
    id: 2,
    title: "Emergency Contact Numbers",
    description: "A list of important contact numbers for emergencies.",
    type: "Contact List",
    icon: "Phone",
    url: "/resources/emergency-contacts",
  },
  {
    id: 3,
    title: "Evacuation Center Map",
    description: "A map showing the locations of evacuation centers in your area.",
    type: "Map",
    icon: "Map",
    url: "/resources/evacuation-map",
  },
]

export const statistics = [
  {
    id: 1,
    title: "People Trained in Disaster Preparedness",
    value: "15,000+",
    icon: "Users",
  },
  {
    id: 2,
    title: "Families Provided with Emergency Shelter",
    value: "8,000+",
    icon: "Home",
  },
  {
    id: 3,
    title: "Disaster Alerts Issued",
    value: "250+",
    icon: "AlertTriangle",
  },
]

export const partners = [
  {
    id: 1,
    name: "Philippine Red Cross",
    logo: "/placeholder.svg?height=50&width=100",
    url: "https://redcross.org.ph",
  },
  {
    id: 2,
    name: "World Vision",
    logo: "/placeholder.svg?height=50&width=100",
    url: "https://www.worldvision.org",
  },
  {
    id: 3,
    name: "UNICEF",
    logo: "/placeholder.svg?height=50&width=100",
    url: "https://www.unicef.org",
  },
]
