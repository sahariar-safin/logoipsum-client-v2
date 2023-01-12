import React from "react";
import styles from "./TaxPartnerFAQ.module.css";

const TaxPartnerFAQ = () => {
  return (
    <div className="container">
      <div className={styles.taxPartnerProgramFaq}>
        <h2>
          Tax Partnership Program <br />{" "}
          <span>Frequently Asked Questions:</span>
        </h2>
        <div className={styles.taxPartnerFaqs}>
          <h3>1. What is the $3K annual fee for?</h3>
          <p>
            This is for downloading the new software every year to the laptop. A
            new license will need to bought per platform installed. They charge
            our account and we charge you monthly. This also covers the cost of
            your business license from Dropbox, Hello-Sign E-signatures and live
            Tax Partner customer support 365 with a dedicated rep.{" "}
          </p>
          <h3>1 a. How do you pay for it?</h3>
          <p>
            Monthly at $250 Per Month via direct debit from bank account of
            choice.
          </p>
          <h3>2. What states is the licenses valid for?</h3>
          <p>
            {`You're Licensing (IRS PTIN and NYPTIN) Is Valid For All 50 States :)`}
          </p>
          <h3>
            2 a. Are you required to take CEU (Continuing Education Courses) to
            maintain the license?
          </h3>
          <p>
            Yes every year you are required to take at least 20 hours minimum of
            Federal and NY online courses to reactivate and renew your licenses.
          </p>
          <h3>2 b. Are you required to register to the state & pay a fee?</h3>
          <p>
            Yes by law this must be done for NY State and its $100 annually to
            renew your NYPTIN.{" "}
          </p>
          <h3>
            3. Do you need to set up a business/EIN or can you do this
            independently?
          </h3>
          <p>
            You will not need to set up a business nor obtain an EIN. You will
            be paid as an independent contractor licensed by the IRS with a PTIN
            and New York State with a NYPTIN and will be paid by 1099 at the end
            of the year for the total sum minus all fees paid to TRUTHFUL TAXES
            for Income Tax Filing Purposes.
          </p>
          <h3>4. Do you get a 1099 from the IRS?</h3>
          <p>
            The company TRUTHFUL TAXES will be providing a 1099 for all the sum
            made.
          </p>
          <h3>5. How is the company paid the royalty fees?</h3>
          <p>
            TRUTHFUL TAXES will collect all fees then deposit your net fees
            after all company fees collected and direct deposit daily or weekly.{" "}
          </p>
          <h3>
            5 a. Is the royalty fees taken from what we make from the client per
            filing?
          </h3>
          <p>
            YES you never have to pay us directly. We take our fees from the
            gross deposit.{" "}
          </p>
          <h3>
            6. Is it safe to assume after every year, you will have to pay for
            the software again ($3,000)?
          </h3>
          <p>
            {`Every year the software needs to be renewed and purchased so if you
            do this for 30 years that's 30 charges of $3,000 saying the software
            cost will never go up which we highly doubt.`}
          </p>
          <h3>
            7. Are all the fees associated with the Tax Partnership Program Tax
            Deductible?
          </h3>
          <p>
            {`All company fees and cost for the course and software purchase will
            all be completely written off as they are business expenses
            associated with making your money, so guess what........ "You
            Actually Never Paid" we will be writing the cost off on your 1099
            for you. :)`}
          </p>
          <h3>8. What does the $3,000 set up fee cover?</h3>
          <p>
            The set up fees covers all cost associated with getting the
            individual prepared and all material needed to become a licensed tax
            preparer with the IRS and New York State. A laptop will be included
            as well as printer and mouse and basic marketing material business
            cards, personal email domain (yourname)@truthfultaxes.com etc. For
            further information on this please download our (BROCHURE) guide on
            the Tax Partnership Tab.
          </p>
          <h3>9. Will you be providing the clients as well?</h3>
          <p>
            Not all clients will need to be obtained by the tax partner
            themselves.
          </p>
          <h3></h3>
          <p></p>
          <h3></h3>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default TaxPartnerFAQ;
