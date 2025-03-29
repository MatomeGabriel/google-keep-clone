import React from "react";

const IconBox = ({ iconBoxClassName, children }) => {
  return (
    <div
      className={`icon-btn hover ${iconBoxClassName ? iconBoxClassName : ""}`}>
      {children}
    </div>
  );
};

export default IconBox;
