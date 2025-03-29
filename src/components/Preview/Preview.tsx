import { useCallback, useRef } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  BackgroundVariant,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  useReactFlow,
  type Node,
  type Edge,
  type FitViewOptions,
  // type OnConnect,
  // type OnNodesChange,
  // type OnEdgesChange,
  // type OnNodeDrag,
  // type NodeTypes,
  type DefaultEdgeOptions,
} from "@xyflow/react";
import { YadlNodeTypes } from "./Nodes";
import Sidebar from "./Sidebar";
import { DnDProvider, useDnD, DragDropProps } from "./DnDContext";
import "./xy-themes.css";

export type YadlPreviewProps = {
  nodes: Node[];
  edges: Edge[];
};

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const YadlPreview = (props: YadlPreviewProps) => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(props.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(props.edges);
  const { screenToFlowPosition } = useReactFlow();
  const [type] = useDnD();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  // const onNodesChange = useCallback(
  //   (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
  //   [],
  // );
  // const onEdgesChange = useCallback(
  //   (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   [],
  // );

  // const onConnect = useCallback(
  //   (params) => setEdges((eds) => addEdge(params, eds)),
  //   [],
  // );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      if (!type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const dataType = (type as unknown as DragDropProps).type;
      const data = (type as unknown as DragDropProps).data;

      const newNode = {
        id: getId(),
        type: dataType,
        position,
        data: { label: `${dataType}`, ...data },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, type],
  );

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div className="dndflow">
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
            fitViewOptions={fitViewOptions}
            defaultEdgeOptions={defaultEdgeOptions}
            proOptions={{ hideAttribution: true }}
            nodeTypes={YadlNodeTypes}
          >
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default (props: YadlPreviewProps) => (
  <ReactFlowProvider>
    <DnDProvider>
      <YadlPreview {...props} />
    </DnDProvider>
  </ReactFlowProvider>
);
