import type { ValidationAcceptor, ValidationChecks } from 'langium';
import {
    type YadlAstType, type Div, PositionAttribute, DimensionAttribute, StyleProperty, WidthAttribute, HeightAttribute, IdAttribute, BackgroundColorAttribute, FontSizeAttribute, TextColorAttribute, YAttribute, XAttribute,
    AwsTag, AzureTag, GcpTag, SkillTag, ThemeisleTag, UndrawTag, AwsIconTypeAttribute, AzureIconTypeAttribute, GcpIconTypeAttribute,
    SkillIconTypeAttribute,
    ThemeisleIconTypeAttribute,
    UndrawIconTypeAttribute
} from './generated/ast.js';
import type { YadlServices } from './yadl-module.js';

export function registerValidationChecks(services: YadlServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.YadlValidator;
    const checks: ValidationChecks<YadlAstType> = {
        Div: validator.checkUniqueProperties,
        StyleProperty: validator.checkUniqueStyleAttributes,
        DimensionAttribute: validator.checkUniqueDimensionAttributes,
        PositionAttribute: validator.checkUniquePositionAttributes,
        AwsTag: validator.checkUniqueAwsTagAttributes,
        AzureTag: validator.checkUniqueAzureTagAttributes,
        GcpTag: validator.checkUniqueGcpTagAttributes,
        SkillTag: validator.checkUniqueSkillTagAttributes,
        ThemeisleTag: validator.checkUniqueThemeisleTagAttributes,
        UndrawTag: validator.checkUniqueUndrawTagAttributes,

    };
    registry.register(checks, validator);
}

export class YadlValidator {
    checkUniqueProperties(div: Div, accept: ValidationAcceptor): void {
        const seenProperties = new Set<string>(); // Use a Set to track seen property types

        for (const prop of div.properties) {
            let propertyType: string;
            if (prop.$type === WidthAttribute) {
                propertyType = 'width';
            } else if (prop.$type === HeightAttribute) {
                propertyType = 'height';
            } else if (prop.$type === IdAttribute) {
                propertyType = 'id';
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

    checkUniqueThemeisleTagAttributes(attribute: ThemeisleTag, accept: ValidationAcceptor): void {
        const seenProperties = new Set<string>();
        for (const prop of attribute.attributes) {
            let propertyType: string;
            if (prop.$type === ThemeisleIconTypeAttribute) {
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

    checkUniqueUndrawTagAttributes(attribute: UndrawTag, accept: ValidationAcceptor): void {
        const seenProperties = new Set<string>();
        for (const prop of attribute.attributes) {
            let propertyType: string;
            if (prop.$type === UndrawIconTypeAttribute) {
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
