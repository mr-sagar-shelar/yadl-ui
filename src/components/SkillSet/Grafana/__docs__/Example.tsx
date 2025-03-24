import React, { FC } from "react";
  import Grafana from "../Grafana";
  
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
        <Grafana width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  