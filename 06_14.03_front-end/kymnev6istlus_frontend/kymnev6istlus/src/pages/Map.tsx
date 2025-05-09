import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Map() {
  return (
    <div>
        <MapContainer className='map' center={[59.39970143508964, 24.764100045502307]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[59.397098735317215, 24.768426177400737]}>
            <Popup>
            Iz a lake
            </Popup>
        </Marker>
        <Marker  position={[52.977771907403095, 9.184652962419394]}>
            <Popup>
                I think I've been here before?
            </Popup>
        </Marker>
        </MapContainer>

    </div>
  )
}

export default Map