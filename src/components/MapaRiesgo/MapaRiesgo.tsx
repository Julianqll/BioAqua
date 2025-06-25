import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const colorPorNivel = {
  Bajo: 'green',
  Moderado: 'orange',
  Alto: 'red',
};

const iconoPorNivel = (nivel: 'Bajo' | 'Moderado' | 'Alto') =>
  new Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${colorPorNivel[nivel]}.png`,
    iconSize: [30, 50],
    iconAnchor: [15, 50],
    popupAnchor: [0, -40],
  });

const muestras = [
  { rio: 'Río Amazonas', nivel: 'Alto', coords: [-3.75, -73.25] },
  { rio: 'Río Ucayali', nivel: 'Moderado', coords: [-7.5, -74.5] },
  { rio: 'Río Tambo', nivel: 'Bajo', coords: [-11.25, -74.75] },
];

export function MapaRiesgo() {
  return (
    <MapContainer center={[-7.5, -74.5]} zoom={5} style={{ height: 400, borderRadius: 8 }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {muestras.map((muestra, idx) => (
        <Marker
          key={idx}
          position={muestra.coords as [number, number]}
          icon={iconoPorNivel(muestra.nivel as 'Bajo' | 'Moderado' | 'Alto')}
        >
          <Popup>
            <strong>{muestra.rio}</strong>
            <br />
            Nivel: {muestra.nivel}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}