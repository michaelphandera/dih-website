// app/councils/council-data.ts
// Mock data for councils

// Council data with profiles and information
const councilData = {
  'agriculture': {
    name: 'Agriculture',
    title: 'Agriculture Council',
    description: 'The Agriculture Council is responsible for coordinating disaster management efforts related to agricultural sectors, including crop protection, livestock safety, and food security during emergencies.',
    established: '2016',
    memberCount: '18',
    ministerialRepresentation: '5',
    coordinationCenters: '3',
    responseTeams: '6',
    annualBudget: '₨ 75 Million',
    leadership: {
      name: 'Dr. Anand Ramkissoon',
      position: 'Chairperson',
      appointment: 'June 2022',
      tenure: '3 Years',
      background: 'Agricultural Sciences'
    },
    activities: {
      resilience: [
        {
          id: 'agr-res-1',
          title: 'Crop Resilience Program',
          description: 'Developing drought-resistant crop varieties and farming techniques to enhance agricultural resilience.',
          status: 'Ongoing',
          startDate: 'March 2024',
          endDate: 'February 2026',
          budget: '₨ 12 Million',
          lead: 'Agricultural Research Division'
        },
        {
          id: 'agr-res-2',
          title: 'Farm Infrastructure Strengthening',
          description: 'Upgrading farm infrastructure to withstand extreme weather events and natural disasters.',
          status: 'Active',
          startDate: 'January 2024',
          endDate: 'December 2025',
          budget: '₨ 18 Million',
          lead: 'Infrastructure Division'
        }
      ],
      response: [
        {
          id: 'agr-resp-1',
          title: 'Emergency Crop Salvage Protocol',
          description: 'Procedures for rapid assessment and salvage of crops after disasters to minimize losses.',
          status: 'Active',
          lastUpdated: 'April 2024',
          coverage: 'Nationwide'
        },
        {
          id: 'agr-resp-2',
          title: 'Livestock Evacuation Plan',
          description: 'Coordinated plan for evacuating and sheltering livestock during emergencies.',
          status: 'Active',
          lastUpdated: 'February 2024',
          coverage: 'All agricultural regions'
        }
      ],
      recovery: [
        {
          id: 'agr-rec-1',
          title: 'Farmer Relief Program',
          description: 'Financial and technical assistance to farmers affected by disasters to restart agricultural activities.',
          status: 'Ongoing',
          budget: '₨ 25 Million',
          beneficiaries: '1,200 farmers'
        },
        {
          id: 'agr-rec-2',
          title: 'Soil Rehabilitation Initiative',
          description: 'Techniques and resources for rehabilitating farmland affected by floods, landslides, or other disasters.',
          status: 'Active',
          coverage: '850 hectares',
          partners: 'Environmental Protection Agency, Land Resources Division'
        }
      ],
      preparedness: [
        {
          id: 'agr-prep-1',
          title: 'Seasonal Disaster Preparedness Training',
          description: 'Regular training sessions for farmers on preparing for seasonal disasters like cyclones and floods.',
          status: 'Recurring',
          frequency: 'Quarterly',
          participants: '500+ farmers per session'
        },
        {
          id: 'agr-prep-2',
          title: 'Early Warning System for Agricultural Threats',
          description: 'Specialized early warning system for agricultural threats including pests, diseases, and weather events.',
          status: 'Operational',
          coverage: 'All agricultural districts',
          technology: 'SMS alerts, radio broadcasts, mobile app'
        }
      ]
    },
    members: [
      {
        id: 'agr-mem-1',
        name: 'Dr. Anand Ramkissoon',
        position: 'Chairperson',
        organization: 'Ministry of Agriculture',
        contact: 'a.ramkissoon@agriculture.gov.mu'
      },
      {
        id: 'agr-mem-2',
        name: 'Mrs. Leela Devi Sobnauth',
        position: 'Deputy Chair',
        organization: 'Agricultural Research Institute',
        contact: 'l.sobnauth@ari.gov.mu'
      },
      {
        id: 'agr-mem-3',
        name: 'Mr. Vikram Gopaul',
        position: 'Secretary',
        organization: 'Farmers Association',
        contact: 'v.gopaul@farmersassoc.mu'
      }
    ]
  },
  'civil-service': {
    name: 'Civil Service',
    title: 'Civil Service Council',
    description: 'The Civil Service Council coordinates disaster management efforts across all government departments, ensuring continuity of essential public services during emergencies and disasters.',
    established: '2016',
    memberCount: '22',
    ministerialRepresentation: '12',
    coordinationCenters: '5',
    responseTeams: '8',
    annualBudget: '₨ 90 Million',
    leadership: {
      name: 'Mrs. Shanti Bhushan',
      position: 'Chairperson',
      appointment: 'August 2023',
      tenure: '4 Years',
      background: 'Public Administration'
    },
    activities: {
      resilience: [
        {
          id: 'cs-res-1',
          title: 'Government Continuity Planning',
          description: 'Developing and maintaining plans to ensure essential government functions continue during disasters.',
          status: 'Ongoing',
          startDate: 'January 2024',
          endDate: 'December 2025',
          budget: '₨ 15 Million',
          lead: 'Public Service Commission'
        },
        {
          id: 'cs-res-2',
          title: 'Critical Infrastructure Protection',
          description: 'Identifying and strengthening critical government infrastructure against various hazards.',
          status: 'Active',
          startDate: 'March 2024',
          endDate: 'February 2026',
          budget: '₨ 22 Million',
          lead: 'Infrastructure Division'
        }
      ],
      response: [
        {
          id: 'cs-resp-1',
          title: 'Emergency Staffing Protocol',
          description: 'Procedures for mobilizing government staff during emergencies to maintain essential services.',
          status: 'Active',
          lastUpdated: 'May 2024',
          coverage: 'All government departments'
        },
        {
          id: 'cs-resp-2',
          title: 'Interagency Coordination Mechanism',
          description: 'Framework for coordinating response efforts across different government agencies.',
          status: 'Active',
          lastUpdated: 'April 2024',
          coverage: 'National'
        }
      ],
      recovery: [
        {
          id: 'cs-rec-1',
          title: 'Public Service Restoration Plan',
          description: 'Comprehensive plan for rapidly restoring public services after disasters.',
          status: 'Ongoing',
          budget: '₨ 18 Million',
          coverage: 'All public services'
        },
        {
          id: 'cs-rec-2',
          title: 'Government Facilities Rehabilitation',
          description: 'Program for repairing and rehabilitating government facilities damaged in disasters.',
          status: 'Active',
          budget: '₨ 30 Million',
          partners: 'Public Infrastructure Department, Finance Ministry'
        }
      ],
      preparedness: [
        {
          id: 'cs-prep-1',
          title: 'Civil Servant Emergency Training',
          description: 'Regular training for civil servants on emergency procedures and disaster response.',
          status: 'Recurring',
          frequency: 'Bimonthly',
          participants: '1,000+ civil servants per session'
        },
        {
          id: 'cs-prep-2',
          title: 'Government Emergency Communications System',
          description: 'Dedicated communication system for government agencies during emergencies.',
          status: 'Operational',
          coverage: 'All government departments',
          technology: 'Satellite phones, encrypted radio, backup internet'
        }
      ]
    },
    members: [
      {
        id: 'cs-mem-1',
        name: 'Mrs. Shanti Bhushan',
        position: 'Chairperson',
        organization: 'Public Service Commission',
        contact: 's.bhushan@psc.gov.mu'
      },
      {
        id: 'cs-mem-2',
        name: 'Mr. Raj Gopee',
        position: 'Deputy Chair',
        organization: 'Ministry of Public Service',
        contact: 'r.gopee@publicservice.gov.mu'
      },
      {
        id: 'cs-mem-3',
        name: 'Dr. Meena Ramgoolam',
        position: 'Secretary',
        organization: 'Civil Service College',
        contact: 'm.ramgoolam@csc.gov.mu'
      }
    ]
  },
  'education': {
    name: 'Education',
    title: 'Education Council',
    description: 'The Education Council focuses on disaster management in educational institutions, ensuring student safety, school infrastructure resilience, and continuity of education during and after disasters.',
    established: '2016',
    memberCount: '20',
    ministerialRepresentation: '4',
    coordinationCenters: '4',
    responseTeams: '10',
    annualBudget: '₨ 85 Million',
    leadership: {
      name: 'Prof. Dhiren Parbhoo',
      position: 'Chairperson',
      appointment: 'July 2022',
      tenure: '3 Years',
      background: 'Educational Administration'
    },
    activities: {
      resilience: [
        {
          id: 'edu-res-1',
          title: 'School Building Resilience Program',
          description: 'Retrofitting and strengthening school buildings to withstand natural disasters.',
          status: 'Ongoing',
          startDate: 'February 2024',
          endDate: 'January 2026',
          budget: '₨ 25 Million',
          lead: 'School Infrastructure Division'
        },
        {
          id: 'edu-res-2',
          title: 'Educational Continuity Planning',
          description: 'Developing plans to ensure education continues during and after disasters.',
          status: 'Active',
          startDate: 'April 2024',
          endDate: 'March 2025',
          budget: '₨ 12 Million',
          lead: 'Curriculum Development Unit'
        }
      ],
      response: [
        {
          id: 'edu-resp-1',
          title: 'School Emergency Response Protocol',
          description: 'Standardized procedures for schools to follow during various types of emergencies.',
          status: 'Active',
          lastUpdated: 'March 2024',
          coverage: 'All public and private schools'
        },
        {
          id: 'edu-resp-2',
          title: 'Student Safety and Evacuation Plan',
          description: 'Comprehensive plan for evacuating students and ensuring their safety during emergencies.',
          status: 'Active',
          lastUpdated: 'May 2024',
          coverage: 'All educational institutions'
        }
      ],
      recovery: [
        {
          id: 'edu-rec-1',
          title: 'School Rehabilitation Program',
          description: 'Rapid assessment and rehabilitation of schools damaged by disasters.',
          status: 'Ongoing',
          budget: '₨ 20 Million',
          coverage: 'All affected schools'
        },
        {
          id: 'edu-rec-2',
          title: 'Educational Support for Affected Students',
          description: 'Providing educational materials, counseling, and support to students affected by disasters.',
          status: 'Active',
          budget: '₨ 15 Million',
          partners: 'UNICEF, Save the Children, Local NGOs'
        }
      ],
      preparedness: [
        {
          id: 'edu-prep-1',
          title: 'School Disaster Preparedness Drills',
          description: 'Regular drills in schools to prepare students and staff for various emergency scenarios.',
          status: 'Recurring',
          frequency: 'Monthly',
          participants: 'All schools nationwide'
        },
        {
          id: 'edu-prep-2',
          title: 'Disaster Education Curriculum',
          description: 'Integration of disaster preparedness and safety into school curriculum.',
          status: 'Implemented',
          coverage: 'All grade levels',
          materials: 'Textbooks, interactive modules, teacher guides'
        }
      ]
    },
    members: [
      {
        id: 'edu-mem-1',
        name: 'Prof. Dhiren Parbhoo',
        position: 'Chairperson',
        organization: 'Ministry of Education',
        contact: 'd.parbhoo@education.gov.mu'
      },
      {
        id: 'edu-mem-2',
        name: 'Dr. Amina Fatima',
        position: 'Deputy Chair',
        organization: 'University of Mauritius',
        contact: 'a.fatima@uom.ac.mu'
      },
      {
        id: 'edu-mem-3',
        name: 'Mr. Jean-Paul Laval',
        position: 'Secretary',
        organization: 'Private Schools Association',
        contact: 'jp.laval@psa.mu'
      }
    ]
  },
  'external-affairs': {
    name: 'External Affairs',
    title: 'External Affairs Council',
    description: 'The External Affairs Council coordinates international disaster assistance, manages foreign aid during emergencies, and represents Mauritius in international disaster management forums.',
    established: '2016',
    memberCount: '15',
    ministerialRepresentation: '6',
    coordinationCenters: '2',
    responseTeams: '4',
    annualBudget: '₨ 65 Million',
    leadership: {
      name: 'Ambassador Reza Uteem',
      position: 'Chairperson',
      appointment: 'September 2023',
      tenure: '4 Years',
      background: 'International Relations'
    },
    activities: {
      resilience: [
        {
          id: 'ea-res-1',
          title: 'International Cooperation Framework',
          description: 'Establishing frameworks for international cooperation in disaster resilience and climate adaptation.',
          status: 'Ongoing',
          startDate: 'January 2024',
          endDate: 'December 2025',
          budget: '₨ 8 Million',
          lead: 'International Relations Division'
        },
        {
          id: 'ea-res-2',
          title: 'Regional Resilience Initiative',
          description: 'Collaborative program with neighboring countries to enhance regional disaster resilience.',
          status: 'Active',
          startDate: 'March 2024',
          endDate: 'February 2026',
          budget: '₨ 14 Million',
          lead: 'Regional Affairs Department'
        }
      ],
      response: [
        {
          id: 'ea-resp-1',
          title: 'International Aid Coordination Protocol',
          description: 'Procedures for coordinating international aid and assistance during major disasters.',
          status: 'Active',
          lastUpdated: 'April 2024',
          coverage: 'All international partners'
        },
        {
          id: 'ea-resp-2',
          title: 'Diplomatic Emergency Response Plan',
          description: 'Plan for mobilizing diplomatic resources during emergencies affecting Mauritius or its citizens abroad.',
          status: 'Active',
          lastUpdated: 'February 2024',
          coverage: 'Global'
        }
      ],
      recovery: [
        {
          id: 'ea-rec-1',
          title: 'International Recovery Assistance Program',
          description: 'Framework for securing and managing international assistance for post-disaster recovery.',
          status: 'Ongoing',
          budget: '₨ 12 Million',
          partners: 'UN agencies, World Bank, bilateral partners'
        },
        {
          id: 'ea-rec-2',
          title: 'Diaspora Engagement for Recovery',
          description: 'Engaging the Mauritian diaspora in supporting recovery efforts after major disasters.',
          status: 'Active',
          coverage: 'Global Mauritian diaspora',
          partners: 'Diaspora associations, embassies, consulates'
        }
      ],
      preparedness: [
        {
          id: 'ea-prep-1',
          title: 'International Disaster Preparedness Training',
          description: 'Training for diplomatic staff on international disaster protocols and coordination.',
          status: 'Recurring',
          frequency: 'Quarterly',
          participants: 'All diplomatic personnel'
        },
        {
          id: 'ea-prep-2',
          title: 'International Emergency Communications System',
          description: 'Secure communication system for coordinating with international partners during emergencies.',
          status: 'Operational',
          coverage: 'All diplomatic missions',
          technology: 'Satellite communications, encrypted channels'
        }
      ]
    },
    members: [
      {
        id: 'ea-mem-1',
        name: 'Ambassador Reza Uteem',
        position: 'Chairperson',
        organization: 'Ministry of Foreign Affairs',
        contact: 'r.uteem@foreignaffairs.gov.mu'
      },
      {
        id: 'ea-mem-2',
        name: 'Ms. Nadia Daby',
        position: 'Deputy Chair',
        organization: 'International Cooperation Department',
        contact: 'n.daby@icd.gov.mu'
      },
      {
        id: 'ea-mem-3',
        name: 'Mr. Kamal Rughoobur',
        position: 'Secretary',
        organization: 'Diplomatic Corps',
        contact: 'k.rughoobur@diplomacy.gov.mu'
      }
    ]
  },
  'disaster-management': {
    name: 'Disaster Management',
    title: 'Disaster Management Council',
    description: 'The Disaster Management Council is the primary coordinating body for all disaster-related activities in Mauritius, overseeing prevention, preparedness, response, and recovery efforts nationwide.',
    established: '2016',
    memberCount: '25',
    ministerialRepresentation: '20+',
    coordinationCenters: '6',
    responseTeams: '12',
    annualBudget: '₨ 250 Million',
    leadership: {
      name: 'Dr. Rajesh Ramphul',
      position: 'Chairperson',
      appointment: 'April 2022',
      tenure: '4 Years',
      background: 'Public Infrastructure'
    },
    activities: {
      resilience: [
        {
          id: 'dm-res-1',
          title: 'National Resilience Framework',
          description: 'Comprehensive framework for building national resilience to disasters and climate change impacts.',
          status: 'Ongoing',
          startDate: 'January 2024',
          endDate: 'December 2026',
          budget: '₨ 45 Million',
          lead: 'National Planning Division'
        },
        {
          id: 'dm-res-2',
          title: 'Critical Infrastructure Resilience Program',
          description: 'Nationwide program to strengthen critical infrastructure against various hazards.',
          status: 'Active',
          startDate: 'February 2024',
          endDate: 'January 2027',
          budget: '₨ 60 Million',
          lead: 'Infrastructure Protection Unit'
        }
      ],
      response: [
        {
          id: 'dm-resp-1',
          title: 'National Emergency Response Plan',
          description: 'Master plan coordinating all national resources for emergency response.',
          status: 'Active',
          lastUpdated: 'May 2024',
          coverage: 'Nationwide'
        },
        {
          id: 'dm-resp-2',
          title: 'Multi-Hazard Early Warning System',
          description: 'Integrated system providing early warnings for multiple hazards across the country.',
          status: 'Operational',
          lastUpdated: 'April 2024',
          coverage: 'All districts'
        }
      ],
      recovery: [
        {
          id: 'dm-rec-1',
          title: 'National Disaster Recovery Framework',
          description: 'Comprehensive framework guiding recovery efforts after major disasters.',
          status: 'Ongoing',
          budget: '₨ 75 Million',
          coverage: 'Nationwide'
        },
        {
          id: 'dm-rec-2',
          title: 'Post-Disaster Needs Assessment Protocol',
          description: 'Standardized methodology for assessing needs after disasters to guide recovery planning.',
          status: 'Active',
          coverage: 'All sectors',
          partners: 'UN agencies, World Bank, sectoral ministries'
        }
      ],
      preparedness: [
        {
          id: 'dm-prep-1',
          title: 'National Disaster Preparedness Program',
          description: 'Comprehensive program preparing government agencies, communities, and the private sector for disasters.',
          status: 'Ongoing',
          frequency: 'Year-round',
          budget: '₨ 40 Million annually'
        },
        {
          id: 'dm-prep-2',
          title: 'National Emergency Exercises',
          description: 'Regular national-level exercises simulating major disasters to test response capabilities.',
          status: 'Recurring',
          frequency: 'Biannually',
          participants: 'All emergency services, government agencies, selected communities'
        }
      ]
    },
    members: [
      {
        id: 'dm-mem-1',
        name: 'Dr. Rajesh Ramphul',
        position: 'Chairperson',
        organization: 'Ministry of Public Infrastructure',
        contact: 'r.ramphul@ndrrmc.gov.mu'
      },
      {
        id: 'dm-mem-2',
        name: 'Gen. Vimal Sharma',
        position: 'Deputy Chair',
        organization: 'National Security Council',
        contact: 'v.sharma@nsc.gov.mu'
      },
      {
        id: 'dm-mem-3',
        name: 'Dr. Amina Cassim',
        position: 'Secretary',
        organization: 'NDRRMC Secretariat',
        contact: 'a.cassim@ndrrmc.gov.mu'
      }
    ]
  }
};

// Define types
export type CouncilKey = keyof typeof councilData;
export type CouncilDataType = typeof councilData[CouncilKey];

export default councilData;
