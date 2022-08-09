import React, { useState } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";

const Maps = () => {
  const [center, setCenter] = useState({ lat: 13.084, lng: 80.248357 });
  const ZOOM_LEVEL = 9;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2>React Leaflet</h2>
            <p>Map</p>
            <div className="col">
              <MapContainer center={center} zoom={ZOOM_LEVEL}>
                <TileLayer url="https://vectortile.naxa.com.np/federal/province.mvt/?tile={z}/{x}/{y}" />
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maps;
