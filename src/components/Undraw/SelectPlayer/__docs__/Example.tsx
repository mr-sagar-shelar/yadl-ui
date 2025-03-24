import React, { FC } from "react";
  import SelectPlayer from "../SelectPlayer";
  
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
        <SelectPlayer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  