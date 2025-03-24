import React, { FC } from "react";
  import Datastore from "../Datastore";
  
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
        <Datastore width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  