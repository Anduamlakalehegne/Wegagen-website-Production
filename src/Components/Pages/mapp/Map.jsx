import React from 'react'
import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, LayersControl, LayerGroup, Marker, Popup, useMapEvents } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
import './Map.css';
import { branch } from './branches_data'
import Branches from './Branches';
import { defaultIcon } from './icon/defaultIcon';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import Atmlocation from './Atmlocation';
// https://codesandbox.io/s/lroutingcontrol-on-react-leaflet-v3-with-hooks-nbu6x?file=/src/Routing.jsx
//SELECT ST_Point( -71.104, 42.315);
const redIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

function LocationMarker() {

  const [position, setPosition] = useState(null)
  const map = useMap();

  useEffect(() => {
    map.locate().on('locationfound', (e) => {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      map.flyTo([lat, lng], map.getZoom());
    });
  }, []);

  useEffect(() => {
    if (position) {
      const marker = L.marker(position, { icon: redIcon }).addTo(map);
      marker.bindPopup("You are here").openPopup();
    }
  }, [position, map]);

  return position === null ? null : (
    <Marker position={position} icon={redIcon}>
      <Popup >You are here</Popup>
    </Marker>
  )
}
    //  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

function Map() {

  return (

    <div style={{width:'100%'}}>
    <MapContainer center={[9.03, 38.75]} zoom={10} scrollWheelZoom={true}  >
      <LayersControl position='topleft'>
        <LayersControl.BaseLayer checked name='Open street map'>

          <TileLayer
            attribution='<a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}" />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name='Sattellite'>
          <TileLayer
            attribution='<a href="https://www.openstreetmap.org/copyright">Sattelite</a> contributors'
            url="http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}" />
        </LayersControl.BaseLayer>


        <LayersControl.Overlay checked name="Branches">
          <LayerGroup> <Branches branch_data={branch} /></LayerGroup>
        </LayersControl.Overlay>



      </LayersControl>
      <LocationMarker />
    </MapContainer>
    </div>

  )
}

export default Map
