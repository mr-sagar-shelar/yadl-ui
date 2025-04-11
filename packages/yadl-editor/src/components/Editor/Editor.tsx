import {
  MonacoEditorLanguageClientWrapper,
  WrapperConfig,
} from "monaco-editor-wrapper";
import { MonacoEditorReactComp } from "@typefox/monaco-editor-react";

const wrapperConfig: WrapperConfig = {
  $type: "extended",
  htmlContainer: document.getElementById("monaco-editor-root")!,
  editorAppConfig: {
    codeResources: {
      modified: {
        uri: "/workspace/hello.py",
        text: 'print("Hello, World!")',
      },
    },
  },
};
const Editor = () => (
  <>
    <MonacoEditorReactComp
      wrapperConfig={wrapperConfig}
      style={{ height: "100%", width: "100%" }}
      onLoad={(wrapper: MonacoEditorLanguageClientWrapper) => {
        // use the wrapper to get access to monaco-editor or the languageclient
        console.log(wrapper);
      }}
    />
  </>
);
export default Editor;
