import React from "react";
import styles from "./FAQ.module.css";

const FAQ = () => {
  return (
    <div className="container">
      <div className={styles.faq}>
        <h2>Frequently Asked Questions:</h2>
        <div className={styles.faqList} >
          <h3>
            (1) Where Can I receive a copy of my filed 1040 Income Tax Papers?
          </h3>
          <li>
            You can receive a copy of your filed 1040 and State Income Tax
            papers by emailing customerservice@truthfultaxes.com. Please specify
            which year will be needed.
          </li>
          <h3>(2) How long does the refund usually take?</h3>
          <li>
            Federal Refunds usually Take 7-14 business days to be deposited in
            your bank account. If Tax Returns are sent by mail it can take 8-12
            weeks for a check to be mailed to you from the IRS. TRUTHFUL TAXES
            highly suggest E-Filing your tax returns for faster delivery of your
            Tax Refund. State Refunds can usually have the same turn around time
            as the Federal Refund.
          </li>
          <h3>(3) Can you do several years of non filed income tax returns?</h3>
          <li>
            TRUTHFUL TAXES can file any current and previous years income tax
            returns.
          </li>
          <h3>(4) Can the filing fees be withdrawn from my refund?</h3>
          <li>
            All preparation and electronic filing fees can be withdrawn from the
            clients refund . If the client does not have a refund then the
            preparation fees must be paid up front under the web store.
          </li>
          <h3>
            (5) Is the company available year round for questions or advice for
            taxes?
          </h3>
          <li>
            TRUTHFUL TAXES is available year round to answer any tax related
            questions. Call or text us at 201 268-9472 or email us at
            customerservice@truthfultaxes.com
          </li>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
