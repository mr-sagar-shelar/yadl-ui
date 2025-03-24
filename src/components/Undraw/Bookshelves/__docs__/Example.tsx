import React, { FC } from "react";
  import Bookshelves from "../Bookshelves";
  
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
        <Bookshelves width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  