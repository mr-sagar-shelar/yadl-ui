import React, { FC } from "react";
  import Booking from "../Booking";
  
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
        <Booking width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  