import React, { useEffect, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import styles from "./ExistingClients.module.css";

const ExistingClients = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("country.json")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="container">
      <div className={styles.existingClients}>
        <h3>Existing Client Information</h3>
        <div className={styles.existingClientsFormMain}>
          <form action="" className={styles.existingClientForm}>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="*FullName"
            />
            <br />
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="*Phone Number"
            />
            <br />
            <label>* Please Enter Your Current Full Address</label>
            <br />
            <input
              type="text"
              name="address"
              id="address"
              placeholder="*Street Address"
            />
            <br />
            <input
              type="text"
              name="addressLine"
              id="addressLine"
              placeholder="Address Line 2"
            />
            <br />
            <div className={styles.countryCode}>
              <input type="text" name="city" id="city" placeholder="*City" />
              <br />
              <input type="text" name="state" id="state" placeholder="*State" />
            </div>
            <br />
            <div className={styles.countryCode}>
              <input
                type="text"
                name="postal"
                id="postal"
                placeholder="*Postal / Zip Code"
              />
              <br />
              <select
                name="country"
                id="country"
                className={styles.selectInput}
              >
                <option value="true">*Country</option>
                {countries.map((item) => (
                  <option value={item.sortname} key={item.country_id}>
                    {item.country_name}
                  </option>
                ))}
              </select>
            </div>
            <br />
            <label htmlhtmlFor="">* Do You Currently Have A Bank Account?</label>
            <div className={styles.haveAccount}>
              <div className={styles.haveAccounts}>
                <input
                  type="checkbox"
                  id="haveAccountYes"
                  name="haveAccountYes"
                  value="haveAccountYes"
                />
                <label>Yes</label>
              </div>
              <div className={styles.haveAccounts}>
                <input
                  type="checkbox"
                  id="haveAccountNo"
                  name="haveAccountNo"
                  value="haveAccountNo"
                />
                <label>No</label>
              </div>
            </div>
            <br />
            <select
              name="accountType"
              id="accountType"
              className={styles.selectInput}
            >
              <option value="true">Account Type</option>
              <option value="checking">Checking</option>
              <option value="savings">Savings</option>
            </select>
            <br />
            <input
              type="text"
              name="bank"
              id="bank"
              placeholder="Bank Name"
            />{" "}
            <br />
            <input
              type="text"
              name="routing"
              id="routing"
              placeholder="Routing Number"
            />{" "}
            <br />
            <input
              type="text"
              name="accountNumber"
              id="accountNumber"
              placeholder="Checking/Savings Account Number"
            />{" "}
            <br />
            <select
              name="taxConsultant"
              id="taxConsultant"
              className={styles.selectInput}
            >
              <option value="true">* Choose Your Tax Consultant</option>
              <option value="Albis Suarez">Albis Suarez</option>
              <option value="Alexander Hernandez">Alexander Hernandez</option>
              <option value="Allison Fitzmaurice">Allison Fitzmaurice</option>
              <option value="Altagracia Morel">Altagracia Morel</option>
              <option value="Aisha Urena">Aisha Urena</option>
              <option value="Amber Salas">Amber Salas</option>
              <option value="Andrew Figueroa">Andrew Figueroa</option>
              <option value="Antonia Pena" data-price="0">
                Antonia Pena
              </option>
              <option value="Argentina Taveras" data-price="0">
                Argentina Taveras
              </option>
              <option value="Ariel Mora" data-price="0">
                Ariel Mora
              </option>
              <option value="Ashley Adams" data-price="0">
                Ashley Adams
              </option>
              <option value="Ashley Calderon" data-price="0">
                Ashley Calderon
              </option>
              <option value="Ashley Marte" data-price="0">
                Ashley Marte
              </option>
              <option value="Benjamin Krauz" data-price="0">
                Benjamin Krauz
              </option>
              <option value="Brandon Clavell" data-price="0">
                Brandon Clavell
              </option>
              <option value="Brian Polanco" data-price="0">
                Brian Polanco
              </option>
              <option value="Caroline Peralta" data-price="0">
                Caroline Peralta
              </option>
              <option value="Chasity Ingram" data-price="0">
                Chasity Ingram
              </option>
              <option value="Christine Vincent" data-price="0">
                Christine Vincent
              </option>
              <option value="Crespi Group" data-price="0">
                Crespi Group
              </option>
              <option value="Cristal Carela" data-price="0">
                Cristal Carela
              </option>
              <option value="Dahiana Recio " data-price="0">
                Dahiana Recio
              </option>
              <option value="Daniel Brown" data-price="0">
                Daniel Brown
              </option>
              <option value="Dariana Reyes" data-price="0">
                Dariana Reyes
              </option>
              <option value="David Chandler" data-price="0">
                David Chandler
              </option>
              <option value="Dontay Stevenson " data-price="0">
                Dontay Stevenson
              </option>
              <option value="Eileen Johnson" data-price="0">
                Eileen Johnson
              </option>
              <option value="Ephraim Maldonado" data-price="0">
                Ephraim Maldonado
              </option>
              <option value="Erick Manon Espinal" data-price="0">
                Erick Manon Espinal
              </option>
              <option value="Genesis Garrido " data-price="0">
                Genesis Garrido
              </option>
              <option value="Giana Peralta" data-price="0">
                Giana Peralta
              </option>
              <option value="Gishlaine Diaz" data-price="0">
                Gishlaine Diaz
              </option>
              <option value="Glenys Almanzar" data-price="0">
                Glenys Almanzar
              </option>
              <option value="Gloria Torres " data-price="0">
                Gloria Torres
              </option>
              <option value="Isoann Irizarry " data-price="0">
                Isoann Irizarry
              </option>
              <option value="Ivette Medina " data-price="0">
                Ivette Medina
              </option>
              <option value="Jalessa McCain " data-price="0">
                Jalessa McCain
              </option>
              <option value="Jalitsa Ventura" data-price="0">
                Jalitsa Ventura
              </option>
              <option value="Jamarl Rouse " data-price="0">
                Jamarl Rouse
              </option>
              <option value="Janice Berrios" data-price="0">
                Janice Berrios
              </option>
              <option value="Jasmine Alvarez" data-price="0">
                Jasmine Alvarez
              </option>
              <option value="Jasmin Clavasquin " data-price="0">
                Jasmin Clavasquin
              </option>
              <option value="Jesenia Jimenez" data-price="0">
                Jesenia Jimenez
              </option>
              <option value="Johanna Fernandez" data-price="0">
                Johanna Fernandez
              </option>
              <option value="Jonathan F Hernandez" data-price="0">
                Jonathan F Hernandez
              </option>
              <option value="Jose Vila" data-price="0">
                Jose Vila
              </option>
              <option value="Joseph Mayo" data-price="0">
                Joseph Mayo
              </option>
              <option value="Joshua Smith " data-price="0">
                Joshua Smith
              </option>
              <option value="Joshua Zapata" data-price="0">
                Joshua Zapata
              </option>
              <option value="Julisse Olivo" data-price="0">
                Julisse Olivo
              </option>
              <option value="Karen Palencia " data-price="0">
                Karen Palencia
              </option>
              <option value="Karen Lizarazo" data-price="0">
                Karen Lizarazo
              </option>
              <option value="Karina Gil " data-price="0">
                Karina Gil
              </option>
              <option value="Karine Ruiz " data-price="0">
                Karine Ruiz
              </option>
              <option value="Katherine Fernandez" data-price="0">
                Katherine Fernandez
              </option>
              <option value="Kendrie Reyes" data-price="0">
                Kendrie Reyes
              </option>
              <option value="Kenneth Jorge" data-price="0">
                Kenneth Jorge
              </option>
              <option value="Kimberlee Rodriguez" data-price="0">
                Kimberlee Rodriguez
              </option>
              <option value="Kristhy Cavero" data-price="0">
                Kristhy Cavero
              </option>
              <option value="Krystle Tejada" data-price="0">
                Krystle Tejada
              </option>
              <option value="Laneska Rosario " data-price="0">
                Laneska Rosario
              </option>
              <option value="Lauren Hanley " data-price="0">
                Lauren Hanley
              </option>
              <option value="Liliana Callejas " data-price="0">
                Liliana Callejas
              </option>
              <option value="Lilah Mejia" data-price="0">
                Lilah Mejia
              </option>
              <option value="Lisbeth Recio" data-price="0">
                Lisbeth Recio
              </option>
              <option value="Lismarie Alexander" data-price="0">
                Lismarie Alexander
              </option>
              <option value="Lorena Bautista" data-price="0">
                Lorena Bautista
              </option>
              <option value="Louis Soto" data-price="0">
                Louis Soto
              </option>
              <option value="Luis Acevedo " data-price="0">
                Luis Acevedo
              </option>
              <option value="Manuela Perez" data-price="0">
                Manuela Perez
              </option>
              <option value="Marcus Tavarez" data-price="0">
                Marcus Tavarez
              </option>
              <option value="Maria Perez" data-price="0">
                Maria Perez
              </option>
              <option value="Marilu Montano" data-price="0">
                Marilu Montano
              </option>
              <option value="Marissa Alicea" data-price="0">
                Marissa Alicea
              </option>
              <option value="Marizol Estrada" data-price="0">
                Marizol Estrada
              </option>
              <option value="Martin Fulco" data-price="0">
                Martin Fulco
              </option>
              <option value="Matthew Castillo" data-price="0">
                Matthew Castillo
              </option>
              <option value="Mathew Montalvo" data-price="0">
                Mathew Montalvo
              </option>
              <option value="Mayleine Mata" data-price="0">
                Mayleine Mata
              </option>
              <option value="Melissa Serrano " data-price="0">
                Melissa Serrano
              </option>
              <option value="Melissa Torres" data-price="0">
                Melissa Torres
              </option>
              <option value="Michael Medwin" data-price="0">
                Michael Medwin
              </option>
              <option value="Michelle Cruz" data-price="0">
                Michelle Cruz
              </option>
              <option value="Michelle Peralta" data-price="0">
                Michelle Peralta
              </option>
              <option value="Michel Taveras" data-price="0">
                Michel Taveras
              </option>
              <option value="Miguel Plaza" data-price="0">
                Miguel Plaza
              </option>
              <option value="Monique Harris " data-price="0">
                Monique Harris
              </option>
              <option value="Monique Perez" data-price="0">
                Monique Perez
              </option>
              <option value="Nashaly Chanel Fermin" data-price="0">
                Nashaly Chanel Fermin
              </option>
              <option value="Nazaree Jones" data-price="0">
                Nazaree Jones
              </option>
              <option value="Nelsida Frias " data-price="0">
                Nelsida Frias
              </option>
              <option value="Nicole Jones" data-price="0">
                Nicole Jones
              </option>
              <option value="Nicole Martinez" data-price="0">
                Nicole Martinez
              </option>
              <option value="Oscar Jaramillo" data-price="0">
                Oscar Jaramillo
              </option>
              <option value="Pamela Pineda" data-price="0">
                Pamela Pineda
              </option>
              <option value="Ramces Silverio " data-price="0">
                Ramces Silverio
              </option>
              <option value="Ray Anthony Lora " data-price="0">
                Ray Anthony Lora
              </option>
              <option value="Raymond Matos" data-price="0">
                Raymond Matos
              </option>
              <option value="Raynelda Reynoso " data-price="0">
                Raynelda Reynoso
              </option>
              <option value="Richard Otero" data-price="0">
                Richard Otero
              </option>
              <option value="Richard Pettignano" data-price="0">
                Richard Pettignano
              </option>
              <option value="Richelle Oppenheim" data-price="0">
                Richelle Oppenheim
              </option>
              <option value="Rosamna Pena " data-price="0">
                Rosamna Pena
              </option>
              <option value="Rubeisy Collado" data-price="0">
                Rubeisy Collado
              </option>
              <option value="Roxann Small " data-price="0">
                Roxann Small
              </option>
              <option value="Ryan Bruce" data-price="0">
                Ryan Bruce
              </option>
              <option value="Santos Vilella" data-price="0">
                Santos Vilella
              </option>
              <option value="Samira McCaskill " data-price="0">
                Samira McCaskill
              </option>
              <option value="Samuel Garcia" data-price="0">
                Samuel Garcia
              </option>
              <option value="Samuel Rios " data-price="0">
                Samuel Rios
              </option>
              <option value="Sandy Suriel" data-price="0">
                Sandy Suriel
              </option>
              <option value="Sarina Polanco" data-price="0">
                Sarina Polanco
              </option>
              <option value="Saul Mendez Sanchez" data-price="0">
                Saul Mendez Sanchez
              </option>
              <option value="Sergie Rodriguez " data-price="0">
                Sergie Rodriguez
              </option>
              <option value="Shameka Johnson " data-price="0">
                Shameka Johnson
              </option>
              <option value="Shaney Nolasco " data-price="0">
                Shaney Nolasco
              </option>
              <option value="Sharida Yassin" data-price="0">
                Sharida Yassin
              </option>
              <option value="Shaughn Lopes" data-price="0">
                Shaughn Lopes
              </option>
              <option value="Shenachanel Melgar" data-price="0">
                Shenachanel Melgar
              </option>
              <option value="Stephanie Medina" data-price="0">
                Stephanie Medina
              </option>
              <option value="Stephanie Metz" data-price="0">
                Stephanie Metz
              </option>
              <option value="Stephanie Miyares" data-price="0">
                Stephanie Miyares
              </option>
              <option value="Stephany Molina " data-price="0">
                Stephany Molina
              </option>
              <option value="Stephanie Ramirez" data-price="0">
                Stephanie Ramirez
              </option>
              <option value="Stephanie Richardson" data-price="0">
                Stephanie Richardson
              </option>
              <option value="Takeia Hill" data-price="0">
                Takeia Hill
              </option>
              <option value="Tanjila Rashid " data-price="0">
                Tanjila Rashid
              </option>
              <option value="Tanya Lanthier" data-price="0">
                Tanya Lanthier
              </option>
              <option value="Tiffany Lugo " data-price="0">
                Tiffany Lugo
              </option>
              <option value="Trevaun Davila" data-price="0">
                Trevaun Davila
              </option>
              <option value="Tyler Martin" data-price="0">
                Tyler Martin
              </option>
              <option value="Tylie Mitchell " data-price="0">
                Tylie Mitchell
              </option>
              <option value="Vanessa Feliciano" data-price="0">
                Vanessa Feliciano
              </option>
              <option value="Vanessa Rojas" data-price="0">
                Vanessa Rojas
              </option>
              <option value="Vanessa Valdez " data-price="0">
                Vanessa Valdez
              </option>
              <option value="Wanda Guerrero" data-price="0">
                Wanda Guerrero
              </option>
              <option value="Xochitl Martinez" data-price="0">
                Xochitl Martinez
              </option>
              <option value="Yaritza Sanabria" data-price="0">
                Yaritza Sanabria
              </option>
              <option value="Yisandy Marte" data-price="0">
                Yisandy Marte
              </option>
              <option value="Yismely Acosta" data-price="0">
                Yismely Acosta
              </option>
              <option value="Yonel Sanchez" data-price="0">
                Yonel Sanchez
              </option>
              <option value="Yezidel Moronta" data-price="0">
                Yezidel Moronta
              </option>
              <option value="Yudangel Matos" data-price="0">
                Yudangel Matos
              </option>
              <option value="Zoila Brito" data-price="0">
                Zoila Brito
              </option>
            </select>
            <br />
            <div className={styles.uploadDocuments}>
              <label htmlFor="taxDocuments" className="">
                <AiOutlineCloudUpload /> Please Upload All New Tax Documents
                Here
              </label>
              <input
                type="file"
                id="taxDocuments"
                multiple="multiple"
                className={styles.fileType}
              />
            </div>
            <div className={styles.uploadDocuments}>
              <label htmlFor="taxDocuments" className="">
                <AiOutlineCloudUpload /> Upload Tax Document 2 (If Applicable)
              </label>
              <input
                type="file"
                multiple="multiple"
                id="taxDocuments"
                className={styles.fileType}
              />
            </div>
            <div className={styles.uploadDocuments}>
              <label htmlFor="taxDocuments" className="">
                <AiOutlineCloudUpload /> Upload Tax Document 3 (If Applicable)
              </label>
              <input
                type="file"
                multiple="multiple"
                id="taxDocuments"
                className={styles.fileType}
              />
            </div>
            <div className={styles.uploadDocuments}>
              <label htmlFor="taxDocuments" className="">
                <AiOutlineCloudUpload /> Upload Tax Document 4 (If Applicable)
              </label>
              <input
                type="file"
                multiple="multiple"
                id="taxDocuments"
                className={styles.fileType}
              />
            </div>
            <div className={styles.uploadDocuments}>
              <label htmlFor="taxDocuments" className="">
                <AiOutlineCloudUpload /> Upload Tax Document 5 (If Applicable)
              </label>
              <input
                type="file"
                id="taxDocuments"
                multiple="multiple"
                className={styles.fileType}
              />
            </div>
            <div className={styles.uploadDocuments}>
              <label htmlFor="taxDocuments" className="">
                <AiOutlineCloudUpload /> Upload Tax Document 6 (If Applicable)
              </label>
              <input
                type="file"
                id="taxDocuments"
                multiple="multiple"
                className={styles.fileType}
              />
            </div>
            <div className={styles.uploadDocuments}>
              <label htmlFor="taxDocuments" className="">
                <AiOutlineCloudUpload /> Upload Tax Document 7 (If Applicable)
              </label>
              <input
                type="file"
                multiple="multiple"
                id="taxDocuments"
                className={styles.fileType}
              />
            </div>
            <div className={styles.submitButton}>
              <button className="button">Submit</button>
            </div>
          </form>
        </div>
        <p>{`* For Picture Uploads make sure it's at it's clearest and highest resolution.`}</p>
      </div>
    </div>
  );
};

export default ExistingClients;
