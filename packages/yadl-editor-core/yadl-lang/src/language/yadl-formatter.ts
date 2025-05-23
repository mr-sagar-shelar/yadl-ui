import type { AstNode } from 'langium';
import { AbstractFormatter, Formatting } from 'langium/lsp';
import * as ast from './generated/ast.js';
import { Div, HeightProperty, IdProperty, StyleProperty, WidthProperty } from './generated/ast.js';
const threshold = 2;

export class YadlFormatter extends AbstractFormatter {
    protected format(node: AstNode): void {

        if (ast.isDiv(node)) {
            this.formatHtmlElement(node);
        } else if (ast.isWidthProperty(node) || ast.isHeightProperty(node) || ast.isIdProperty(node) || ast.isStyleProperty(node)) {
            this.formatSimpleProperty(node);
        }
        // else if (ast.isStyleProperty(node)) {
        //     this.formatStyleElement(node);
        // }
    }

    private formatHtmlElement(element: Div): void {
        const formatter = this.getNodeFormatter(element);
        const bracesOpen = formatter.keyword('<');
        const bracesClose = formatter.keyword('>');
        bracesOpen.prepend(Formatting.noSpace());

        const properties = element.properties || [];
        const nodes = formatter.nodes(...element.properties);

        if (properties.length > threshold) {
            nodes.prepend(Formatting.newLine());
            bracesClose.prepend(Formatting.newLine());
            nodes.prepend(Formatting.indent());
        }
        else if (properties.length > 0) {
            nodes.prepend(Formatting.oneSpace());
            bracesClose.prepend(Formatting.oneSpace());
        }
    }

    private formatSimpleProperty(
        property: WidthProperty | HeightProperty | IdProperty | StyleProperty
    ): void {
        // Find the '=' token's CST node
        const formatter = this.getNodeFormatter(property);
        const eqToken = formatter.keyword('=');
        eqToken.append(Formatting.oneSpace());

        // Find the value's CST node (e.g., INT for WidthProperty, STRING for IdProperty)
        // The value feature will be 'width', 'height', or 'id' depending on the property type
        // let valueNode: AstNode | undefined;
        // if (property.$type === WidthProperty) {
        //     valueNode = property.width;
        // } else if (property.$type === HeightProperty) {
        //     valueNode = property.height;
        // } else if (property.$type === IdProperty) {
        //     valueNode = property.id;
        // }
        // if (eqToken && valueNode?.$cstNode) {
        //     // Ensure exactly one space between '=' and the value
        //     acceptor.between(eqToken.range, valueNode.$cstNode.range, Formatting.space());
        // }
    }

    // private formatStyleElement(element: ast.StyleProperty): void {
    //     const formatter = this.getNodeFormatter(element);
    //     const styleAttributes = element.styleAttributes || [];

    //     // const openBrace = element.$cstNode?.children.find(child => child.text === '{');
    //     // const closeBrace = styleProperty.$cstNode?.children.find(child => child.text === '}');

    //     // const openBrace = formatter.keyword('{');
    //     const closeBrace = formatter.keyword('}');

    //     // if (openBrace) {
    //     //     openBrace.append(Formatting.newLine())
    //     //     // this.indent(styleProperty, acceptor);
    //     // }

    //     const nodes = formatter.nodes(...element.styleAttributes);
    //     if (styleAttributes.length > threshold) {
    //         nodes.prepend(Formatting.newLine());
    //         nodes.prepend(Formatting.indent());
    //         closeBrace.prepend(Formatting.newLine());
    //     }
    //     else if (styleAttributes.length > 0) {
    //         nodes.prepend(Formatting.oneSpace());
    //         nodes.prepend(Formatting.noIndent());
    //         closeBrace.prepend(Formatting.oneSpace());
    //     }

    //     // if (styleAttributes.length > threshold) {
    //     //     formatter.interior(openBrace, closeBrace).prepend(Formatting.indent());
    //     //     openBrace.prepend(Formatting.newLine())
    //     //     openBrace.prepend(Formatting.indent())
    //     //     openBrace.append(Formatting.newLine())
    //     //     closeBrace.prepend(Formatting.newLine())
    //     //     closeBrace.prepend(Formatting.indent())
    //     //     closeBrace.append(Formatting.newLine())

    //     // } else if (styleAttributes.length > 0 && openBrace) {
    //     //     formatter.interior(openBrace, closeBrace).prepend(Formatting.noIndent());
    //     //     openBrace.prepend(Formatting.noIndent())
    //     //     openBrace.append(Formatting.oneSpace())
    //     //     closeBrace.prepend(Formatting.oneSpace())
    //     // } else if (closeBrace && openBrace) {
    //     //     // this.addSpaceBetween(openBrace.range, closeBrace.range, acceptor);
    //     // }
    // }

    // protected format(node: FormatterAstNode, acceptor: FormattingAcceptor, context: FormatterContext): void {
    //     super.format(node, acceptor, context);
    //     const grammarNode = node.grammarNode;

