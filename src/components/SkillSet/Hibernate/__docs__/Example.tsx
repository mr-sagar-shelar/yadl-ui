import React, { FC } from "react";
  import Hibernate from "../Hibernate";
  
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
        <Hibernate width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  