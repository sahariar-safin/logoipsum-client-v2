import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import tileLayer from "./../../utils/tileLayer";
import LocationCard from "./LocationCard";
import styles from "./Locations.module.css";

const points = [
  {
    lat: 22.638376,
    lng: 90.082306,
    title: "point 1",
  },
  {
    lat: 22.641956,
    lng: 90.063862,
    title: "point 2",
  },
  {
    lat: 22.634403,
    lng: 90.053431,
    title: "point 3",
  },
];

const MyMarkers = ({ data }) => {
  return data.map(({ lat, lng, title }, index) => (
    <Marker
      key={index}
      position={{ lat, lng }}
      icon={
        new Icon({
          iconUrl: markerIconPng,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        })
      }
    >
      <Popup>{title}</Popup>
    </Marker>
  ));
};

const LocationDetails = () => {
  return (
    <div className={styles.LocationDetails}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <MapContainer center={points[1]} zoom={10} scrollWheelZoom={true}>
              <TileLayer {...tileLayer} />

              <MyMarkers data={points} />
            </MapContainer>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-12">
            <form className={styles.LocationForm}>
              <div className={styles.locationInput}>
                <input type="text" placeholder="Enter an address or zipcode" />
                <FiSearch />
              </div>
            </form>

            <div className={styles.LocationCard}>
              <LocationCard />
              <LocationCard />
              <LocationCard />
              <LocationCard />
              <LocationCard />
              <LocationCard />
              <LocationCard />
              <LocationCard />
              <LocationCard />
              <LocationCard />
              <LocationCard />
              <LocationCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
