import React, { useEffect, useRef, useMemo } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const defaultIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const activeIcon = L.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [1, -34]
});

type Point = {
  latitude: number;
  longitude: number;
  id: string;
  title?: string;
  price?: number;
  type?: string;
};

type MapProps = {
  points: Point[];
  center: [number, number];
  zoom: number;
  className?: string;
  selectedPointId: string | null;
};

function FitBoundsUpdater({ points }: { points: Point[] }) {
  const map = useMap();

  useEffect(() => {
    if (points.length === 0) {
      return;
    }
    const latLngs = points.map(p => [p.latitude, p.longitude] as [number, number]);
    const bounds = L.latLngBounds(latLngs);
    map.fitBounds(bounds.pad(0.3)); 
  }, [points, map]);

  return null;
}

export function Map({
  points,
  center,
  zoom = 12,
  className = 'cities__map',
  selectedPointId
}: MapProps) {
  const filteredPoints = useMemo(
    () => points.filter(p => p.latitude != null && p.longitude != null),
    [points]
  );

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className={className}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FitBoundsUpdater points={filteredPoints} />

      {filteredPoints.map((point) => (
        <Marker
          key={point.id}
          position={[point.latitude, point.longitude]}
          icon={point.id === selectedPointId ? activeIcon : defaultIcon}
        >
          {point.title && (
            <Popup>
              <div>
                <b>{point.title}</b>
                {point.type && point.price && (
                  <p>{point.type} · €{point.price}/night</p>
                )}
              </div>
            </Popup>
          )}
        </Marker>
      ))}
    </MapContainer>
  );
}
