import React, { FC } from "react";
  import IotCore from "../IotCore";
  
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
        <IotCore width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  