import React from "react";
import { Restaurants } from "../graphql/generated/graphql";
const styles = require("../styles/google-maps.json");
import MarkerClusterer from "@google/markerclustererplus";

interface MapProps {
  restaurants: Restaurants[];
}

export class GoogleMap extends React.Component<MapProps> {
  map = undefined;
  clusterer = undefined;
  state = {
    defaultCenter: {
      lat: 34.0522,
      lng: -118.2437,
    },
    markers: this.props.restaurants,
  };

  componentDidMount() {
    document.body.classList.add("is-map");
    this.handleAttachGoogleMap();
  }

  componentWillUnmount() {
    document.body.classList.remove("is-map");
  }

  handleAttachGoogleMap() {
    const { defaultCenter } = this.state;
    this.map = new google.maps.Map(document.getElementById("google-map"), {
      center: defaultCenter,
      styles: styles,
      zoom: 10,
    });

    setTimeout(() => {
      this.handleDrawMarkers();
    }, 2000);
  }

  handleDrawMarkers() {
    const infoWindow = new google.maps.InfoWindow({
      content: "",
      disableAutoPan: true,
    });

    const markers = this.state.markers.map((r, i) => {
      const label = r.name;
      const marker = new google.maps.Marker({
        position: { lat: r.lat, lng: r.long },
      });

      marker.addListener("click", () => {
        infoWindow.setContent(label);
        infoWindow.open(this.map, marker);
      });

      return marker;
    });
    this.clusterer = new MarkerClusterer(this.map, [], {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });

    google.maps.event.addListener(this.map, "tilesloaded", () => {
      this.clusterer.clearMarkers();
      this.clusterer.addMarkers(markers);
    });
  }

  render() {
    return <div id="google-map" />;
  }
}
