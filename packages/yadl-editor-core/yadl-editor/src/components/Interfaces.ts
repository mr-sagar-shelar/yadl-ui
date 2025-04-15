import { AstNode } from "langium-ast-helper";

export interface YadlModelElement {
    $type: string;
    name: string;
}

export interface Icon {
    $type: string;
    name?: string;
    icon: string;
}

export interface TextComponents {
    $type: string;
    text?: string;
    fontFamily?: string;
    classes?: string;
}

export interface YadlModelAstNode extends AstNode, YadlModelElement {
    $type: "YadlModel";
    awsIcons?: Icon[];
    gcpIcons?: Icon[];
    azureIcons?: Icon[];
    skillIcons?: Icon[];
    themeisleIcons?: Icon[];
    undrawIcons?: Icon[];
    textComponents?: TextComponents[];
}