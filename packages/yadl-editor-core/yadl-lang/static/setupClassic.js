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

<Svg code: \`<svg
  viewBox="0 0 300 100"
  xmlns="http://www.w3.org/2000/svg"
  stroke="red"
  fill="grey">
  <circle cx="50" cy="50" r="40" />
  <circle cx="150" cy="50" r="4" />

  <svg viewBox="0 0 10 10" x="200" width="100">
    <circle cx="5" cy="5" r="4" />
  </svg>
</svg>\` />

<Aws  
id          :              "AWS1"
dimension:     {     height      :        10        width       :       10        }      position: 
      {       x      :      10       y   :          10         }       icon    :         aWSAnalyticsAthena    />

<Azure  
id          :              "Azure1"
dimension:     {     height      :        10        width       :       10        }      position: 
      {       x      :      10       y   :          10         }       icon    :         azureAnalyticsAnalysisServices    />

<Gcp  
id          :              "Gcp1"
dimension:     {     height      :        10        width       :       10        }      position: 
      {       x      :      10       y   :          10         }       icon    :         gCPAccessContextManager    />
<Skill  
id          :              "Skill1"
dimension:     {     height      :        10        width       :       10        }      position: 
      {       x      :      10       y   :          10         }       icon    :         skillIconBabel    />
<Themeisle  
id          :              "Themeisle1"
dimension:     {     height      :        10        width       :       10        }      position: 
      {       x      :      10       y   :          10         }       icon    :         themeisle101    />
<Undraw  
id          :              "Undraw1"
dimension:     {     height      :        10        width       :       10        }      position: 
      {       x      :      10       y   :          10         }       icon    :         undrawADayOff    />

<Author id    :      "Author1"     fontFamily      :      "Sarif"              profileHandle      :       "@Sagar" 
                                    profilePic   :    "https://www.google.com" classes   :   ""  
dimension:     {     height      :        10        width       :       10        }      position: 
      {       x      :      10       y   :          10         } 
         />

<Avatar accessoriesType   :   Blank   classes   :  ""   clotheType   :   BlazerShirt   eyeType   :   Close   eyebrowType   :   Angry   facialHairType   :   BeardLight   fontFamily   :   "sdf" 
graphicType   :   Bat hairColor   :   Auburn mouthType   :   Concerned skinColor   :   Black  style   :   Circle topType   :   Hat 

dimension:     {     height      :        10        width       :       10        }      position: 
      {       x      :      10       y   :          10         } 
/>

<Box   id   :    "Box1"    classes    :    ""   type   :   Box1 
dimension:     {     height      :        10        width       :       10        }      position: 
      {       x      :      10       y   :          10         } 
/>

<Text  id : "Text1"    classes    :   ""    fontFamily    :     ""     text   :    "Hello world"
dimension:     {     height      :        10        width       :       10        }      position: 
      {       x      :      10       y   :          10         } 
/>

<Edge   classes   :  ""  label 
:    "Label 1"    labelStyle    :    ""    source     :     "Top"  sourceHandle   :    bottom    target    :    ""  targetHandle    :     bottom  
type    :     smoothstep

/>

// <Edge AWSSumerian => AzureCompute label:"Hello World" type: smoothstep style:"{ stroke: 'red' }" labelStyle:"{ fill: 'red', fontWeight: 700 }" } />

// <Author "Sagar Shelar" profilePic:""  { position : { x : -22 y : 21 } dimension : { width : 50 height : 50 } } />

// <Avatar accessoriesType: Blank accessoriesType: Blank  eyeType: Close >

<Div     height :         20         style =     {background-color:       "red",     font-size: 20,                text-color: "blue" } 
width :   20>

<Div style=    {   background-color:       "red",     font-size: 30,                text-color: "blue"} >

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
