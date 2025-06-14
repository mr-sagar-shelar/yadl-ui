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
import { getErrorData, getYADLData } from "../YADLDeserializer.js";
import { EditOperation, YadlEdge, YadlEditorResponse, YadlNode } from "./Interfaces.js"
import { get } from "lodash";
import { toPascalCase } from "../Utils.js";
const debounceInterval = 150;

addMonacoStyles("monaco-styles-helper");

buildWorkerDefinition(
  "yadl-client-ts/monaco-editor-workers/workers",
  new URL("", window.location.href).href,
  false,
);

export interface YadlEditorProps {
  onChange: (code: YadlEditorResponse) => void;
  onCodeChange: (code: string) => void;
  onLoad?: () => void;
  position?: number;
  code?: string;
  theme?: string;
}

export type YadlEditorRef = {
  onNodePositionChanged: (node: YadlNode) => void;
  onNodeSelect: (node: YadlNode) => void;
  onNodeRemoved: (node: YadlNode) => void;
  onEdgeConnect: (edge: YadlEdge) => void;
  onNodeResized: (edge: YadlEdge) => void;
  onNodeAdded: (edge: YadlEdge) => void;
  setCode: (code: string) => void;
}

function Editor(props: YadlEditorProps, ref: Ref<YadlEditorRef>) {
  let running = false;
  let timeout: number | null = null;
  const { onChange, onCodeChange, position = 0, code, theme = "vs-dark", onLoad } = props;
  const monacoEditor = useRef<MonacoEditorReactComp | null>(null);
  const [userConfig, setUserConfig] = useState<UserConfig>();

  useEffect(() => {
    const userConfig = createUserConfig(
      {
        languageId: "yadl",
        code: code,
        worker: "yadl-client-ts/worker/yadl-server-worker.js",
        monarchGrammar: syntaxHighlighting,

      },
      theme,
    );

    setUserConfig(userConfig);
  }, [code, theme]);

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
    onNodeResized,
    onNodeAdded,
    setCode
  }));

  const onDocumentChange = (resp: DocumentChangeResponse) => {
    if (running) {
      return;
    }

    // clear previous timeouts
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = window.setTimeout(async () => {
      running = true;
      if (resp.diagnostics?.length > 0) {
        onChange(getErrorData(resp.diagnostics))
      } else {
        const ast = deserializeAST(resp.content) as YadlModelAstNode;
        onChange(getYADLData(ast))
      }
      running = false;
    }, debounceInterval);
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
    lc.onNotification("browser/DocumentChange", onDocumentChange);
    onLoad();
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
      const updatedText = `position: { x: ${xValue} y: ${yValue} }`
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
    const selectedLine = get(node, "data.nodeRange.start.line", 0) + 1;
    monacoInstance.setPosition({ column: 0, lineNumber: selectedLine });
    monacoInstance.revealLineInCenter(selectedLine);
  };

  const onNodeResized = (node: YadlNode) => {
    if (!monacoEditor || !monacoEditor.current) {
      return;
    }

    const monacoInstance = monacoEditor?.current
      ?.getEditorWrapper()
      ?.getEditor();
    const width = Math.trunc(get(node, "measured.width", 0));
    const height = Math.trunc(get(node, "measured.height", 0));

    const range = get(node, "data.dimensionRange");
    const positionRange = get(node, "data.positionRange");
    let updatedText = `dimension: { width: ${width} height: ${height} }`;
    const id = { major: 1, minor: 1 };

    if (range) {
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
    } else if (positionRange) {
      updatedText = ` ${updatedText} `
      const startLineNumber = get(positionRange, "start.line", 0) + 1;
      const startColumn = get(positionRange, "end.character", 0) + 1;
      const endLineNumber = get(positionRange, "end.line", 0) + 1;

      const operation = {
        identifier: id,
        range: {
          startLineNumber: startLineNumber,
          startColumn: startColumn,
          endLineNumber: endLineNumber,
          endColumn: startColumn,
        },
        text: updatedText,
        forceMoveMarkers: true,
      };
      monacoInstance.executeEdits("my-source", [operation]);
    }
  };

  const onNodeAdded = (node: YadlNode) => {
    if (!monacoEditor || !monacoEditor.current) {
      return;
    }

    const monacoInstance = monacoEditor?.current
      ?.getEditorWrapper()
      ?.getEditor();


    const xValue = Math.trunc(node.position.x);
    const yValue = Math.trunc(node.position.y);
    let updatedText = ""
    const lineNumber = monacoInstance.getModel().getLineCount() + 1;
    const id = { major: 1, minor: 1 };
    const startLineNumber = lineNumber;
    const startColumn = 0;
    const endLineNumber = lineNumber;
    let endColumn = 0;
    if (node.type === "icon") {
      const width = Math.trunc(get(node, "data.width", 50));
      const height = Math.trunc(get(node, "data.height", 50));
      const category = get(node, "data.category", "");
      const tagName = toPascalCase(category);
      const icon = get(node, "data.icon", "");
      updatedText = `<${tagName} icon: ${icon} position: { x: ${xValue} y: ${yValue} } dimension: { width: ${width} height: ${height} } />\n`;

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
    else if (node.type === "author") {
      const width = Math.trunc(get(node, "data.width", 300));
      const height = Math.trunc(get(node, "data.height", 200));
      const src = get(node, "data.src", "");
      const name = get(node, "data.name", "");
      const caption = get(node, "data.caption", "");
      const imageClasses = get(node, "data.imageClasses", "");
      const captionClasses = get(node, "data.captionClasses", "");
      const nameClasses = get(node, "data.nameClasses", "");
      const nameFontFamily = get(node, "data.nameFontFamily", "");
      const captionFontFamily = get(node, "data.nameClasses", "");
      const classes = get(node, "data.classes", "");
      updatedText = `<Author src: "${src}" 
            position: { x: ${xValue} y: ${yValue} } 
            dimension: { width: ${width} height: ${height} }
            ${name ? "name:\ \"" + name + "\"" : ""} 
            ${caption ? "caption:\ \"" + caption + "\"" : ""} 
            ${imageClasses ? "imageClasses:\ \"" + imageClasses + "\"" : ""} 
            ${captionClasses ? "captionClasses:\ \"" + captionClasses + "\"" : ""} 
            ${nameClasses ? "nameClasses:\ \"" + nameClasses + "\"" : ""} 
            ${nameFontFamily ? "nameFontFamily:\ \"" + nameFontFamily + "\"" : ""} 
            ${captionFontFamily ? "captionFontFamily:\ \"" + captionFontFamily + "\"" : ""} 
            ${classes ? "classes: \"" + classes + "\"" : ""} 
            />\n`;
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
    else if (node.type === "text") {
      const width = Math.trunc(get(node, "data.props.width", 100));
      const height = Math.trunc(get(node, "data.props.height", 50));
      const classes = get(node, "data.classes", "");
      const fontFamily = get(node, "data.fontFamily", "");
      const text = get(node, "data.text", "");
      updatedText = `<Text text: "${text}" position: { x: ${xValue} y: ${yValue} } dimension: { width: ${width} height: ${height} } ${fontFamily ? "fontFamily:\ \"" + fontFamily + "\"" : ""} ${classes ? "classes: \"" + classes + "\"" : ""} />\n`;
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
    else if (node.type === "box") {
      const width = Math.trunc(get(node, "data.props.width", 100));
      const height = Math.trunc(get(node, "data.props.height", 100));
      const classes = get(node, "data.props.classes", "");
      const component = get(node, "data.component", "");
      updatedText = `<Box type: ${component} position: { x: ${xValue} y: ${yValue} } dimension: { width: ${width} height: ${height} } ${classes ? "classes: \"" + classes + "\"" : ""} />\n`;
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
    } else if (node.type === "avatar") {
      const width = Math.trunc(get(node, "data.width", 100));
      const height = Math.trunc(get(node, "data.height", 100));
      const topType = get(node, "data.topType", "");
      const accessoriesType = get(node, "data.accessoriesType", "");
      const hairColor = get(node, "data.hairColor", "");
      const facialHairType = get(node, "data.facialHairType", "");
      const graphicType = get(node, "data.graphicType", "");
      const clotheType = get(node, "data.clotheType", "");
      const eyeType = get(node, "data.eyeType", "");
      const eyebrowType = get(node, "data.eyebrowType", "");
      const mouthType = get(node, "data.mouthType", "");
      const skinColor = get(node, "data.skinColor", "");
      updatedText = `<Avatar style: Circle topType: ${topType} graphicType: ${graphicType} accessoriesType: ${accessoriesType} hairColor: ${hairColor} facialHairType: ${facialHairType} clotheType: ${clotheType} eyeType: ${eyeType} eyebrowType: ${eyebrowType} mouthType: ${mouthType} skinColor: ${skinColor} position: { x: ${xValue} y: ${yValue} } dimension: { width: ${width} height: ${height} } />\n`;
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

    const operations = [];

    const xOperation = {
      identifier: { major: 1, minor: 1 },
      range: {
        startLineNumber: selectedLine,
        startColumn: 1,
        endLineNumber: selectedLine,
        endColumn: 1,
      },
      text: `<Edge source: "${edge.source}" target: "${edge.target}" sourceHandle: ${edge.sourceHandle} targetHandle: ${edge.targetHandle} type : default />\n `,
      forceMoveMarkers: true,
    };

    operations.push(xOperation);

    if (edge?.data?.edits && edge?.data?.edits.length > 0) {
      console.log(edge?.data?.edits);
      const editOperations = edge?.data?.edits as EditOperation[];
      editOperations.forEach((operation) => {
        const xOperation = {
          identifier: { major: 1, minor: 1 },
          range: {
            startLineNumber: operation.line,
            startColumn: operation.column,
            endLineNumber: operation.line,
            endColumn: operation.column,
          },
          text: `${operation.id} `,
        };
        operations.push(xOperation);
      });
    }

    monacoInstance.executeEdits("my-source", operations);
    monacoInstance.setPosition({ column: 0, lineNumber: selectedLine });
    monacoInstance.revealLineInCenter(selectedLine);
  };

  const setCode = (code: string) => {
    if (!monacoEditor || !monacoEditor.current) {
      return;
    }
    const monacoInstance = monacoEditor?.current
      ?.getEditorWrapper()
      ?.getEditor();
    monacoInstance.setValue(code);
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
            onTextChanged={(text) => {
              onCodeChange(text);
            }}
          />
        )}
      </>
    );
  };

  return <>{renderEditor()}</>;
}

export default forwardRef(Editor);