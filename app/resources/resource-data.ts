// Resource data with detailed information for each resource type
const resourceData = {
  'infographics': {
    name: 'Infographics',
    title: 'Disaster Infographics',
    description: 'Visual guides and infographics to help understand disaster risks, preparedness measures, and response protocols. These easy-to-understand visual resources are designed to communicate complex information in a clear and accessible format.',
    count: '24',
    formats: 'PNG, JPG, PDF',
    languages: 'English, French, Creole',
    accessLevel: 'Public',
    featuredImage: '/img/resources/infographics-banner.jpg',
    resourceItems: [
      {
        id: 1,
        title: 'Flood Safety Guidelines',
        description: 'Essential safety measures before, during, and after flooding events.',
        thumbnail: '/img/resources/flood-safety.jpg',
        url: '/resources/infographics/flood-safety',
        format: 'PNG',
        size: '2.4 MB',
        date: 'March 15, 2025',
        category: 'Safety',
        tags: ['Flood', 'Safety', 'Preparedness']
      },
      {
        id: 2,
        title: 'Cyclone Preparedness Checklist',
        description: 'Step-by-step guide to prepare your home and family for cyclone season.',
        thumbnail: '/img/resources/cyclone-prep.jpg',
        url: '/resources/infographics/cyclone-preparedness',
        format: 'PDF',
        size: '3.1 MB',
        date: 'February 22, 2025',
        category: 'Preparedness',
        tags: ['Cyclone', 'Checklist', 'Home Safety']
      },
      {
        id: 3,
        title: 'Emergency Kit Essentials',
        description: 'Comprehensive guide to building and maintaining emergency kits for different scenarios.',
        thumbnail: '/img/resources/emergency-kit.jpg',
        url: '/resources/infographics/emergency-kit',
        format: 'JPG',
        size: '1.8 MB',
        date: 'January 10, 2025',
        category: 'Preparedness',
        tags: ['Emergency Kit', 'Supplies', 'Disaster Ready']
      },
      {
        id: 4,
        title: 'Evacuation Route Map',
        description: 'Visual guide to evacuation routes and safe zones across Mauritius.',
        thumbnail: '/img/resources/evacuation-routes.jpg',
        url: '/resources/infographics/evacuation-routes',
        format: 'PNG',
        size: '4.2 MB',
        date: 'April 5, 2025',
        category: 'Response',
        tags: ['Evacuation', 'Routes', 'Safety Zones']
      }
    ]
  },
  'documents': {
    name: 'Documents',
    title: 'Disaster Management Documents',
    description: 'Official documents, reports, plans, and strategies related to disaster management in Mauritius. These resources include comprehensive disaster response plans, policy documents, research papers, and technical reports.',
    count: '42',
    formats: 'PDF, DOCX, XLSX',
    languages: 'English, French',
    accessLevel: 'Public, Restricted',
    featuredImage: '/img/resources/documents-banner.jpg',
    resourceItems: [
      {
        id: 1,
        title: 'National Disaster Response Plan',
        description: 'Comprehensive plan detailing response protocols for various disaster scenarios in Mauritius.',
        thumbnail: '/img/resources/ndrrmc-plan.jpg',
        url: '/resources/documents/national-disaster-response-plan',
        format: 'PDF',
        size: '8.5 MB',
        date: 'April 1, 2025',
        category: 'Official',
        tags: ['Response Plan', 'National', 'Protocol']
      },
      {
        id: 2,
        title: 'Annual Disaster Statistics Report',
        description: 'Statistical analysis of disaster events, impacts, and response effectiveness over the past year.',
        thumbnail: '/img/resources/statistics-report.jpg',
        url: '/resources/documents/annual-statistics-report',
        format: 'PDF',
        size: '5.2 MB',
        date: 'March 15, 2025',
        category: 'Report',
        tags: ['Statistics', 'Annual Report', 'Data Analysis']
      },
      {
        id: 3,
        title: 'Community Training Materials',
        description: 'Training materials for community volunteers covering emergency response procedures and coordination.',
        thumbnail: '/img/resources/training-materials.jpg',
        url: '/resources/documents/community-training-materials',
        format: 'DOCX',
        size: '3.8 MB',
        date: 'February 10, 2025',
        category: 'Training',
        tags: ['Training', 'Community', 'Volunteers']
      },
      {
        id: 4,
        title: 'Disaster Risk Assessment Framework',
        description: 'Framework for assessing and categorizing disaster risks across different regions and hazard types.',
        thumbnail: '/img/resources/risk-assessment.jpg',
        url: '/resources/documents/risk-assessment-framework',
        format: 'PDF',
        size: '6.7 MB',
        date: 'January 25, 2025',
        category: 'Technical',
        tags: ['Risk Assessment', 'Framework', 'Methodology']
      }
    ]
  },
  'maps': {
    name: 'Maps',
    title: 'Disaster Risk Maps',
    description: 'Interactive and static maps showing disaster risk zones, evacuation routes, emergency facilities, and historical disaster data across Mauritius. These maps help visualize risk areas and plan appropriate mitigation measures.',
    count: '18',
    formats: 'Interactive, PDF, JPG',
    languages: 'English',
    accessLevel: 'Public',
    featuredImage: '/img/resources/maps-banner.jpg',
    resourceItems: [
      {
        id: 1,
        title: 'Flood Risk Zones Map',
        description: 'Detailed map showing flood-prone areas and risk levels across Mauritius.',
        thumbnail: '/img/resources/flood-map.jpg',
        url: '/resources/maps/flood-risk-zones',
        format: 'Interactive',
        size: 'Online',
        date: 'April 10, 2025',
        category: 'Risk Map',
        tags: ['Flood', 'Risk Zones', 'Interactive']
      },
      {
        id: 2,
        title: 'Cyclone Tracking Map',
        description: 'Interactive map for tracking cyclone paths and impact zones in the Indian Ocean region.',
        thumbnail: '/img/resources/cyclone-map.jpg',
        url: '/resources/maps/cyclone-tracking',
        format: 'Interactive',
        size: 'Online',
        date: 'March 20, 2025',
        category: 'Tracking',
        tags: ['Cyclone', 'Tracking', 'Weather']
      },
      {
        id: 3,
        title: 'Emergency Facilities Map',
        description: 'Map showing locations of hospitals, evacuation centers, fire stations, and other emergency facilities.',
        thumbnail: '/img/resources/facilities-map.jpg',
        url: '/resources/maps/emergency-facilities',
        format: 'PDF',
        size: '7.2 MB',
        date: 'February 15, 2025',
        category: 'Facilities',
        tags: ['Facilities', 'Emergency Services', 'Infrastructure']
      },
      {
        id: 4,
        title: 'Landslide Susceptibility Map',
        description: 'Map identifying areas with high susceptibility to landslides based on terrain and rainfall patterns.',
        thumbnail: '/img/resources/landslide-map.jpg',
        url: '/resources/maps/landslide-susceptibility',
        format: 'JPG',
        size: '5.8 MB',
        date: 'January 30, 2025',
        category: 'Risk Map',
        tags: ['Landslide', 'Risk Assessment', 'Terrain']
      }
    ]
  },
  'forms': {
    name: 'Forms',
    title: 'Disaster Management Forms',
    description: 'Official forms for disaster reporting, damage assessment, relief requests, and volunteer registration. These standardized forms help streamline the collection of critical information during and after disaster events.',
    count: '15',
    formats: 'PDF, DOCX, Online',
    languages: 'English, French',
    accessLevel: 'Public',
    featuredImage: '/img/resources/forms-banner.jpg',
    resourceItems: [
      {
        id: 1,
        title: 'Disaster Damage Assessment Form',
        description: 'Form for assessing and reporting property damage after disaster events.',
        thumbnail: '/img/resources/damage-form.jpg',
        url: '/resources/forms/damage-assessment',
        format: 'PDF',
        size: '1.2 MB',
        date: 'April 5, 2025',
        category: 'Assessment',
        tags: ['Damage Assessment', 'Reporting', 'Property']
      },
      {
        id: 2,
        title: 'Emergency Relief Request Form',
        description: 'Form for requesting emergency supplies, shelter, or assistance following a disaster.',
        thumbnail: '/img/resources/relief-form.jpg',
        url: '/resources/forms/relief-request',
        format: 'PDF',
        size: '0.9 MB',
        date: 'March 25, 2025',
        category: 'Relief',
        tags: ['Relief', 'Assistance', 'Request']
      },
      {
        id: 3,
        title: 'Volunteer Registration Form',
        description: 'Registration form for individuals interested in volunteering for disaster response efforts.',
        thumbnail: '/img/resources/volunteer-form.jpg',
        url: '/resources/forms/volunteer-registration',
        format: 'DOCX',
        size: '1.1 MB',
        date: 'February 20, 2025',
        category: 'Volunteer',
        tags: ['Volunteer', 'Registration', 'Community']
      },
      {
        id: 4,
        title: 'Incident Reporting Form',
        description: 'Form for reporting disaster incidents, hazards, or emergency situations.',
        thumbnail: '/img/resources/incident-form.jpg',
        url: '/resources/forms/incident-reporting',
        format: 'Online',
        size: 'N/A',
        date: 'January 15, 2025',
        category: 'Reporting',
        tags: ['Incident', 'Reporting', 'Emergency']
      }
    ]
  },
  'manuals': {
    name: 'Manuals',
    title: 'Disaster Management Manuals',
    description: 'Comprehensive manuals and guides for disaster preparedness, response, and recovery operations. These detailed resources provide step-by-step instructions for various disaster management activities.',
    count: '12',
    formats: 'PDF, eBook',
    languages: 'English, French',
    accessLevel: 'Public, Professional',
    featuredImage: '/img/resources/manuals-banner.jpg',
    resourceItems: [
      {
        id: 1,
        title: 'Community Disaster Preparedness Manual',
        description: 'Comprehensive guide for community leaders on preparing for and responding to disasters.',
        thumbnail: '/img/resources/community-manual.jpg',
        url: '/resources/manuals/community-preparedness',
        format: 'PDF',
        size: '12.5 MB',
        date: 'April 15, 2025',
        category: 'Community',
        tags: ['Community', 'Preparedness', 'Leadership']
      },
      {
        id: 2,
        title: 'First Responder Field Guide',
        description: 'Pocket guide for first responders with protocols for various emergency situations.',
        thumbnail: '/img/resources/responder-guide.jpg',
        url: '/resources/manuals/first-responder-guide',
        format: 'PDF',
        size: '8.7 MB',
        date: 'March 10, 2025',
        category: 'Professional',
        tags: ['First Responder', 'Field Guide', 'Emergency']
      },
      {
        id: 3,
        title: 'School Safety Manual',
        description: 'Guide for school administrators on implementing disaster safety protocols in educational institutions.',
        thumbnail: '/img/resources/school-manual.jpg',
        url: '/resources/manuals/school-safety',
        format: 'PDF',
        size: '10.2 MB',
        date: 'February 25, 2025',
        category: 'Education',
        tags: ['School', 'Safety', 'Education']
      },
      {
        id: 4,
        title: 'Business Continuity Planning Guide',
        description: 'Manual for businesses on developing continuity plans to minimize disaster disruptions.',
        thumbnail: '/img/resources/business-manual.jpg',
        url: '/resources/manuals/business-continuity',
        format: 'eBook',
        size: '9.8 MB',
        date: 'January 20, 2025',
        category: 'Business',
        tags: ['Business', 'Continuity', 'Planning']
      }
    ]
  }
};

// Define resource data type
export type ResourceKey = keyof typeof resourceData;
export type ResourceDataType = typeof resourceData[ResourceKey];

export default resourceData;
