import { type AstNode } from 'langium';
import { AbstractFormatter, Formatting } from 'langium/lsp';
import * as ast from './generated/ast.js';
import { Div, FontSizeAttribute, BackgroundColorAttribute, TextColorAttribute, HeightAttribute, IdAttribute, StyleProperty, WidthAttribute, AwsTag, XAttribute, YAttribute, PositionAttribute, AwsIconTypeAttribute, DimensionAttribute } from './generated/ast.js';
const threshold = 2;

export class YadlFormatter extends AbstractFormatter {

    // protected override doDocumentFormat(document: LangiumDocument, options: FormattingOptions, range?: Range): TextEdit[] {
    //     // (1) prepare original formatting
    //     const originalEdits = super.doDocumentFormat(document, options, range);

    //     // (2), (3) find all multiline tokens (`Person: ... info=STRING;`)
    //     const additionalEdits = new Array<TextEdit>();
    //     // const context: FormattingContext = {
    //     //     indentation: 0,
    //     //     options,
    //     //     document: document.textDocument
    //     // };
    //     // this.iterateCstTree(document, context).forEach(node => {
    //     //     if (ast.isStyleProperty(node.astNode)) {
    //     //         const element = node.astNode as StyleProperty;
    //     //         // const formatter = this.getNodeFormatter(element);
    //     //         const styleAttributes = element.styleAttributes || [];
    //     //         // debugger
    //     //         for (let i = 0; i < styleAttributes.length; i++) {
    //     //             const attribute = styleAttributes[i];
    //     //             if (i < styleAttributes.length - 1) {
    //     //                 const nextAttribute = styleAttributes[i + 1];
    //     //                 const currentAttributeNode = attribute.$cstNode;
    //     //                 const nextAttributeNode = nextAttribute.$cstNode;
    //     //                 if (currentAttributeNode && nextAttributeNode) {
    //     //                     const range1 = currentAttributeNode.range;
    //     //                     const range2 = nextAttributeNode.range;
    //     //                     console.log(` $$ ${currentAttributeNode.text}, ${nextAttributeNode.text}`)
    //     //                     console.log(range1)
    //     //                     console.log(range2)
    //     //                     const newEdit: TextEdit = {
    //     //                         newText: "$$$$",
    //     //                         range: {
    //     //                             start: {
    //     //                                 line: range1.end.line,
    //     //                                 character: range1.end.character
    //     //                             },
    //     //                             end: {
    //     //                                 line: range2.start.line,
    //     //                                 character: range2.start.character
    //     //                             }
    //     //                         }
    //     //                     }
    //     //                     additionalEdits.push(newEdit);
    //     //                 }
    //     //             }
    //     //         }
    //     //     }
    //     // });

    //     // (4) merge the lists (do I need to call avoidOverlappingEdits)
    //     return originalEdits.concat(additionalEdits);
    // }

