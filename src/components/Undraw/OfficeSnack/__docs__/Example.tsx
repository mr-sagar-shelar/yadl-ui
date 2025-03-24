import React, { FC } from "react";
  import OfficeSnack from "../OfficeSnack";
  
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
        <OfficeSnack width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  