import React, { FC } from "react";
  import ShowingSupport from "../ShowingSupport";
  
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
        <ShowingSupport width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  