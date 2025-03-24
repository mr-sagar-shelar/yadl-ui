import React, { FC } from "react";
  import QT from "../QT";
  
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
        <QT width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  