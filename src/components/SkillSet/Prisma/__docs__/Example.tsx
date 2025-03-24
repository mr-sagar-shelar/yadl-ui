import React, { FC } from "react";
  import Prisma from "../Prisma";
  
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
        <Prisma width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  