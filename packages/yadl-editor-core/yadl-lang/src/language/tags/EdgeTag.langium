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

EdgeLabelStyleAttribute:
    'labelStyle' ':' labelStyle=STRING;

EdgeTypeAttribute:
    'type' ':' type=EdgeTypes;

EdgeAnimateAttribute:
    animated?='animated';

EdgeSelectableAttribute:
    selectable?='selectable';

EdgeTagAttributes:
    ClassesAttribute | EdgeSourceHandleAttribute | EdgeTargetHandleAttribute | EdgeLabelAttribute |
    EdgeSourceAttribute | EdgeTargetAttribute | EdgeTypeAttribute | EdgeStyleAttribute | EdgeLabelStyleAttribute |
    EdgeAnimateAttribute | EdgeSelectableAttribute;

EdgeTag:
    '<Edge' (attributes+=EdgeTagAttributes)* '/>';