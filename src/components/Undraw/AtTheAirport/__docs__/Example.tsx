import React, { FC } from "react";
  import AtTheAirport from "../AtTheAirport";
  
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
        <AtTheAirport width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  