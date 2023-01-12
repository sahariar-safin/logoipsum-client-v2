import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { Link } from 'react-router-dom';
import styles from "./Locations.module.css";

import locationImage from "../../assets/images/Locations/man2.jpg";

const LocationCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <img src={locationImage} alt="locationImage" width={70} height={70} />
                <h3>TRUTHFUL TAXES Karen Leiva</h3>
            </div>
        <p>New York 10009</p>
        <div className={styles.cardHeader}>    
        <AiOutlinePhone className={styles.headerIcon} />  
        <Link > 646-200-1292</Link>            
        </div>
        <div className={styles.cardHeader}>    
        <AiOutlineMail className={styles.headerIcon} />  
        <Link >kleiva@truthfultaxes.com</Link>            
        </div>
        <div className={styles.cardHeader}>    
        <BiTime className={styles.headerIcon} />  
        <p>Richard Pettignano IRS Tax Professional Virtual Conference Available</p>            
        </div>
        </div>
    );
};

export default LocationCard;