import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {

    const mapStyles = {
        height: '50vh',
        width: '100%'
    }

    const defaultCenter = {
        lat: 19.4267261, lng: -99.1718796
    }

    return (
        <LoadScript googleMApsApiKey='AIzaSyAlTw2c-z5WxoD4dAfv37WhmAl1UTCrlp8'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={9}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;