import React, { FC } from "react";
  import IoTButton from "../IoTButton";
  
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
        <IoTButton width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  