import React, { FC } from "react";
  import DeviceFarm from "../DeviceFarm";
  
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
        <DeviceFarm width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  