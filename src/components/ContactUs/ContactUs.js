import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { contactus } from "../../apis/contactus";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState(null);

  const router = useNavigate();

  const handleOnSubmit = async (body) => {
    
    try {
      const res = await contactus({
        ...body,
      });
      router("/thank-you");
      console.log(res);
    } catch (error) {      
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <div className={styles.contactUsMain}>
        <h2>CONTACT US</h2>
        <div className={styles.contactUs}>
          <div className={styles.contactUsFormMain}>
            <form
              className={styles.contactUsForm}
              onSubmit={handleSubmit(handleOnSubmit)}
            >
              <div>
                <input
                  {...register("name", { required: true })}
                  type="text"                  
                  id="name"
                  placeholder="Name*"
                />
                <br />
                <input
                  {...register("email", { required: true })}
                  type="email"                  
                  id="email"
                  placeholder="Email*"
                />
                <br />
                <input
                  {...register("phone_number", { required: false })}
                  type="number"                  
                  id="phone"
                  placeholder="Phone"
                />
                <br />
                <input
                  {...register("subject", { required: false })}
                  type="text"                 
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div>
                <textarea
                  {...register("message", { required: false })}                  
                  id="message"
                  rows="5"
                  placeholder="Message"
                />
                <div className={styles.submitBtn}>
                  <button className="button" type="submit">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className={styles.contactUsInfo}>
            <h4> Phone / Fax / Email</h4>
            <p>customerservice@truthfultaxes.com</p>
            <p>truthfultaxes@gmail.com</p>
            <p>Visit Out Locations Page And Contact</p>
            <p>A Tax Partner Near You</p>
            <p>Fax: 201-221-7888</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
