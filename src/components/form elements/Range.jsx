import React, { useState } from "react";

const Range = ({ min = 0, max = 500 }) => {
  const [maxVal, setMaxVal] = useState(300);

  const getPercent = (value) => ((value - min) / (max - min)) * 100;

  return (
    <div className="range-wrapper">
      <div className="slider">
        <div className="track"></div>

        <div
          className="range"
          style={{
            width: `${getPercent(maxVal)}%`,
          }}
        ></div>

        
        <div className="thumb-circle left"></div>

        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(e) => setMaxVal(Number(e.target.value))}
          className="thumb"
        />
      </div>
    </div>
  );
};

export default Range;