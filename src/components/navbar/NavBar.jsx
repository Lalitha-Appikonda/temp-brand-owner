import React, { useState } from "react";
import { Images } from "../../images/Image";
import SelectBox from "../form-elements/SelectBox";
import {
  FaBars,
  FaChevronDown,
  FaChevronRight,
  FaHamburger,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import MobileNav from "../mobile nav/MobileNav";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubMenuDropdown, setActiveSubMenuDropdown] = useState(null);

  const screen1320 = useMediaQuery({ query: "(max-width: 1320px)" });

  const hiddenNav = useMediaQuery({ query: "(max-width:768px)" });

  const hideNav = ["/products","/productinnerpage"];

  const Condition = hiddenNav && hideNav.includes(currentPath);

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

  const more1320 = [
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
    {
      title: "Offers & Promotions",
      submenu: [
        "Create Offer & Promotion",
        "Dealer/Corporate Target Achiever",
        "Sales Team Target Achiever",
      ],
    },
    {
      title: "Sales & Employs Tracking",
    },
  ];
  const currentMore = screen1320 ? more1320 : more;
  return (
    <>
      <div className=" nav-container-wrapper">
        <div className="container">
          {!Condition && (
            <div className="nav-container">
              <div className="nav-hamburger-container">
                <div
                  className="nav-hamburger"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <FaBars />
                </div>
                <div className="nav-hamburger-logo">
                  <img src={Images.mainlogo} alt="" />
                </div>
              </div>

              <div className={`menu-left ${menuOpen ? "show" : ""}`}>
                <div
                  className="nav-links"
                  onClick={() => {
                    setActiveDropdown(
                      activeDropdown === "purchases" ? null : "purchases",
                    );
                    setActiveSubMenuDropdown(null);
                  }}
                >
                  <h5 className="title">Purchases</h5>
                  <FaChevronDown className="icon" />

                  <div
                    className={`menu-left-dropdowns ${activeDropdown === "purchases" ? "show" : ""}`}
                  >
                    {purchase.map((item, index) => (
                      <div key={index} className="sub-dropdowns">
                        <div
                          className="sub"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSubMenuDropdown(
                              activeSubMenuDropdown === index ? null : index,
                            );
                          }}
                        >
                          <h5 className="inner-title">{item.title}</h5>
                          {item.submenu && <FaChevronRight />}
                        </div>

                        {item.submenu && (
                          <div
                            className={`sub-menu ${activeSubMenuDropdown === index ? "show" : ""}`}
                          >
                            {item.submenu.map((sub, i) => (
                              <h5 key={i}>{sub}</h5>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="nav-links"
                  onClick={() => {
                    setActiveDropdown(
                      activeDropdown === "reports" ? null : "reports",
                    );
                    setActiveSubMenuDropdown(null);
                  }}
                >
                  <h5 className="title">Reports</h5>
                  <FaChevronDown className="icon" />

                  <div
                    className={`menu-left-dropdowns ${activeDropdown === "reports" ? "show" : ""}`}
                  >
                    {reports.map((item, index) => (
                      <div key={index} className="sub-dropdowns">
                        <div
                          className="sub"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSubMenuDropdown(
                              activeSubMenuDropdown === index ? null : index,
                            );
                          }}
                        >
                          <h5 className="inner-title">{item}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="nav-links"
                  onClick={() => {
                    setActiveDropdown(
                      activeDropdown === "productUploading"
                        ? null
                        : "productUploading",
                    );
                    setActiveSubMenuDropdown(null);
                  }}
                >
                  <h5 className="title">Product Uploading</h5>
                  <FaChevronDown className="icon" />

                  <div
                    className={`menu-left-dropdowns ${activeDropdown === "productUploading" ? "show" : ""}`}
                  >
                    {productUploading.map((item, index) => (
                      <div key={index} className="sub-dropdowns">
                        <div
                          className="sub"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSubMenuDropdown(
                              activeSubMenuDropdown === index ? null : index,
                            );
                          }}
                        >
                          <h5 className="inner-title">{item.title}</h5>
                          {item.submenu && <FaChevronRight />}
                        </div>

                        {item.submenu && (
                          <div
                            className={`sub-menu ${activeSubMenuDropdown === index ? "show" : ""}`}
                          >
                            {item.submenu.map((sub, i) => (
                              <h5 key={i}>{sub}</h5>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="nav-links"
                  onClick={() => {
                    setActiveDropdown(
                      activeDropdown === "offersPromotions"
                        ? null
                        : "offersPromotions",
                    );
                    setActiveSubMenuDropdown(null);
                  }}
                >
                  <h5 className="title">Offers & Promotions</h5>
                  <FaChevronDown className="icon" />

                  <div
                    className={`menu-left-dropdowns ${activeDropdown === "offersPromotions" ? "show" : ""}`}
                  >
                    {offersPromotions.map((item, index) => (
                      <div key={index} className="sub-dropdowns">
                        <div
                          className="sub"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSubMenuDropdown(
                              activeSubMenuDropdown === index ? null : index,
                            );
                          }}
                        >
                          <h5 className="inner-title">{item}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="nav-links">
                  <h5 className="title">Sales & Employs Tracking</h5>
                </div>

                <div
                  className="nav-links"
                  onClick={() => {
                    setActiveDropdown(
                      activeDropdown === "more" ? null : "more",
                    );
                    setActiveSubMenuDropdown(null);
                  }}
                >
                  <h5 className="title">More</h5>
                  <FaChevronDown className="icon" />

                  <div
                    className={`menu-left-dropdowns ${activeDropdown === "more" ? "show" : ""}`}
                  >
                    {more.map((item, index) => (
                      <div key={index} className="sub-dropdowns">
                        <div
                          className="sub"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSubMenuDropdown(
                              activeSubMenuDropdown === index ? null : index,
                            );
                          }}
                        >
                          <h5 className="inner-title">{item.title}</h5>
                          {item.submenu && <FaChevronRight />}
                        </div>

                        {item.submenu && (
                          <div
                            className={`sub-menu ${activeSubMenuDropdown === index ? "show" : ""}`}
                          >
                            {item.submenu.map((sub, i) => (
                              <h5 key={i}>{sub}</h5>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

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
                                  <h5 className="sub" key={i}>
                                    {sub}
                                  </h5>
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
                      <h5 key={index} className="inner-title inner">
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
                      <h5 key={index} className="inner-title inner">
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
                    {currentMore.map((item, index) => (
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
              <div className="nav-mobile">
                <div className="nav-cicles-mobile1">
                  <img src={Images.notification} alt="" />
                  <div className="red-dot"></div>
                </div>
                <div className="nav-cicles-mobile2">
                  <img src={Images.like} alt="" />
                  <img src={Images.bag} alt="" />
                  <div className="red-dot">8</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {!Condition && (<div
          style={{ borderBottom: "1px solid rgba(var(--nav-border), 1)" }}
        ></div>)}
      </div>

      <MobileNav />
    </>
  );
};

export default NavBar;
