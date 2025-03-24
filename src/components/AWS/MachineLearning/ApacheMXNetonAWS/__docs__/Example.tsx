import React, { FC } from "react";
  import ApacheMXNetonAWS from "../ApacheMXNetonAWS";
  
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
        <ApacheMXNetonAWS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  