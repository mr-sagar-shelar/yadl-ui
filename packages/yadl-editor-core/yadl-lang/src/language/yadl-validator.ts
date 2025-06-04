import type { ValidationAcceptor, ValidationChecks } from 'langium';
import {
    type YadlAstType, PositionAttribute, DimensionAttribute, StyleProperty, WidthAttribute, HeightAttribute, IdAttribute,
    BackgroundColorAttribute, FontSizeAttribute, TextColorAttribute, YAttribute, XAttribute, SkillIconTypeAttribute,
    AwsTag, AzureTag, GcpTag, SkillTag, AwsIconTypeAttribute, AzureIconTypeAttribute, GcpIconTypeAttribute,
    AuthorTag, AvatarTag, AvatarGraphicTypeAttribute, BoxTag, EdgeTag, TextTag, AuthorCaptionClassesAttribute,
    ClassesAttribute, FontFamilyAttribute, AuthorNameAttribute, AuthorCaptionAttribute, AuthorImageClassesAttribute,
    AvatarStyleAttribute, AvatarTopTypeAttribute, AvatarAccessoriesTypeAttribute, AvatarHairColorAttribute, AvatarFacialHairTypeAttribute,
    AvatarClotheTypeAttribute, AvatarEyeTypeAttribute, AvatarEyebrowTypeAttribute, AvatarMouthTypeAttribute, AvatarSkinColorAttribute,
    BoxTypeAttribute, SvgTag, AuthorSrcAttribute, AuthorNameClassesAttribute, AuthorNameFontFamilyAttribute,
    EdgeLabelAttribute, AuthorCaptionFontFamilyAttribute,
    EdgeSourceAttribute,
    EdgeSourceHandleAttribute,
    EdgeStyleAttribute,
    EdgeTargetAttribute,
    EdgeTargetHandleAttribute,
    EdgeTypeAttribute,
    EdgeLabelStyleAttribute,
    TextAttribute,
    CodeAttribute,
} from './generated/ast.js';
import type { YadlServices } from './yadl-module.js';

export function registerValidationChecks(services: YadlServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.YadlValidator;
    const checks: ValidationChecks<YadlAstType> = {
        StyleProperty: validator.checkUniqueStyleAttributes,
        DimensionAttribute: validator.checkUniqueDimensionAttributes,
        PositionAttribute: validator.checkUniquePositionAttributes,
        AwsTag: validator.checkUniqueAwsTagAttributes,
        AzureTag: validator.checkUniqueAzureTagAttributes,
        GcpTag: validator.checkUniqueGcpTagAttributes,
        SkillTag: validator.checkUniqueSkillTagAttributes,
        AuthorTag: validator.checkUniqueAuthorTagAttributes,
        AvatarTag: validator.checkUniqueAvatarTagAttributes,
        BoxTag: validator.checkUniqueBoxTagAttributes,
        EdgeTag: validator.checkUniqueEdgeTagAttributes,
        TextTag: validator.checkUniqueTextTagAttributes,
        SvgTag: validator.checkUniqueSvgTagAttributes,

    };
    registry.register(checks, validator);
}

export class YadlValidator {
    checkUniqueDimensionAttributes(attribute: DimensionAttribute, accept: ValidationAcceptor): void {
        const seenProperties = new Set<string>();
        for (const prop of attribute.attributes) {
            let propertyType: string;
            if (prop.$type === WidthAttribute) {
                propertyType = 'width';
            } else if (prop.$type === HeightAttribute) {
                propertyType = 'height';
            } else {
                continue;
            }

            if (seenProperties.has(propertyType)) {
                accept('error', `Duplicate property '${propertyType}' found. Properties must be unique.`, { node: prop });
            } else {
                seenProperties.add(propertyType);
            }
        }
    }

