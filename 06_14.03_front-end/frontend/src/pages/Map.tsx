import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Map() {
  return (
    <div>
        <MapContainer className="map" center={[59.43562024060438, 24.745863692402622]} zoom={10} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.977770945235, 9.184717577788232]}>
            <Popup>
            A cute boy lives here <br /> I love him
            </Popup>
        </Marker>
        <Marker position={[59.42723881763144, 24.723036182600037]}>
            <Popup>
                Kristiine keskus
            </Popup>
        </Marker>
        <Marker position={[59.42196636407477, 24.793942099786697]}>
            <Popup>
                Ülemiste keskus
            </Popup>
        </Marker>
        <Marker position={[55.753902069951664, 37.6207923305572]}>
            <Popup>
                Debil Ivan lives here
            </Popup>
        </Marker>
        </MapContainer>

    </div>
    
  )
}

export default Map