import React, { useState } from "react";
import CheckBox from "../../../components/form-elements/CheckBox";
import Range from "../../../components/form-elements/Range";
import { Images } from "../../../images/Image";
import { FaChevronDown, FaStar, FaTimes } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Filter = () => {
  const minPrice = ["1000", "2000", "3000"];
  const maxPrice = ["7000", "8000", "9000"];

  const [category, setCategory] = useState([]);

  const [brandopen, setBrandOpen] = useState(false);

  const [brandValues, setBrandValues] = useState([]);

  const [ratingopen, setratingOpen] = useState(false);

  const [ratingValues, setRatingValues] = useState([]);

  const [discountopen, setDiscountOpen] = useState(false);

  const [discountValues, setDiscountValues] = useState([]);

  const [arrivalopen, setArrivalOpen] = useState(false);

  const [arrivalValues, setArrivalValues] = useState([]);

  const [availabilityopen, setAvailabilityOpen] = useState(false);

  const [availabilityValues, setAvailabilityValues] = useState([]);

  const selectedFilters = [
    ...category,
    ...brandValues,
    ...ratingValues,
    ...discountValues,
    ...arrivalValues,
    ...availabilityValues,
  ];

  const Brandoptions = [
    {
      label: "Agrocel Industries Pvt Ltd.",
      value: "Agrocel Industries Pvt Ltd.",
    },
    { label: "Unique Bio Tech Pvt Ltd.", value: "Unique Bio Tech Pvt Ltd." },
  ];

  const Ratingoptions = [
    { label: "4 & above", value: "4 & above" },
    { label: "3 & above", value: "3 & above" },
    { label: "2 & above", value: "2 & above" },
    { label: "1 & above", value: "1 & above" },
  ];

  const discountoptions = [
    { label: "30% or more", value: "30% or more" },
    { label: "40% or more", value: "40% or more" },
    { label: "50% or more", value: "50% or more" },
    { label: "60% or more", value: "60% or more" },
    { label: "70% or more", value: "70% or more" },
  ];

  const arrivaloptions = [{ label: "New Arrivals", value: "New Arrivals" }];

  const availabilityoptions = [
    { label: "Include Out of Stock", value: "include out of stock" },
  ];

  const handleBrandChange = (e) => {
    const { value, checked } = e.target;

    setBrandValues((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value),
    );
  };

  const handleRatingChange = (e) => {
    const { value, checked } = e.target;

    setRatingValues((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value),
    );
  };

  const handleDiscountChange = (e) => {
    const { value, checked } = e.target;

    setDiscountValues((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value),
    );
  };

  const handleArrivalChange = (e) => {
    const { value, checked } = e.target;

    setArrivalValues((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value),
    );
  };

  const handleAvailabilityChange = (e) => {
    const { value, checked } = e.target;

    setAvailabilityValues((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value),
    );
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;

    if (value === "All") {
      setCategory(checked ? ["All"] : []);
      return;
    }

    setCategory((prev) => {
      let updated = checked
        ? [...prev.filter((item) => item !== "All"), value]
        : prev.filter((item) => item !== value);

      return updated;
    });
  };

  const handleRemove = (itemToRemove) => {
    setCategory((prev) => prev.filter((item) => item !== itemToRemove));
    setBrandValues((prev) => prev.filter((item) => item !== itemToRemove));
    setRatingValues((prev) => prev.filter((item) => item !== itemToRemove));
    setDiscountValues((prev) => prev.filter((item) => item !== itemToRemove));
    setArrivalValues((prev) => prev.filter((item) => item !== itemToRemove));
    setAvailabilityValues((prev) =>
      prev.filter((item) => item !== itemToRemove),
    );
  };

  const handleClearAll = () => {
    setCategory([]);
    setBrandValues([]);
    setRatingValues([]);
    setDiscountValues([]);
    setArrivalValues([]);
    setAvailabilityValues([]);
  };

  return (
    <>
      <div className="filter-container">
        <div>
          <div className="title">
            <h3 className="filter-title">Filters</h3>
            {selectedFilters.length > 0 && (
              <h6 className="clear-title" onClick={handleClearAll}>
                Clear All
              </h6>
            )}
          </div>

          <div className="showing-results">
            {selectedFilters.map((item, index) => {
              const isRating = item.includes("& above");

              return (
                <div className="result-filter" key={index}>
                  <h5>
                    {isRating ? (
                      <span className="rating-label">
                        {item.split(" ")[0]}
                        <FaStar className="star" />
                        {" & above"}
                      </span>
                    ) : (
                      item
                    )}
                  </h5>

                  <FaXmark
                    className="cross-icon"
                    onClick={() => handleRemove(item)}
                  />
                </div>
              );
            })}
          </div>

          <div className="dividing-line line"></div>

          <div className="category-box">
            <h4 className="category-title">Category</h4>
            <div className="category-selection">
              <div className="selection">
                <CheckBox
                  label="All"
                  name="category"
                  value="All"
                  className="category-filter-checkbox"
                  checked={category.includes("All")}
                  onChange={handleCategoryChange}
                />
              </div>

              <div className="selection">
                <CheckBox
                  label="Probiotics"
                  name="category"
                  value="Probiotics"
                  className="category-filter-checkbox"
                  checked={category.includes("Probiotics")}
                  onChange={handleCategoryChange}
                />
              </div>

              <div className="selection">
                <CheckBox
                  label="Minerals"
                  name="category"
                  value="Minerals"
                  className="category-filter-checkbox"
                  checked={category.includes("Minerals")}
                  onChange={handleCategoryChange}
                />
              </div>
            </div>
          </div>

          <div className="dividing-line line"></div>

          <div className="price-range-box">
            <div className="title">
              <h4 className="filter-title">Price</h4>
              <h6 className="clear-title">Clear All</h6>
            </div>

            <div className="range-bar">
              <img src={Images.priceRange} alt="" />
              <div className="range">
                <Range />
              </div>
            </div>

            <div className="range-value">
              <select defaultValue="">
                <option value="" disabled>
                  Min
                </option>
                {minPrice.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <span>to</span>

              <select defaultValue="">
                <option value="" disabled>
                  Max
                </option>
                {maxPrice.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="dividing-line line"></div>

          <div className="filters-products">
            <div
              className="select-filter"
              onClick={() => setBrandOpen(!brandopen)}
            >
              <h4>Brand</h4>
              <span>
                <FaChevronDown />
              </span>
            </div>

            {brandopen && (
              <ul className={`dropdown-list ${brandopen ? "open" : ""}`}>
                {Brandoptions.map((item, index) => (
                  <li key={index}>
                    <CheckBox
                      className="category-filter-checkbox"
                      label={item.label}
                      name="brand"
                      value={item.value}
                      checked={brandValues.includes(item.value)}
                      onChange={handleBrandChange}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="dividing-line line"></div>

          <div className="filters-products">
            <div
              className="select-filter"
              onClick={() => setratingOpen(!ratingopen)}
            >
              <h4>Rating</h4>
              <span>
                <FaChevronDown />
              </span>
            </div>

            {ratingopen && (
              <ul className={`dropdown-list ${brandopen ? "open" : ""}`}>
                {Ratingoptions.map((item, index) => (
                  <li key={index}>
                    <CheckBox
                      className="category-filter-checkbox"
                      label={
                        <span className="rating-label">
                          {item.label.split(" ")[0]}
                          <FaStar className="star" />
                          {" & above"}
                        </span>
                      }
                      name="rating"
                      value={item.value}
                      checked={ratingValues.includes(item.value)}
                      onChange={handleRatingChange}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="dividing-line line"></div>

          <div className="filters-products">
            <div
              className="select-filter"
              onClick={() => setDiscountOpen(!discountopen)}
            >
              <h4>Discount</h4>
              <span>
                <FaChevronDown />
              </span>
            </div>

            {discountopen && (
              <ul className={`dropdown-list ${brandopen ? "open" : ""}`}>
                {discountoptions.map((item, index) => (
                  <li key={index}>
                    <CheckBox
                      className="category-filter-checkbox"
                      label={item.label}
                      name="brand"
                      value={item.value}
                      checked={discountValues.includes(item.value)}
                      onChange={handleDiscountChange}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="dividing-line line"></div>

          <div className="filters-products">
            <div
              className="select-filter"
              onClick={() => setArrivalOpen(!arrivalopen)}
            >
              <h4>New Arrival</h4>
              <span>
                <FaChevronDown />
              </span>
            </div>

            {arrivalopen && (
              <ul className={`dropdown-list ${brandopen ? "open" : ""}`}>
                {arrivaloptions.map((item, index) => (
                  <li key={index}>
                    <CheckBox
                      className="category-filter-checkbox"
                      label={item.label}
                      name="brand"
                      value={item.value}
                      checked={arrivalValues.includes(item.value)}
                      onChange={handleArrivalChange}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="dividing-line line"></div>

          <div className="filters-products">
            <div
              className="select-filter"
              onClick={() => setAvailabilityOpen(!availabilityopen)}
            >
              <h4>Availability</h4>
              <span>
                <FaChevronDown />
              </span>
            </div>

            {availabilityopen && (
              <ul className={`dropdown-list ${brandopen ? "open" : ""}`}>
                {availabilityoptions.map((item, index) => (
                  <li key={index}>
                    <CheckBox
                      className="category-filter-checkbox"
                      label={item.label}
                      name="brand"
                      value={item.value}
                      checked={availabilityValues.includes(item.value)}
                      onChange={handleAvailabilityChange}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
