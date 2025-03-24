import React, { FC } from "react";
  import InformationTab from "../InformationTab";
  
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
        <InformationTab width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  