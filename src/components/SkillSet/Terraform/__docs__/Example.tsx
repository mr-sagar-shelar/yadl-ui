import React, { FC } from "react";
  import Terraform from "../Terraform";
  
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
        <Terraform width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  