"use client";

import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { memo, useCallback } from "react";

const Map = ({ center }: { center: { lat: number; lng: number } }) => {
  const containerStyle = {
    width: "100%",
    maxWidth: "1200px",
    height: "25rem",
    borderRadius: "1rem",
    margin: "0 auto",
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
