import React, { FC } from "react";
  import Booked from "../Booked";
  
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
        <Booked width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  