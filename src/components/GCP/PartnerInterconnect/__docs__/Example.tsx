import React, { FC } from "react";
  import PartnerInterconnect from "../PartnerInterconnect";
  
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
        <PartnerInterconnect width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  