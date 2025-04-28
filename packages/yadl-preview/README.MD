# YADL Preview Components


## Install

- `npm i yadl-preview`

# How to use

Below is example on how to integrate YADL Preview Component.

```ts
import { useRef, useState } from "react";
import { Preview } from "yadl-preview";

import "@xyflow/react/dist/style.css";
import "yadl-preview/dist/yadl-preview.css";

const Example = () => {
  const nodes = [
    {
      id: "aws-1",
      data: {
        icon: "aWSAnalyticsAthena",
        category: "aws",
        width: 400,
        height: 400,
      },
      position: {
        x: 0,
        y: 100,
      },
      type: "icon",
    },
    {
      id: "azure-1",
      data: {
        icon: "azureAiMachineLearningAIStudio",
        category: "azure",
        width: 300,
        height: 300,
      },
      position: {
        x: 0,
        y: 200,
      },
      type: "icon",
    },
  ];
  const edges = [
    { id: "aws-1-2", source: "aws-1", target: "azure-1", label: "AWS to Azure", type: "step" },
  ];
  
  return (
    <div style={{ height: "100vh", width: "100%" }}>
        <Preview
            initialNodes={nodes}
            initialEdges={edges}
        />
    </div>
  );
};

const Memo = memo(Example);
export default Memo;
