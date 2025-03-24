import React, { FC } from "react";
  import BarberBarber from "../BarberBarber";
  
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
        <BarberBarber width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  