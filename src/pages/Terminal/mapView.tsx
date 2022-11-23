import React from 'react'
import { Map, MapMarker } from "../../components/map"
// import { markerLocation } from "../../Images/location-2952.png"

function MapView() {
  return (
    <>
      <div style={{ height: "500px", width: "100%" }}>
        <Map
          center={{
            lat: 18.516726,
            lng: 73.856255,
          }}
          zoom={9}
        >
          <MapMarker
            // key={`user-marker-${record?.user.id}`}
            // icon={{
            //   url: markerLocation,
            // }}
            position={{
              lat: 18.516726,
              lng: 73.856255,
            }}
          />
          <MapMarker
            // key={`user-marker-${record?.user.id}`}
            // icon={{
            //   url: markerLocation,
            // }}
            position={{
              lat: 19.076090,
              lng: 72.877426,
            }}
          />
          <MapMarker
            // key={`user-marker-${record?.user.id}`}
            // icon={{
            //   url: markerLocation,
            // }}
            position={{
              lat: 21.146633,
              lng: 79.088860,
            }}
          />
          <MapMarker
            // key={`user-marker-${record?.user.id}`}
            // icon={{
            //   url: markerLocation,
            // }}
            position={{
              lat: 19.997454,
              lng: 73.789803,
            }}
          />
          <MapMarker
            // key={`user-marker-${record?.user.id}`}
            // icon={{
            //   url: markerLocation,
            // }}
            position={{
              lat: 17.659920,
              lng: 75.906387,
            }}
          />
          <MapMarker
            // key={`user-marker-${record?.user.id}`}
            // icon={{
            //   url: markerLocation,
            // }}
            position={{
              lat: 19.901054,
              lng: 75.352478,
            }}
          />
        </Map>
      </div>
    </>
  )
}

export default MapView
