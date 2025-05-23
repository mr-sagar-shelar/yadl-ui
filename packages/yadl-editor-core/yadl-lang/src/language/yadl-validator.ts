import type { ValidationAcceptor, ValidationChecks } from 'langium';
import { type YadlAstType, type Avatar, type Div, StyleProperty, WidthProperty, HeightProperty, IdProperty, BackgroundColorAttribute, FontSizeAttribute, TextColorAttribute } from './generated/ast.js';
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
        StyleProperty: validator.checkUniqueStyleAttributes
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class YadlValidator {

    // checkPersonStartsWithCapital(person: Person, accept: ValidationAcceptor): void {
    //     if (person.name) {
    //         const firstChar = person.name.substring(0, 1);
    //         if (firstChar.toUpperCase() !== firstChar) {
    //             accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
    //         }
    //     }
    // }

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
        // const reported = new Set();

        const seenProperties = new Set<string>(); // Use a Set to track seen property types

        for (const prop of div.properties) {
            let propertyType: string;

            // Determine the type of the property based on its instance
            if (prop.$type === WidthProperty) {
                propertyType = 'width';
            } else if (prop.$type === HeightProperty) {
                propertyType = 'height';
            } else if (prop.$type === IdProperty) {
                propertyType = 'id';
            } else {
                // Should not happen if your grammar is exhaustive
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
