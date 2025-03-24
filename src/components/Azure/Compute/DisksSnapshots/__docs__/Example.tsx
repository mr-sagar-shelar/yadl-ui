import React, { FC } from "react";
  import DisksSnapshots from "../DisksSnapshots";
  
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
        <DisksSnapshots width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  