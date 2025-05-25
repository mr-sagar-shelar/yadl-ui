import { AstNode } from "langium-ast-helper";
import { YadlModelAstNode, Icon, Avatars, YadlEdge, TextComponents, BoxComponents, YadlNode, YadlEditorResponse, YadlNodePosition, YadlNodeDimension, Authors, IconTag, TagAttribute } from "./components/Interfaces.js";
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
                positionAttribute.x = attribute.x;
                break;
            case "YAttribute":
                positionAttribute.y = attribute.y;
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

export function getAvatarTag(icons: TagAttribute[], category: string): YadlNode[] {
    const allTags = icons.flatMap((i: TagAttribute, index: number): YadlNode => {
        // const icon: IconTag = {
        //     $type: category,
        //     icon: ""
        // };

        const currentData: YadlNode = {
            id: `${category}${index + 1}`,
            data: {
                // icon: icon.icon,
                // category: category,
                // positionRange: icon.position?.range,
                // nodeRange: i.$textRegion.range
            },
            // position: icon.position,
            type: "avatar",
        };

        i.attributes.forEach((attribute) => {
            switch (attribute.$type) {
                case "IdAttribute":
                    currentData.id = attribute.id;
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


        if (currentData.dimension) {
            currentData.data.dimensionRange = currentData.dimension.range
            currentData.data.width = currentData.dimension.width
            currentData.data.height = currentData.dimension.height
        }

        if (!currentData.id) {
            const nameStartLine = i.$textRegion.range.start.line + 1;
            const nameStartColumn = i.$textRegion.range.start.character + 9;
            currentData.data.nameStartLine = nameStartLine;
            currentData.data.nameStartColumn = nameStartColumn;
        }

        return currentData;
    });

    return allTags;
}
