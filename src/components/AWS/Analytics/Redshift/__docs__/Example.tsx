import React, { FC } from "react";
  import Redshift from "../Redshift";
  
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
        <Redshift width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  