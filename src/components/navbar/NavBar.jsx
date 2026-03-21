import React from "react";
import { Images } from "../../images/Image";
import SelectBox from "../form elements/SelectBox";
import {
  FaChevronDown,
  FaChevronRight,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const NavBar = () => {
  const purchase = [
    {
      title: "Purchase",
      submenu: ["Unique Biotech Pvt Ltd.", "Agrocel Industries Pvt Ltd. (UBM)"],
    },
    {
      title: "Sales Tickets",
    },
  ];
  const reports = [
    "Purchase Report",
    "Production Report",
    "Stock Report",
    "Sales Report",
    "Net P/L Report",
    "GST Report",
  ];
  const productUploading = [
    {
      title: "Register Company",
      submenu: ["Manufacturer", "Raw Material Supplier"],
    },
    {
      title: "Purchase Product Upload",
      submenu: ["Unique Biotech Pvt Ltd", "Agrocel Industries Pvt Ltd"],
    },
    {
      title: "Sales Product Upload",
      submenu: ["Probiotic", "Minerals"],
    },
  ];
  const offersPromotions = [
    "Create Offer & Promotion",
    "Dealer/Corporate Target Achiever",
    "Dealer/Corporate Target Achiever",
  ];
  const more = [
    {
      title: "Creation",
      submenu: [
        "Dealer/Corporate Firm",
        "Sales Team",
        "Company Employs",
        "Own Manufacturer Team",
      ],
    },
    {
      title: "Subscription",
    },
    {
      title: "Payment Transaction",
      submenu: ["Purchase Transaction", "Sale Transaction"],
    },
    {
      title: "Blogs",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={Images.mainlogo} alt="" />
          </div>

          <div className="nav-middle">
            <div className="nav-links">
              <h5 className="title">Purchases</h5>
              <FaChevronDown className="icon" />

              <div className="dropdowns purchase-dropdown">
                {purchase.map((item, index) => (
                  <div key={index} className="sub-dropdowns">
                    <div className="sub">
                      <h5 className="inner-title">{item.title}</h5>

                      {item.submenu && <FaChevronRight />}

                      {item.submenu && (
                        <div className="sub-menu purchase-submenu">
                          <div className="sub-menu-title">
                            {item.submenu.map((sub, i) => (
                              <h5 className="sub" key={i}>{sub}</h5>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="nav-links">
              <h5 className="title">Reports</h5>
              <FaChevronDown className="icon" />

              <div className="dropdowns">
                {reports.map((data, index) => (
                  <h5 key={index} className="inner-title">
                    {data}
                  </h5>
                ))}
              </div>
            </div>

            <div className="nav-links">
              <h5 className="title">Product Uploading</h5>
              <FaChevronDown className="icon" />

              <div className="dropdowns">
                {productUploading.map((item, index) => (
                  <div key={index} className="sub-dropdowns">
                    <div className="sub">
                      <h5 className="inner-title">{item.title}</h5>
                      <FaChevronRight />

                      <div className="sub-menu">
                        <div className="sub-menu-title">
                          {item.submenu.map((sub, i) => (
                            <h5 key={i}>{sub}</h5>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="nav-links">
              <h5 className="title">Offers & Promotions</h5>
              <FaChevronDown className="icon" />

              <div className="dropdowns offers-dropdown">
                {offersPromotions.map((data, index) => (
                  <h5 key={index} className="inner-title">
                    {data}
                  </h5>
                ))}
              </div>
            </div>

            <div className="nav-links">
              <h5 className="title">Sales & Employs Tracking</h5>
            </div>

            <div className="nav-links">
              <h5 className="title">More</h5>
              <FaChevronDown className="icon" />

              <div className="dropdowns more-dropdown">
                {more.map((item, index) => (
                  <div key={index} className="sub-dropdowns">
                    <div className="sub">
                      <h5 className="inner-title">{item.title}</h5>

                      {item.submenu && <FaChevronRight />}

                      {item.submenu && (
                        <div className="sub-menu more-sub-menu">
                          <div className="sub-menu-title">
                            {item.submenu.map((sub, i) => (
                              <h5 key={i}>{sub}</h5>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="nav-right">
            <div className="nav-circles">
              <div className="circles">
                <img src={Images.cart} alt="" />
              </div>
              <div className="count">3</div>
            </div>
            <div className="nav-circles">
              <div className="circles">
                <FiUser />
              </div>
            </div>
          </div>

          {/* nav-right-mobile */}
          {/* <div className='nav-mobile'>
                <div className='nav-cicles-mobile'>
                    <img src="" alt="" />
                    <div className='red-dot'></div>
                </div>
                <div className='nav-cicles-mobile'>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <div className='red-dot'>8</div>
                </div>
            </div> */}
        </div>
      </div>

      <div style={{borderBottom:"1px solid rgba(var(--nav-border), 1)"}}></div>
    </>
  );
};

export default NavBar;
