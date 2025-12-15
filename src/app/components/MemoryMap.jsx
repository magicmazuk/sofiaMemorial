import { useEffect, useMemo, useState } from 'react';
import 'leaflet/dist/leaflet.css';

export default function MemoryMap({ center, pins }) {
  const [mods, setMods] = useState(null);

  // Load modules on client; keep hooks order stable on every render
  useEffect(() => {
    let mounted = true;
    Promise.all([
      import('react-leaflet'),
      import('leaflet')
    ]).then(([RL, leaflet]) => {
      if (!mounted) return;
      const L = leaflet.default ?? leaflet;
      setMods({ RL, L });
    });
    return () => { mounted = false; };
  }, []);

  // Derive parts and icon consistently via hooks, even before mods load
  const LeafletParts = useMemo(() => {
    if (!mods) return null;
    const { MapContainer, TileLayer, Marker, Popup } = mods.RL;
    return { MapContainer, TileLayer, Marker, Popup };
  }, [mods]);

  const defaultIcon = useMemo(() => {
    if (!mods) return null;
    const L = mods.L;
    return new L.Icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
    });
  }, [mods]);

  // Apply icon once modules are ready
  useEffect(() => {
    if (mods && defaultIcon) {
      mods.L.Marker.prototype.options.icon = defaultIcon;
    }
  }, [mods, defaultIcon]);

  // Wait for modules before rendering the map
  if (!LeafletParts) return null;
  const { MapContainer, TileLayer, Marker, Popup } = LeafletParts;

  return (
    <section className="memoryMapSection" aria-label="Memory Map">
      <div className="memoryMapHeader">
        <h2 className="memoryMapTitle">Memory Map</h2>
        <p className="memoryMapSubtitle">Little places, big love</p>
      </div>
      <div className="memoryMapWrap">
        <MapContainer className="memoryMap" center={[center.lat, center.lng]} zoom={center.zoom} scrollWheelZoom={false}>
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {pins.map(p => (
            <Marker key={p.id} position={[p.lat, p.lng]}>
              <Popup>
                <div className="mapPopup">
                  <div className="mapPopupTitle">{p.icon} {p.name}</div>
                  {p.note ? <div className="mapPopupNote">{p.note}</div> : null}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}