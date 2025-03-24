import React, { FC } from "react";
  import IoTExpressLink from "../IoTExpressLink";
  
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
        <IoTExpressLink width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  