    checkUniqueAwsTagAttributes(attribute: AwsTag, accept: ValidationAcceptor): void {
        const seenProperties = new Set<string>();
        for (const prop of attribute.attributes) {
            let propertyType: string;
            if (prop.$type === AwsIconTypeAttribute) {
                propertyType = 'icon';
            } else if (prop.$type === DimensionAttribute) {
                propertyType = 'dimension';
            } else if (prop.$type === IdAttribute) {
                propertyType = 'id';
            } else if (prop.$type === PositionAttribute) {
                propertyType = 'position';
            } else {
                continue;
            }

            if (seenProperties.has(propertyType)) {
                accept('error', `Duplicate property '${propertyType}' found. Properties must be unique.`, { node: prop });
            } else {
                seenProperties.add(propertyType);
            }
        }
    }

    checkUniqueAzureTagAttributes(attribute: AzureTag, accept: ValidationAcceptor): void {
        const seenProperties = new Set<string>();
        for (const prop of attribute.attributes) {
            let propertyType: string;
            if (prop.$type === AzureIconTypeAttribute) {
                propertyType = 'icon';
            } else if (prop.$type === DimensionAttribute) {
                propertyType = 'dimension';
            } else if (prop.$type === IdAttribute) {
                propertyType = 'id';
            } else if (prop.$type === PositionAttribute) {
                propertyType = 'position';
            } else {
                continue;
            }

            if (seenProperties.has(propertyType)) {
                accept('error', `Duplicate property '${propertyType}' found. Properties must be unique.`, { node: prop });
            } else {
                seenProperties.add(propertyType);
            }
        }
    }

    checkUniqueGcpTagAttributes(attribute: GcpTag, accept: ValidationAcceptor): void {
        const seenProperties = new Set<string>();
        for (const prop of attribute.attributes) {
            let propertyType: string;
            if (prop.$type === GcpIconTypeAttribute) {
                propertyType = 'icon';
            } else if (prop.$type === DimensionAttribute) {
                propertyType = 'dimension';
            } else if (prop.$type === IdAttribute) {
                propertyType = 'id';
            } else if (prop.$type === PositionAttribute) {
                propertyType = 'position';
            } else {
                continue;
            }

            if (seenProperties.has(propertyType)) {
                accept('error', `Duplicate property '${propertyType}' found. Properties must be unique.`, { node: prop });
            } else {
                seenProperties.add(propertyType);
            }
        }
    }

    checkUniqueSkillTagAttributes(attribute: SkillTag, accept: ValidationAcceptor): void {
        const seenProperties = new Set<string>();
        for (const prop of attribute.attributes) {
            let propertyType: string;
            if (prop.$type === SkillIconTypeAttribute) {
                propertyType = 'icon';
            } else if (prop.$type === DimensionAttribute) {
                propertyType = 'dimension';
            } else if (prop.$type === IdAttribute) {
                propertyType = 'id';
            } else if (prop.$type === PositionAttribute) {
                propertyType = 'position';
            } else {
                continue;
            }

            if (seenProperties.has(propertyType)) {
                accept('error', `Duplicate property '${propertyType}' found. Properties must be unique.`, { node: prop });
            } else {
                seenProperties.add(propertyType);
            }
        }
    }

    checkUniqueAuthorTagAttributes(attribute: AuthorTag, accept: ValidationAcceptor): void {
        const seenProperties = new Set<string>();
        for (const prop of attribute.attributes) {
            let propertyType: string;
            if (prop.$type === AuthorSrcAttribute) {
                propertyType = 'src';
            } else if (prop.$type === AuthorNameAttribute) {
                propertyType = 'name';
            } else if (prop.$type === ClassesAttribute) {
                propertyType = 'classes';
            } else if (prop.$type === AuthorCaptionAttribute) {
                propertyType = 'caption';
            } else if (prop.$type === DimensionAttribute) {
                propertyType = 'dimension';
            } else if (prop.$type === IdAttribute) {
                propertyType = 'id';
            } else if (prop.$type === PositionAttribute) {
                propertyType = 'position';
            } else if (prop.$type === AuthorImageClassesAttribute) {
                propertyType = 'imageClasses';
            } else if (prop.$type === AuthorCaptionClassesAttribute) {
                propertyType = 'captionClasses';
            } else if (prop.$type === AuthorNameClassesAttribute) {
                propertyType = 'nameClasses';
            } else if (prop.$type === AuthorNameFontFamilyAttribute) {
                propertyType = 'nameFontFamily';
            } else if (prop.$type === AuthorCaptionFontFamilyAttribute) {
                propertyType = 'captionFontFamily';
            } else {
                continue;
            }

            if (seenProperties.has(propertyType)) {
                accept('error', `Duplicate property '${propertyType}' found. Properties must be unique.`, { node: prop });
            } else {
                seenProperties.add(propertyType);
            }
        }
    }

