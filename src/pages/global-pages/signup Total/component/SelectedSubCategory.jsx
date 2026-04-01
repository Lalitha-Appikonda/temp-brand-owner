import React, { useEffect, useRef, useState } from "react";
import Buttons from "../../../../components/form-elements/Buttons";

const SelectedSubCategory = ({ Subcategory }) => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const [visibleCount, setVisibleCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredItems = Subcategory.filter((item) => item.value !== "other");

  // Close dropdown when subcategory changes
  useEffect(() => {
    setShowDropdown(false);
  }, [Subcategory]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //  Responsive visible items calculation (MAIN FIX)
  useEffect(() => {
    const updateVisibleItems = () => {
      const containerWidth = containerRef.current?.offsetWidth || 0;

      if (window.innerWidth <= 370) {
        setVisibleCount(2);
        return;
      }

      let totalWidth = 0;
      let count = 0;

      for (let i = 0; i < filteredItems.length; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;

        const elWidth = el.offsetWidth + 8;

        if (totalWidth + elWidth > containerWidth - 60) {
          break;
        }

        totalWidth += elWidth;
        count++;
      }

      setVisibleCount(count || 1);
    };

    updateVisibleItems();

    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, [filteredItems]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hiddenItems = filteredItems.slice(visibleCount);

  return (
    <div className="subcategory-wrapper" ref={containerRef}>
      <div className="Selected-subcategory">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="inner-product"
            ref={(el) => (itemRefs.current[index] = el)}
            style={{
              visibility: index < visibleCount ? "visible" : "hidden",
              position: index < visibleCount ? "relative" : "absolute",
            }}
          >
            <p>{item.label}</p>
          </div>
        ))}

        {hiddenItems.length > 0 && (
          <div className="more-items">
            <Buttons
              type="button"
              variant="outline-primary"
              onClick={(e) => {
                e.stopPropagation();
                setShowDropdown((prev) => !prev);
              }}
              className="plus-count"
            >
              +{hiddenItems.length}
            </Buttons>

            {showDropdown && (
              <div className="dropdown-list">
                {hiddenItems.map((item, index) => (
                  <p key={index}>{item.label}</p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedSubCategory;
