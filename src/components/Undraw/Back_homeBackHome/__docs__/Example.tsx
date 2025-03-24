import React, { FC } from "react";
  import Back_homeBackHome from "../Back_homeBackHome";
  
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
        <Back_homeBackHome width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  