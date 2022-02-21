import React from "react";

const styles = require("../styles/google-maps.json");

class Map extends React.Component {
  map = undefined;

  state = {
    defaultCenter: {
      lat: 36.1774465,
      lng: -86.7042552,
    },
    markers: [
      {
        lat: 36.157055,
        lng: -86.7696144,
      },
      {
        lat: 36.1521981,
        lng: -86.7801724,
      },
      {
        lat: 36.1577547,
        lng: -86.7785841,
      },
      {
        lat: 36.1400674,
        lng: -86.8382887,
      },
      {
        lat: 36.1059131,
        lng: -86.7906082,
      },
    ],
  };

  componentDidMount() {
    document.body.classList.add("is-map");
    this.handleAttachGoogleMap();
  }

  componentWillUnmount() {
    document.body.classList.remove("is-map");
  }

  handleAttachGoogleMap = () => {
    const { defaultCenter } = this.state;
    this.map = new google.maps.Map(document.getElementById("google-map"), {
      center: defaultCenter,
      styles: styles,
      zoom: 10,
    });

    setTimeout(() => {
      this.handleDrawMarkers();
    }, 2000);
  };

  handleDrawMarkers = () => {
    const { markers } = this.state;
    const bounds = new google.maps.LatLngBounds();

    markers.forEach((marker) => {
      new google.maps.Marker({
        position: marker,
        map: this.map,
      });
      bounds.extend(marker);
    });
    this.map.fitBounds(bounds);
    this.map.panToBounds(bounds);
  };

  render() {
    return <div id="google-map" />;
  }
}

export default Map;
