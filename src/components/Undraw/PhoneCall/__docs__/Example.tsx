import React, { FC } from "react";
  import PhoneCall from "../PhoneCall";
  
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
        <PhoneCall width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  