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
import SelectedSubCategory from "./component/SelectedSubCategory";

const ProductCategory = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

const categorySchema = Yup.object().shape({
  category: Yup.object().nullable().required("*Category is required"),

  subcategory: Yup.array().min(1, "*Select at least one subcategory"),

  panNumber: Yup.string()
    .trim()
    .required("*Pan is required")
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "*Invalid PAN format"),

  gstNumber: Yup.string()
    .trim()
    .required("*Gst is required")
    .matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, "*Invalid GST format"),

  otherCategory: Yup.string().when("category", {
    is: (val) => val?.value === "other",
    then: (schema) => schema.required("*Enter category"),
  }),

  otherSubCategory: Yup.string().when("subcategory", {
    is: (sub) => sub?.some((item) => item.value === "other"),
    then: (schema) => schema.required("*Enter subcategory"),
  }),
});

  const navigate = useNavigate();

  // const [category, setCategory] = useState(null);
  // const [Subcategory, setSubCategory] = useState([]);

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  // const [panNumber, setPanNumber] = useState("");
  // const [gstNumber, setGstNumber] = useState("");
  const category = formData.category;
  const Subcategory = formData.subcategory;
  const panNumber = formData.panNumber;
  const gstNumber = formData.gstNumber;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "https://v3n2pcp3-5051.inc1.devtunnels.ms/rest2/0.1/unAuth/getCategories",  
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
          "https://v3n2pcp3-5051.inc1.devtunnels.ms/rest2/0.1/unAuth/getSubCategories",
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

  useEffect(() => {
  const validate = async () => {
    try {
       const valid = await categorySchema.isValid({
          category,
          subcategory: Subcategory,
          panNumber,
          gstNumber,
          otherCategory,
          otherSubCategory
        });

        setIsValid(valid);
    } catch {
      setIsValid(false);
    }
  };

  validate();
}, [category, Subcategory, panNumber, gstNumber, otherCategory, otherSubCategory]);
console.log("isValid:", isValid);
  const handleRemove = (itemToRemove) => {
    setFormData((prev) =>
      prev.filter((item) => item.value !== itemToRemove.value),
    );
  };

  const handleNext = async (e) => {
    e.preventDefault();
    try {
      // validate
      await categorySchema.validate(
        {
          category: category,
          subcategory: Subcategory,
          panNumber,
          gstNumber,
          otherCategory,
          otherSubCategory
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
  const clean = value.filter((item) => item && item.value);

  const unique = Array.from(
    new Map(clean.map((item) => [item.value, item])).values()
  );

  setFormData((prev) => ({
    ...prev,
    subcategory: unique,
  }));
  setErrors((prev) => ({ ...prev, subcategory: "" }));
};

  // const handlechange = (name, value) => {
  //   console.log("RAW value:", value); // now correct array

  //   if (!Array.isArray(value)) {
  //     setSubCategory([]);
  //     return;
  //   }
  

 




  return (
    <form className="category-container" onSubmit={handleNext}>
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
              setFormData((prev)=>({
                ...prev,
                category:data,
                subcategory:[],
              }));
              setErrors((prev) => ({ ...prev, category: "", subcategory: "" }));
            }}
            name="product-category"
            placeholder="Product Category"
            options={categories}
            icon={<LuBox />}
          />
          {errors.category && <p className="error-text product-category-error">{errors.category}</p>}

          <div className="others-input-conatiner">
            {category?.value === "other" && (
              <div className="input-box">
                <LuBox className="icon left" />
                <Input
                  value={otherCategory}
                  placeholder="Enter Product category"
                  className="other-input"
                  onChange={(e) => {
                    setOtherCategory(e.target.value);

                    // Clear error as soon as typing starts
                    setErrors((prev) => ({ ...prev, otherCategory: "" }));
                  }}
                  maxLength={25}
                  error={errors.otherCategory}
                />
                 {/* {errors.otherCategory && (<p className="error-text">{errors.otherCategory}</p>)} */}
              </div>
              
            )}
          </div>
        </div>

        <div className={`sub-product-category-dropdown ${category?.value === "other" ? "sub-category-select" : ""}`}>
          <SelectWithCheckbox
            value={Subcategory}
            onChange={handlechange}
            name="product-category"
            icon={<LuBox />}
            options={subCategories}
            disabled={!category}
            placeholder="Product Sub-category"
            hideSelected={true}
          />
          {errors.subcategory && (
            <p className="error-text product-category-error">{errors.subcategory}</p>
          )}

          <div className={`others-input-conatiner ${
              Subcategory.some((item) => item.value !== "other")
                ? "sub-category-other-input"
                : ""
            }`}>
            {Subcategory.some((item) => item.value === "other") && (
              <div className="input-box">
                <LuBox className="icon left" />
                <Input
                  value={otherSubCategory}
                  placeholder="Enter Product Sub-category"
                  className="other-input"
                   onChange={(e) => {
                      setOtherSubCategory(e.target.value);

                      // Clear error as soon as typing starts
                      setErrors((prev) => ({ ...prev, otherSubCategory: "" }));
                    }}
                   maxLength={25}
                />
                {/* {errors.otherSubCategory && (<p className="error-text">{errors.otherSubCategory}</p>)} */}
              </div>
            )}
          </div>
        </div>

        {Subcategory.length > 0 && (
          <SelectedSubCategory Subcategory={Subcategory} resetTrigger={Subcategory}/>
        )}

        <div className={`pan-gst-container ${
            Subcategory.some((item) => item.value === "other")
              ? "pan-card-input-down"
              : ""
          }`}>
          <div className="input-box">
            <LuBox className="icon left" />
            <Input
              value={panNumber}
              placeholder="Enter Pan Card Number"
              className="gst-pan-input"
              onChange={(e)=>{
                setFormData((prev)=>({
                  ...prev,
                  panNumber:e.target.value.toUpperCase(),
                }));
                setErrors((prev)=>({...prev,panNumber:""}))
              }}
                onKeyDown={(e) => {
                // Allow only letters and numbers
                if (!/[a-zA-Z0-9]/.test(e.key) &&
                    e.key !== "Backspace" &&
                    e.key !== "Tab" &&
                    e.key !== "ArrowLeft" &&
                    e.key !== "ArrowRight") {
                  e.preventDefault();
                }
              }}
              maxLength={10}
               error={errors.panNumber}
            />
             {/* {errors.panNumber && (<p className="error-text">{errors.panNumber}</p>)} */}
          </div>
         

          <div className="input-box">
            <LuBox className="icon left" />
            <Input
               value={gstNumber}
              placeholder="Enter GST Number"
              className="gst-pan-input"
              onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                gstNumber: e.target.value.toUpperCase(),
              }));
              //  clear GST error as soon as typing
              setErrors((prev) => ({ ...prev, gstNumber: "" }));
            }}
                onKeyDown={(e) => {
                // Allow only letters and numbers
                if (!/[a-zA-Z0-9]/.test(e.key) &&
                    e.key !== "Backspace" &&
                    e.key !== "Tab" &&
                    e.key !== "ArrowLeft" &&
                    e.key !== "ArrowRight") {
                  e.preventDefault();
                }
              }}
               maxLength={15}
               error={errors.gstNumber}
            />
             {/* {errors.gstNumber && (<p className="error-text">{errors.gstNumber}</p>)} */}
          </div>
        </div>
      </div>

      <div className="next-btn">
        <Buttons
          type="submit"
          
          className={`btn ${isValid ? "btn-primary":"btn-secondary"}`}
           
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
    </form>
  );
};

export default ProductCategory;