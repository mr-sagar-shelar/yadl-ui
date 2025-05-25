import { AstNode } from "langium-ast-helper";
import { YadlModelAstNode, Icon, Avatars, YadlEdge, TextComponents, BoxComponents, YadlNode, YadlEditorResponse, YadlNodePosition, YadlNodeDimension, Authors, IconTag, PositionAttribute, DimensionAttribute } from "./components/Interfaces.js";
import { get } from "lodash";

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

export function getDimension(dimension: YadlNodeDimension): YadlNodeDimension {
  if (!dimension) {
    return undefined;
  }
  return {
    $type: "Dimension",
    width: dimension.width,
    height: dimension.height,
    range: dimension.$textRegion?.range,
  };
};

export function getDimensionAttribute(dimension: DimensionAttribute): YadlNodeDimension {
  if (!dimension) {
    return undefined;
  }

  const dimensionAttribute: YadlNodeDimension = {
    $type: "Dimension",
    width: 100,
    height: 100,
    range: dimension.$textRegion.range
  };

  dimension.attributes.forEach((attribute) => {
    switch (attribute.$type) {
      case "HeightAttribute":
        dimensionAttribute.height = attribute.height;
        break;
      case "WidthAttribute":
        dimensionAttribute.width = attribute.width;
        break;
    }
  });

  return dimensionAttribute;
};

export function getPositionAttribute(position: PositionAttribute): YadlNodePosition {
  if (!position) {
    return undefined;
  }

  const positionAttribute: YadlNodePosition = {
    $type: "Position",
    x: 0,
    y: 0,
    range: position.$textRegion.range
  };

  position.attributes.forEach((attribute) => {
    switch (attribute.$type) {
      case "XAttribute":
        positionAttribute.x = attribute.x;
        break;
      case "YAttribute":
        positionAttribute.y = attribute.y;
        break;
    }
  });

  return positionAttribute;
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
    boxes: (ast.boxes as BoxComponents[])?.filter((e) => e.$type === "BoxComponents") as BoxComponents[],
    avatars: (ast.avatars as Avatars[])?.filter((e) => e.$type === "Avatars") as Avatars[],
    edges: (ast.edges as YadlEdge[])?.filter((e) => e.$type === "Edges") as YadlEdge[],
    authors: (ast.authors as Authors[])?.filter((e) => e.$type === "Authors") as Authors[],
    awsTags: (ast.awsTags as IconTag[])?.filter((e) => e.$type === "AwsTag") as IconTag[],
  };
}

