import { getCenter } from "geolib";
import { LocationData, SearchResultData, ViewportData } from "../typings";
import { FC, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
interface Props {
  searchResult: SearchResultData[];
}

const Map: FC<Props> = ({ searchResult }) => {
  const coordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const initialValue = {
    width: "100%",
    height: "100%",
    latitude: (center && center?.latitude) || 0.0,
    longitude: (center && center?.longitude) || 0.0,
    zoom: 14,
  };

  const [viewPort, setViewPort] = useState(initialValue);
  const [selectedLocation, serSelectedLocation] = useState<LocationData>();

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mdhph/cl4qoat3r001214p9qnoo0vl4"
      mapboxApiAccessToken={process.env.mapbox_key}
      onViewportChange={(nextViewPort: ViewportData) =>
        setViewPort(nextViewPort)
      }
      {...viewPort}
    >
      {searchResult.map(({ lat, long, title }) => (
        <div key={title}>
          <Marker
            longitude={long}
            latitude={lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              aria-label="push-pin"
              onClick={() =>
                serSelectedLocation({ longitude: long, latitude: lat })
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
                onClose={() => serSelectedLocation(undefined)}
                closeOnClick
              >
                {title}
              </Popup>
            )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
