import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { Link } from 'react-router-dom';
import styles from "./Locations.module.css";

import locationImage from "../../assets/images/Locations/man2.jpg";

const LocationCard = ({ location }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <img src={location?.image} alt="locationImage" width={70} height={70} />
                <h3>{location?.name}</h3>
            </div>
            <p>{location?.address}</p>
            <div className={styles.cardHeader}>
                <AiOutlinePhone className={styles.headerIcon} />
                <Link > {location?.phone}</Link>
            </div>
            <div className={styles.cardHeader}>
                <AiOutlineMail className={styles.headerIcon} />
                <Link >{location?.email}</Link>
            </div>
            <div className={styles.cardHeader}>
                <BiTime className={styles.headerIcon} />
                <p>{location?.availablity}</p>
            </div>
        </div>
    );
};

export default LocationCard;