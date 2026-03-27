import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import SelectBox from "../../components/form elements/SelectBox";
import { LuBox } from "react-icons/lu";
import SelectWithCheckbox from "../../components/form elements/SelectWithCheckbox";
import { Images } from "../../images/Image";
import Buttons from "../../components/form elements/Buttons";
import PopUp from "../../components/popup/PopUp";
import { useNavigate } from "react-router-dom";
import Input from "../../components/form elements/Input";
import { useContext } from "react";
import { SignupContext } from "../../context/SignupContext";
import axios from "axios";

const ProductCategory = () => {

   
  const navigate = useNavigate();

  const [category, setCategory] = useState(null);
  const [Subcategory, setSubCategory] = useState([]);
  

  const [categories,setCategories]=useState([]);
  const [subCategories,setSubCategories]=useState([]);

  useEffect(()=>{
    const fetchCategories=async ()=>{
      try{
        const res=await axios.get("https://v3n2pcp3-5051.inc1.devtunnels.ms/rest2/0.1/unAuth/getCategories");
        console.log(res)
        console.log(res.data)
         
         const formatted = [
                  ...res.data.data.map((item) => ({
                    label: item.category_name,
                    value: item.id
                  })),
                  { label: "Other", value: "other" }    
                ];
        setCategories(formatted)
      }catch(err){
        console.log("error fetch categories",err)
      }
    }
    fetchCategories();
  },[])



  useEffect(()=>{
    if(!category || category.value==="other") return;

    setSubCategories([])

    const fetchSubCategories=async ()=>{
      try{
      const res=await axios.post("https://v3n2pcp3-5051.inc1.devtunnels.ms/rest2/0.1/unAuth/getSubCategories",
        {
          categoryId:category.value
        }
      )
      const formatted=[
        ...res.data.message.map((item)=>({
        label:item.sub_category_name,
        value:item.id
      })),
      {label:"other", value:"other"}
    ]
      setSubCategories(formatted)
    }catch(err){
      console.log("error fetching subcategories",err)
    }
  }
  fetchSubCategories();
},[category]);

  const {signupData,setSignupData}=useContext(SignupContext);

  const [otherCategory, setOtherCategory] = useState("");
  const [otherSubCategory, setOtherSubCategory] = useState("");

  const handleRemove = (itemToRemove) => {
    setSubCategory((prev) => prev.filter((item) => item.value !== itemToRemove.value));
  };
    
    const handleNext = () => {
    const finalCategory =
      category?.value === "other"
        ? otherCategory
        : category?.value;

    let finalSubCategory = Subcategory
      .filter((item) =>item && item.value && item.value !== "other")
      .map((item) => item.value);

    if (
      Subcategory.some((item) => item.value === "other") &&
      otherSubCategory
    ) {
      finalSubCategory.push(otherSubCategory);
    }

    setSignupData((prev) => ({
      ...prev,
      category: finalCategory,
      subcategory: finalSubCategory,
    }));

    navigate("/sign-up/security-questions");
  };

    const handlechange = (value) => {
      console.log("RAW value:", value);

      if (!Array.isArray(value)) {
        setSubCategory([]);
        return;
      }

      const clean = value.filter(item => item && item.value);

      const unique = Array.from(
        new Map(clean.map(item => [item.value, item])).values()
      );

      setSubCategory(unique);
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
          placeholder="Product Category"
          options={categories}
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
          onChange={handlechange}
          name="product-category"
          icon={<LuBox />}
          options={subCategories}
          placeholder="Product Sub-category"
          
          
        />

        <div className="others-input-conatiner">
          {Subcategory.some(item=>item.value==="other") && (
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
        {Subcategory.filter((item) => item.value !== "other").map((item, index) => (
          <div key={index} className="inner-product">
            <p>{item.label}</p>
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
