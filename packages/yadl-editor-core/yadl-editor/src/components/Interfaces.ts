import { AstNode } from "langium-ast-helper";

export interface YadlModelElement {
    $type: string;
    name: string;
}

export interface Icon {
    $type: string;
    name?: string;
    icon: string;
    position?: YadlNodePosition;
}


export interface YadlNode {
    id?: string;
    type?: string;
    data?: any;
    position?: YadlNodePosition;
}

export interface YadlEdge {
    id: string;
    type?: string;
    source?: string;
    target?: string;
    label?: string;
}

export interface TextComponents {
    $type: string;
    text?: string;
    fontFamily?: string;
    classes?: string;
    position?: YadlNodePosition;
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

export interface YadlEditorResponse {
    nodes?: YadlNode[];
    edges?: YadlEdge[]
    fontsUsed?: string[]
}

export interface RangeRow {
    character: number;
    line: number;
}

export interface Range {
    start: RangeRow;
    end: RangeRow;
}

export interface AssignmentRow {
    end: number;
    length: number;
    offset: number;
    range: Range;
}

export interface Assignment {
    x: AssignmentRow[];
    y: AssignmentRow[];
}


export interface TextRegion {
    assignments: Assignment;
    end: number;
    length: number;
    offset: number;
}

export interface YadlNodePosition {
    $type?: string;
    $textRegion?: TextRegion;
    x: number;
    y: number;
    xRange?: Range;
    yRange?: Range;
}