import React, { FC } from "react";
  import Dialogflow from "../Dialogflow";
  
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
        <Dialogflow width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  