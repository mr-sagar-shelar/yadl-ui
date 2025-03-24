import React, { FC } from "react";
  import Reservations from "../Reservations";
  
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
        <Reservations width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  