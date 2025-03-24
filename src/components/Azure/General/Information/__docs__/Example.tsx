import React, { FC } from "react";
  import Information from "../Information";
  
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
        <Information width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  