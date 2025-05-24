import type { ValidationAcceptor, ValidationChecks } from 'langium';
import { type YadlAstType, type Avatar, type Div, PositionAttribute, DimensionAttribute, StyleProperty, WidthAttribute, HeightAttribute, IdAttribute, BackgroundColorAttribute, FontSizeAttribute, TextColorAttribute, YAttribute, XAttribute, AwsTag, AwsIconTypeAttribute } from './generated/ast.js';
import type { YadlServices } from './yadl-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: YadlServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.YadlValidator;
    const checks: ValidationChecks<YadlAstType> = {
        Avatar: validator.checkMultipleProps,
        Div: validator.checkUniqueProperties,
        StyleProperty: validator.checkUniqueStyleAttributes,
        DimensionAttribute: validator.checkUniqueDimensionAttributes,
        PositionAttribute: validator.checkUniquePositionAttributes,
        AwsTag: validator.checkUniqueAwsTagAttributes

    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class YadlValidator {
    checkMultipleProps(avatar: Avatar, accept: ValidationAcceptor): void {
        // const reported = new Set();
        // 
        // console.log(avatar);
        // avatar.props.forEach(d => {
        //     if (reported.has(d.topType)) {
        //         accept('error', `Property '${d.topType}'. is already defined`, { node: d });
        //     }
        //     reported.add(d.topType);
        // });
        // if (avatar.name) {
        //     const firstChar = avatar.name.substring(0, 1);
        //     if (firstChar.toUpperCase() !== firstChar) {
        //         accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
        //     }
        // }
    }

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