    checkUniqueAvatarTagAttributes(attribute: AvatarTag, accept: ValidationAcceptor): void {
        const seenProperties = new Set<string>();
        for (const prop of attribute.attributes) {
            let propertyType: string;
            if (prop.$type === AvatarStyleAttribute) {
                propertyType = 'style';
            } else if (prop.$type === AvatarTopTypeAttribute) {
                propertyType = 'topType';
            } else if (prop.$type === AvatarAccessoriesTypeAttribute) {
                propertyType = 'accessoriesType';
            } else if (prop.$type === AvatarHairColorAttribute) {
                propertyType = 'hairColor';
            } else if (prop.$type === AvatarFacialHairTypeAttribute) {
                propertyType = 'facialHairType';
            } else if (prop.$type === AvatarClotheTypeAttribute) {
                propertyType = 'clotheType';
            } else if (prop.$type === AvatarEyeTypeAttribute) {
                propertyType = 'eyeType';
            } else if (prop.$type === AvatarEyebrowTypeAttribute) {
                propertyType = 'eyebrowType';
            } else if (prop.$type === AvatarMouthTypeAttribute) {
                propertyType = 'mouthType';
            } else if (prop.$type === AvatarSkinColorAttribute) {
                propertyType = 'skinColor';
            } else if (prop.$type === AvatarGraphicTypeAttribute) {
                propertyType = 'graphicType';
            } else if (prop.$type === ClassesAttribute) {
                propertyType = 'classes';
            } else if (prop.$type === FontFamilyAttribute) {
                propertyType = 'fontFamily';
            } else if (prop.$type === DimensionAttribute) {
                propertyType = 'dimension';
            } else if (prop.$type === IdAttribute) {
                propertyType = 'id';
            } else if (prop.$type === PositionAttribute) {
                propertyType = 'position';
            } else {
                continue;
            }

            if (seenProperties.has(propertyType)) {
                accept('error', `Duplicate property '${propertyType}' found. Properties must be unique.`, { node: prop });
            } else {
                seenProperties.add(propertyType);
            }
        }
    }

    checkUniqueBoxTagAttributes(attribute: BoxTag, accept: ValidationAcceptor): void {
        const seenProperties = new Set<string>();
        for (const prop of attribute.attributes) {
            let propertyType: string;
            if (prop.$type === BoxTypeAttribute) {
                propertyType = 'type';
            } else if (prop.$type === ClassesAttribute) {
                propertyType = 'classes';
            } else if (prop.$type === DimensionAttribute) {
                propertyType = 'dimension';
            } else if (prop.$type === IdAttribute) {
                propertyType = 'id';
            } else if (prop.$type === PositionAttribute) {
                propertyType = 'position';
            } else {
                continue;
            }

            if (seenProperties.has(propertyType)) {
                accept('error', `Duplicate property '${propertyType}' found. Properties must be unique.`, { node: prop });
            } else {
                seenProperties.add(propertyType);
            }
        }
    }

