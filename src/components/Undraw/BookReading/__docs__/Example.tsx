import React, { FC } from "react";
  import BookReading from "../BookReading";
  
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
        <BookReading width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  