    protected format(node: AstNode): void {
        if (ast.isDiv(node)) {
            this.formatHtmlElement(node);
        } else if (ast.isAwsTag(node)) {
            this.formatAwsTagAttributes(node);
        } else if (
            ast.isWidthAttribute(node) ||
            ast.isHeightAttribute(node) ||
            ast.isIdAttribute(node) ||
            ast.isXAttribute(node) ||
            ast.isYAttribute(node) ||
            ast.isAwsIconTypeAttribute(node) ||
            ast.isStyleProperty(node)) {
            this.formatSimplePropertys(node);
        }
        else if (ast.isDimensionAttribute(node) || ast.isPositionAttribute(node)) {
            this.formatLevelOneAttribute(node);
        }
        else if (ast.isBackgroundColorAttribute(node) || ast.isFontSizeAttribute(node) || ast.isTextColorAttribute(node)) {
            this.formatStyleAttributes(node);
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

    private formatLevelOneAttribute(element: DimensionAttribute | PositionAttribute): void {
        const formatter = this.getNodeFormatter(element);
        const bracesOpen = formatter.keyword('{');
        const bracesClose = formatter.keyword('}');

        bracesOpen.prepend(Formatting.oneSpace());
        bracesOpen.append(Formatting.oneSpace());
        bracesClose.prepend(Formatting.oneSpace());
        bracesClose.append(Formatting.noSpace());


        const nodes = formatter.nodes(...element.attributes);
        nodes.prepend(Formatting.oneSpace());
    }

    private formatAwsTagAttributes(element: AwsTag): void {
        const formatter = this.getNodeFormatter(element);
        const bracesOpen = formatter.keyword('<');
        const bracesClose = formatter.keyword('/>');
        bracesOpen.prepend(Formatting.noSpace());

        const properties = element.attributes || [];
        const nodes = formatter.nodes(...element.attributes);

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

    private formatSimplePropertys(
        property: WidthAttribute | HeightAttribute | IdAttribute | StyleProperty | XAttribute | YAttribute |
            AwsIconTypeAttribute
    ): void {
        debugger
        const formatter = this.getNodeFormatter(property);
        const eqToken = formatter.keyword(':');
        eqToken.append(Formatting.oneSpace());
        eqToken.prepend(Formatting.oneSpace());
    }

    private formatStyleAttributes(
        property: FontSizeAttribute | BackgroundColorAttribute | TextColorAttribute
    ): void {
        const formatter = this.getNodeFormatter(property);
        const colon = formatter.keyword(':');
        colon.append(Formatting.oneSpace());
    }
    // const nodes = formatter.nodes(...property.);

    // private formatStyleElement(element: ast.StyleProperty): void {

    // const formatter = this.getNodeFormatter(element);
    // formatBody(element, formatter);

    // formatter.keyword("state").prepend(Formatting.);
    // formatter
    //     .keywords(",")
    //     .append(Formatting.newLine())
    //     .prepend(Formatting.noIndent())
    //     .prepend(Formatting.newLines(0));


    // const formatter = this.getNodeFormatter(element);
    // const styleAttributes = element.styleAttributes || [];


    // const openBrace = formatter.keyword('{');
    // const closeBrace = formatter.keyword('}');

    // formatter.interior(openBrace, closeBrace).prepend(Formatting.oneSpace());

    // const nodes = formatter.nodes(...element.styleAttributes);
    // nodes.prepend(Formatting.oneSpace());

    // for (let i = 0; i < styleAttributes.length; i++) {
    //     const attribute = styleAttributes[i];

    //     if (i < styleAttributes.length - 1) {
    //         const nextAttribute = styleAttributes[i + 1];
    //         const currentAttributeNode = attribute.$cstNode;
    //         const nextAttributeNode = nextAttribute.$cstNode;
    //         debugger
    //         if (currentAttributeNode && nextAttributeNode) {
    //             //             // We need to find the comma *between* the current and next attribute.
    //             //             // The grammar rule is `(styleAttributes+=StyleAttribute (',' styleAttributes+=StyleAttribute)*)?`
    //             //             // So the comma is a sibling of the current attribute, positioned *after* it,
    //             //             // but *before* the next attribute conceptually.
    //             //             // We can identify it as the next sibling of the current attribute's CST node, if it's a comma.
    //             //             // const commaNode = currentAttributeNode.nextSibling?.text === ',' ? currentAttributeNode.nextSibling : undefined;
    //             const commaNode = formatter.keyword(',');

    //             if (commaNode) {
    //                 console.log("### Found Comma");
    //                 // Ensure exactly one space between the comma and the next attribute
    //                 // acceptor.between(commaNode.range, nextAttributeNode.range, Formatting.oneSpace());
    //                 // formatter.interior()
    //             } else {
    //                 console.log("### No Comma");
    //                 // If for some reason the comma is missing in CST, add it
    //                 // acceptor.append(currentAttributeNode.range, Formatting.comma());
    //                 // acceptor.append(currentAttributeNode.range, Formatting.space());
    //             }
    //         }
    //     }
    // }

    //     // const openBrace = element.$cstNode?.children.find(child => child.text === '{');
    //     // const closeBrace = styleProperty.$cstNode?.children.find(child => child.text === '}');

    // const openBrace = formatter.keyword('{');
    // const closeBrace = formatter.keyword('}');

    //     // if (openBrace) {
    //     //     openBrace.append(Formatting.newLine())
    //     //     // this.indent(styleProperty, acceptor);
    //     // }

    // const nodes = formatter.nodes(...element.styleAttributes);
    // if (styleAttributes.length > threshold) {
    //     nodes.prepend(Formatting.newLine());
    //     nodes.prepend(Formatting.indent());
    //     // closeBrace.prepend(Formatting.newLine());
    // }
    // else if (styleAttributes.length > 0) {
    //     nodes.prepend(Formatting.oneSpace());
    //     nodes.prepend(Formatting.noIndent());
    //     // closeBrace.prepend(Formatting.oneSpace());
    // }

    // if (styleAttributes.length > threshold) {
    //     formatter.interior(openBrace, closeBrace).prepend(Formatting.indent());
    //     openBrace.prepend(Formatting.newLine())
    //     openBrace.prepend(Formatting.indent())
    //     openBrace.append(Formatting.newLine())
    //     closeBrace.prepend(Formatting.newLine())
    //     closeBrace.prepend(Formatting.indent())
    //     closeBrace.append(Formatting.newLine())

    // } else if (styleAttributes.length > 0 && openBrace) {
    //     formatter.interior(openBrace, closeBrace).prepend(Formatting.noIndent());
    //     openBrace.prepend(Formatting.noIndent())
    //     openBrace.append(Formatting.oneSpace())
    //     closeBrace.prepend(Formatting.oneSpace())
    // } else if (closeBrace && openBrace) {
    //     // this.addSpaceBetween(openBrace.range, closeBrace.range, acceptor);
    // }
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