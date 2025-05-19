import "../common"
import "../icons/awsIcons"

HandleTypes returns string:
    'top' | 'right' | 'bottom' | 'left';

EdgeSourceHandle:
    'sourceHandle:' sourceHandle=HandleTypes;

EdgeTargetHandle:
    'targetHandle:' targetHandle=HandleTypes;

EdgeLabel:
    'label:' label=STRING;

EdgeStyle:
    'style:' style=STRING;

LabelStyle:
    'labelStyle:' labelStyle=STRING;

EdgeTypes returns string:
    'default' | 'smoothstep' | 'step' | 'straight';

ArrowHeadTypes returns string:
    'arrow' | 'arrowclosed';

EdgeType:
    'type:' type=EdgeTypes;

Edges:
    'edge' source=ID '=>' target=ID (label=EdgeLabel)? ('{'
        (type=(EdgeType))?
        (sourceHandle=EdgeSourceHandle)?
        (targetHandle=EdgeTargetHandle)?
        (classes=Classes)?
        (style=EdgeStyle)?
        (labelStyle=LabelStyle)?
    '}')?;
