import React, { FC } from "react";
  import ButtonStyle from "../ButtonStyle";
  
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
        <ButtonStyle width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  