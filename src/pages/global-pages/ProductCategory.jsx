import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import SelectBox from "../../components/form elements/SelectBox";
import { LuBox } from "react-icons/lu";
import CheckBox from "../../components/form elements/CheckBox";
import SelectWithCheckbox from "../../components/form elements/SelectWithCheckbox";
import { Images } from "../../images/Image";
import Buttons from "../../components/form elements/Buttons";
import PopUp from "../../components/popup/PopUp";
import { useNavigate } from "react-router-dom";
import Input from "../../components/form elements/Input";


const ProductCategory = () => {
  const subCategoryOptions = {
    aquaculture: [
      { label: "Probiotic", value: "probiotic" },
      { label: "Minerals", value: "minerals" },
      { label: "Feeds", value: "feeds" },
      { label: "Medicine", value: "medicine" },
    ],
    agriculture: [
      { label: "Fertilizers", value: "fertilizers" },
      { label: "Seeds", value: "seeds" },
      { label: "Pesticides", value: "pesticides" },
    ],
    "human medicine": [
      { label: "Tablets", value: "tablets" },
      { label: "Syrups", value: "syrups" },
      { label: "Injections", value: "injections" },
    ],
    other: [{ label: "Others", value: "other" }],
  };
  const navigate = useNavigate();

  const [category, setCategory] = useState(null);
  const [Subcategory, setSubCategory] = useState([]);

  const [otherCategory, setOtherCategory] = useState("");
  const [otherSubCategory, setOtherSubCategory] = useState("");

  const handleRemove = (itemToRemove) => {
    setSubCategory((prev) => prev.filter((item) => item !== itemToRemove));
  };

  return (
    <div className="category-container">
      <div className="title">Create Your Account</div>

      <div className="subtitle">
        Continue managing your sales, purchases, and reports by signing in
        securely.
      </div>

      <div className="product-category-dropdown">
        <SelectBox
          value={category}
          onChange={(name, data) => {
            setCategory(data);
            setSubCategory([]);
            setOtherSubCategory("");
          }}
          name="product-category"
          options={[
            { label: "Aquaculture", value: "aquaculture" },
            { label: "Agriculture", value: "agriculture" },
            { label: "Human Medicine", value: "human medicine" },
            { label: "Other", value: "other" },
          ]}
          placeholder="Product Category"
          icon={<LuBox />}
        />

        <div className="others-input-conatiner">
          {category?.value === "other" && (
            <div className="input-box">
              <LuBox className="icon left" />
              <Input
                value={otherCategory}
                placeholder="Enter Product category"
                className="other-input"
                onChange={(e) => setOtherCategory(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>

      <div className="sub-product-category-dropdown">
        <SelectWithCheckbox
          value={Subcategory}
          onChange={(name, value) => setSubCategory(value)}
          name="product-category"
          icon={<LuBox />}
          options={subCategoryOptions[category?.value] || []}
          placeholder="Product Sub-category"
        />

        <div className="others-input-conatiner">
          {Subcategory.includes("other") && (
            <div className="input-box">
              <LuBox className="icon left" />
              <Input
                value={otherSubCategory}
                placeholder="Enter Product Sub-category"
                className="other-input"
                onChange={(e) => setOtherSubCategory(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>

      <div className="Selected-subcategory">
        {Subcategory.filter((item) => item !== "other").map((item, index) => (
          <div key={index} className="inner-product">
            <p>{item}</p>
            <img
              className="cross-icon"
              src={Images.crossCancle}
              alt=""
              onClick={() => handleRemove(item)}
            />
          </div>
        ))}
      </div>

      <div className="next-btn">
        <Buttons
          variant="secondary"
          className="category-next"
          onClick={() => navigate("/sign-up/security-questions")}
        >
          Next
        </Buttons>
      </div>

      <div className="terms-conditions">
        By clicking, I confirm that I have read, understood, and agree to the
        {/* <span > Terms of Service</span>  */}
        <PopUp
          trigger={<span> Terms of Service </span>}
          size="md"
          title="Terms of Service"
          className="terms-popup"
        >
          <div className='dividing-line'></div>
          <div className='conditions'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.

            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.

            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.

            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </PopUp>
        of Sri Animalife Biotech Pvt Ltd.
      </div>
    </div>
  );
};

export default ProductCategory;
