import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { taxpartnersearch } from "../../apis/taxpartner";
import tileLayer from "./../../utils/tileLayer";
import LocationCard from "./LocationCard";
import styles from "./Locations.module.css";

const MyMarkers = ({ data }) => {
  return data.map((location, index) => {
    const { lat, lng } = location;
    return (
      (
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
          <Popup>
            <LocationCard location={location} />
          </Popup>
        </Marker>
      )
    )
  });
};

const LocationDetails = () => {
  const [partnerLocations, setPartnerLocations] = useState([]);
  const [point, setPoint] = useState({
    lat: 22.638376,
    lng: 90.082306,
  });
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const handleSearch = async (body) => {
    try {
      const res = await taxpartnersearch(body.search);
      setPartnerLocations(res.data.data);
      res.data.data[0] && setPoint(res.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  function FlyMapTo() {

    const map = useMap()

    useEffect(() => {
      map.flyTo(point)
    }, [point])

    return null
  }


  return (
    <div className={styles.LocationDetails}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <MapContainer center={point} zoom={10} scrollWheelZoom={true} >

              <TileLayer {...tileLayer} />

              <MyMarkers data={partnerLocations} />
              <FlyMapTo />
            </MapContainer>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-12">
            <form onSubmit={handleSubmit(handleSearch)} className={styles.LocationForm}>
              <div className={styles.locationInput}>
                <input
                  {...register("search", { required: true })}
                  type="text" placeholder="Enter an address or zipcode" />
                <FiSearch />
              </div>
              <button type="submit" className="d-none">asdf</button>
            </form>

            <div className={styles.LocationCard}>
              {
                partnerLocations.map((location, index) => (
                  <LocationCard key={index} location={location} setPoint={setPoint} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
