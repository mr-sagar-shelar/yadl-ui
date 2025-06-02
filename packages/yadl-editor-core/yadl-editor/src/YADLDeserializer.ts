import { AstNode } from "langium-ast-helper";
import { YadlModelAstNode, YadlEdge, YadlNode, YadlEditorResponse, IconTag } from "./components/Interfaces.js";
import { get } from "lodash";
import { getIconTag, getAvatarTag, getBoxTag, getTextTag, getEdgeTag, getSvgTag } from "./Utils.js";

export function getYadlModelAst(ast: YadlModelAstNode): YadlModelAstNode {
  return {
    name: ast.name,
    $type: "YadlModel",
    awsTags: (ast.awsTags as IconTag[])?.filter((e) => e.$type === "AwsTag") as IconTag[],
    gcpTags: (ast.gcpTags as IconTag[])?.filter((e) => e.$type === "GcpTag") as IconTag[],
    azureTags: (ast.azureTags as IconTag[])?.filter((e) => e.$type === "AzureTag") as IconTag[],
    skillTags: (ast.skillTags as IconTag[])?.filter((e) => e.$type === "SkillTag") as IconTag[],
    authorTags: (ast.authorTags as IconTag[])?.filter((e) => e.$type === "AuthorTag") as IconTag[],
    avatarTags: (ast.avatarTags as IconTag[])?.filter((e) => e.$type === "AvatarTag") as IconTag[],
    boxTags: (ast.boxTags as IconTag[])?.filter((e) => e.$type === "BoxTag") as IconTag[],
    textTags: (ast.textTags as IconTag[])?.filter((e) => e.$type === "TextTag") as IconTag[],
    svgTags: (ast.svgTags as IconTag[])?.filter((e) => e.$type === "SvgTag") as IconTag[],
    edgeTags: (ast.edgeTags as IconTag[])?.filter((e) => e.$type === "EdgeTag") as IconTag[],
  };
}

export function getYADLData(ast: AstNode): YadlEditorResponse {
  const astNode = getYadlModelAst(ast as YadlModelAstNode);
  let allNodes: YadlNode[] = [];
  let allEdges: YadlEdge[] = [];
  let allFonts: string[] = [];

  const awsTags = getIconTag(astNode?.awsTags || [], "aws", "AwsIconTypeAttribute");
  if (awsTags && awsTags.length > 0) {
    allNodes = allNodes.concat(awsTags);
  }

  const azureTags = getIconTag(astNode?.azureTags || [], "azure", "AzureIconTypeAttribute");
  if (azureTags && azureTags.length > 0) {
    allNodes = allNodes.concat(azureTags);
  }

  const gcpTags = getIconTag(astNode?.gcpTags || [], "gcp", "GcpIconTypeAttribute");
  if (gcpTags && gcpTags.length > 0) {
    allNodes = allNodes.concat(gcpTags);
  }

  const skillTags = getIconTag(astNode?.skillTags || [], "skill", "SkillIconTypeAttribute");
  if (skillTags && skillTags.length > 0) {
    allNodes = allNodes.concat(skillTags);
  }

  const avatarTags = getAvatarTag(astNode?.avatarTags || []);
  if (avatarTags && avatarTags.length > 0) {
    allNodes = allNodes.concat(avatarTags);
  }

  const svgTags = getSvgTag(astNode?.svgTags || []);
  if (svgTags && svgTags.length > 0) {
    allNodes = allNodes.concat(svgTags);
  }

  // const authorTags = getIconTag(astNode?.authorTags || [], "author", "AwsIconTypeAttribute");
  // if (authorTags && authorTags.length > 0) {
  //   allNodes = allNodes.concat(authorTags);
  // }

  const boxTags = getBoxTag(astNode?.boxTags || []);
  if (boxTags && boxTags.length > 0) {
    allNodes = allNodes.concat(boxTags);
  }

  const textTags = getTextTag(astNode?.textTags || []);
  if (textTags && textTags.length > 0) {
    allNodes = allNodes.concat(textTags);
    textTags.forEach((textTag) => {
      if (textTag.data.fontFamily) {
        allFonts.push(textTag.data.fontFamily);
      }
    })
  }

  const edgeTags = getEdgeTag(astNode?.edgeTags || []);
  if (edgeTags && edgeTags.length > 0) {
    allEdges = allEdges.concat(edgeTags);
  }


  const sortedNodes = allNodes.sort((nodeA, nodeB) => {
    if (get(nodeA, "data.nodeRange.start.line", 0) < get(nodeB, "data.nodeRange.start.line", 0)) {
      return -1;
    }
    if (get(nodeA, "data.nodeRange.start.line", 0) > get(nodeB, "data.nodeRange.start.line", 0)) {
      return 1;
    }
    return 0;
  });

  const uniqueFonts = [...new Set(allFonts)].sort();

  return {
    nodes: sortedNodes,
    edges: allEdges,
    fontsUsed: uniqueFonts
  };
}
