// app/districts/district-data.ts

// District data with risk profiles and coordinates for map
export const districtData = {
  'port-louis': {
    name: 'Port Louis',
    title: 'Port Louis District',
    description: 'Port Louis is the capital city of Mauritius, located on the northwest coast of the island. As a major urban center, it faces unique disaster management challenges including flash floods, urban fires, and coastal threats.',
    population: '147,600',
    area: '42.7 km²',
    elevation: '0-650m',
    evacuationCenters: '14',
    emergencyTeams: '8',
    riskLevel: 'Medium',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-20.1637, 57.5045], // [latitude, longitude]
    riskData: {
      lowRisk: 20,
      mediumRisk: 55,
      highRisk: 25
    },
    lowRiskAreas: 'Central business district, elevated areas',
    mediumRiskAreas: 'Residential zones, commercial areas',
    highRiskAreas: 'Coastal areas, low-lying regions near canals'
  },
  'black-river': {
    name: 'Black River',
    title: 'Black River District',
    description: 'Black River (Rivière Noire) is located on the western coast of Mauritius. The district is known for its beautiful beaches, mountains, and natural parks, but faces challenges related to coastal erosion and flash floods.',
    population: '83,500',
    area: '259.0 km²',
    elevation: '0-828m',
    evacuationCenters: '9',
    emergencyTeams: '5',
    riskLevel: 'Medium-Low',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-20.3484, 57.3696],
    riskData: {
      lowRisk: 45,
      mediumRisk: 40,
      highRisk: 15
    },
    lowRiskAreas: 'Elevated regions, inland areas',
    mediumRiskAreas: 'Coastal settlements, river valleys',
    highRiskAreas: 'Beach fronts, river mouths, low-lying areas'
  },
  'flacq': {
    name: 'Flacq',
    title: 'Flacq District',
    description: 'Flacq is the largest district in Mauritius, located on the eastern coast. It is primarily agricultural with some coastal tourism development, facing risks from cyclones and agricultural drought.',
    population: '138,400',
    area: '297.9 km²',
    elevation: '0-425m',
    evacuationCenters: '12',
    emergencyTeams: '6',
    riskLevel: 'Medium',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-20.2300, 57.7129],
    riskData: {
      lowRisk: 30,
      mediumRisk: 50,
      highRisk: 20
    },
    lowRiskAreas: 'Central highlands, protected inland areas',
    mediumRiskAreas: 'Agricultural plains, rural settlements',
    highRiskAreas: 'Coastal areas, flood-prone agricultural lands'
  },
  'pamplemousses': {
    name: 'Pamplemousses',
    title: 'Pamplemousses District',
    description: 'Pamplemousses is located in the north of Mauritius, known for its botanical garden and historical sites. The district faces moderate risks from flooding and tropical storms.',
    population: '142,900',
    area: '178.7 km²',
    elevation: '0-550m',
    evacuationCenters: '11',
    emergencyTeams: '7',
    riskLevel: 'Medium-Low',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-20.1038, 57.5800],
    riskData: {
      lowRisk: 40,
      mediumRisk: 45,
      highRisk: 15
    },
    lowRiskAreas: 'Elevated regions, central areas',
    mediumRiskAreas: 'Suburban zones, agricultural areas',
    highRiskAreas: 'Low-lying areas, water catchment zones'
  },
  'grand-port': {
    name: 'Grand Port',
    title: 'Grand Port District',
    description: 'Grand Port is located in the southeast of Mauritius. It has historical significance as the site of the only Mauritian naval victory against the British. The district faces risks from coastal flooding and erosion.',
    population: '112,600',
    area: '259.6 km²',
    elevation: '0-621m',
    evacuationCenters: '10',
    emergencyTeams: '6',
    riskLevel: 'Medium',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-20.4000, 57.6700],
    riskData: {
      lowRisk: 35,
      mediumRisk: 45,
      highRisk: 20
    },
    lowRiskAreas: 'Inland elevated areas, central regions',
    mediumRiskAreas: 'Coastal towns, agricultural zones',
    highRiskAreas: 'Low-lying coastal areas, river mouths'
  },
  'moka': {
    name: 'Moka',
    title: 'Moka District',
    description: 'Moka is an inland district in Mauritius, known for its cooler climate and educational institutions. The district faces moderate risks from landslides and flash floods during heavy rainfall.',
    population: '89,800',
    area: '230.5 km²',
    elevation: '200-828m',
    evacuationCenters: '8',
    emergencyTeams: '5',
    riskLevel: 'Low-Medium',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-20.2167, 57.5833],
    riskData: {
      lowRisk: 50,
      mediumRisk: 40,
      highRisk: 10
    },
    lowRiskAreas: 'Higher elevation areas, central plateau',
    mediumRiskAreas: 'Sloped terrain, river valleys',
    highRiskAreas: 'Steep slopes, water catchment areas'
  },
  'plaines-wilhems': {
    name: 'Plaines Wilhems',
    title: 'Plaines Wilhems District',
    description: 'Plaines Wilhems is the most populous district in Mauritius, containing major urban centers like Curepipe and Quatre Bornes. The district faces challenges related to urban flooding and infrastructure stress.',
    population: '368,500',
    area: '203.3 km²',
    elevation: '250-700m',
    evacuationCenters: '18',
    emergencyTeams: '12',
    riskLevel: 'Medium',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-20.3167, 57.5167],
    riskData: {
      lowRisk: 30,
      mediumRisk: 50,
      highRisk: 20
    },
    lowRiskAreas: 'Higher elevation urban areas',
    mediumRiskAreas: 'Densely populated urban zones',
    highRiskAreas: 'Urban flood-prone areas, water catchment zones'
  },
  'riviere-du-rempart': {
    name: 'Rivière du Rempart',
    title: 'Rivière du Rempart District',
    description: 'Rivière du Rempart is located in the north of Mauritius. The district has a mix of agricultural lands and coastal tourism areas, facing risks from coastal erosion and tropical cyclones.',
    population: '108,300',
    area: '147.6 km²',
    elevation: '0-340m',
    evacuationCenters: '9',
    emergencyTeams: '6',
    riskLevel: 'Medium',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-20.0500, 57.6833],
    riskData: {
      lowRisk: 25,
      mediumRisk: 55,
      highRisk: 20
    },
    lowRiskAreas: 'Inland elevated areas, protected zones',
    mediumRiskAreas: 'Agricultural plains, rural settlements',
    highRiskAreas: 'Northern coastal areas, low-lying regions'
  },
  'savanne': {
    name: 'Savanne',
    title: 'Savanne District',
    description: 'Savanne is located in the southern part of Mauritius. The district is known for its natural beauty, including the Rochester Falls and Gris Gris cliffs. It faces risks from coastal erosion and landslides.',
    population: '68,900',
    area: '244.8 km²',
    elevation: '0-621m',
    evacuationCenters: '7',
    emergencyTeams: '4',
    riskLevel: 'Medium-Low',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-20.5000, 57.5000],
    riskData: {
      lowRisk: 40,
      mediumRisk: 45,
      highRisk: 15
    },
    lowRiskAreas: 'Inland elevated areas, central regions',
    mediumRiskAreas: 'Coastal settlements, agricultural zones',
    highRiskAreas: 'Cliff areas, coastal erosion zones, river valleys'
  },
  'rodrigues': {
    name: 'Rodrigues',
    title: 'Rodrigues Island',
    description: 'Rodrigues is an autonomous outer island of Mauritius located in the Indian Ocean. The island faces significant risks from cyclones and coastal erosion due to its isolated location and topography.',
    population: '43,000',
    area: '108 km²',
    elevation: '0-398m',
    evacuationCenters: '12',
    emergencyTeams: '4',
    riskLevel: 'High',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-19.7245, 63.4272],
    riskData: {
      lowRisk: 15,
      mediumRisk: 35,
      highRisk: 50
    },
    lowRiskAreas: 'Central elevated areas',
    mediumRiskAreas: 'Inland settlements, protected bays',
    highRiskAreas: 'Coastal areas, low-lying regions, river mouths'
  },
  'agalega': {
    name: 'Agalega',
    title: 'Agalega Islands',
    description: 'Agalega consists of two small islands in the Indian Ocean governed by Mauritius. With limited infrastructure and remote location, these islands face significant challenges during extreme weather events.',
    population: '300',
    area: '26 km²',
    elevation: '0-8m',
    evacuationCenters: '2',
    emergencyTeams: '1',
    riskLevel: 'Very High',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-10.4000, 56.6167],
    riskData: {
      lowRisk: 5,
      mediumRisk: 25,
      highRisk: 70
    },
    lowRiskAreas: 'Central areas with some elevation',
    mediumRiskAreas: 'Inner settlements',
    highRiskAreas: 'Most of the coastline, low-lying areas'
  },
  'st-brandon': {
    name: 'St. Brandon',
    title: 'St. Brandon Archipelago',
    description: 'St. Brandon (also known as Cargados Carajos) is a group of small islands, islets and reefs in the Indian Ocean. These remote islands are particularly vulnerable to sea level rise and extreme weather events.',
    population: '0-50',
    area: '1.3 km²',
    elevation: '0-6m',
    evacuationCenters: '1',
    emergencyTeams: '0',
    riskLevel: 'Extreme',
    mapImage: '/img/maps/placeholder.svg',
    coordinates: [-16.5833, 59.6167],
    riskData: {
      lowRisk: 0,
      mediumRisk: 10,
      highRisk: 90
    },
    lowRiskAreas: 'None',
    mediumRiskAreas: 'Central parts of larger islets',
    highRiskAreas: 'All coastal areas, most of the land area'
  }
};
