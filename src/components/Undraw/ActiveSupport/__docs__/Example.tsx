import React, { FC } from "react";
  import ActiveSupport from "../ActiveSupport";
  
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
        <ActiveSupport width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  