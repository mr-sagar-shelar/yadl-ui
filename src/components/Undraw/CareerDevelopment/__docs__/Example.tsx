import React, { FC } from "react";
  import CareerDevelopment from "../CareerDevelopment";
  
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
        <CareerDevelopment width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  