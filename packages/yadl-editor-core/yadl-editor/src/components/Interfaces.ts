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
    dimension?: YadlNodeDimension;
    $textRegion?: TextRegion;
}


export interface YadlNode {
    id?: string;
    type?: string;
    data?: any;
    position?: YadlNodePosition;
    dimension?: YadlNodeDimension;
}

export interface YadlEdge {
    $type?: string;
    id: string;
    type?: string;
    source?: string;
    target?: string;
    label?: string;
    sourceHandle?: string;
    targetHandle?: string;
    classes?: string;
    style?: string;
    labelStyle?: string;
}

export interface TextComponents {
    $type: string;
    text?: string;
    fontFamily?: string;
    classes?: string;
    position?: YadlNodePosition;
    dimension?: YadlNodeDimension;
}

export interface BoxComponents {
    $type: string;
    text?: string;
    classes?: string;
    position?: YadlNodePosition;
    dimension?: YadlNodeDimension;
}

export interface Avatars {
    $type: string;
    name?: string;
    profilePic?: string;
    handle?: string;
    classes?: string;
    fontFamily?: string;
    position?: YadlNodePosition;
    dimension?: YadlNodeDimension;
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
    boxes?: BoxComponents[];
    avatars?: Avatars[];
    edges?: YadlEdge[];
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
    range: Range;
    end: number;
    length: number;
    offset: number;
}

export interface YadlNodePosition {
    $type?: string;
    $textRegion?: TextRegion;
    isNegativeX?: boolean;
    isNegativeY?: boolean;
    x: number;
    y: number;
    range?: Range;
}

export interface YadlNodeStyle {
    width?: number;
    height?: number;
}

export interface YadlNodeDimension {
    $type?: string;
    $textRegion?: TextRegion;
    width: number;
    height: number;
    range?: Range;
}