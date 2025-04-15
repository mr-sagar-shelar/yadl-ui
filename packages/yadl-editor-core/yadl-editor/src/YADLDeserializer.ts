import { AstNode } from "langium-ast-helper";
import { YadlModelAstNode, Icon, TextComponents, YadlNode, YadlEditorResponse } from "./components/Interfaces.js";

export function getYadlModelAst(ast: YadlModelAstNode): YadlModelAstNode {
  return {
    name: ast.name,
    $type: "YadlModel",
    awsIcons: (ast.awsIcons as Icon[])?.filter((e) => e.$type === "AwsIcons") as Icon[],
    gcpIcons: (ast.gcpIcons as Icon[])?.filter((e) => e.$type === "GcpIcons") as Icon[],
    azureIcons: (ast.azureIcons as Icon[])?.filter((e) => e.$type === "AzureIcons") as Icon[],
    skillIcons: (ast.skillIcons as Icon[])?.filter((e) => e.$type === "SkillIcons") as Icon[],
    themeisleIcons: (ast.themeisleIcons as Icon[])?.filter((e) => e.$type === "ThemeisleIcons") as Icon[],
    undrawIcons: (ast.undrawIcons as Icon[])?.filter((e) => e.$type === "UndrawIcons") as Icon[],
    textComponents: (ast.textComponents as TextComponents[])?.filter((e) => e.$type === "TextComponents") as TextComponents[],
  };
}

export function getYADLNodes(ast: AstNode): YadlEditorResponse {
  const astNode = getYadlModelAst(ast as YadlModelAstNode);
  let allNodes: YadlNode[] = [];
  const awsIcons = astNode?.awsIcons?.flatMap((i: Icon): YadlNode => {
    return {
      id: i.name,
      data: {
        icon: i.icon,
        category: "aws"
      },
      type: "icon",
    };
  });

  if (awsIcons) {
    allNodes = allNodes.concat(awsIcons);
  }

  const gcpIcons = astNode?.gcpIcons?.flatMap((i: Icon): YadlNode => {
    return {
      id: i.name,
      data: {
        icon: i.icon,
        category: "gcp"
      },
      type: "icon",
    };
  });

  if (gcpIcons) {
    allNodes = allNodes.concat(gcpIcons);
  }

  const azureIcons = astNode?.azureIcons?.flatMap((i: Icon): YadlNode => {
    return {
      id: i.name,
      data: {
        icon: i.icon,
        category: "azure"
      },
      type: "icon",
    };
  });

  if (azureIcons) {
    allNodes = allNodes.concat(azureIcons);
  }

  const skillIcons = astNode?.skillIcons?.flatMap((i: Icon): YadlNode => {
    return {
      id: i.name,
      data: {
        icon: i.icon,
        category: "skill"
      },
      type: "icon",
    };
  });

  if (skillIcons) {
    allNodes = allNodes.concat(skillIcons);
  }

  const undrawIcons = astNode?.undrawIcons?.flatMap((i: Icon): YadlNode => {
    return {
      id: i.name,
      data: {
        icon: i.icon,
        category: "undraw"
      },
      type: "icon",
    };
  });

  if (undrawIcons) {
    allNodes = allNodes.concat(undrawIcons);
  }

  const themeisleIcons = astNode?.themeisleIcons?.flatMap((i: Icon): YadlNode => {
    return {
      id: i.name,
      data: {
        icon: i.icon,
        category: "themeisle"
      },
      type: "icon",
    };
  });

  if (themeisleIcons) {
    allNodes = allNodes.concat(themeisleIcons);
  }

  const textComponents = astNode?.textComponents?.flatMap((i: any): YadlNode => {
    return {
      id: i.text,
      type: "text",
      data: {
        classes: i.classes?.classes,
        text: i.text,
        fontFamily: i.fontFamily?.fontFamily,
      }
    };
  });

  if (textComponents) {
    allNodes = allNodes.concat(textComponents);
  }

  return {
    nodes: allNodes,
    edges: [],
    fontsUsed: []
  };
}
