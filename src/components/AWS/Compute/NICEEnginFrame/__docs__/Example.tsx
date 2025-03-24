import React, { FC } from "react";
  import NICEEnginFrame from "../NICEEnginFrame";
  
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
        <NICEEnginFrame width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  