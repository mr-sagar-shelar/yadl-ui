import React, { FC } from "react";
  import OnlinePopularity from "../OnlinePopularity";
  
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
        <OnlinePopularity width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  