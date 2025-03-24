import React, { FC } from "react";
  import SmileyFace from "../SmileyFace";
  
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
        <SmileyFace width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  