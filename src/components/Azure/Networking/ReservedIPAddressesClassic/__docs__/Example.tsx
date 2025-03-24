import React, { FC } from "react";
  import ReservedIPAddressesClassic from "../ReservedIPAddressesClassic";
  
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
        <ReservedIPAddressesClassic width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  