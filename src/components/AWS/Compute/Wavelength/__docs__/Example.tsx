import React, { FC } from "react";
  import Wavelength from "../Wavelength";
  
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
        <Wavelength width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  