    //     if (isAstNode(node.node) && node.node.$type === Div) {
    //         this.formatHtmlElement(node.node, acceptor);
    //     } else if (isAstNode(node.node) && node.node.$type === StyleProperty) {
    //         this.formatStyleProperty(node.node, acceptor);
    //     }
    // }

    // private formatHtmlElement(element: Div, acceptor: FormattingAcceptor): void {
    //     const properties = element.properties || [];
    //     const threshold = 3; // Define the threshold for when to put attributes on new lines

    //     if (properties.length > threshold) {
    //         let first = true;
    //         for (const property of properties) {
    //             if (!first) {
    //                 this.addNewLineBefore(property, acceptor);
    //                 this.addIndentation(property, acceptor); // Optional: indent attributes on new lines
    //             }
    //             first = false;
    //         }
    //         // Add a newline after the last property before the closing '>' if you had one
    //         // (This example assumes no explicit closing tag for simplicity)
    //     } else if (properties.length > 0) {
    //         this.addSpaceBeforeFirstProperty(element, acceptor);
    //         for (let i = 0; i < properties.length - 1; i++) {
    //             this.addSpaceAfter(properties[i], acceptor);
    //         }
    //     }
    // }

    // private formatStyleProperty(styleProperty: StyleProperty, acceptor: FormattingAcceptor): void {
    //     const styleAttributes = styleProperty.styleAttributes || [];
    //     const threshold = 3; // Define the threshold for style attributes

    //     const openBrace = styleProperty.$cstNode?.children.find(child => child.text === '{');
    //     const closeBrace = styleProperty.$cstNode?.children.find(child => child.text === '}');

    //     if (openBrace) {
    //         this.addNewLineAfter(openBrace.range, acceptor);
    //         this.indent(styleProperty, acceptor);
    //     }

    //     if (styleAttributes.length > threshold) {
    //         let first = true;
    //         for (const attribute of styleAttributes) {
    //             if (!first) {
    //                 this.addNewLineBefore(attribute, acceptor);
    //             }
    //             first = false;
    //             this.addIndentation(attribute, acceptor); // Optional: indent style attributes
    //             const colon = attribute.$cstNode?.children.find(child => child.text === ':');
    //             if (colon) {
    //                 this.addSpaceAfter(colon.range, acceptor);
    //             }
    //         }
    //         if (closeBrace) {
    //             this.addNewLineBefore(closeBrace.range, acceptor);
    //             this.deindent(styleProperty, acceptor);
    //         }
    //     } else if (styleAttributes.length > 0 && openBrace) {
    //         for (let i = 0; i < styleAttributes.length - 1; i++) {
    //             this.addCommaAfter(styleAttributes[i], acceptor);
    //             this.addSpaceAfter(styleAttributes[i], acceptor);
    //         }
    //         if (closeBrace) {
    //             this.addSpaceBefore(closeBrace.range, acceptor);
    //         }
    //     } else if (closeBrace && openBrace) {
    //         this.addSpaceBetween(openBrace.range, closeBrace.range, acceptor);
    //     }
    // }

    // private addNewLineBefore(node: AstNode, acceptor: FormattingAcceptor): void {
    //     acceptor.prepend(node, Formatting.lineBreak());
    // }

    // private addNewLineAfter(range: Range, acceptor: FormattingAcceptor): void {
    //     acceptor.append(range, Formatting.lineBreak());
    // }

    // private addSpaceBefore(range: Range, acceptor: FormattingAcceptor): void {
    //     acceptor.prepend(range, Formatting.space());
    // }

    // private addSpaceAfter(node: AstNode, acceptor: FormattingAcceptor): void {
    //     acceptor.append(node, Formatting.space());
    // }

    // private addSpaceBetween(range1: Range, range2: Range, acceptor: FormattingAcceptor): void {
    //     acceptor.between(range1, range2, Formatting.space());
    // }

    // private addSpaceBeforeFirstProperty(element: Div, acceptor: FormattingAcceptor): void {
    //     const tagNameNode = element.$cstNode;
    //     const firstProperty = element.properties?.[0];
    //     if (tagNameNode && firstProperty) {
    //         acceptor.after(tagNameNode.range, Formatting.space());
    //     }
    // }

    // private addIndentation(node: AstNode, acceptor: FormattingAcceptor): void {
    //     acceptor.prepend(node, Formatting.indent());
    // }

    // private indent(node: AstNode, acceptor: FormattingAcceptor): void {
    //     acceptor.prepend(node, Formatting.indent());
    // }

    // private deindent(node: AstNode, acceptor: FormattingAcceptor): void {
    //     acceptor.append(node, Formatting.deindent());
    // }

    // private addCommaAfter(node: AstNode, acceptor: FormattingAcceptor): void {
    //     acceptor.append(node, Formatting.comma());
    // }
}