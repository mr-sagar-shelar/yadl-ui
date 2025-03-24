import React, { FC } from "react";
  import ProfessionalServices from "../ProfessionalServices";
  
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
        <ProfessionalServices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  