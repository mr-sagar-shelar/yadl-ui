import React, { FC } from "react";
  import AppRegistrations from "../AppRegistrations";
  
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
        <AppRegistrations width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  