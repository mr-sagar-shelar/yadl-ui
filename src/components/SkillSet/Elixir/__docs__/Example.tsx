import React, { FC } from "react";
  import Elixir from "../Elixir";
  
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
        <Elixir width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  