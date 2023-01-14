import React from "react";
import styles from "./RefundOptions.module.css";

const RefundOptions = () => {
  return (
    <div className="container">
      <div className={styles.refundOptions}>
        <h2>DIRECT DEPOSIT OPTIONS</h2>
        <p>
          If you have a bank account set up for direct deposit or prefer an
          alternate method in receiving your refund, we have options for you.
          Ask you preparer to help you choose what works best for you.
        </p>
        <div className={styles.refundOptions}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className={styles.refundOptionInfo}>
                <h3>BANK ACCOUNT DEPOSIT</h3>
                <div className={styles.refundOptionSubInfo}>
                  <h3>DIRECT DEPOSIT</h3>
                  <p>
                    You can choose to have your IRS and STATE refund deposited
                    into your personal checking or personal savings account at
                    no additional cost to you. This is the fastest and safest
                    way to receive your refund. Refunds are usually received
                    within 10 -14 business days. Some cases may vary depending
                    on Bank clearance turn around times.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className={styles.refundOptionInfo}>
                <h3>NON BANK ACCOUNT DEPOSIT</h3>
                <div
                  className={`${styles.refundOptionSubInfo} ${styles.refundOptionSubInfoFirst}`}
                >
                  <h3>AMERICAN EXPRESS SERVE </h3>
                  <h6>No current bank account no worries</h6>
                  <p>
                    Thanks to our tax partners at American Express you can
                    receive your tax refund within 10 business days with
                    American Express Serve Card ​
                  </p>
                  <p>
                    *Most Refunds are issued with 10 business days Results May
                    Vary. Not all applicant will be accepted.{" "}
                  </p>
                  <a href="https://www.americanexpress.com/serve/?SOLID=SEARCH&extlink=us-serve-ps-google-brand_brand_serve&mkwid=sKVmJdqr9|dc&pcrid=56504253034&pmt=e&pkw=american%20express%20serve&gclid=CM293u77nMUCFfNZ7Aodv3UAJg" target="_blank" rel="noreferrer">{`Learn More >`}</a>
                </div>
              </div>
              <div className={styles.refundOptionSubInfo}>
                <h3>GREEN DOT PREPAID CARDS</h3>
                <h6>No current bank account no worries</h6>
                <p>
                  With Green Dot Prepaid Service Cards you can get approved
                  instantly and conveniently shop online. Pay bills without
                  leaving home, and even send money to family across the US.
                  Best of all, getting a Green Dot card is hassle-free with
                  absolutely no minimum balance requirements or credit check.
                  Your entire refund will be loaded to the Debit Card once your
                  refund is scheduled to be direct deposited from the IRS.
                </p>
                <a href="https://www.greendot.com/" target="_blank" rel="noreferrer">{`Learn More >`}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundOptions;
