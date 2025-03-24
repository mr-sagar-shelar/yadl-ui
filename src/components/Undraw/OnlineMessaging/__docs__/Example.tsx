import React, { FC } from "react";
  import OnlineMessaging from "../OnlineMessaging";
  
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
        <OnlineMessaging width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  