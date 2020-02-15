import React, { useRef, useEffect, useState } from "react";

import "./Map.css";

import { usePosition } from "./usePosition";

const Map = props => {
  const mapRef = useRef();

  const { longitude, latitude, error } = usePosition();

  const currentPosition = { lat: latitude, lng: longitude };

  const markers = props.center;

  useEffect(() => {
    // this is a hook that reruns everytime props are updated, so when the JSX below runs this function will rerun and the connection will be established by the time the code inside runs
    // in other words it allows to register some logic which is executed when certain dependencies (in this case center and zoom) change. useEffect logic re-runs only After the componengt was re-evaluated

    const map = new window.google.maps.Map(mapRef.current, {
      center: currentPosition,
      zoom: 16
    });

    console.log(longitude, latitude);

    new window.google.maps.Marker({
      position: currentPosition,
      map: map,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/micons/man.png"
      }
    });

    markers.map(function(marker) {
      new window.google.maps.Marker({
        position: marker.location,
        map: map,
        icon: {
          url:
            process.env.REACT_APP_ASSET_URL +
            "/uploads/images/MapMarkerHoopScoop.png"
        }
      });
    });
  }, [currentPosition]); // dependencies that trigger the execution of the logic when changed

  return (
    <div ref={mapRef} className={`map ${props}`} style={props.style}></div>
  );
};

export default Map;
