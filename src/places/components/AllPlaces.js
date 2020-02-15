import React, { useEffect, useState } from "react"; //useEffect to make sure we send the request when the component renders but not when it re-renders
import { useParams } from "react-router-dom";

import "./AllPlaces.css";

import PlaceList from "./PlaceList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import Map from "../../shared/components/UIElements/Map";
import AllPlacesMap from "../../shared/components/UIElements/AllPlacesMap";

//hooks
import { useHttpClient } from "../../shared/hooks/http-hook";

const AllPlaces = () => {
  const [loadedPlaces, setLoadedPlaces] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/places/"
        );
        setLoadedPlaces(responseData.places);
      } catch (err) {}
    };
    fetchPlaces();
  }, [sendRequest]);

  const placeDeletedHandler = deletedPlaceId => {
    setLoadedPlaces(prevPlaces =>
      prevPlaces.filter(place => place.id !== deletedPlaceId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlaces && (
        <div>
          <div className="all-places-map-container">
            <AllPlacesMap center={loadedPlaces} zoom={16} />
          </div>
          <div className="all-places-grid-container">
            <PlaceList
              items={loadedPlaces}
              onDeletePlace={placeDeletedHandler}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default AllPlaces;
