import React, { useState } from "react";
import { Map as MapGl, Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { LocationData, SearchResultData, ViewportData } from "../typings";
type MapProps = {
  searchResult: SearchResultData[];
};

const Map: React.FC<MapProps> = ({ searchResult }) => {
  const coordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewState, setViewState] = React.useState({
    latitude: (center && center?.latitude) || 0.0,
    longitude: (center && center?.longitude) || 0.0,
    zoom: 14,
  });

  const [selectedLocation, setSelectedLocation] = useState<LocationData>();
  return (
    <MapGl
      {...viewState}
      mapboxAccessToken={process.env.mapboxkey}
      mapStyle="mapbox://styles/mdhph/cl4qoat3r001214p9qnoo0vl4"
      onMove={(evt) => setViewState(evt.viewState)}
    >
      {searchResult.map(({ lat, long, title }) => (
        <div key={title}>
          <Marker longitude={long} latitude={lat} offset={[-20, -10]}>
            <p
              role="img"
              aria-label="push-pin"
              onClick={() =>
                setSelectedLocation({ longitude: long, latitude: lat })
              }
              className="cursor-pointer text-2xl animate-bounce"
            >
              📌
            </p>
          </Marker>

          {selectedLocation?.longitude === long &&
            selectedLocation.latitude === lat && (
              <Popup
                longitude={long}
                latitude={lat}
                onClose={() => setSelectedLocation(undefined)}
                closeOnClick
              >
                {title}
              </Popup>
            )}
        </div>
      ))}
    </MapGl>
  );
};
export default Map;
