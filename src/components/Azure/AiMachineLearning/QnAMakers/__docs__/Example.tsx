import React, { FC } from "react";
  import QnAMakers from "../QnAMakers";
  
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
        <QnAMakers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  