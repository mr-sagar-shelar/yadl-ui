import React, { FC } from "react";
  import FavouriteItem from "../FavouriteItem";
  
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
        <FavouriteItem width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  