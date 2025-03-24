import React, { FC } from "react";
  import RefreshingRefreshing from "../RefreshingRefreshing";
  
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
        <RefreshingRefreshing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  