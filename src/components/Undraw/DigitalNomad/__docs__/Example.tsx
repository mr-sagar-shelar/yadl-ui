import React, { FC } from "react";
  import DigitalNomad from "../DigitalNomad";
  
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
        <DigitalNomad width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  