import React from "react";
import { Link } from "react-router-dom";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className="container">
      <div className={styles.privacyPolicyMain}>
        <div className={styles.privacyPolicy}>
          <h3>
            Privacy <span>Policy</span>
          </h3>
          <div className={styles.privacyPolicyList}>
            <p>
              <span>*</span>All tax information collected and transmitted will
              be secured through the IRS (Internal Revenue Service) and Intuit
              Pro Series Software privately secured internal networks.
            </p>
            <p>
              <span>*</span>All tax information collected will only be shared
              with the client and the company TRUTHFUL TAXES.
            </p>
            <p>
              <span>*</span>All information transmitted within this website is
              secured via SSL web security.
            </p>
            <p>
              <span>*</span>
              {`TRUTHFUL TAXES is an IRS Authorized E-File Provider.  Validate our company on the IRS website by clicking on the "Authorized E-File Provider" link below.`}
            </p>
          </div>
          <Link
            href="https://www.irs.gov/efile-index-taxpayer-search?zip=07024&state=All&page=6"
            className="button"
          >
            IRS Approved E-File Provider
          </Link>
        </div>

        <div className={styles.clientSecurity}>
          <h3>
            Client <span>Security</span>
          </h3>
          <h5>*Tax Preparation:</h5>
          <p>
            All taxes prepared are sent with the most secure and efficient way
            possible. E-File is the safest and fastest way for a return to be
            transmitted. Most Returns are accepted within 24 hours. Clients will
            receive up to the minute information about their returns and refund.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
