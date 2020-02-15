import React from "react";

import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import PlaceItem from "./PlaceItem";

const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share a Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="place-list-grid">
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator._id}
          creatorName={place.creator.name}
          coordinates={place.location}
          onDelete={props.onDeletePlace}
        />
      ))}
    </div>
  );
};

export default PlaceList;
