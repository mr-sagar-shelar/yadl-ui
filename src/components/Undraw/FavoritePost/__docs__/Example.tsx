import React, { FC } from "react";
  import FavoritePost from "../FavoritePost";
  
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
        <FavoritePost width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  