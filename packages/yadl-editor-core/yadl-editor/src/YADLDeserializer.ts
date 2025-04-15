import { AstNode } from "langium-ast-helper";
import { YadlModelAstNode, Icon, TextComponents } from "./components/Interfaces.js";

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

export function getYADLNodes(ast: AstNode): YadlModelAstNode {
  const astNode = getYadlModelAst(ast as YadlModelAstNode);
  const awsIcons = astNode?.awsIcons?.flatMap((i: Icon): Icon => {
    return {
      icon: i.icon,
      name: i.name,
      $type: "AwsIcon",
    };
  });

  const gcpIcons = astNode?.gcpIcons?.flatMap((i: Icon): Icon => {
    return {
      icon: i.icon,
      name: i.name,
      $type: "GcpIcon",
    };
  });

  const azureIcons = astNode?.azureIcons?.flatMap((i: Icon): Icon => {
    return {
      icon: i.icon,
      name: i.name,
      $type: "GcpIcon",
    };
  });

  const skillIcons = astNode?.skillIcons?.flatMap((i: Icon): Icon => {
    return {
      icon: i.icon,
      name: i.name,
      $type: "GcpIcon",
    };
  });

  const undrawIcons = astNode?.undrawIcons?.flatMap((i: Icon): Icon => {
    return {
      icon: i.icon,
      name: i.name,
      $type: "GcpIcon",
    };
  });

  const themeisleIcons = astNode?.themeisleIcons?.flatMap((i: Icon): Icon => {
    return {
      icon: i.icon,
      name: i.name,
      $type: "GcpIcon",
    };
  });

  const textComponents = astNode?.textComponents?.flatMap((i: any): TextComponents => {
    return {
      $type: "Text",
      text: i.text,
      classes: i.classes?.classes,
      fontFamily: i.fontFamily?.fontFamily
    };
  });

  return {
    name: astNode.$type,
    $type: astNode.$type,
    awsIcons: awsIcons,
    gcpIcons: gcpIcons,
    azureIcons: azureIcons,
    skillIcons: skillIcons,
    undrawIcons: undrawIcons,
    themeisleIcons: themeisleIcons,
    textComponents: textComponents
  };
}
