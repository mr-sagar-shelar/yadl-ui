import React, { FC } from "react";
  import Route53 from "../Route53";
  
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
        <Route53 width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  