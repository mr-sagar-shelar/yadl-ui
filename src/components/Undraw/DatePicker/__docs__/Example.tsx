import React, { FC } from "react";
  import DatePicker from "../DatePicker";
  
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
        <DatePicker width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  