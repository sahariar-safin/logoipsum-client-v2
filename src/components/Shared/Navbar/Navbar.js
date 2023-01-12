import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/Logo.png";
import useAuth from "../../../hooks/useAuth";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const [isOpen, setIsOpen] = React.useState(0);
  return (
    <div className="container mt-2">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
             <img width="130" height="41" src={logo} alt="logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={`navbar-nav ms-auto mb-2 mb-lg-0 align-items-center ${ styles.navBarList }`}
            >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/clientregistry">
                  New Client Registration
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/tax-services">
                  Tax Services
                </Link>
              </li>
              <li
                onMouseOver={() => setIsOpen(1)}
                onMouseOut={() => setIsOpen(0)}
                className="nav-item dropdown"
              >
                <Link
                  className="nav-link dropdown-hover"
                  to="/tax-partner"
                  role="button"
                  data-bs-hover="dropdown"
                  aria-expanded="false"
                >
                  Tax Partner Program
                </Link>
                <ul className={`dropdown-menu ${ isOpen === 1 && "show" }`}>
                  <li>
                    <Link className="dropdown-item" to="/tax-partner-program-faq">
                      Frequently Asked Questions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/tax-partner-class-real-time"
                    >
                      Tax Partner Class Real Time
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/existing-clients">
                      Existing Clients
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      className="dropdown-item"
                      to="/tax-partner-installment-payments"
                    >
                      Tax Partner Installment Payments
                    </Link>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      to="https://www.truthfultaxes.com/tax-partner-supplies"
                    >
                      Tax Partner Supplies
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      to="https://www.truthfultaxes.com/tax-partner-supplies"
                    >
                      Tax Services Quick Pay
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      to="https://www.truthfultaxes.com/tax-partner-supplies"
                    >
                      Existing Clients
                    </a>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/truthful-taxes">
                  We Are Taxes
                </Link>
              </li>
              <li
                onMouseOver={() => setIsOpen(2)}
                onMouseOut={() => setIsOpen(0)}
                className="nav-item dropdown"
              >
                <Link
                  className="nav-link dropdown-hover"
                  to="/refund-status"
                  role="button"
                  data-bs-hover="dropdown"
                  aria-expanded="false"
                >
                  Refund Status
                </Link>
                <ul className={`dropdown-menu ${ isOpen === 2 && "show" }`}>
                  <li>
                    <Link className="dropdown-item" to="/refund-options">
                      Refund Options
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/irs-forms">
                      IRS Forms
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/tax-witholding-calculator-tool"
                    >
                      Tax Witholding Calculator
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/locations">
                  Location
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/locker-receipt-program">
                  Receipt Program
                </Link>
              </li>
              <li
                onMouseOver={() => setIsOpen(4)}
                onMouseOut={() => setIsOpen(0)}
                className="nav-item dropdown"
              >
                <Link
                  className="nav-link  dropdown-hover"
                  to="#"
                  role="button"
                  data-bs-hover="dropdown"
                  aria-expanded="false"
                >
                  More
                </Link>
                <ul className={`dropdown-menu ${ isOpen === 4 && "show" }`}>
                  <li>
                    <Link className="dropdown-item" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/tax-payer-disclosure">
                      Tax Payer Disclosure
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/testimonials">
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </li>

              <div className={styles.logButtons}>
                {
                  isLoggedIn
                    ? (
                      <>
                        <button onClick={() => logout()} className={styles.signUpBtn}>
                          {" "}
                          Log Out{" "}
                        </button>
                      </>
                    )
                    : (
                      <>
                        <Link to="/login" className={styles.logInBtn}>
                          {" "}
                          Log In{" "}
                        </Link>
                        <Link to="/signup" className={styles.signUpBtn}>
                          {" "}
                          Sign Up{" "}
                        </Link>
                      </>
                    )
                }
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
