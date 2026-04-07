import React, { useState } from "react";
import Card from "../../components/card/Card";
import { Images } from "../../images/Image";
import MobileHeader from "../../components/mobileHeader/MobileHeader";
import ProductButtons from "../../components/productSortingButtons/ProductButtons";
import { HiOutlineTrash } from "react-icons/hi";
import CheckBox from "../../components/form-elements/CheckBox";

const WishList = () => {
  const products = [
    {
      id: 1,
      title: "Probizyme",
      price: 1100,
      oldPrice: 2000,
      discount: "45% OFF",
      badge: "Sale",
      image: Images.product,
      showQuantity: true,
      rating: "5.0",
      reviews: "20K",
    },
    {
      id: 2,
      title: "De - ODOPLUS",
      price: 1700,
      showQuantity: false,
      image: Images.product,
      rating: "5.0",
      reviews: "20K",
    },
    {
      id: 3,
      title: "ub-SPORE",
      price: 600,
      showQuantity: false,
      image: Images.product,
      rating: "5.0",
      reviews: "20K",
    },
    {
      id: 4,
      title: "AquabISON",
      price: 850,
      showQuantity: false,
      image: Images.product,
      rating: "5.0",
      reviews: "20K",
    },
    {
      id: 5,
      title: "Pond Care",
      price: 1100,
      showQuantity: false,
      image: Images.product,
      rating: "5.0",
      reviews: "20K",
    },
    {
      id: 6,
      title: "AquaCare",
      price: 1080,
      showQuantity: false,
      image: Images.product,
      rating: "5.0",
      reviews: "20K",
    },
    {
      id: 7,
      title: "De - ODOPLUS",
      price: 1700,
      showQuantity: false,
      image: Images.product,
      rating: "5.0",
      reviews: "20K",
    },
    {
      id: 8,
      title: "ub-SPORE",
      price: 600,
      showQuantity: false,
      image: Images.product,
      rating: "5.0",
      reviews: "20K",
    },
    {
      id: 9,
      title: "AquabISON",
      price: 850,
      showQuantity: false,
      image: Images.product,
      rating: "5.0",
      reviews: "20K",
    },
  ];

  const [showAllCheckboxes, setShowAllCheckboxes] = useState(false);
  const [isMoveToBagDisabled, setIsMoveToBagDisabled] = useState(false);

  const [checkedItems , setCheckedItems] = useState(null);

  const handleMoveToBag = () => {
    setShowAllCheckboxes(true);
    setIsMoveToBagDisabled(true);
  };

  const handleSelectedItems = (id, e)=>{
//     setCheckedItems((prev) => (...prev , e.target.value))
//   console.log("Checked Items:", checkedItems);
  }

  return (
    <>
      <div className="container">
        <div className="wishlist-wrapper">
          <div>
            <MobileHeader
              title={showAllCheckboxes ? "Items Seleted" : "Wishlist(40 items)"}
              edit={!showAllCheckboxes}
              cart={true}
              deleteIcon={showAllCheckboxes}
              wishlistBag={showAllCheckboxes}
            />
          </div>
          <div className="heading">
            <h4>
              My wishlist <span> 12 items</span>
            </h4>
          </div>

          <div className="wishlist-product-buttons">
            <ProductButtons disabled={isMoveToBagDisabled} />
          </div>

          <div className="whishlist-products-block">
            {products.map((product) => (
              <div key={product.id}>
                <Card
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  discount={product.discount}
                  badge={product.badge}
                  showQuantity={product.showQuantity}
                  image={product.image}
                  rating={product.rating}
                  reviews={product.reviews}
                  buttonText="Move to bag"
                  enableQuantity={false}
                  cusBtnIcon={<HiOutlineTrash className="icon" />}
                  ischecked={showAllCheckboxes}
                  onMoveToBag={handleMoveToBag}
                  isDisabled={isMoveToBagDisabled}
                  handleSelectedItems={(e) => handleSelectedItems(product.id, e)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
