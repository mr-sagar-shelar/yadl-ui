import React, { FC } from "react";
  import MyCustomers from "../MyCustomers";
  
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
        <MyCustomers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  