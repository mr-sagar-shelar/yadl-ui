import React, { FC } from "react";
  import CustomVision from "../CustomVision";
  
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
        <CustomVision width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  