import { YadlEdge, YadlNode, YadlNodePosition, YadlNodeDimension, IconTag, TagAttribute } from "./components/Interfaces.js";

export function getDimensionAttribute(dimension: TagAttribute): YadlNodeDimension {
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

export function getPositionAttribute(position: TagAttribute): YadlNodePosition {
    if (!position) {
        return undefined;
    }

    const positionAttribute: YadlNodePosition = {
        $type: "Position",
        x: 0,
        y: 0,
        range: position.$textRegion.range
    };

    position.attributes.forEach((attribute: any) => {
        switch (attribute.$type) {
            case "XAttribute":
                positionAttribute.x = attribute.isNegativeX ? (-1 * attribute.x) : attribute.x;
                break;
            case "YAttribute":
                positionAttribute.y = attribute.isNegativeY ? (-1 * attribute.y) : attribute.y;
                break;
        }
    });

    return positionAttribute;
};

export function getIconTag(icons: IconTag[], category: string, iconCase: string): YadlNode[] {
    const allTags = icons.flatMap((i: IconTag, index: number): YadlNode => {
        const icon: IconTag = {
            $type: category,
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
                case iconCase:
                    icon.icon = attribute.icon;
                    break;
            }
        });

        const iconData: YadlNode = {
            id: icon.id || `${category}${index + 1}`,
            data: {
                icon: icon.icon,
                category: category,
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

    return allTags;
}

export function getAvatarTag(icons: TagAttribute[]): YadlNode[] {
    const allTags = icons.flatMap((i: TagAttribute, index: number): YadlNode => {
        const currentData: YadlNode = {
            id: `avatar${index + 1}`,
            data: {
                nodeRange: i.$textRegion.range
            },
            type: "avatar",
        };

        i.attributes.forEach((attribute) => {
            switch (attribute.$type) {
                case "IdAttribute":
                    currentData.id = attribute.id;
                    if (!attribute.id) {
                        const nameStartLine = i.$textRegion.range.start.line + 1;
                        const nameStartColumn = i.$textRegion.range.start.character + 9;
                        currentData.data.nameStartLine = nameStartLine;
                        currentData.data.nameStartColumn = nameStartColumn;
                    }
                    break;
                case "DimensionAttribute":
                    const dimension = getDimensionAttribute(attribute);
                    if (dimension) {
                        currentData.data.dimensionRange = dimension.range
                        currentData.data.width = dimension.width;
                        currentData.data.height = dimension.height;
                    } else {
                        currentData.data.width = 200;
                        currentData.data.height = 200;
                    }
                    break;
                case "PositionAttribute":
                    const position = getPositionAttribute(attribute);
                    if (position) {
                        currentData.position = position;
                        currentData.data.positionRange = position?.range
                    }
                    break;
                case "AvatarAccessoriesTypeAttribute":
                    currentData.data.accessoriesType = attribute.accessoriesType;
                    break;
                case "ClassesAttribute":
                    currentData.data.classes = attribute.classes;
                    break;
                case "AvatarClotheTypeAttribute":
                    currentData.data.clotheType = attribute.clotheType;
                    break;
                case "AvatarEyeTypeAttribute":
                    currentData.data.eyeType = attribute.eyeType;
                    break;
                case "AvatarEyebrowTypeAttribute":
                    currentData.data.eyebrowType = attribute.eyebrowType;
                    break;
                case "AvatarFacialHairTypeAttribute":
                    currentData.data.facialHairType = attribute.facialHairType;
                    break;
                case "FontFamilyAttribute":
                    currentData.data.fontFamily = attribute.fontFamily;
                    break;
                case "AvatarGraphicTypeAttribute":
                    currentData.data.graphicType = attribute.icon;
                    break;
                case "AvatarHairColorAttribute":
                    currentData.data.hairColor = attribute.hairColor;
                    break;
                case "AvatarMouthTypeAttribute":
                    currentData.data.mouthType = attribute.mouthType;
                    break;
                case "AvatarSkinColorAttribute":
                    currentData.data.skinColor = attribute.skinColor;
                    break;
                // case "AvatarStyleAttribute":
                //     currentData.data.style = attribute.style;
                //     break;
                case "AvatarTopTypeAttribute":
                    currentData.data.topType = attribute.topType;
                    break;
            }
        });

        return currentData;
    });

    return allTags;
}

export function getBoxTag(icons: TagAttribute[]): YadlNode[] {
    const allTags = icons.flatMap((i: TagAttribute, index: number): YadlNode => {
        const currentData: YadlNode = {
            id: `Box${index + 1}`,
            data: {
                nodeRange: i.$textRegion.range,
                props: {}
            },
            type: "box",
        };

        i.attributes.forEach((attribute) => {
            switch (attribute.$type) {
                case "IdAttribute":
                    currentData.id = attribute.id;
                    if (!attribute.id) {
                        const nameStartLine = i.$textRegion.range.start.line + 1;
                        const nameStartColumn = i.$textRegion.range.start.character + 9;
                        currentData.data.nameStartLine = nameStartLine;
                        currentData.data.nameStartColumn = nameStartColumn;
                    }
                    break;
                case "DimensionAttribute":
                    const dimension = getDimensionAttribute(attribute);
                    if (dimension) {
                        currentData.data.dimensionRange = dimension.range
                        currentData.data.props.width = dimension.width;
                        currentData.data.props.height = dimension.height;
                    } else {
                        currentData.data.props.width = 200;
                        currentData.data.props.height = 200;
                    }
                    break;
                case "PositionAttribute":
                    const position = getPositionAttribute(attribute);
                    if (position) {
                        currentData.position = position;
                        currentData.data.positionRange = position?.range
                    }
                    break;
                case "BoxTypeAttribute":
                    currentData.data.component = attribute.type;
                    break;
                case "ClassesAttribute":
                    currentData.data.props.classes = attribute.classes;
                    break;
            }
        });

        return currentData;
    });

    return allTags;
}

export function getTextTag(icons: TagAttribute[]): YadlNode[] {
    const allTags = icons.flatMap((i: TagAttribute, index: number): YadlNode => {
        const currentData: YadlNode = {
            id: `text${index + 1}`,
            data: {
                nodeRange: i.$textRegion.range,
                props: {}
            },
            type: "text",
        };

        i.attributes.forEach((attribute) => {
            switch (attribute.$type) {
                case "IdAttribute":
                    currentData.id = attribute.id;
                    if (!attribute.id) {
                        const nameStartLine = i.$textRegion.range.start.line + 1;
                        const nameStartColumn = i.$textRegion.range.start.character + 9;
                        currentData.data.nameStartLine = nameStartLine;
                        currentData.data.nameStartColumn = nameStartColumn;
                    }
                    break;
                case "DimensionAttribute":
                    const dimension = getDimensionAttribute(attribute);
                    if (dimension) {
                        currentData.data.dimensionRange = dimension.range
                        currentData.data.props.width = dimension.width;
                        currentData.data.props.height = dimension.height;
                    } else {
                        currentData.data.props.width = 200;
                        currentData.data.props.height = 200;
                    }
                    break;
                case "PositionAttribute":
                    const position = getPositionAttribute(attribute);
                    if (position) {
                        currentData.position = position;
                        currentData.data.positionRange = position?.range
                    }
                    break;
                case "TextAttribute":
                    currentData.data.text = attribute.text;
                    break;
                case "FontFamilyAttribute":
                    currentData.data.fontFamily = attribute.fontFamily;
                    break;
                case "ClassesAttribute":
                    currentData.data.classes = attribute.classes;
                    break;
            }
        });

        return currentData;
    });

    return allTags;
}

export function getAuthorTag(icons: TagAttribute[]): YadlNode[] {
    const allTags = icons.flatMap((i: TagAttribute, index: number): YadlNode => {
        const currentData: YadlNode = {
            id: `author${index + 1}`,
            data: {
                nodeRange: i.$textRegion.range,
                props: {}
            },
            type: "author",
        };

        i.attributes.forEach((attribute) => {
            switch (attribute.$type) {
                case "IdAttribute":
                    currentData.id = attribute.id;
                    if (!attribute.id) {
                        const nameStartLine = i.$textRegion.range.start.line + 1;
                        const nameStartColumn = i.$textRegion.range.start.character + 9;
                        currentData.data.nameStartLine = nameStartLine;
                        currentData.data.nameStartColumn = nameStartColumn;
                    }
                    break;
                case "DimensionAttribute":
                    const dimension = getDimensionAttribute(attribute);
                    if (dimension) {
                        currentData.data.dimensionRange = dimension.range
                        currentData.data.props.width = dimension.width;
                        currentData.data.props.height = dimension.height;
                    } else {
                        currentData.data.props.width = 200;
                        currentData.data.props.height = 200;
                    }
                    break;
                case "PositionAttribute":
                    const position = getPositionAttribute(attribute);
                    if (position) {
                        currentData.position = position;
                        currentData.data.positionRange = position?.range
                    }
                    break;
                case "AuthorSrcAttribute":
                    currentData.data.src = attribute.src;
                    break;
                case "AuthorNameAttribute":
                    currentData.data.name = attribute.name;
                    break;
                case "ClassesAttribute":
                    currentData.data.classes = attribute.classes;
                    break;
                case "AuthorCaptionAttribute":
                    currentData.data.caption = attribute.caption;
                    break;
                case "AuthorImageClassesAttribute":
                    currentData.data.imageClasses = attribute.imageClasses;
                    break;
                case "AuthorCaptionClassesAttribute":
                    currentData.data.captionClasses = attribute.captionClasses;
                    break;
                case "AuthorNameClassesAttribute":
                    currentData.data.nameClasses = attribute.nameClasses;
                    break;
                case "AuthorNameFontFamilyAttribute":
                    currentData.data.nameFontFamily = attribute.nameFontFamily;
                    break;
                case "AuthorCaptionFontFamilyAttribute":
                    currentData.data.captionFontFamily = attribute.captionFontFamily;
                    break;
            }
        });

        return currentData;
    });

    return allTags;
}

export function getSvgTag(icons: TagAttribute[]): YadlNode[] {
    const allTags = icons.flatMap((i: TagAttribute, index: number): YadlNode => {
        const currentData: YadlNode = {
            id: `svg${index + 1}`,
            data: {
                nodeRange: i.$textRegion.range,
                props: {}
            },
            position: {
                x: 0,
                y: 0
            },
            type: "svg",
        };

        i.attributes.forEach((attribute) => {
            switch (attribute.$type) {
                case "IdAttribute":
                    currentData.id = attribute.id;
                    if (!attribute.id) {
                        const nameStartLine = i.$textRegion.range.start.line + 1;
                        const nameStartColumn = i.$textRegion.range.start.character + 9;
                        currentData.data.nameStartLine = nameStartLine;
                        currentData.data.nameStartColumn = nameStartColumn;
                    }
                    break;
                case "PositionAttribute":
                    const position = getPositionAttribute(attribute);
                    if (position) {
                        currentData.position = position;
                        currentData.data.positionRange = position?.range
                    }
                    break;
                case "CodeAttribute":
                    currentData.data.code = attribute.code?.replaceAll("`", "");
                    break;
            }
        });

        return currentData;
    });

    return allTags;
}

export function getEdgeTag(icons: TagAttribute[]): YadlEdge[] {
    const allTags = icons.flatMap((i: TagAttribute, index: number): YadlEdge => {
        const currentData: YadlEdge = {
            id: `edge${index + 1}`,
        };

        i.attributes.forEach((attribute) => {
            switch (attribute.$type) {
                case "ClassesAttribute":
                    currentData.classes = attribute.classes || "";
                    break;
                case "EdgeLabelAttribute":
                    currentData.label = attribute.label || "";
                    break;
                case "EdgeLabelStyleAttribute":
                    try {
                        const doubleQuoteStyle = attribute.labelStyle.replace(/'/g, '"');
                        const parsedStyle = JSON.parse(doubleQuoteStyle);
                        currentData.labelStyle = parsedStyle;
                    } catch (e) {
                    }
                    break;
                case "EdgeStyleAttribute":
                    try {
                        const doubleQuoteStyle = attribute.style.replace(/'/g, '"');
                        const parsedStyle = JSON.parse(doubleQuoteStyle);
                        currentData.style = parsedStyle;
                    } catch (e) {
                    }
                    break;
                case "EdgeSourceAttribute":
                    currentData.source = attribute.source || "";
                    break;
                case "EdgeSourceHandleAttribute":
                    currentData.sourceHandle = attribute.sourceHandle || "";
                    break;
                case "EdgeTargetAttribute":
                    currentData.target = attribute.target || "";
                    break;
                case "EdgeTargetHandleAttribute":
                    currentData.targetHandle = attribute.targetHandle || "";
                    break;
                case "EdgeTypeAttribute":
                    currentData.type = attribute.type || "";
                    break;
            }
        });

        return currentData;
    });

    return allTags;
}

export function toPascalCase(text: string): string {
    return text.replace(/\w+/g, function (w: any) { return w[0].toUpperCase() + w.slice(1).toLowerCase(); });
}