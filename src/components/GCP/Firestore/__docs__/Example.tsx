import React, { FC } from "react";
  import Firestore from "../Firestore";
  
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
        <Firestore width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  