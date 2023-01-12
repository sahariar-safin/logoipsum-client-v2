import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { createCustomer } from "../../apis/customer";
import styles from "./ClientRegistry.module.css";

const BankDetails = ({ setFormNumber }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [stateIDLinks, setStateIDLinks] = useState([]);
  const [taxDocLinks, setTaxDocLinks] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedFiles2, setUploadedFiles2] = useState([]);
  const [removeFile, setRemoveFile] = useState(true);
  const [error, setError] = useState(null);
  const router = useNavigate();

  const handleUploadFile = async (file) => {
    const data = new FormData();
    data.append("file", file);
    const response = await axios.post("/file/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  };

  const handleFileEvent = async (e) => {
    const response = await handleUploadFile(e.target.files[0]);
    setStateIDLinks([...stateIDLinks, response.link]);
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    setUploadedFiles(chosenFiles);
  };

  const handleFileEvent2 = async (e) => {
    const response = await handleUploadFile(e.target.files[0]);
    setTaxDocLinks([...taxDocLinks, response.link]);
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    setUploadedFiles2(chosenFiles);
  };

  const deleteFile = (file) => {
    const found = uploadedFiles.filter((element) => element.name !== file);
    const found2 = uploadedFiles2.filter((element) => element.name !== file);
    setUploadedFiles(found);
    setUploadedFiles2(found2);
  };

  const handleOnSubmit = async (body) => {
    try {
      body.state_id_image = stateIDLinks;
      body.tax_documents = taxDocLinks;
      console.log(body);
      const personalData = JSON.parse(localStorage.getItem("personalData"));
      const taxQuestions = JSON.parse(localStorage.getItem("taxQuestions"));
      const res = await createCustomer({
        ...body,
        ...personalData,
        ...taxQuestions,
      });
      router("/thank-you");
      console.log(res);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className={styles.clientRegistry}>
      <div className="container">
        <div className="row" id={styles.clientRegistry}>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <form
              onSubmit={handleSubmit(handleOnSubmit)}
              className={styles.form}
            >
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label>
                    Bank Name (For direct deposit of federal and state refunds)
                  </label>
                  <input
                    {...register("bank_name", { required: false })}
                    type="text"
                    placeholder="Bank Name"
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label>Bank Routing Number</label>
                  <input
                    {...register("bank_routing_number", { required: false })}
                    type="number"
                    placeholder="Routing Number"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label htmlFor="inlineFormCustomSelect">
                    Checking or Savings
                  </label>
                  <select
                    {...register("bank_account_type", { required: false })}
                    id="inlineFormCustomSelect"
                  >
                    <option selected>Please Select</option>
                    <option value="Checking">Checking</option>
                    <option value="Savings">Savings</option>
                  </select>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label>Bank Account Number</label>
                  <input
                    type="number"
                    placeholder="Account Number"
                    {...register("bank_account_number", { required: false })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label>Name of person who referred you</label>
                  <input
                    type="text"
                    placeholder="First and Last Name"
                    {...register("name_of_referrer", { required: false })}
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label htmlFor="inlineFormCustomSelect">
                    Choose your Tax Consultant*
                  </label>
                  <select
                    {...register("tax_consultant", { required: true })}
                    id="inlineFormCustomSelect"
                  >
                    <option data-calcvalue="Tax consultant" value="">
                      Please Select
                    </option>
                    <option data-calcvalue="MartyMar54@gmail.com" value="Marty">
                      Marty
                    </option>
                    <option
                      data-calcvalue="aishau@truthfultaxes.com"
                      value="Aisha"
                    >
                      Aisha
                    </option>
                    <option
                      data-calcvalue="alexh@truthfultaxes.com"
                      value="Alex H"
                    >
                      Alex H
                    </option>
                    <option
                      data-calcvalue="alexl@truthfultaxes.com"
                      value="Alex "
                    >
                      Alex{" "}
                    </option>
                    <option
                      data-calcvalue="allisonf@truthfultaxes.com"
                      value="Allison"
                    >
                      Allison
                    </option>
                    <option
                      data-calcvalue="amorel@truthfultaxes.com"
                      value="Altagracia  "
                    >
                      Altagracia{" "}
                    </option>
                    <option
                      data-calcvalue="acarbonaro@truthfultaxes.com"
                      value="Alyssa"
                    >
                      Alyssa
                    </option>
                    <option
                      data-calcvalue="ambers@truthfultaxes.com"
                      value="Amber "
                    >
                      Amber{" "}
                    </option>
                    <option
                      data-calcvalue="anataveras@truthfultaxes.com"
                      value="Ana"
                    >
                      Ana
                    </option>
                    <option
                      data-calcvalue="andrewf@truthfultaxes.com"
                      value="Andrew "
                    >
                      Andrew{" "}
                    </option>
                    <option
                      data-calcvalue="antoniap@truthfultaxes.com"
                      value="Antonia "
                    >
                      Antonia{" "}
                    </option>
                    <option
                      data-calcvalue="antonioc@truthfultaxes.com"
                      value="Crespi"
                    >
                      Crespi
                    </option>
                    <option
                      data-calcvalue="ataveras@truthfultaxes.com"
                      value="Argentina "
                    >
                      Argentina{" "}
                    </option>
                    <option
                      data-calcvalue="ARIELM@TRUTHFULTAXES.COM"
                      value="Ariel "
                    >
                      Ariel{" "}
                    </option>
                    <option
                      data-calcvalue="ashleya@truthfultaxes.com"
                      value="Ashley "
                    >
                      Ashley{" "}
                    </option>
                    <option
                      data-calcvalue="aalvarado@truthfultaxes.com"
                      value="Ashley "
                    >
                      Ashley{" "}
                    </option>
                    <option
                      data-calcvalue="acalderon@truthfultaxes.com"
                      value="Ashley "
                    >
                      Ashley{" "}
                    </option>
                    <option
                      data-calcvalue="Ashleym@truthfultaxes.com"
                      value="Ashley "
                    >
                      Ashley{" "}
                    </option>
                    <option
                      data-calcvalue="beatrizj@truthfultaxes.com"
                      value="Beatriz"
                    >
                      Beatriz
                    </option>
                    <option
                      data-calcvalue="bkrauz@truthfultaxes.com"
                      value="Benjamin "
                    >
                      Benjamin{" "}
                    </option>
                    <option
                      data-calcvalue="bethzaidag@truthfultaxes.com"
                      value="Bethzaida "
                    >
                      Bethzaida{" "}
                    </option>
                    <option
                      data-calcvalue="brandonc@truthfultaxes.com"
                      value="Brandon"
                    >
                      Brandon
                    </option>
                    <option
                      data-calcvalue="bperez@truthfultaxes.com"
                      value="Brenda "
                    >
                      Brenda{" "}
                    </option>
                    <option
                      data-calcvalue="bpolanco@truthfultaxes.com"
                      value="Brian"
                    >
                      Brian
                    </option>
                    <option
                      data-calcvalue="ccarrillo@truthfultaxes.com"
                      value="Camille "
                    >
                      Camille{" "}
                    </option>
                    <option
                      data-calcvalue="carolinam@truthfultaxes.com"
                      value="Carolina "
                    >
                      Carolina{" "}
                    </option>
                    <option
                      data-calcvalue="cperalta@truthfultaxes.com"
                      value="Caroline "
                    >
                      Caroline{" "}
                    </option>
                    <option
                      data-calcvalue="crufino@truthfultaxes.com"
                      value="Caroline "
                    >
                      Caroline{" "}
                    </option>
                    <option
                      data-calcvalue="cmarte@truthfultaxes.com"
                      value="Cecilia "
                    >
                      Cecilia{" "}
                    </option>
                    <option
                      data-calcvalue="chabelyr@truthfultaxes.com"
                      value="Chabely "
                    >
                      Chabely{" "}
                    </option>
                    <option
                      data-calcvalue="chasityi@truthfultaxes.com"
                      value="Chasity "
                    >
                      Chasity{" "}
                    </option>
                    <option
                      data-calcvalue="chelseal@truthfultaxes.com"
                      value="Chelsea"
                    >
                      Chelsea
                    </option>
                    <option
                      data-calcvalue="chrisandrac@truthfultaxes.com"
                      value="Chrisandra"
                    >
                      Chrisandra
                    </option>
                    <option
                      data-calcvalue="christinem@truthfultaxes.com"
                      value="Christine "
                    >
                      Christine{" "}
                    </option>
                    <option
                      data-calcvalue="christinev@truthfultaxes.com"
                      value="Christine "
                    >
                      Christine{" "}
                    </option>
                    <option
                      data-calcvalue="Dahianar@truthfultaxes.com"
                      value="Dahiana"
                    >
                      Dahiana
                    </option>
                    <option
                      data-calcvalue="DBROWN@TRUTHFULTAXES.COM"
                      value="Daniel "
                    >
                      Daniel{" "}
                    </option>
                    <option
                      data-calcvalue="DREYES@TRUTHFULTAXES.COM"
                      value="Dariana "
                    >
                      Dariana{" "}
                    </option>
                    <option
                      data-calcvalue="davidc@truthfultaxes.com"
                      value="David "
                    >
                      David{" "}
                    </option>
                    <option
                      data-calcvalue="diosmarym@truthfultaxes.com"
                      value="Diosmary"
                    >
                      Diosmary
                    </option>
                    <option
                      data-calcvalue="Dontays@truthfultaxes.com"
                      value="Dontay"
                    >
                      Dontay
                    </option>
                    <option
                      data-calcvalue="dulcev@truthfultaxes.com"
                      value="Dulce"
                    >
                      Dulce
                    </option>
                    <option
                      data-calcvalue="efranco@truthfultaxes.com"
                      value="Edwin"
                    >
                      Edwin
                    </option>
                    <option
                      data-calcvalue="eileenj@truthfultaxes.com"
                      value="Eileen"
                    >
                      Eileen
                    </option>
                    <option
                      data-calcvalue="emelym@truthfultaxes.com"
                      value="Emely "
                    >
                      Emely{" "}
                    </option>
                    <option
                      data-calcvalue="emaldonado@truthfultaxes.com"
                      value="Ephriam "
                    >
                      Ephriam{" "}
                    </option>
                    <option
                      data-calcvalue="eabreu@truthfultaxes.com"
                      value="Eric  "
                    >
                      Eric{" "}
                    </option>
                    <option
                      data-calcvalue="emanon@truthfultaxes.com"
                      value="Erick"
                    >
                      Erick
                    </option>
                    <option
                      data-calcvalue="evelynd@truthfultaxes.com"
                      value="Evelyn "
                    >
                      Evelyn{" "}
                    </option>
                    <option
                      data-calcvalue="ffallon@truthfultaxes.com"
                      value="Fallon "
                    >
                      Fallon{" "}
                    </option>
                    <option
                      data-calcvalue="falmanzar@truthfultaxes.com"
                      value="Frashamar "
                    >
                      Frashamar{" "}
                    </option>
                    <option
                      data-calcvalue="ggarrido@truthfultaxes.com"
                      value="Genesis"
                    >
                      Genesis
                    </option>
                    <option
                      data-calcvalue="gianap@truthfultaxes.com"
                      value="Giana "
                    >
                      Giana{" "}
                    </option>
                    <option
                      data-calcvalue="gromero@truthfultaxes.com"
                      value="Gissel"
                    >
                      Gissel
                    </option>
                    <option
                      data-calcvalue="GLENYSA@TRUTHFULTAXES.COM"
                      value="Glenys "
                    >
                      Glenys{" "}
                    </option>
                    <option
                      data-calcvalue="GLORIAT@TRUTHFULTAXES.COM"
                      value="Gloria"
                    >
                      Gloria
                    </option>
                    <option
                      data-calcvalue="gblades@truthfultaxes.com"
                      value="Greg "
                    >
                      Greg{" "}
                    </option>
                    <option
                      data-calcvalue="ISOANNI@TRUTHFULTAXES.COM"
                      value="Isoann"
                    >
                      Isoann
                    </option>
                    <option
                      data-calcvalue="IVETTEM@TRUTHFULTAXES.COM"
                      value="Ivette"
                    >
                      Ivette
                    </option>
                    <option
                      data-calcvalue="jingram@truthfultaxes.com"
                      value="Jacob"
                    >
                      Jacob
                    </option>
                    <option
                      data-calcvalue="JALEESAM@TRUTHFULTAXES.COM"
                      value="Jaleesa "
                    >
                      Jaleesa{" "}
                    </option>
                    <option
                      data-calcvalue="jalitsav@truthfultaxes.com"
                      value="Jalitsa "
                    >
                      Jalitsa{" "}
                    </option>
                    <option
                      data-calcvalue="JROUSE@TRUTHFULTAXES.COM"
                      value="Jamarl "
                    >
                      Jamarl{" "}
                    </option>
                    <option
                      data-calcvalue="janiceb@truthfultaxes.com"
                      value="Janice"
                    >
                      Janice
                    </option>
                    <option
                      data-calcvalue="jgonzalez@truthfultaxes.com"
                      value="Jasmine "
                    >
                      Jasmine{" "}
                    </option>
                    <option
                      data-calcvalue="jvasquez@truthfultaxes.com"
                      value="Jasmine "
                    >
                      Jasmine{" "}
                    </option>
                    <option
                      data-calcvalue="jainette@truthfultaxes.com"
                      value="Jazmine "
                    >
                      Jazmine{" "}
                    </option>
                    <option
                      data-calcvalue="jgarcia@truthfultaxes.com"
                      value="Jeannette "
                    >
                      Jeannette{" "}
                    </option>
                    <option
                      data-calcvalue="jdurham@truthfultaxes.com"
                      value="Jennifer "
                    >
                      Jennifer{" "}
                    </option>
                    <option
                      data-calcvalue="jmejia@truthfultaxes.com"
                      value="Jennifer "
                    >
                      Jennifer{" "}
                    </option>
                    <option
                      data-calcvalue="jeseniaj@truthfultaxes.com"
                      value="Jesenia "
                    >
                      Jesenia{" "}
                    </option>
                    <option
                      data-calcvalue="jlascano@truthfultaxes.com"
                      value="Jocelyn"
                    >
                      Jocelyn
                    </option>
                    <option
                      data-calcvalue="jpichardo@truthfultaxes.com"
                      value="Joely"
                    >
                      Joely
                    </option>
                    <option
                      data-calcvalue="jfernandez@truthfultaxes.com"
                      value="Johanna "
                    >
                      Johanna{" "}
                    </option>
                    <option
                      data-calcvalue="jaragones@truthfultaxes.com"
                      value="Johanny "
                    >
                      Johanny{" "}
                    </option>
                    <option
                      data-calcvalue="Customerservice@truthfultaxes.com"
                      value="Jon H"
                    >
                      Jon H
                    </option>
                    <option
                      data-calcvalue="josev@truthfultaxes.com"
                      value="Jose "
                    >
                      Jose{" "}
                    </option>
                    <option
                      data-calcvalue="jmayo@truthfultaxes.com"
                      value="Joseph"
                    >
                      Joseph
                    </option>
                    <option
                      data-calcvalue="JOSHUAS@TRUTHFULTAXES.COM"
                      value="Joshua "
                    >
                      Joshua{" "}
                    </option>
                    <option
                      data-calcvalue="joshuaz@truthfultaxes.com"
                      value="Joshua "
                    >
                      Joshua{" "}
                    </option>
                    <option
                      data-calcvalue="jolivo@truthfultaxes.com"
                      value="Julisse "
                    >
                      Julisse{" "}
                    </option>
                    <option
                      data-calcvalue="kleiva@truthfultaxes.com"
                      value="Karen "
                    >
                      Karen{" "}
                    </option>
                    <option
                      data-calcvalue="KARENL@TRUTHFULTAXES.COM"
                      value="Karen "
                    >
                      Karen{" "}
                    </option>
                    <option
                      data-calcvalue="KPALENCIA@TRUTHFULTAXES.COM"
                      value="Karen "
                    >
                      Karen{" "}
                    </option>
                    <option
                      data-calcvalue="KARINAG@TRUTHFULTAXES.COM"
                      value="Karina "
                    >
                      Karina{" "}
                    </option>
                    <option
                      data-calcvalue="Kariner@truthfultaxes.com"
                      value="Karine "
                    >
                      Karine{" "}
                    </option>
                    <option
                      data-calcvalue="KATHERINEF@TRUTHFULTAXES.COM"
                      value="Katherine "
                    >
                      Katherine{" "}
                    </option>
                    <option
                      data-calcvalue="krojas@truthfultaxes.com"
                      value="Keimi"
                    >
                      Keimi
                    </option>
                    <option
                      data-calcvalue="kennethj@truthfultaxes.com"
                      value="Kenneth"
                    >
                      Kenneth
                    </option>
                    <option
                      data-calcvalue="kimberleer@truthfultaxes.com"
                      value="Kimberlee "
                    >
                      Kimberlee{" "}
                    </option>
                    <option
                      data-calcvalue="kristhyc@truthfultaxes.com"
                      value="Kristhy "
                    >
                      Kristhy{" "}
                    </option>
                    <option
                      data-calcvalue="kavila@truthfultaxes.com"
                      value="Krystina "
                    >
                      Krystina{" "}
                    </option>
                    <option
                      data-calcvalue="ktejada@truthfultaxes.com"
                      value="Krystle "
                    >
                      Krystle{" "}
                    </option>
                    <option
                      data-calcvalue="Laneskar@truthfultaxes.com"
                      value="Laneska"
                    >
                      Laneska
                    </option>
                    <option
                      data-calcvalue="Lcheco@truthfultaxes.com"
                      value="Ledys "
                    >
                      Ledys{" "}
                    </option>
                    <option
                      data-calcvalue="lismariea@truthfultaxes.com"
                      value="Lisamarie"
                    >
                      Lisamarie
                    </option>
                    <option
                      data-calcvalue="lestefany@truthfultaxes.com"
                      value="Lisbeth"
                    >
                      Lisbeth
                    </option>
                    <option
                      data-calcvalue="lisbethr@truthfultaxes.com"
                      value="Lisbeth"
                    >
                      Lisbeth
                    </option>
                    <option
                      data-calcvalue="lorenab@truthfultaxes.com"
                      value="Lorena "
                    >
                      Lorena{" "}
                    </option>
                    <option
                      data-calcvalue="louiss@truthfultaxes.com"
                      value="Louis "
                    >
                      Louis{" "}
                    </option>
                    <option
                      data-calcvalue="lucasb@truthfultaxes.com"
                      value="Lucas "
                    >
                      Lucas{" "}
                    </option>
                    <option
                      data-calcvalue="luisa@truthfultaxes.com"
                      value="Luis "
                    >
                      Luis{" "}
                    </option>
                    <option
                      data-calcvalue="lmontes@truthfultaxes.com"
                      value="Luis "
                    >
                      Luis{" "}
                    </option>
                    <option
                      data-calcvalue="lolmedo@truthfultaxes.com"
                      value="Luis "
                    >
                      Luis{" "}
                    </option>
                    <option
                      data-calcvalue="marcust@truthfultaxes.com"
                      value="Marcus "
                    >
                      Marcus{" "}
                    </option>
                    <option
                      data-calcvalue="mariap@truthfultaxes.com"
                      value="Maria "
                    >
                      Maria{" "}
                    </option>
                    <option
                      data-calcvalue="mjaquez@truthfultaxes.com"
                      value="Mariela"
                    >
                      Mariela
                    </option>
                    <option
                      data-calcvalue="mmontano@truthfultaxes.com"
                      value="Marilu "
                    >
                      Marilu{" "}
                    </option>
                    <option
                      data-calcvalue="marissaa@truthfultaxes.com"
                      value="Marissa "
                    >
                      Marissa{" "}
                    </option>
                    <option
                      data-calcvalue="mrobles@truthfultaxes.com"
                      value="Marizol "
                    >
                      Marizol{" "}
                    </option>
                    <option
                      data-calcvalue="mbatista@truthfultaxes.com"
                      value="Martha "
                    >
                      Martha{" "}
                    </option>
                    <option
                      data-calcvalue="martinf@truthfultaxes.com"
                      value="Martin"
                    >
                      Martin
                    </option>
                    <option
                      data-calcvalue="mpesantes@truthfultaxes.com"
                      value="Mary "
                    >
                      Mary{" "}
                    </option>
                    <option
                      data-calcvalue="mcastillo@truthfultaxes.com"
                      value="Matthew "
                    >
                      Matthew{" "}
                    </option>
                    <option
                      data-calcvalue="mmelo@truthfultaxes.com"
                      value="Maxine "
                    >
                      Maxine{" "}
                    </option>
                    <option
                      data-calcvalue="mayleinem@truthfultaxes.com"
                      value="Mayleine "
                    >
                      Mayleine{" "}
                    </option>
                    <option
                      data-calcvalue="melannier@truthfultaxes.com"
                      value="Melannie"
                    >
                      Melannie
                    </option>
                    <option
                      data-calcvalue="melissat@truthfultaxes.com"
                      value="Melissa "
                    >
                      Melissa{" "}
                    </option>
                    <option
                      data-calcvalue="mellissag@truthfultaxes.com"
                      value="Mellissa"
                    >
                      Mellissa
                    </option>
                    <option
                      data-calcvalue="michelt@truthfultaxes.com"
                      value="Michel "
                    >
                      Michel{" "}
                    </option>
                    <option
                      data-calcvalue="mcruz@truthfultaxes.com"
                      value="Michelle "
                    >
                      Michelle{" "}
                    </option>
                    <option
                      data-calcvalue="mperalta@truthfultaxes.com"
                      value="Michelle "
                    >
                      Michelle{" "}
                    </option>
                    <option
                      data-calcvalue="mplaza@truthfultaxes.com"
                      value="Miguel"
                    >
                      Miguel
                    </option>
                    <option
                      data-calcvalue="mprimitivo@truthfultaxes.com"
                      value="Miriam"
                    >
                      Miriam
                    </option>
                    <option
                      data-calcvalue="nazareej@truthfultaxes.com"
                      value="Nazaree "
                    >
                      Nazaree{" "}
                    </option>
                    <option
                      data-calcvalue="nelidar@truthfultaxes.com"
                      value="Nelida"
                    >
                      Nelida
                    </option>
                    <option
                      data-calcvalue="nfrias@truthfultaxes.com"
                      value="Nelsida"
                    >
                      Nelsida
                    </option>
                    <option
                      data-calcvalue="nedwards@truthfultaxes.com"
                      value="Nichole "
                    >
                      Nichole{" "}
                    </option>
                    <option
                      data-calcvalue="oscark@truthfultaxes.com"
                      value="Oscar "
                    >
                      Oscar{" "}
                    </option>
                    <option
                      data-calcvalue="pamelap@truthfultaxes.com"
                      value="Pamela "
                    >
                      Pamela{" "}
                    </option>
                    <option
                      data-calcvalue="RSILVERIO@TRUTHFULTAXES.COM"
                      value="Ramces "
                    >
                      Ramces{" "}
                    </option>
                    <option
                      data-calcvalue="rhoward@truthfultaxes.com"
                      value="Ramon "
                    >
                      Ramon{" "}
                    </option>
                    <option
                      data-calcvalue="raymondm@truthfultaxes.com"
                      value="Raymond"
                    >
                      Raymond
                    </option>
                    <option
                      data-calcvalue="REYNELDAR@TRUTHFULTAXES.COM"
                      value="Raynelda"
                    >
                      Raynelda
                    </option>
                    <option
                      data-calcvalue="renviec@truthfultaxes.com"
                      value="Renvie"
                    >
                      Renvie
                    </option>
                    <option
                      data-calcvalue="rpettignano@truthfultaxes.com"
                      value="Richard "
                    >
                      Richard{" "}
                    </option>
                    <option
                      data-calcvalue="robertr@truthfultaxes.com"
                      value="Robert"
                    >
                      Robert
                    </option>
                    <option
                      data-calcvalue="richelleo@truthfultaxes.com"
                      value="Richelle"
                    >
                      Richelle
                    </option>
                    <option
                      data-calcvalue="rosamnap@truthfultaxes.com"
                      value="Rosamna"
                    >
                      Rosamna
                    </option>
                    <option
                      data-calcvalue="rbruce@truthfultaxes.com"
                      value="Ryan "
                    >
                      Ryan{" "}
                    </option>
                    <option
                      data-calcvalue="SMIYARES@TRUTHFULTAXES.COM"
                      value="Stephanie "
                    >
                      Stephanie{" "}
                    </option>
                    <option
                      data-calcvalue="stephanier@truthfultaxes.com"
                      value="Stephanie "
                    >
                      Stephanie{" "}
                    </option>
                    <option
                      data-calcvalue="Samiram@truthfultaxes.com"
                      value="Samira "
                    >
                      Samira{" "}
                    </option>
                    <option
                      data-calcvalue="samuelg@truthfultaxes.com"
                      value="Samuel "
                    >
                      Samuel{" "}
                    </option>
                    <option
                      data-calcvalue="sandys@truthfultaxes.com"
                      value="Sandy "
                    >
                      Sandy{" "}
                    </option>
                    <option
                      data-calcvalue="santosv@truthfultaxes.com"
                      value="Santos "
                    >
                      Santos{" "}
                    </option>
                    <option
                      data-calcvalue="sarinap@truthfultaxes.com"
                      value="Sarina"
                    >
                      Sarina
                    </option>
                    <option
                      data-calcvalue="SERGIER@TRUTHFULTAXES.COM"
                      value="Sergie "
                    >
                      Sergie{" "}
                    </option>
                    <option
                      data-calcvalue="SJOHNSON@TRUTHFULTAXES.COM"
                      value="Shameka"
                    >
                      Shameka
                    </option>
                    <option
                      data-calcvalue="shaughnl@truthfultaxes.com"
                      value="Shaughn "
                    >
                      Shaughn{" "}
                    </option>
                    <option
                      data-calcvalue="melgars@truthfultaxes.com"
                      value="Shenachanel"
                    >
                      Shenachanel
                    </option>
                    <option
                      data-calcvalue="saviles@truthfultaxes.com"
                      value="Silvia "
                    >
                      Silvia{" "}
                    </option>
                    <option
                      data-calcvalue="skyea@truthfultaxes.com"
                      value="Skye"
                    >
                      Skye
                    </option>
                    <option
                      data-calcvalue="tromero@truthfultaxes.com"
                      value="Taisha"
                    >
                      Taisha
                    </option>
                    <option
                      data-calcvalue="TANJILAR@TRUTHFULTAXES.COM"
                      value="Tanjila "
                    >
                      Tanjila{" "}
                    </option>
                    <option
                      data-calcvalue="tanyal@truthfultaxes.com"
                      value="Tanya "
                    >
                      Tanya{" "}
                    </option>
                    <option
                      data-calcvalue="tdavila@truthfultaxes.com"
                      value="Trevaun"
                    >
                      Trevaun
                    </option>
                    <option
                      data-calcvalue="TYLERM@TRUTHFULTAXES.COM"
                      value="Tyler "
                    >
                      Tyler{" "}
                    </option>
                    <option
                      data-calcvalue="vmarine@truthfultaxes.com"
                      value="Vanessa "
                    >
                      Vanessa{" "}
                    </option>
                    <option
                      data-calcvalue="vanessar@truthfultaxes.com"
                      value="Vanessa "
                    >
                      Vanessa{" "}
                    </option>
                    <option
                      data-calcvalue="xmartinez@truthfultaxes.com"
                      value="Xochitl"
                    >
                      Xochitl
                    </option>
                    <option
                      data-calcvalue="ysanabria@truthfultaxes.com"
                      value="Yaritza"
                    >
                      Yaritza
                    </option>
                    <option
                      data-calcvalue="ymoronta@truthfultaxes.com"
                      value="Yezidel "
                    >
                      Yezidel{" "}
                    </option>
                    <option
                      data-calcvalue="yismelya@truthfultaxes.com"
                      value="Yismely"
                    >
                      Yismely
                    </option>
                    <option
                      data-calcvalue="yonels@truthfultaxes.com"
                      value="Yonel "
                    >
                      Yonel{" "}
                    </option>
                    <option
                      data-calcvalue="zbrito@truthfultaxes.com"
                      value="Zoila "
                    >
                      Zoila{" "}
                    </option>
                    <option
                      data-calcvalue="customerservice@truthfultaxes.com"
                      value="Jonathan"
                    >
                      Jonathan
                    </option>
                    <option
                      data-calcvalue="lgutierrez@truthfultaxes.com"
                      value="Luis "
                    >
                      Luis{" "}
                    </option>
                    <option
                      data-calcvalue="idelsym@truthfultaxes.com"
                      value="Idely"
                    >
                      Idely
                    </option>
                    <option
                      data-calcvalue="flaviab@truthfultaxes.com"
                      value="Flavia"
                    >
                      Flavia
                    </option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p>State ID Front and Back (You can add multiple files)*</p>
                  <div className={styles.browseFile}>
                    <label for="fileUpload" className={styles.fileLabel}>
                      <AiOutlineCloudUpload className={styles.fileIcon} />{" "}
                      <br />
                      Browse Files <br />
                      Drag and drop files here
                    </label>
                  </div>
                  <input
                    type="file"
                    id="fileUpload"
                    multiple="multiple"
                    name="state_id"
                    className={styles.fileType}
                    onChange={handleFileEvent}
                  />
                  <div className={styles.uploadedFiles}>
                    {uploadedFiles.map((file) => (
                      <div key={file.name}>
                        <p>
                          {" "}
                          {file.name}{" "}
                          <span onClick={() => deleteFile(file.name)}>
                            <RiDeleteBin6Line />
                          </span>{" "}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p>Tax Documents (You can add multiple files)</p>
                  <div className={styles.browseFile}>
                    <label for="fileUploadMore" className={styles.fileLabel}>
                      <AiOutlineCloudUpload className={styles.fileIcon} />{" "}
                      <br />
                      Browse Files <br />
                      Drag and drop files here
                    </label>
                  </div>
                  <input
                    type="file"
                    id="fileUploadMore"
                    multiple="multiple"
                    name="tax_document"
                    className={styles.fileType}
                    onChange={handleFileEvent2}
                  />
                  <div className={styles.uploadedFiles}>
                    {uploadedFiles2.map((file) => (
                      <div key={file.name}>
                        <p>
                          {" "}
                          {file.name}{" "}
                          <span onClick={() => deleteFile(file.name)}>
                            <RiDeleteBin6Line />
                          </span>{" "}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="button" onClick={() => setFormNumber(2)}>
                    Back
                  </button>
                </div>
                {/* error message */}
                {error && (
                  <div className="alert alert-danger mt-2">
                    <p>{error}</p>
                  </div>
                )}
                <div className="col d-flex justify-content-end">
                  <button className="button">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