export function getYADLData(ast: AstNode): YadlEditorResponse {
  const astNode = getYadlModelAst(ast as YadlModelAstNode);
  let allNodes: YadlNode[] = [];
  const awsIcons = astNode?.awsIcons?.flatMap((i: Icon, index: number): YadlNode => {
    const position = getPosition(i.position);
    const dimension = getDimension(i.dimension);
    const iconData: YadlNode = {
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

    if (dimension) {
      iconData.data.dimensionRange = dimension.range
      iconData.data.width = dimension.width
      iconData.data.height = dimension.height
    }

    if (!i.name) {
      const nameStartLine = i.$textRegion.range.start.line + 1;
      const nameStartColumn = i.$textRegion.range.start.character + 9;
      iconData.data.nameStartLine = nameStartLine;
      iconData.data.nameStartColumn = nameStartColumn;
    }

    return iconData;
  });

  if (awsIcons && awsIcons.length > 0) {
    allNodes = allNodes.concat(awsIcons);
  }

  const gcpIcons = astNode?.gcpIcons?.flatMap((i: Icon, index: number): YadlNode => {
    const position = getPosition(i.position);
    const dimension = getDimension(i.dimension);
    const iconData: YadlNode = {
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
    if (dimension) {
      iconData.data.dimensionRange = dimension.range
      iconData.data.width = dimension.width
      iconData.data.height = dimension.height
    }
    if (!i.name) {
      const nameStartLine = i.$textRegion.range.start.line + 1;
      const nameStartColumn = i.$textRegion.range.start.character + 9;
      iconData.data.nameStartLine = nameStartLine;
      iconData.data.nameStartColumn = nameStartColumn;
    }

    return iconData;
  });

  if (gcpIcons && gcpIcons.length > 0) {
    allNodes = allNodes.concat(gcpIcons);
  }

  const azureIcons = astNode?.azureIcons?.flatMap((i: Icon, index: number): YadlNode => {
    const position = getPosition(i.position);
    const dimension = getDimension(i.dimension);
    const iconData: YadlNode = {
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

    if (dimension) {
      iconData.data.dimensionRange = dimension.range
      iconData.data.width = dimension.width
      iconData.data.height = dimension.height
    }
    if (!i.name) {
      const nameStartLine = i.$textRegion.range.start.line + 1;
      const nameStartColumn = i.$textRegion.range.start.character + 11;
      iconData.data.nameStartLine = nameStartLine;
      iconData.data.nameStartColumn = nameStartColumn;
    }

    return iconData;
  });

  if (azureIcons && azureIcons.length > 0) {
    allNodes = allNodes.concat(azureIcons);
  }

  const skillIcons = astNode?.skillIcons?.flatMap((i: Icon, index: number): YadlNode => {
    const position = getPosition(i.position);
    const dimension = getDimension(i.dimension);
    const iconData: YadlNode = {
      id: i.name || `skill-${index + 1}`,
      data: {
        icon: i.icon,
        category: "skill",
        positionRange: position.range,
        nodeRange: i.$textRegion.range,
      },
      position: position,
      type: "icon",
    };

    if (dimension) {
      iconData.data.dimensionRange = dimension.range
      iconData.data.width = dimension.width
      iconData.data.height = dimension.height
    }

    if (!i.name) {
      const nameStartLine = i.$textRegion.range.start.line + 1;
      const nameStartColumn = i.$textRegion.range.start.character + 12;
      iconData.data.nameStartLine = nameStartLine;
      iconData.data.nameStartColumn = nameStartColumn;
    }

    return iconData;
  });

  if (skillIcons && skillIcons.length > 0) {
    allNodes = allNodes.concat(skillIcons);
  }

  const undrawIcons = astNode?.undrawIcons?.flatMap((i: Icon, index: number): YadlNode => {
    const position = getPosition(i.position);
    const dimension = getDimension(i.dimension);
    const iconData: YadlNode = {
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

    if (dimension) {
      iconData.data.dimensionRange = dimension.range
      iconData.data.width = dimension.width
      iconData.data.height = dimension.height
    }

    if (!i.name) {
      const nameStartLine = i.$textRegion.range.start.line + 1;
      const nameStartColumn = i.$textRegion.range.start.character + 12;
      iconData.data.nameStartLine = nameStartLine;
      iconData.data.nameStartColumn = nameStartColumn;
    }

    return iconData;
  });

  if (undrawIcons && undrawIcons.length > 0) {
    allNodes = allNodes.concat(undrawIcons);
  }

  const themeisleIcons = astNode?.themeisleIcons?.flatMap((i: Icon, index: number): YadlNode => {
    const position = getPosition(i.position);
    const dimension = getDimension(i.dimension);
    const iconData: YadlNode = {
      id: i.name || `themeisle-${index + 1}`,
      data: {
        icon: i.icon,
        category: "themeisle",
        positionRange: position.range,
        nodeRange: i.$textRegion.range
      },
      position: position,
      type: "icon",
    };

    if (dimension) {
      iconData.data.dimensionRange = dimension.range
      iconData.data.width = dimension.width
      iconData.data.height = dimension.height
    }

    if (!i.name) {
      const nameStartLine = i.$textRegion.range.start.line + 1;
      const nameStartColumn = i.$textRegion.range.start.character + 15;
      iconData.data.nameStartLine = nameStartLine;
      iconData.data.nameStartColumn = nameStartColumn;
    }

    return iconData;
  });

  if (themeisleIcons && themeisleIcons.length > 0) {
    allNodes = allNodes.concat(themeisleIcons);
  }

  const allFonts: string[] = []

  const textComponents = astNode?.textComponents?.flatMap((i: any, index: number): YadlNode => {
    const position = getPosition(i.position);
    const dimension = getDimension(i.dimension);
    if (i.fontFamily) {
      allFonts.push(i.fontFamily.fontFamily);
    }
    const textData: YadlNode = {
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

    if (dimension) {
      textData.data.dimensionRange = dimension.range
      textData.data.props = {
        width: dimension.width,
        height: dimension.height
      }
    }

    if (!i.name) {
      const nameStartLine = i.$textRegion.range.start.line + 1;
      const nameStartColumn = i.$textRegion.range.start.character + 5;
      textData.data.nameStartLine = nameStartLine;
      textData.data.nameStartColumn = nameStartColumn;
    }

    return textData;
  });

  if (textComponents && textComponents.length > 0) {
    allNodes = allNodes.concat(textComponents);
  }

  const boxComponents = astNode?.boxes?.flatMap((i: any, index: number): YadlNode => {
    const position = getPosition(i.position);
    const dimension = getDimension(i.dimension);
    const boxData: YadlNode = {
      id: i.name || `box-${index + 1}`,
      type: "box",
      position: position,
      data: {
        component: i.boxType,
        positionRange: position.range,
        nodeRange: i.$textRegion.range
      }
    };

    if (dimension) {
      boxData.data.dimensionRange = dimension.range
      boxData.data.props = {
        width: dimension.width,
        height: dimension.height,
        classes: i.classes?.classes,
      }
    }

    if (!i.name) {
      const nameStartLine = i.$textRegion.range.start.line + 1;
      const nameStartColumn = i.$textRegion.range.start.character + 4;
      boxData.data.nameStartLine = nameStartLine;
      boxData.data.nameStartColumn = nameStartColumn;
    }

    return boxData;
  });

  if (boxComponents && boxComponents.length > 0) {
    allNodes = allNodes.concat(boxComponents);
  }

  const authors = astNode?.authors?.flatMap((i: any, index: number): YadlNode => {
    const position = getPosition(i.position);
    const dimension = getDimension(i.dimension);
    if (i.fontFamily) {
      allFonts.push(i.fontFamily);
    }
    const textData: YadlNode = {
      id: i.name || `author-${index + 1}`,
      type: "author",
      position: position,
      data: {
        classes: i.classes?.classes,
        name: i.text,
        handle: i.text,
        fontFamily: i.fontFamily?.fontFamily,
        profilePic: i.profilePic?.profilePic,
        profileHandle: i.profileHandle?.profileHandle,
        positionRange: position.range,
        nodeRange: i.$textRegion.range
      }
    };

    if (dimension) {
      textData.data.dimensionRange = dimension.range
      textData.data.props = {
        width: dimension.width,
        height: dimension.height
      }
    }

    return textData;
  });

  if (authors && authors.length > 0) {
    allNodes = allNodes.concat(authors);
  }

  const avatars = astNode?.avatars?.flatMap((i: any, index: number): YadlNode => {
    const position = getPosition(i.position);
    const dimension = getDimension(i.dimension);
    const avatarData: YadlNode = {
      id: i.name || `avatar-${index + 1}`,
      type: "avatar",
      position: position,
      data: {
        // style: i.style?.style,
        classes: i.classes?.classes,
        topType: i.topType?.topType || 'LongHairStraight',
        accessoriesType: i.accessoriesType?.accessoriesType || 'Blank',
        hairColor: i.hairColor?.hairColor || 'BrownDark',
        facialHairType: i.facialHairType?.facialHairType || 'Blank',
        graphicType: i.graphicType?.graphicType || 'Skull',
        clotheType: i.clotheType?.clotheType || 'Black',
        eyeType: i.eyeType?.eyeType || 'Default',
        eyebrowType: i.eyebrowType?.eyebrowType || 'Default',
        mouthType: i.mouthType?.mouthType || 'Default',
        skinColor: i.skinColor?.skinColor || 'Tanned',
        name: i.text,
        positionRange: position.range,
        nodeRange: i.$textRegion.range
      }
    };

    if (dimension) {
      avatarData.data.dimensionRange = dimension.range
      avatarData.data.width = dimension.width;
      avatarData.data.height = dimension.height;
    } else {
      avatarData.data.width = 200;
      avatarData.data.height = 200;
    }

    return avatarData;
  });

  if (avatars && avatars.length > 0) {
    allNodes = allNodes.concat(avatars);
  }

  let allEdges: YadlEdge[] = [];
  const edges = astNode?.edges?.flatMap((i: any, index: number): YadlEdge => {
    if (i.fontFamily) {
      allFonts.push(i.fontFamily);
    }
    const edgeData: YadlEdge = {
      id: i.name || `edge-${index + 1}`,
      type: i.type?.type || 'default',
      label: i.label?.label,
      source: i.source,
      target: i.target,
      // sourceHandle: 'bottom',
      // targetHandle: 'top',
      classes: i.classes?.classes,
    };

    if (i.classes?.classes) {
      edgeData.classes = i.classes?.classes;
    }

    if (i.sourceHandle?.sourceHandle) {
      edgeData.sourceHandle = i.sourceHandle?.sourceHandle;
    }

    if (i.targetHandle?.targetHandle) {
      edgeData.targetHandle = i.targetHandle?.targetHandle;
    }

    if (i.style?.style) {
      try {
        const doubleQuoteStyle = i.style?.style.replace(/'/g, '"');
        const parsedStyle = JSON.parse(doubleQuoteStyle);
        edgeData.style = parsedStyle;
      } catch (e) {
      }
    }

    if (i.labelStyle?.labelStyle) {
      try {
        const doubleQuoteStyle = i.labelStyle?.labelStyle.replace(/'/g, '"');
        const parsedStyle = JSON.parse(doubleQuoteStyle);
        edgeData.labelStyle = parsedStyle;
      } catch (e) {
      }
    }

    return edgeData;
  });

  if (edges && edges.length > 0) {
    allEdges = allEdges.concat(edges);
  }


  const awsTags = astNode?.awsTags?.flatMap((i: IconTag, index: number): YadlNode => {
    const icon: IconTag = {
      $type: "aws",
      icon: ""
    };

    i.attributes.forEach((attribute) => {
      switch (attribute.$type) {
        case "IdAttribute":
          icon.id = attribute.id;
          break;
        case "DimensionAttribute":
          icon.dimension = getDimensionAttribute(attribute);
          break;
        case "PositionAttribute":
          icon.position = getPositionAttribute(attribute);
          break;
        case "AwsIconTypeAttribute":
          icon.icon = attribute.icon;
          break;
      }
    });

    const iconData: YadlNode = {
      id: icon.id || `AWS${index + 1}`,
      data: {
        icon: icon.icon,
        category: "aws",
        positionRange: icon.position?.range,
        nodeRange: i.$textRegion.range
      },
      position: icon.position,
      type: "icon",
    };

    if (icon.dimension) {
      iconData.data.dimensionRange = icon.dimension.range
      iconData.data.width = icon.dimension.width
      iconData.data.height = icon.dimension.height
    }

    if (!i.id) {
      const nameStartLine = i.$textRegion.range.start.line + 1;
      const nameStartColumn = i.$textRegion.range.start.character + 9;
      iconData.data.nameStartLine = nameStartLine;
      iconData.data.nameStartColumn = nameStartColumn;
    }

    return iconData;
  });

  if (awsTags && awsTags.length > 0) {
    allNodes = allNodes.concat(awsTags);
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
