import React, { FC } from "react";
  import IoTEduKit from "../IoTEduKit";
  
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
        <IoTEduKit width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  