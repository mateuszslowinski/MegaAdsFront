import React, {useContext, useEffect} from "react";
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icons';

import 'leaflet/dist/leaflet.css'
import './Map.css';
import {SearchContext} from "../../contexts/search.context";

class Popup extends React.Component {
    render() {
        return null;
    }
}

export const Map = () => {

    const {search} = useContext(SearchContext);

    useEffect(()=> {

    },[search]);

    return (
        <div className="map">
            <h1>{search}</h1>
            <MapContainer center={[50.2657152, 18.9945008]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[50.2657152, 18.9945008]}>
                    <Popup>
                        <h2>It.focus</h2>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}