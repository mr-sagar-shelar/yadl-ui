import React, { FC } from "react";
  import Alerts from "../Alerts";
  
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
        <Alerts width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  