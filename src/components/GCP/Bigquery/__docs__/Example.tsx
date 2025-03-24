import React, { FC } from "react";
  import Bigquery from "../Bigquery";
  
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
        <Bigquery width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  