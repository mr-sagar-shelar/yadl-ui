import React, { FC } from "react";
  import GTK from "../GTK";
  
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
        <GTK width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  