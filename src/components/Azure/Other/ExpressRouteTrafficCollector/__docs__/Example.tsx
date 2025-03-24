import React, { FC } from "react";
  import ExpressRouteTrafficCollector from "../ExpressRouteTrafficCollector";
  
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
        <ExpressRouteTrafficCollector width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  