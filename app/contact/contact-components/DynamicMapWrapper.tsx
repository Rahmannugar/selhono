"use client";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[25rem] bg-[#f0f0f0] rounded-2xl flex items-center justify-center">
      <p className="text-[#4D5053] text-lg">Loading map...</p>
    </div>
  ),
});

const DynamicMapWrapper = ({
  center,
}: {
  center: { lat: number; lng: number };
}) => {
  return <DynamicMap center={center} />;
};

export default DynamicMapWrapper;
