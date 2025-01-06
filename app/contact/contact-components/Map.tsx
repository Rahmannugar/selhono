"use client";

import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { memo, useCallback, useState } from "react";

const Map = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  // LIU Brooklyn coordinates
  const center = {
    lat: 40.6916,
    lng: -73.9819,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    map.setZoom(15);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <MarkerF position={center} title="Long Island University Brooklyn" />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Map);
