import React, { FC } from "react";
  import AddUser from "../AddUser";
  
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
        <AddUser width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  