import React, { FC } from "react";
  import Postman from "../Postman";
  
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
        <Postman width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  