import React, { FC } from "react";
  import LocationSearch from "../LocationSearch";
  
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
        <LocationSearch width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  