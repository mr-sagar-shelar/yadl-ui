import * as React from "react";
import { addMonacoStyles } from "monaco-editor-wrapper/styles";
import { createUserConfig } from "../monaco-editor-wrapper-utils.js";
import { UserConfig } from "monaco-editor-wrapper";
import { MonacoEditorReactComp } from "@typefox/monaco-editor-react";
import { buildWorkerDefinition } from "monaco-editor-workers";
import { DocumentChangeResponse } from "langium-ast-helper";
import syntaxHighlighting from "./yadl.monarch.js";

addMonacoStyles("monaco-styles-helper");

export interface Position {
  $type: string;
  x: number;
  y: number;
  xRange?: Range;
  yRange?: Range;
}

buildWorkerDefinition(
  "/libs/monaco-editor-workers/workers",
  new URL("", window.location.href).href,
  false,
);

interface EditorProps {
  onChange: (code: DocumentChangeResponse) => void;
  position?: number;
  code?: string;
}

export default function Editor(props: EditorProps) {
  const { onChange, position, code } = props;
  const monacoEditor = React.useRef();
  const [userConfig, setUserConfig] = React.useState<UserConfig>();
  const [currentCode, setCurrentCode] = React.useState<string>(code);

  React.useEffect(() => {
    const userConfig = createUserConfig(
      {
        languageId: "yadl",
        code: code,
        worker: "/yadl-server-worker.js",
        monarchGrammar: syntaxHighlighting,
      },
      "vs-dark",
    );

    setUserConfig(userConfig);
    setCurrentCode(currentCode);
  }, [code]);

  React.useEffect(() => {
    setPosition(position || 0);
  }, [position]);

  const onMonacoLoad = () => {
    // verify we can get a ref to the editor
    if (!monacoEditor.current) {
      throw new Error("Unable to get a reference to the Monaco Editor");
    }

    //@ts-ignore
    const lc = monacoEditor.current?.getEditorWrapper()?.getLanguageClient();
    if (!lc) {
      throw new Error("Could not get handle to Language Client on mount");
    }
    //@ts-ignore
    monacoEditor.current.getEditorWrapper()?.getEditor()?.focus();
    // register to receive DocumentChange notifications
    lc.onNotification("browser/DocumentChange", onChange);
    console.info(`$$$$$$$$ Editor Loaded $$$$$$$$$$$$`);
  };

  const setPosition = (position: number) => {
    if (!monacoEditor || !monacoEditor.current) {
      return;
    }
    const monacoInstance = monacoEditor?.current
      //@ts-ignore
      ?.getEditorWrapper()
      ?.getEditor();
    const selection = monacoInstance.getSelection();
    const id = { major: 1, minor: 1 };
    const op = {
      identifier: id,
      range: {
        startLineNumber: selection?.selectionStartLineNumber || 1,
        startColumn: selection?.selectionStartColumn || 1,
        endLineNumber: selection?.endLineNumber || 1,
        endColumn: selection?.endColumn || 1,
      },
      text: position.toString(),
      forceMoveMarkers: true,
    };
    monacoInstance.executeEdits("my-source", [op]);
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

  return <div>{renderEditor()}</div>;
}
