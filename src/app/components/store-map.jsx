"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const defaultCenter = [43.6564, -79.3826];

const markerIcon = L.divIcon({
  className: "",
  html: '<div style="width:16px;height:16px;background:#e41e2b;border-radius:9999px;border:2px solid white;box-shadow:0 0 4px rgba(0,0,0,0.4);"></div>',
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

const selectedIcon = L.divIcon({
  className: "",
  html: '<div style="width:22px;height:22px;background:#ffd100;border-radius:9999px;border:3px solid #e41e2b;box-shadow:0 0 6px rgba(0,0,0,0.5);"></div>',
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

const userIcon = L.divIcon({
  className: "",
  html: '<div style="width:18px;height:18px;background:#1d4ed8;border-radius:9999px;border:3px solid white;box-shadow:0 0 6px rgba(0,0,0,0.5);"></div>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

function MapViewUpdater({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) map.flyTo(center, 14, { duration: 0.8 });
  }, [center, map]);
  return null;
}

export default function StoreMap({ stores, selectedStore, userLocation }) {
  const center = selectedStore
    ? [selectedStore.lat, selectedStore.lng]
    : defaultCenter;

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom
      className="h-[520px] w-full rounded-xl overflow-hidden shadow"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapViewUpdater center={center} />
      {stores.map((store) => (
        <Marker
          key={store.id}
          position={[store.lat, store.lng]}
          icon={
            selectedStore && store.id === selectedStore.id
              ? selectedIcon
              : markerIcon
          }
        >
          <Popup>
            <strong>{store.name}</strong>
            <br />
            {store.address}
          </Popup>
        </Marker>
      ))}
      {userLocation && (
        <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
          <Popup>You are here</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
