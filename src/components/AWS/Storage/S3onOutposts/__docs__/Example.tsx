import React, { FC } from "react";
  import S3onOutposts from "../S3onOutposts";
  
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
        <S3onOutposts width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  