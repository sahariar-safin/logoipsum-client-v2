
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./TaxPartnerInstallment.module.css";

const TaxPartnerInstallment = () => {
    const data = [
        {
            id: 1,
            subHeader: "Full Course Payment",
            image: "/images/tax installments/3bd6ebe034d2794fb69e5e9a0f0e1b6f.png",
            header: "Tax Partnership Program Full Payment",
            money: "$3,000.00",
        },
        {
            id: 1,
            subHeader: "Initial Set Up Free Amount",
            image: "/images/tax installments/ea2ded871fb834580ae155324f58345d.png",
            header: "Tax Partnership Program Initial Set Up Fee Payment",
            money: "$2,000.00",
        },
        {
            id: 1,
            subHeader: "Initial Set Up Fee Remainder",
            image: "/images/tax installments/21276e9bb2a04809a76f2a7bfe161219.png",
            header: "Set Up Fee Remainder/Down Payment To Lock In Session Seat",
            money: "$500.00",
        },
        {
            id: 1,
            subHeader: "2 Payment Plan Remainder",
            image: "/images/tax installments/821f13_e52e8a1e068c433bbd8dc94e2e97a6ac_mv2.png",
            header: "Partial Set Up Fee Payment Plan",
            money: "$250.00",
        },
    ]
    return (
        <div className='container' >
            <div className={styles.taxPartnerInstallment} >
                {
                    data.map((item) => (
                        <div className={styles.taxPartnerInstallmentCards} key={item.id}>
                            <div>
                                <h6>{ item.subHeader}</h6>
                            <div className={styles.taxPartnerInstallmentCardsImage} >
                                 <img src={item.image} alt="" width="210" height="210" />
                                </div>
                                 <Link to="">Quick View</Link>
                           </div>
                            <p>{item.header}</p>
                            <p>{item.money}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TaxPartnerInstallment;