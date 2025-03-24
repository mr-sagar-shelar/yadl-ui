import React, { FC } from "react";
  import LightbulbMoment from "../LightbulbMoment";
  
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
        <LightbulbMoment width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  