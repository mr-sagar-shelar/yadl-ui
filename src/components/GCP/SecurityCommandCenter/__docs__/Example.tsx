import React, { FC } from "react";
  import SecurityCommandCenter from "../SecurityCommandCenter";
  
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
        <SecurityCommandCenter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  