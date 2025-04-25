import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  Ref
} from "react";
import { addMonacoStyles } from "monaco-editor-wrapper/styles";
import { createUserConfig } from "../monaco-editor-wrapper-utils.js";
import { UserConfig } from "monaco-editor-wrapper";
import { MonacoEditorReactComp } from "@typefox/monaco-editor-react";
import { buildWorkerDefinition } from "monaco-editor-workers";
import { deserializeAST, DocumentChangeResponse } from "langium-ast-helper";
import syntaxHighlighting from "./yadl.monarch.js";
import { YadlModelAstNode } from "./index.js";
import { getYADLNodes } from "../YADLDeserializer.js";
import { YadlEdge, YadlEditorResponse, YadlNode } from "./Interfaces.js"
import { get } from "lodash";

addMonacoStyles("monaco-styles-helper");

buildWorkerDefinition(
  "/monaco-editor-workers/workers",
  new URL("", window.location.href).href,
  false,
);

export interface YadlEditorProps {
  onChange: (code: YadlEditorResponse) => void;
  position?: number;
  code?: string;
}

export type YadlEditorRef = {
  onNodePositionChanged: (node: YadlNode) => void;
  onNodeSelect: (node: YadlNode) => void;
  onNodeRemoved: (node: YadlNode) => void;
  onEdgeConnect: (edge: YadlEdge) => void;
}

function Editor(props: YadlEditorProps, ref: Ref<YadlEditorRef>) {
  let running = false;
  let timeout: number | null = null;
  const { onChange, position = 0, code } = props;
  const monacoEditor = useRef<MonacoEditorReactComp | null>(null);
  const [userConfig, setUserConfig] = useState<UserConfig>();
  const [currentCode, setCurrentCode] = useState<string>(code);

  useEffect(() => {
    const userConfig = createUserConfig(
      {
        languageId: "yadl",
        code: code,
        worker: "/worker/yadl-server-worker.js",
        monarchGrammar: syntaxHighlighting,
      },
      "vs-dark",
    );

    setUserConfig(userConfig);
    setCurrentCode(currentCode);
  }, [code]);

  useEffect(() => {
    if (position > 0) {
      setPosition(position);
    }
  }, [position]);

  useImperativeHandle(ref, () => ({
    onNodePositionChanged,
    onNodeSelect,
    onNodeRemoved,
    onEdgeConnect,
  }));

  const onCodeChange = (resp: DocumentChangeResponse) => {
    if (running) {
      return;
    }

    // clear previous timeouts
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = window.setTimeout(async () => {
      running = true;
      const ast = deserializeAST(resp.content) as YadlModelAstNode;
      const deserializedContent = getYADLNodes(ast);
      onChange(deserializedContent)
      running = false;
    }, 500);
  };

  const onMonacoLoad = () => {
    if (!monacoEditor.current) {
      throw new Error("Unable to get a reference to the Monaco Editor");
    }

    const lc = monacoEditor.current?.getEditorWrapper()?.getLanguageClient();
    if (!lc) {
      throw new Error("Could not get handle to Language Client on mount");
    }
    monacoEditor.current.getEditorWrapper()?.getEditor()?.focus();
    lc.onNotification("browser/DocumentChange", onCodeChange);
  };

  const setPosition = (position: number) => {
    if (!monacoEditor || !monacoEditor.current) {
      return;
    }
    const monacoInstance = monacoEditor?.current
      ?.getEditorWrapper()
      ?.getEditor();
    monacoInstance.setPosition({ column: 0, lineNumber: position });
    monacoInstance.revealLineInCenter(position);
  };

  const onNodePositionChanged = (node: YadlNode) => {
    if (!monacoEditor || !monacoEditor.current) {
      return;
    }
    const monacoInstance = monacoEditor?.current
      ?.getEditorWrapper()
      ?.getEditor();

    const xValue = Math.trunc(node.position.x);
    const yValue = Math.trunc(node.position.y);

    const range = get(node, "data.positionRange");
    if (range) {
      const updatedText = `position { x: ${xValue} y: ${yValue} }`
      const id = { major: 1, minor: 1 };
      const startLineNumber = get(range, "start.line", 0) + 1;
      const startColumn = get(range, "start.character", 0) + 1;
      const endLineNumber = get(range, "end.line", 0) + 1;
      const endColumn = get(range, "end.character", 0) + 1;

      const operation = {
        identifier: id,
        range: {
          startLineNumber: startLineNumber,
          startColumn: startColumn,
          endLineNumber: endLineNumber,
          endColumn: endColumn,
        },
        text: updatedText,
        forceMoveMarkers: true,
      };
      monacoInstance.executeEdits("my-source", [operation]);
    }
  };

  const onNodeSelect = (node: YadlNode) => {
    if (!monacoEditor || !monacoEditor.current) {
      return;
    }

    const monacoInstance = monacoEditor?.current
      ?.getEditorWrapper()
      ?.getEditor();
    const selectedLine = get(node, "data.startLine", 0);
    monacoInstance.setPosition({ column: 0, lineNumber: selectedLine });
    monacoInstance.revealLineInCenter(selectedLine);
  };

  const onNodeRemoved = (node: YadlNode) => {
    if (!monacoEditor || !monacoEditor.current) {
      return;
    }
    const monacoInstance = monacoEditor?.current
      ?.getEditorWrapper()
      ?.getEditor();

    const range = get(node, "data.nodeRange");
    if (range) {
      const id = { major: 1, minor: 1 };
      const startLineNumber = get(range, "start.line", 0) + 1;
      const startColumn = get(range, "start.character", 0) + 1;
      const endLineNumber = get(range, "end.line", 0) + 1;
      const endColumn = get(range, "end.character", 0) + 1;

      const operation = {
        identifier: id,
        range: {
          startLineNumber: startLineNumber,
          startColumn: startColumn,
          endLineNumber: endLineNumber,
          endColumn: endColumn,
        },
        text: "",
        forceMoveMarkers: true,
      };
      monacoInstance.executeEdits("my-source", [operation]);
    }
  };

  const onEdgeConnect = (edge: YadlEdge) => {
    if (!monacoEditor || !monacoEditor.current) {
      return;
    }

    const monacoInstance = monacoEditor?.current
      ?.getEditorWrapper()
      ?.getEditor();
    const monacoModel = monacoEditor?.current?.getEditorWrapper()?.getModel();
    const selectedLine = monacoModel?.getLineCount() || 0;

    const xOperation = {
      identifier: { major: 1, minor: 1 },
      range: {
        startLineNumber: selectedLine,
        startColumn: 1,
        endLineNumber: selectedLine,
        endColumn: 1,
      },
      text: `edge ${edge.source} => ${edge.target}\n `,
      forceMoveMarkers: true,
    };

    monacoInstance.executeEdits("my-source", [xOperation]);
    monacoInstance.setPosition({ column: 0, lineNumber: selectedLine });
    monacoInstance.revealLineInCenter(selectedLine);
  };

  const renderEditor = () => {
    const style = {
      height: "100vh",
      width: "100%",
    };
    return (
      <>
        {userConfig && (
          <MonacoEditorReactComp
            ref={monacoEditor}
            onLoad={onMonacoLoad}
            userConfig={userConfig}
            style={style}
          />
        )}
      </>
    );
  };

  return <>{renderEditor()}</>;
}

export default forwardRef(Editor);