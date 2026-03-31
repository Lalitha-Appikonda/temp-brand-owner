import React, { useState } from "react";
import Input from "../components/form elements/Input";
import Buttons from "../components/form elements/Buttons";
import { FiArrowUpRight } from "react-icons/fi";
import PopUp from "../components/popup/PopUp";
import SelectBox from "../components/form elements/SelectBox";
import TextArea from "../components/form elements/TextArea";
import CheckBox from "../components/form elements/CheckBox";
import SelectWithCheckbox from "../components/form elements/SelectWithCheckbox";
import RadioButton from "../components/form elements/RadioButton";

const Styleguide = () => {
  const colors = [
    { name: "rgba(243,245,247)", bg: "rgba(var(--orange-bg))" },
    { name: "rgba(255,255,255)", bg: "rgba(var(--primary-bg ))" },
    { name: "rgba(242,242,242)", bg: "rgba(var(--secondary-bg))" },
    { name: "rgba(244,244,244)", bg: "rgba(var(---green-bg))" },
    { name: "rgba(237,254,244)", bg: "rgba(var(--icon-color))" },
    { name: "rgba(255,242,237)", bg: "rgba(var(--like-bg))" },
    { name: "rgba(194,214,92)", bg: "rgba(var(--pink-bg))" },
    { name: "rgba(40,165,109)", bg: "rgba(var(--yellow-bg))" },
    { name: "table-border-gradient", bg: "rgba(var(--star-bg))" },
    { name: "rgba(255,241,232)", bg: "rgba(var(--product-bg))" },
    { name: "rgba(111,109,109)", bg: "rgba(var(--slider-circle-bg))" },
    { name: "rgba(15,15,15)", bg: "rgba(var(--dividing-line))" },
    { name: "rgba(237,251,255)", bg: "rgba(var(--three-star-rating))" },
    { name: "rgba(238,238,238)", bg: "rgba(var(--two-star-rating))" },
    { name: "rgba(242,246,255)", bg: "rgba(var(--one-star-rating))" },
    { name: "rgba(246,233,255)", bg: "rgba(var(--primary-text))" },
    { name: "rgba(17,24,39)", bg: "rgba(var(--secondary-text))" },
    { name: "rgba(107,114,128)", bg: "rgba(var(--error-text))" },
    { name: "rgba(156,163,175)", bg: "rgba(var(--rating-text))" },
    { name: "rgba(88,63,255)", bg: "rgba(var(--green-text))" },
    { name: "rgba(255,78,72)", bg: "rgba(var(--out-of-stock-text))" },
  ];


  const [gender, setGender] = useState("");

  const options = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  const handleChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <>
      <div>
        <h1 style={{ fontSize: "50px", textAlign: "center" }}>colors</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "100px",
            marginTop: "50px",
          }}
        >
          {colors.map((color) => (
            <div key={color.name} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  border: "2px solid black",
                  borderRadius: "50%",
                  background: color.bg,
                }}
              ></div>
              <p>{color.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1
          style={{ fontSize: "50px", textAlign: "center", marginTop: "100px" }}
        >
          Input fields
        </h1>
        <Input placeholder="Enter refer member mail" />
      </div>
    

      <div style={{ textAlign: "center", margin: "20px" }}>
        <p style={{ fontSize: "40px", fontWeight: "900" }}>typography</p>
        <h1>styleguide</h1>
        <h2>styleguide</h2>
        <h3>styleguide</h3>
        <h4>styleguide</h4>
        <h5>styleguide</h5>
        <h6>styleguide</h6>
      </div>

      <div style={{ textAlign: "center", margin: "40px" }}>
        <p style={{ fontSize: "40px", fontWeight: "900" }}>font family</p>
        <p style={{ fontFamily: "creatodisplay-regular" }}>
          creato-display-regular-fontweight:"400"
        </p>
        <p style={{ fontFamily: "creatodisplay-medium" }}>
          creato-display-medium-fontweight:"500"
        </p>
        <p style={{ fontFamily: "creatodisplay-bold" }}>
          creato-display-bold-fontweight:"700"
        </p>
      </div>

      <div style={{ margin: "50px" }}>
        <p
          style={{ fontSize: "50px", textAlign: "center", marginTop: "100px" }}
        >
          Buttons
        </p>

        <h2 style={{ margin: "20px" }}>double Buttons</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <div className="double-buttons">
            <Buttons variant="double-primary" className="primary-circle-button">
              Primary <span className="circle-button btn-circle-primary"><FiArrowUpRight /></span>
            </Buttons>
  
            {/* <Buttons variant="circle-primary" className="circle-button">
              <FiArrowUpRight className="arrow-icon" />
            </Buttons> */}
          </div>
        </div>

        <h2 style={{ margin: "20px" }}>Outline Buttons</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <Buttons variant="outline-primary">Primary</Buttons>
          <Buttons variant="outline-primary" className="outline-bg">
            Primary with background
          </Buttons>
        </div>

        <h2 style={{ margin: "20px" }}>Soft Buttons</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <Buttons variant="primary">Primary</Buttons>
          <Buttons variant="secondary">Secondary</Buttons>
        </div>

        <h2 style={{ margin: "20px" }}>circle Buttons</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <Buttons variant="circle-primary">
            <FiArrowUpRight className="arrow-icon" />
          </Buttons>
          <Buttons variant="circle-secondary">
            <FiArrowUpRight className="arrow-icon" />
          </Buttons>
        </div>
      </div>
     

      <div style={{ marginTop: "50px" }}>
        <h1 style={{ fontSize: "50px", textAlign: "center" }}>popups</h1>
        <PopUp trigger={<button>Edit</button>} size="sm" title="Edit Package">
          <div>Content here...</div>
        </PopUp>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h1 style={{ fontSize: "50px", textAlign: "center" }}>select box</h1>
        {/* <div className="select-wrapper"> */}
          <SelectBox
            label="State"
            name="state"
            options={[
              { label: "Telangana", value: "telangana" },
              { label: "Karnataka", value: "karnataka" },
              { label: "Tamil Nadu", value: "tamilnadu" },
            ]}
            placeholder="Select State"
          />
    {/* </div> */}
      </div>

      <div style={{ marginTop: "50px" }}>
        <h1 style={{ fontSize: "50px", textAlign: "center" }}>text area</h1>
        <TextArea label= "Complete Address" placeholder="Enter"/>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h1 style={{ fontSize: "50px", textAlign: "center" }}>check boxes</h1>

        <CheckBox />
      </div>

      <div style={{ marginTop: "50px" }}>
        <h1 style={{ fontSize: "50px", textAlign: "center" }}>select box with check box</h1>
        {/* <div className="select-wrapper"> */}
          <SelectWithCheckbox
            label="State"
            name="state"
            options={[
              { label: "Telangana", value: "telangana" },
              { label: "Karnataka", value: "karnataka" },
              { label: "Tamil Nadu", value: "tamilnadu" },
            ]}
            placeholder="Select State"
          />
    {/* </div> */}
      </div>

      <div style={{ marginTop: "50px" }}>
        <h1 style={{ fontSize: "50px", textAlign: "center" }}>Radio Buttons</h1>

        <RadioButton
        label="Select Gender"
        name="gender"
        options={options}
        value={gender}
        onChange={handleChange}
      />
      </div>


    </>
  );
};

export default Styleguide;
