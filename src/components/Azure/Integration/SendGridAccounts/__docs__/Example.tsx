import React, { FC } from "react";
  import SendGridAccounts from "../SendGridAccounts";
  
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
        <SendGridAccounts width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  