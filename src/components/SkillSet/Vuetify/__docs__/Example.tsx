import React, { FC } from "react";
  import Vuetify from "../Vuetify";
  
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
        <Vuetify width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  