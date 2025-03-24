import React, { FC } from "react";
  import PortfolioUpdate from "../PortfolioUpdate";
  
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
        <PortfolioUpdate width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  