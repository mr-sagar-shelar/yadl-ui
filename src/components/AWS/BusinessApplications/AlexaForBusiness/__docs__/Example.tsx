import React, { FC } from "react";
  import AlexaForBusiness from "../AlexaForBusiness";
  
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
        <AlexaForBusiness width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  