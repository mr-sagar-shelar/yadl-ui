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
aws-icon AWSSumerian aWSVRARSumerian

azure-icon AzureCompute azureComputeComputeFleet

gcp-icon GcpAPI gCPAiPlatform

skill-icon SkillUbuntu skillIconUbuntu

themeisle-icon ThenmeIsle1 themeisle104

undraw-icon Undraw1 undrawYear2022 

edge AWSSumerian => AzureCompute label:"Hello World" { type: smoothstep style:"{ stroke: 'red' }" labelStyle:"{ fill: 'red', fontWeight: 700 }" }

author "Sagar Shelar" profilePic:""  { position { x: -22 y: 21 } dimension { width: 50 height: 50 } }

avatar "AVATAR" style: Circle topType: LongHairCurly accessoriesType: Sunglasses hairColor: Blonde facialHairType: BeardMedium clotheType: GraphicShirt eyeType: Hearts eyebrowType: Angry mouthType: Grimace skinColor: DarkBrown
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
