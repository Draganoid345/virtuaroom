import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'

import LocationOnIcon from '@mui/icons-material/LocationOn';

const location = {
    address: 'Coriolan Brediceanu nr 2',
    lat: 45.7562981,
    lng: 21.2265894,
}

const LocationPin = ({ text }) => (
    <div className="pin">
        <LocationOnIcon fontSize="large"/>
        <p className="pin-text">{text}</p>
    </div>
)

const Map = ({ location, zoomLevel }) => {
    return(
    <div className="map">
        <h2 className="map-h2">Virtuaroom HQ</h2>

        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    </div>
    );}

export default Map;