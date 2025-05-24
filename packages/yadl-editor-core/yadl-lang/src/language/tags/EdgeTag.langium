import "../common"


EdgeHandleTypes returns string:
    'top' | 'right' | 'bottom' | 'left';

EdgeTypes returns string:
    'default' | 'smoothstep' | 'step' | 'straight';

ArrowHeadTypes returns string:
    'arrow' | 'arrowclosed';

EdgeSourceHandleAttribute:
    'sourceHandle' ':' sourceHandle=EdgeHandleTypes;

EdgeTargetHandleAttribute:
    'targetHandle' ':' targetHandle=EdgeHandleTypes;

EdgeSourceAttribute:
    'source' ':' source=STRING;

EdgeTargetAttribute:
    'target' ':' target=STRING;

EdgeLabelAttribute:
    'label' ':' label=STRING;

EdgeStyleAttribute:
    'style' ':' style=STRING;

LabelStyleAttribute:
    'labelStyle' ':' labelStyle=STRING;

EdgeTypeAttribute:
    'type' ':' type=EdgeTypes;

EdgeTagAttributes:
    ClassesAttribute | EdgeSourceHandleAttribute | EdgeTargetHandleAttribute | EdgeLabelAttribute |
    EdgeSourceAttribute | EdgeTargetAttribute | EdgeTypeAttribute | EdgeStyleAttribute | LabelStyleAttribute;

EdgeTag:
    '<Edge' (attributes+=EdgeTagAttributes)* '/>';