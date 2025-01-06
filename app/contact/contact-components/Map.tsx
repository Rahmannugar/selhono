"use client";

import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { memo, useCallback } from "react";

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

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    mapInstance.setZoom(15);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
    >
      <MarkerF position={center} title="Long Island University Brooklyn" />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Map);
