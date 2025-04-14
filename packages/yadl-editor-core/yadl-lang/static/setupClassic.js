import {
  addMonacoStyles,
  defineUserServices,
  MonacoEditorLanguageClientWrapper,
} from "./bundle/index.js";
import monarchSyntax from "../syntaxes/yadl.monarch.js";
import { configureWorker } from "./setup.js";

addMonacoStyles("monaco-editor-styles");

export const setupConfigClassic = () => {
  return {
    wrapperConfig: {
      serviceConfig: defineUserServices(),
      editorAppConfig: {
        $type: "classic",
        languageId: "yadl",
        code: `// YADL is running in the web!
aws-icon aWSVRARSumerian

azure-icon azureComputeComputeFleet

gcp-icon gCPAiPlatform

skill-icon skillIconUbuntu

themeisle-icon themeisle104

undraw-icon undrawYear2022 

text "Hello World" {
  position { x: 0 y:0 }
  fontFamily "unwind"
  classes "text-2xl"
}
`,
        useDiffEditor: false,
        languageExtensionConfig: { id: "langium" },
        languageDef: monarchSyntax,
        editorOptions: {
          "semanticHighlighting.enabled": true,
          theme: "vs-dark",
        },
      },
    },
    languageClientConfig: configureWorker(),
  };
};

export const executeClassic = async (htmlElement) => {
  const userConfig = setupConfigClassic();
  const wrapper = new MonacoEditorLanguageClientWrapper();
  await wrapper.initAndStart(userConfig, htmlElement);
};
