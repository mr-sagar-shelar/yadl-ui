import { DragDropProps, useDnD } from "./DnDContext";

export default () => {
  const [_, setType] = useDnD();

  const onDragStart = (event: any, nodePayload: DragDropProps) => {
    if (setType) {
      setType(nodePayload);
    }
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) =>
          onDragStart(event, {
            type: "input",
            data: {
              label: "input",
            },
          })
        }
        draggable
      >
        Input Node
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) =>
          onDragStart(event, {
            type: "default",
            data: {
              label: "default",
            },
          })
        }
        draggable
      >
        Default Node
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) =>
          onDragStart(event, {
            type: "output",
            data: {
              label: "output",
            },
          })
        }
        draggable
      >
        Output Node
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) =>
          onDragStart(event, {
            type: "icon",
            data: {
              icon: "athena",
              width: 50,
              height: 50,
            },
          })
        }
        draggable
      >
        Athena
      </div>
    </aside>
  );
};
