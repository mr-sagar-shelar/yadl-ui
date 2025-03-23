import React, { FC } from "react";
import Processing from "../Processing";

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
      <Processing width="500px" height="500px" />
    </div>
  );
};

export default Example;
