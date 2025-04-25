import { useCallback, useEffect, useRef } from "react";
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
  OnNodesChange,
  EdgeChange,
  NodeChange,
  NodeSelectionChange,
  Connection,
  applyNodeChanges,
  applyEdgeChanges,
  type Node,
  type Edge,
  type FitViewOptions,
  type DefaultEdgeOptions,
} from "@xyflow/react";
import { YadlNodeTypes } from "./Nodes";
import { debounce } from "lodash";
import { DnDProvider, useDnD, DragDropProps } from "yadl-core-package";
import "./xy-themes.css";

export type YadlPreviewProps = {
  initialNodes: Node[];
  initialEdges: Edge[];
  onNodePositionChanged?: (node: Node) => void;
  onNodeRemoved?: (node: Node) => void;
  onNodeSelect?: (node: Node) => void;
  onNodeAdded?: (node: Node) => void;
  onEdgeConnect?: (edge: Edge) => void;
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
  const {
    initialNodes = [],
    initialEdges = [],
    onNodeSelect = () => { },
    onNodePositionChanged = () => { },
    onNodeRemoved = () => { },
    onEdgeConnect = () => { },
    onNodeAdded = () => { },
  } = props;
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);
  const { screenToFlowPosition } = useReactFlow();
  const [type] = useDnD();

  const debouncedNodePositionChanged = debounce((node: Node) => {
    onNodePositionChanged(node)
  }, 500);

  const debouncedNodeRemoved = debounce((node: Node) => {
    onNodeRemoved(node)
  }, 500);

  const onConnect = useCallback(
    (changes: Connection) => {
      setEdges((eds) => addEdge(changes, eds));
      const edgeSource = changes.source;
      const edgeTarget = changes.target;
      const newEdge: Edge = {
        id: `${edgeSource} => ${edgeTarget}`,
        source: edgeSource,
        target: edgeTarget,
      };
      onEdgeConnect(newEdge);
    },
    [setEdges],
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange<Edge>[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );

  const onDragOver = useCallback((event: any) => {
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
      onNodeAdded(newNode);
    },
    [screenToFlowPosition, type],
  );

  const onNodesChange: OnNodesChange = useCallback(
    (changes: NodeChange[]) => {
      const updatedNode = changes[0] as Node;
      setNodes((nds) => {
        if (updatedNode.type == "select") {
          const selectedChangedNode = (changes as NodeSelectionChange[]).filter(
            (change) => change.selected,
          );
          if (selectedChangedNode.length > 0) {
            const selectNode = nds.filter(
              (node) => node.id === selectedChangedNode[0].id,
            );
            if (selectNode.length > 0) {
              onNodeSelect(selectNode[0]);
            }
          }
        }
        if (updatedNode.type == "position" && !updatedNode.dragging) {
          const currentNode = nds.filter((node) => node.id === updatedNode.id);
          if (currentNode.length > 0) {
            debouncedNodePositionChanged(currentNode[0]);
          }
        }
        if (updatedNode.type == "remove") {
          const currentNode = nds.filter((node) => node.id === updatedNode.id);
          if (currentNode.length > 0) {
            debouncedNodeRemoved(currentNode[0]);
          }
        }
        return applyNodeChanges(changes, nds);
      });
    },
    [setNodes],
  );

  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges]);

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
