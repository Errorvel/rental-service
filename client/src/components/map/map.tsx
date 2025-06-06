// src/components/map/map.tsx
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useMemo, useState } from 'react';

// Фикс для иконок
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

type Point = {
  latitude: number;
  longitude: number;
  id?: string;
  title?: string;
  price?: number;
  type?: string;
};

type MapProps = {
  points: Point[];
  center: [number, number];
  zoom?: number;
  className?: string;
};

const DEFAULT_ZOOM = 12;

export function Map({
  points,
  center,
  zoom = DEFAULT_ZOOM,
  className = 'cities__map',
}: MapProps) {
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    setIsMapReady(true);
  }, []);

  if (!isMapReady) {
    return <div className={className} style={{ height: '100%' }} />;
  }

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
      
      {points.map((point) => (
        <Marker
          key={point.id || `${point.latitude}-${point.longitude}`}
          position={[point.latitude, point.longitude]}
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