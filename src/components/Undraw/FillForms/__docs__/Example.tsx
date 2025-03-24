import React, { FC } from "react";
  import FillForms from "../FillForms";
  
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
        <FillForms width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  