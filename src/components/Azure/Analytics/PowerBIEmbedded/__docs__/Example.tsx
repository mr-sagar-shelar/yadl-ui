import React, { FC } from "react";
  import PowerBIEmbedded from "../PowerBIEmbedded";
  
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
        <PowerBIEmbedded width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  