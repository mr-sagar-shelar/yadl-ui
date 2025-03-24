import React, { FC } from "react";
  import BirthdayCake from "../BirthdayCake";
  
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
        <BirthdayCake width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  