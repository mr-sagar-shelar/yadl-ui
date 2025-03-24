import React, { FC } from "react";
  import AdvancedSolutionsLab from "../AdvancedSolutionsLab";
  
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
        <AdvancedSolutionsLab width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  