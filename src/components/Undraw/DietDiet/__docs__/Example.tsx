import React, { FC } from "react";
  import DietDiet from "../DietDiet";
  
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
        <DietDiet width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  