    checkUniqueEdgeTagAttributes(attribute: EdgeTag, accept: ValidationAcceptor): void {
        const seenProperties = new Set<string>();
        for (const prop of attribute.attributes) {
            let propertyType: string;
            if (prop.$type === EdgeSourceHandleAttribute) {
                propertyType = 'sourceHandle';
            } else if (prop.$type === EdgeTargetHandleAttribute) {
                propertyType = 'targetHandle';
            } else if (prop.$type === EdgeSourceAttribute) {
                propertyType = 'source';
            } else if (prop.$type === EdgeTargetAttribute) {
                propertyType = 'target';
            } else if (prop.$type === EdgeLabelAttribute) {
                propertyType = 'label';
            } else if (prop.$type === EdgeStyleAttribute) {
                propertyType = 'style';
            } else if (prop.$type === EdgeLabelStyleAttribute) {
                propertyType = 'labelStyle';
            } else if (prop.$type === EdgeTypeAttribute) {
                propertyType = 'type';
            } else if (prop.$type === ClassesAttribute) {
                propertyType = 'classes';
            } else {
                continue;
            }

            if (seenProperties.has(propertyType)) {
                accept('error', `Duplicate property '${propertyType}' found. Properties must be unique.`, { node: prop });
            } else {
                seenProperties.add(propertyType);
            }
        }
    }

    checkUniqueTextTagAttributes(attribute: TextTag, accept: ValidationAcceptor): void {
        const seenProperties = new Set<string>();
        for (const prop of attribute.attributes) {
            let propertyType: string;
            if (prop.$type === TextAttribute) {
                propertyType = 'text';
            } else if (prop.$type === FontFamilyAttribute) {
                propertyType = 'fontFamily';
            } else if (prop.$type === ClassesAttribute) {
                propertyType = 'classes';
            } else if (prop.$type === DimensionAttribute) {
                propertyType = 'dimension';
            } else if (prop.$type === IdAttribute) {
                propertyType = 'id';
            } else if (prop.$type === PositionAttribute) {
                propertyType = 'position';
            } else {
                continue;
            }

            if (seenProperties.has(propertyType)) {
                accept('error', `Duplicate property '${propertyType}' found. Properties must be unique.`, { node: prop });
            } else {
                seenProperties.add(propertyType);
            }
        }
    }

    checkUniqueSvgTagAttributes(attribute: SvgTag, accept: ValidationAcceptor): void {
        const seenProperties = new Set<string>();
        for (const prop of attribute.attributes) {
            let propertyType: string;
            if (prop.$type === CodeAttribute) {
                propertyType = 'code';
            } else if (prop.$type === IdAttribute) {
                propertyType = 'id';
            } else if (prop.$type === PositionAttribute) {
                propertyType = 'position';
            } else {
                continue;
            }

            if (seenProperties.has(propertyType)) {
                accept('error', `Duplicate property '${propertyType}' found. Properties must be unique.`, { node: prop });
            } else {
                seenProperties.add(propertyType);
            }
        }
    }

    checkUniquePositionAttributes(attribute: PositionAttribute, accept: ValidationAcceptor): void {
        const seenProperties = new Set<string>();
        for (const prop of attribute.attributes) {
            let propertyType: string;
            if (prop.$type === XAttribute) {
                propertyType = 'x';
            } else if (prop.$type === YAttribute) {
                propertyType = 'y';
            } else {
                continue;
            }

            if (seenProperties.has(propertyType)) {
                accept('error', `Duplicate property '${propertyType}' found. Properties must be unique.`, { node: prop });
            } else {
                seenProperties.add(propertyType);
            }
        }
    }

    checkUniqueStyleAttributes(styleProperty: StyleProperty, accept: ValidationAcceptor): void {
        const seenStyleAttributes = new Set<string>();

        for (const attr of styleProperty.styleAttributes) {
            let attributeType: string;

            if (attr.$type === BackgroundColorAttribute) {
                attributeType = 'background-color';
            } else if (attr.$type === FontSizeAttribute) {
                attributeType = 'font-size';
            } else if (attr.$type === TextColorAttribute) {
                attributeType = 'text-color';
            } else {
                continue;
            }

            if (seenStyleAttributes.has(attributeType)) {
                accept('error', `Duplicate style attribute '${attributeType}' found. Style attributes must be unique within a 'style' block.`, { node: attr });
            } else {
                seenStyleAttributes.add(attributeType);
            }
        }
    }
}
