import React, { FC } from "react";
  import PortfolioWebsite from "../PortfolioWebsite";
  
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
        <PortfolioWebsite width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  