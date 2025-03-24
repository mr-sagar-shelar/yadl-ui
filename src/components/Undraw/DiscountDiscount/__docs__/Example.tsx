import React, { FC } from "react";
  import DiscountDiscount from "../DiscountDiscount";
  
  const Example = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <DiscountDiscount width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  