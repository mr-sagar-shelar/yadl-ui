import { AstNode } from "langium-ast-helper";
import { YadlModelAstNode, Icon, TextComponents, YadlNode, YadlEditorResponse, YadlNodePosition, Range } from "./components/Interfaces.js";

export function getPosition(position: YadlNodePosition): YadlNodePosition {
  if (!position) {
    return {
      $type: "Position",
      x: 0,
      y: 0,
    };
  }
  return {
    $type: "Position",
    x: position.isNegativeX ? (-1 * position.x) : position.x,
    y: position.isNegativeY ? (-1 * position.y) : position.y,
    range: position.$textRegion?.range,
  };
};

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
  const awsIcons = astNode?.awsIcons?.flatMap((i: Icon, index: number): YadlNode => {
    const position = getPosition(i.position);

    return {
      id: i.name || `aws-${index + 1}`,
      data: {
        icon: i.icon,
        category: "aws",
        positionRange: position.range,
        nodeRange: i.$textRegion.range
      },
      position: position,
      type: "icon",
    };
  });

  if (awsIcons) {
    allNodes = allNodes.concat(awsIcons);
  }

  const gcpIcons = astNode?.gcpIcons?.flatMap((i: Icon, index: number): YadlNode => {
    const position = getPosition(i.position);
    return {
      id: i.name || `gcp-${index + 1}`,
      data: {
        icon: i.icon,
        category: "gcp",
        positionRange: position.range,
        nodeRange: i.$textRegion.range
      },
      position: position,
      type: "icon",
    };
  });

  if (gcpIcons) {
    allNodes = allNodes.concat(gcpIcons);
  }

  const azureIcons = astNode?.azureIcons?.flatMap((i: Icon, index: number): YadlNode => {
    const position = getPosition(i.position);
    return {
      id: i.name || `azure-${index + 1}`,
      data: {
        icon: i.icon,
        category: "azure",
        positionRange: position.range,
        nodeRange: i.$textRegion.range
      },
      position: position,
      type: "icon",
    };
  });

  if (azureIcons) {
    allNodes = allNodes.concat(azureIcons);
  }

  const skillIcons = astNode?.skillIcons?.flatMap((i: Icon, index: number): YadlNode => {
    const position = getPosition(i.position);
    return {
      id: i.name || `skill-${index + 1}`,
      data: {
        icon: i.icon,
        category: "skill",
        positionRange: position.range,
        nodeRange: i.$textRegion.range
      },
      position: position,
      type: "icon",
    };
  });

  if (skillIcons) {
    allNodes = allNodes.concat(skillIcons);
  }

  const undrawIcons = astNode?.undrawIcons?.flatMap((i: Icon, index: number): YadlNode => {
    const position = getPosition(i.position);
    return {
      id: i.name || `undraw-${index + 1}`,
      data: {
        icon: i.icon,
        category: "undraw",
        positionRange: position.range,
        nodeRange: i.$textRegion.range
      },
      position: position,
      type: "icon",
    };
  });

  if (undrawIcons) {
    allNodes = allNodes.concat(undrawIcons);
  }

  const themeisleIcons = astNode?.themeisleIcons?.flatMap((i: Icon): YadlNode => {
    const position = getPosition(i.position);
    return {
      id: i.name,
      data: {
        icon: i.icon,
        category: "themeisle",
        positionRange: position.range,
        nodeRange: i.$textRegion.range
      },
      position: position,
      type: "icon",
    };
  });

  if (themeisleIcons) {
    allNodes = allNodes.concat(themeisleIcons);
  }

  const textComponents = astNode?.textComponents?.flatMap((i: any, index: number): YadlNode => {
    const position = getPosition(i.position);
    return {
      id: i.name || `text-${index + 1}`,
      type: "text",
      position: position,
      data: {
        classes: i.classes?.classes,
        text: i.text,
        fontFamily: i.fontFamily?.fontFamily,
        positionRange: position.range,
        nodeRange: i.$textRegion.range
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
