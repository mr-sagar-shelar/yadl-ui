import React, { FC } from "react";
  import TravelMode from "../TravelMode";
  
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
        <TravelMode width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  