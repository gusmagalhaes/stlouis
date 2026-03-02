"use client";

import { useState, useMemo } from "react";
import StoreMap from "./store-map";

function distanceKm(a, b) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  const d = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  return R * d;
}

export default function StoreLocator({ stores }) {
  const [search, setSearch] = useState("");
  const [sortMode, setSortMode] = useState("default");
  const [userLocation, setUserLocation] = useState(null);
  const [selectedId, setSelectedId] = useState(stores[0]?.id ?? null);

  const handleNearMe = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setSortMode("nearby");
      },
      () => setSortMode("default")
    );
  };

  const filteredStores = useMemo(() => {
    const q = search.toLowerCase();
    let res = stores.filter(
      (s) =>
        s.name.toLowerCase().includes(q) || s.address.toLowerCase().includes(q)
    );
    if (sortMode === "nearby" && userLocation) {
      res = [...res].sort(
        (a, b) => distanceKm(userLocation, a) - distanceKm(userLocation, b)
      );
    }
    return res;
  }, [search, sortMode, userLocation, stores]);

  const selectedStore =
    filteredStores.find((s) => s.id === selectedId) ?? filteredStores[0];

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-6 lg:flex-row lg:gap-8">
      <section className="w-full lg:w-[40%] flex flex-col gap-4">
        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search for city name, street, etc."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#e41e2b]"
            />
            <button
              type="button"
              onClick={handleNearMe}
              className="px-3 py-2 border border-gray-300 rounded-md text-xs font-semibold bg-white hover:bg-gray-50"
            >
              Near Me
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4 overflow-y-auto max-h-[520px] pr-1">
          {filteredStores.map((store) => (
            <button
              key={store.id}
              type="button"
              onClick={() => setSelectedId(store.id)}
              className={`text-left bg-white rounded-xl shadow p-4 border transition-colors ${
                selectedStore && store.id === selectedStore.id
                  ? "border-[#e41e2b]"
                  : "border-transparent hover:border-gray-200"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2 className="font-extrabold text-sm uppercase text-[#1a1547]">
                    St. Louis Bar & Grill
                  </h2>
                  <p className="mt-1 text-xs text-gray-600 leading-snug">
                    {store.address}
                  </p>
                  {store.phone && (
                    <p className="mt-1 text-xs text-[#e41e2b] underline">
                      {store.phone}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-700 font-semibold">
                    Dine in, Delivery and Takeout
                  </p>
                  <p className="mt-0.5 text-[11px] text-green-700 font-semibold">
                    {store.hours}
                  </p>
                </div>
                <div className="text-[11px] text-gray-500">0.3 mi</div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[110px] text-center bg-white border border-[#e41e2b] text-[#e41e2b] text-xs font-bold py-2 rounded-full hover:bg-[#ffe5e7]"
                >
                  View Page
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(store.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[110px] text-center bg-[#e41e2b] text-white text-xs font-bold py-2 rounded-full hover:bg-[#c9171f]"
                >
                  Get Directions
                </a>
              </div>

              <button
                type="button"
                className="mt-3 text-[11px] text-gray-600 flex items-center gap-1"
              >
                <span className="inline-block w-3 h-3 rounded-full border border-gray-400" />
                SELECT AS MY STORE
              </button>
            </button>
          ))}

          {filteredStores.length === 0 && (
            <p className="text-center text-sm text-gray-600 py-8">
              No locations match your search.
            </p>
          )}
        </div>
      </section>

      <section className="w-full lg:flex-1">
        <StoreMap
          stores={filteredStores}
          selectedStore={selectedStore}
          userLocation={userLocation}
        />
      </section>
    </main>
  );
}
