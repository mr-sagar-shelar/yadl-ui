import { memo } from "react";
// import { Text } from "yadl-ui-components";

export interface ErrorNodeProps {
  data: {
    message: string[];
  };
}

function ErrorNode(properties: ErrorNodeProps) {
  const {
    data: { message = [] },
  } = properties;
  return (
    <div
      className="bg-error"
    >
      <div role="alert">
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          Error
        </div>
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 text-left">
          <ul className="list-decimal pl-4">
            {message.map((message) => {
              return <li>{message}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

const Memo = memo(ErrorNode);

export default Memo;
