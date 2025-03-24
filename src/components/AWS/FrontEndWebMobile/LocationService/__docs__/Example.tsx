import React, { FC } from "react";
  import LocationService from "../LocationService";
  
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
        <LocationService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  