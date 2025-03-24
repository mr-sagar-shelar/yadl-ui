import React, { FC } from "react";
  import MyCurrentLocation from "../MyCurrentLocation";
  
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
        <MyCurrentLocation width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  