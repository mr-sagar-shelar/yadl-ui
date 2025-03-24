import React, { FC } from "react";
  import Cassandra from "../Cassandra";
  
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
        <Cassandra width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  