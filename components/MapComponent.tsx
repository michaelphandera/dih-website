'use client';

import React, { useEffect, useMemo } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap, Circle } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

// This component will handle map center and zoom changes
interface MapCenterProps {
  center: [number, number];
  zoom: number;
}

const ChangeMapView: React.FC<MapCenterProps> = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);

  return null;
};

// This component will render a visual representation of the selected district
interface DistrictHeatmapProps {
  district: {
    name: string;
    coordinates: [number, number];
    area: string;
    riskLevel: string;
    population: string;
  };
  isSelected: boolean;
}

const DistrictHeatmap: React.FC<DistrictHeatmapProps> = ({ district, isSelected }) => {
  // Generate a circle around the district center with radius based on area
  // This is a simplified approach - in a real app, you'd use actual district boundaries
  const getRadiusFromArea = (areaStr: string) => {
    // Extract the numeric part from area string (e.g., "42.7 km²" -> 42.7)
    const areaMatch = areaStr.match(/(\d+(\.\d+)?)/);
    const area = areaMatch ? parseFloat(areaMatch[0]) : 50;

    // Convert area (km²) to radius (m) assuming circular area
    // Area = π * r²
    // r = √(Area / π)
    const radiusKm = Math.sqrt(area / Math.PI);
    return radiusKm * 1000; // Convert to meters
  };

  // Get risk color based on risk level
  const getRiskColor = (riskLevel: string) => {
    if (riskLevel.toLowerCase().includes('low')) return '#ffe0b2';
    if (riskLevel.toLowerCase().includes('medium')) return '#ffab40';
    return '#ff6e40';
  };

  const baseRadius = getRadiusFromArea(district.area);
  const mainColor = getRiskColor(district.riskLevel);

  if (!isSelected) return null;

  // Calculate coordinates for risk areas
  // This is a simplified approach - in a real app, you'd use actual GeoJSON data
  const center = district.coordinates as [number, number];
  const [lat, lng] = center;

  // Create a main district circle
  const mainCircle = (
    <Circle
      center={center as LatLngExpression}
      radius={baseRadius}
      pathOptions={{
        color: mainColor,
        fillColor: mainColor,
        fillOpacity: 0.15,
        weight: 2,
        className: 'selected-district'
      }}
    />
  );

  // Create circles for different risk areas using useMemo to prevent re-rendering
  // This ensures the circles don't change position on every render
  const riskCircles = useMemo(() => {
    // Generate a seed based on district name to ensure consistent random positions
    const seed = district.name.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0);
    const seededRandom = (n: number) => {
      return ((seed * 9301 + 49297) % 233280) / 233280 * n;
    };

    // High risk areas (smaller circles within the district)
    const highRiskCircles = Array.from({ length: 3 }).map((_, i) => {
      // Seeded random position within the district
      const angle = seededRandom(Math.PI * 2) + (i * Math.PI * 2 / 3);
      const distance = seededRandom(baseRadius * 0.7);
      const highRiskLat = lat + (Math.sin(angle) * distance) / 111000;
      const highRiskLng = lng + (Math.cos(angle) * distance) / (111000 * Math.cos(lat * Math.PI / 180));

      return (
        <Circle
          key={`high-risk-${i}`}
          center={[highRiskLat, highRiskLng] as LatLngExpression}
          radius={baseRadius * 0.15}
          pathOptions={{
            color: '#ff6e40',
            fillColor: '#ff6e40',
            fillOpacity: 0.4,
            weight: 1
          }}
        />
      );
    });

    // Medium risk areas
    const mediumRiskCircles = Array.from({ length: 5 }).map((_, i) => {
      const angle = seededRandom(Math.PI * 2) + (i * Math.PI * 2 / 5);
      const distance = seededRandom(baseRadius * 0.8);
      const mediumRiskLat = lat + (Math.sin(angle) * distance) / 111000;
      const mediumRiskLng = lng + (Math.cos(angle) * distance) / (111000 * Math.cos(lat * Math.PI / 180));

      return (
        <Circle
          key={`medium-risk-${i}`}
          center={[mediumRiskLat, mediumRiskLng] as LatLngExpression}
          radius={baseRadius * 0.2}
          pathOptions={{
            color: '#ffab40',
            fillColor: '#ffab40',
            fillOpacity: 0.3,
            weight: 1
          }}
        />
      );
    });

    // Low risk areas
    const lowRiskCircles = Array.from({ length: 4 }).map((_, i) => {
      const angle = seededRandom(Math.PI * 2) + (i * Math.PI * 2 / 4);
      const distance = seededRandom(baseRadius * 0.9);
      const lowRiskLat = lat + (Math.sin(angle) * distance) / 111000;
      const lowRiskLng = lng + (Math.cos(angle) * distance) / (111000 * Math.cos(lat * Math.PI / 180));

      return (
        <Circle
          key={`low-risk-${i}`}
          center={[lowRiskLat, lowRiskLng] as LatLngExpression}
          radius={baseRadius * 0.25}
          pathOptions={{
            color: '#ffe0b2',
            fillColor: '#ffe0b2',
            fillOpacity: 0.3,
            weight: 1
          }}
        />
      );
    });

    return { highRiskCircles, mediumRiskCircles, lowRiskCircles };
  }, [district.name, baseRadius, lat, lng]);

  return (
    <>
      {mainCircle}
      {riskCircles.lowRiskCircles}
      {riskCircles.mediumRiskCircles}
      {riskCircles.highRiskCircles}
    </>
  );
};

// Define the props for the MapComponent
interface MapComponentProps {
  districts: Record<string, {
    name: string;
    coordinates: [number, number];
    area: string;
    riskLevel: string;
    population: string;
  }>;
  selectedDistrict: string;
  onDistrictSelect: (district: string) => void;
  center: [number, number];
  zoom: number;
}

const MapComponent: React.FC<MapComponentProps> = ({
  districts,
  selectedDistrict,
  onDistrictSelect,
  center,
  zoom
}) => {
  // Fix Leaflet icon issue
  useEffect(() => {
    // Fix Leaflet default icon issue
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <MapContainer
      center={center as LatLngExpression}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%', zIndex: 1 }}
      className="leaflet-map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* This component will update the map view when center or zoom changes */}
      <ChangeMapView center={center} zoom={zoom} />

      {/* Add heatmap visualization for the selected district */}
      {Object.entries(districts).map(([key, district]) => (
        <DistrictHeatmap
          key={`heatmap-${key}`}
          district={district}
          isSelected={key === selectedDistrict}
        />
      ))}

      {/* Add markers for all districts */}
      {Object.entries(districts).map(([key, district]) => (
        <Marker
          key={key}
          position={district.coordinates as LatLngExpression}
          eventHandlers={{
            click: () => {
              onDistrictSelect(key);
            }
          }}
          icon={L.divIcon({
            className: `district-marker ${key === selectedDistrict ? 'active' : ''}`,
            iconSize: [12, 12],
            iconAnchor: [6, 6]
          })}
        >
          <Popup>
            <div className="district-popup">
              <div className="district-name">{district.name} District</div>
              <div className="district-stats">
                Population: {district.population}<br />
                Risk Level: {district.riskLevel}
              </div>
              <div className={`district-risk ${district.riskLevel.toLowerCase().includes('low') ? 'risk-low' : district.riskLevel.toLowerCase().includes('medium') ? 'risk-medium' : 'risk-high'}`}>
                {district.riskLevel} Risk
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
