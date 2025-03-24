import React, { FC } from "react";
  import RelaxingAtHome from "../RelaxingAtHome";
  
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
        <RelaxingAtHome width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  