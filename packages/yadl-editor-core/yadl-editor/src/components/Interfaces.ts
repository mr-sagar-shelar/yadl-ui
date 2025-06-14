import { AstNode } from "langium-ast-helper";

export interface YadlModelElement {
    $type: string;
    name: string;
}


export interface IconTag {
    $type: string;
    name?: string;
    id?: string;
    icon: string;
    position?: YadlNodePosition;
    dimension?: YadlNodeDimension;
    $textRegion?: TextRegion;
    attributes?: any[]
}

export interface AvatarTag {
    $type: string;
    name?: string;
    id?: string;
    position?: YadlNodePosition;
    dimension?: YadlNodeDimension;
    $textRegion?: TextRegion;
    attributes?: any[]
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
    animated?: boolean;
    selectable?: boolean;
    source?: string;
    target?: string;
    label?: string;
    sourceHandle?: string;
    targetHandle?: string;
    classes?: string;
    data?: any;
    style?: string;
    labelStyle?: string;
}

export interface EditOperation {
    column: number;
    id: string;
    line: number
}

export interface YadlModelAstNode extends AstNode, YadlModelElement {
    $type: "YadlModel";
    awsTags?: IconTag[];
    gcpTags?: IconTag[];
    azureTags?: IconTag[];
    skillTags?: IconTag[];
    authorTags?: IconTag[];
    avatarTags?: IconTag[];
    boxTags?: IconTag[];
    textTags?: IconTag[];
    svgTags?: IconTag[];
    edgeTags?: IconTag[];
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


export interface TagAttribute {
    $type?: string;
    $textRegion?: TextRegion;
    attributes?: any[];
}

export interface YadlNodePositionAttribute {
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