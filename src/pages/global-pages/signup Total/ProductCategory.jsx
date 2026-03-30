import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import SelectBox from "../../../components/form-elements/SelectBox";
import { LuBox } from "react-icons/lu";
import SelectWithCheckbox from "../../../components/form-elements/SelectWithCheckbox";
import { Images } from "../../../images/Image";
import Buttons from "../../../components/form-elements/Buttons";
import PopUp from "../../../components/popup/PopUp";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/form-elements/Input";
import TermsAndConditions from "../TermsAndConditions";
import { useContext } from "react";
import { SignupContext } from "../../../context/SignupContext";
import axios from "axios";
import * as Yup from "yup";

const ProductCategory = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  const categorySchema = Yup.object().shape({
    category: Yup.object().nullable().required("category is required"),
    subcategory: Yup.array().min(1, "select at least one subcategory"),
    panNumber: Yup.string().required("PAN is required"),
    
  });

  const navigate = useNavigate();

  const [category, setCategory] = useState(null);
  const [Subcategory, setSubCategory] = useState([]);

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const [panNumber, setPanNumber] = useState("");
  const [gstNumber, setGstNumber] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "https://b17q02g4-5051.asse.devtunnels.ms/rest2/0.1/unAuth/getCategories",  
        );
        console.log(res);
        console.log(res.data);

        const formatted = [
          ...res.data.data.map((item) => ({
            label: item.category_name,
            value: item.id,
          })),
          { label: "Other", value: "other" },
        ];
        setCategories(formatted);
      } catch (err) {
        console.log("error fetch categories", err);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (!category) return;

    setSubCategories([]);

    const fetchSubCategories = async () => {
      try {
        const res = await axios.post(
          "https://b17q02g4-5051.asse.devtunnels.ms/rest2/0.1/unAuth/getSubCategories",
          {
            categoryId: category.value === "other" ? 0 : Number(category.value),
          },
        );
        const formatted = [
          ...res.data.message.map((item) => ({
            label: item.sub_category_name,
            value: item.id,
          })),
        ];

        if (category.value === "other") {
          formatted.push({ label: "other", value: "other" });
        }
        setSubCategories(formatted);
      } catch (err) {
        console.log("error fetching subcategories", err);
      }
    };
    fetchSubCategories();
  }, [category]);

  const { signupData, setSignupData } = useContext(SignupContext);

  const [otherCategory, setOtherCategory] = useState("");
  const [otherSubCategory, setOtherSubCategory] = useState("");

  const handleRemove = (itemToRemove) => {
    setSubCategory((prev) =>
      prev.filter((item) => item.value !== itemToRemove.value),
    );
  };

  const handleNext = async () => {
    try {
      // validate
      await categorySchema.validate(
        {
          category: category,
          subcategory: Subcategory,
          panNumber,
          gstNumber
        },
        { abortEarly: false },
      );

      setErrors({}); // clear errors

      const finalCategory =
        category.value === "other"
          ? {
              id: 0,
              name: otherCategory.trim(),
            }
          : {
              id: Number(category.value),
              name: category.label,
            };

      const finalSubCategory = Subcategory.map((item) =>
        item.value === "other"
          ? { id: 0, name: otherSubCategory.trim() }
          : { id: Number(item.value), name: item.label },
      );

      setSignupData((prev) => ({
        ...prev,
        category: finalCategory,
        subcategory: finalSubCategory,
        panNumber:panNumber,
        GSTNumber:gstNumber,
      }));

      console.log(" SAVED CATEGORY .....", finalCategory);
      console.log(" SAVED SUBCATEGORY", finalSubCategory);

      nextStep();
    } catch (err) {
      const newErrors = {};

      err.inner.forEach((e) => {
        newErrors[e.path] = e.message;
      });

      setErrors(newErrors);
    }
  };

  const handlechange = (name, value) => {
    console.log("RAW value:", value); // now correct array

    if (!Array.isArray(value)) {
      setSubCategory([]);
      return;
    }

    const clean = value.filter((item) => item && item.value);

    const unique = Array.from(
      new Map(clean.map((item) => [item.value, item])).values(),
    );

    setSubCategory(unique);

    setErrors((prev) => ({ ...prev, subcategory: "" }));
  };
  return (
    <div className="category-container">
      <div
        className="back-btn"
        onClick={() => prevStep()}
      >
        <img src={Images.lessThan} alt="" />
      </div>

      <div className="title">Create Your Account</div>

      <div className="subtitle">
        Continue managing your sales, purchases, and reports by signing in
        securely.
      </div>

      <div className="content-body">
        <div className="product-category-dropdown">
          <SelectBox
            value={category}
            onChange={(name, data) => {
              setCategory(data);
              setSubCategory([]);
              setOtherSubCategory("");
              setErrors((prev) => ({ ...prev, category: "" }));
              console.log(data);
            }}
            name="product-category"
            placeholder="Product Category"
            options={categories}
            icon={<LuBox />}
          />
          {errors.category && <p className="error-text">{errors.category}</p>}

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
            onChange={handlechange}
            name="product-category"
            icon={<LuBox />}
            options={subCategories}
            placeholder="Product Sub-category"
          />
          {errors.subcategory && (
            <p className="error-text">{errors.subcategory}</p>
          )}

          <div className="others-input-conatiner">
            {Subcategory.some((item) => item.value === "other") && (
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

        {Subcategory.length > 0 && (
          <div className="Selected-subcategory">
            {Subcategory.filter((item) => item.value !== "other").map(
              (item, index) => (
                <div key={index} className="inner-product">
                  <p>{item.label}</p>
                  <img
                    className="cross-icon"
                    src={Images.crossCancle}
                    alt=""
                    onClick={() => handleRemove(item)}
                  />
                </div>
              ),
            )}
          </div>
        )}

        <div className="pan-gst-container">
          <div className="input-box">
            <LuBox className="icon left" />
            <Input
              value={panNumber}
              placeholder="Enter Pan Card Number"
              className="gst-pan-input"
              onChange={(e) => setPanNumber(e.target.value)}
            />
          </div>

          <div className="input-box">
            <LuBox className="icon left" />
            <Input
               value={gstNumber}
              placeholder="Enter GST Number"
              className="gst-pan-input"
               onChange={(e) => setGstNumber(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="next-btn">
        <Buttons
          variant="secondary"
          className="category-next"
          onClick={handleNext}
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
          <div className="dividing-line"></div>
          <TermsAndConditions />
        </PopUp>
        of Sri Animalife Biotech Pvt Ltd.
      </div>
    </div>
  );
};

export default ProductCategory;
