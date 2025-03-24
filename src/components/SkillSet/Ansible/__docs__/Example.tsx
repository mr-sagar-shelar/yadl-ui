import React, { FC } from "react";
  import Ansible from "../Ansible";
  
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
        <Ansible width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  