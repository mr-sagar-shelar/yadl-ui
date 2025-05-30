export interface IconDetails {
    name: string;
    icon: string;
}
export interface IconNames {
    [key: string]: IconDetails;
}

export interface DragDropProps {
    type: string;
    data?: any;
}

export interface BoxNodeProps {
    data: {
        component: string;
        props?: any;
    };
    selected: boolean;
}

export interface IconNodeProps {
    data: {
        icon: string;
        width?: number;
        height?: number;
        category?: string;
    };
    selected: boolean;
}

export interface TextNodeProps {
    data: {
        name: string;
        props?: any;
        text: string;
        classes: string;
        fontFamily: string;
    };
    selected: boolean;
}

export interface Position {
    $type: string;
    $textRegion?: TextRegion;
    x: number;
    y: number;
    xRange?: Range;
    yRange?: Range;
}

export interface Icon {
    $type: string;
    name?: string;
    icon: string;
    position?: Position;
    startLine?: number;
}

export interface Edge {
    $type: string;
    source: string;
    destination: string;
}

export interface Device {
    $type: string;
    type: string;
    position?: Position;
    startLine?: number;
}

export interface Annotation {
    $type: string;
    $textRegion?: TextRegion;
    label: string;
    position?: Position;
    startLine?: number;
    arrowStyle?: ArrowStyle;
}

export interface ArrowStyle {
    $type: string;
    left?: Number;
    right?: Number;
    top?: Number;
    bottom?: Number;
    transform?: string;
}

export interface Box {
    $type: string;
    icon: string;
    label: string;
    position?: Position;
    startLine?: number;
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

export interface YadlModelElement {
    $type: string;
    name: string;
}

export interface YadlNode {
    name?: string;
    id?: string;
    type?: string;
    data?: any;
    position?: YadlNodePosition;
}

export interface YadlNodePosition {
    $type?: string;
    $textRegion?: TextRegion;
    x: number;
    y: number;
    range?: Range;
}

export interface AvatarNodeProps {
    selected: boolean;
    data: {
        avatarStyle: string
        className?: string;
        topType?: string
        accessoriesType?: string
        hairColor?: string
        facialHairType?: string
        facialHairColor?: string
        clotheType?: string
        clotheColor?: string
        graphicType?: string
        eyeType?: string
        eyebrowType?: string
        mouthType?: string
        skinColor?: string
        pieceType?: string
        pieceSize?: string
        viewBox?: string
        width?: number;
        height?: number;
    };
}