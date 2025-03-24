import React, { FC } from "react";
  import SecurityBaselines from "../SecurityBaselines";
  
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
        <SecurityBaselines width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  