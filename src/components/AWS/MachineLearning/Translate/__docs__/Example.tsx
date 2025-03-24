import React, { FC } from "react";
  import Translate from "../Translate";
  
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
        <Translate width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  