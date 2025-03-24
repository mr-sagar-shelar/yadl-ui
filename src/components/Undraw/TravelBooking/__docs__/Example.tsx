import React, { FC } from "react";
  import TravelBooking from "../TravelBooking";
  
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
        <TravelBooking width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  