import React, { FC } from "react";
  import RightPlaces from "../RightPlaces";
  
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
        <RightPlaces width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  