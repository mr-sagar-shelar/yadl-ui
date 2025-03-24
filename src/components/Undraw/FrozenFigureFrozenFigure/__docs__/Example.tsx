import React, { FC } from "react";
  import FrozenFigureFrozenFigure from "../FrozenFigureFrozenFigure";
  
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
        <FrozenFigureFrozenFigure width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  