import React, { FC } from "react";
  import ApiMonetization from "../ApiMonetization";
  
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
        <ApiMonetization width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  