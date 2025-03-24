import React, { FC } from "react";
  import SendGift from "../SendGift";
  
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
        <SendGift width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  