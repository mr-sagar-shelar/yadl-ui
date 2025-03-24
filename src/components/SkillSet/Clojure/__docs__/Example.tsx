import React, { FC } from "react";
  import Clojure from "../Clojure";
  
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
        <Clojure width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  