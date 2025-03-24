import React, { FC } from "react";
  import DisksClassic from "../DisksClassic";
  
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
        <DisksClassic width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  