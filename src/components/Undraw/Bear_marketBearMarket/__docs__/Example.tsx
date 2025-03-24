import React, { FC } from "react";
  import Bear_marketBearMarket from "../Bear_marketBearMarket";
  
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
        <Bear_marketBearMarket width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  