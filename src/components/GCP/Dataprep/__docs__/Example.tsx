import React, { FC } from "react";
  import Dataprep from "../Dataprep";
  
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
        <Dataprep width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  