import React from 'react'
import { Map, MapMarker } from "../../components/map"
// import { markerLocation } from "../../Images/location-2952.png"

function MapView() {
  return (
    <>
      <div style={{ height: "500px", width: "100%" }}>
        <Map
          center={{
            lat: 40.73061,
            lng: -73.935242,
          }}
          zoom={9}
        >
          <MapMarker
            // key={`user-marker-${record?.user.id}`}
            // icon={{
            //   url: markerLocation,
            // }}
            position={{
              lat: 30.04442,
              lng: 31.235712,
            }}
          />
        </Map>
      </div>
    </>
  )
}

export default MapView
