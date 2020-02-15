import React, { useRef, useEffect } from "react"; //

import "./Map.css";

const Map = props => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    // this is a hook that reruns everytime props are updated, so when the JSX below runs this function will rerun and the connection will be established by the time the code inside runs
    // in other words it allows to register some logic which is executed when certain dependencies (in this case center and zoom) change. useEffect logic re-runs only After the componengt was re-evaluated
    const map = new window.google.maps.Map(mapRef.current, {
      center: props.center,
      zoom: props.zoom
    });

    new window.google.maps.Marker({ position: props.center, map: map });
  }, [center, zoom]); // dependencies that trigger the execution of the logic when changed

  return (
    <div ref={mapRef} className={`map ${props}`} style={props.style}></div>
  );
};

export default Map;
