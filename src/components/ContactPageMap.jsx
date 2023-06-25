import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

function ContactPageMap({ center }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && center) {
      mapRef.current.flyTo(center);
    }
  }, [center]);

  return (
    <div className="w-[375px] h-[375px] tablet:w-[573px] tablet:h-[573px] mx-auto tablet:mt-[7rem] desktop:mt-[5rem] tablet:mb-[10rem] desktop:w-[1110px]">
      <MapContainer
        ref={mapRef} 
        center={center}
        zoom={10}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
        <Marker position={center} />
      </MapContainer>
    </div>
  );
}

export default ContactPageMap;
