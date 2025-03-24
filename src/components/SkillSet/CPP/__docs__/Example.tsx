import React, { FC } from "react";
  import CPP from "../CPP";
  
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
        <CPP width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  