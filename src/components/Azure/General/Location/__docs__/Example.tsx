import React, { FC } from "react";
  import Location from "../Location";
  
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
        <Location width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  