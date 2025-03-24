import React, { FC } from "react";
  import ABSMember from "../ABSMember";
  
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
        <ABSMember width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  