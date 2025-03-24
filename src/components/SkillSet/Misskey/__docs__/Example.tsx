import React, { FC } from "react";
  import Misskey from "../Misskey";
  
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
        <Misskey width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  