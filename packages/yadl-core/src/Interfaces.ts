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