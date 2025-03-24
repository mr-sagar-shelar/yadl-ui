import React, { FC } from "react";
  import ServerFarm from "../ServerFarm";
  
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
        <ServerFarm width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  