import React, { FC } from "react";
  import Recent from "../Recent";
  
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
        <Recent width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  