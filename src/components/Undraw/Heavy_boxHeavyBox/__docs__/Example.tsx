import React, { FC } from "react";
  import Heavy_boxHeavyBox from "../Heavy_boxHeavyBox";
  
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
        <Heavy_boxHeavyBox width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  