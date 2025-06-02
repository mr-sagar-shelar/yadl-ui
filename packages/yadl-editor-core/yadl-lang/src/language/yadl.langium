grammar Yadl
import "./common"
// import "./icons/awsIcons"
// import "./icons/gcpIcons"
// import "./icons/azureIcons"
// import "./icons/skillIcons"
// import "./components/text"
// import "./components/box"
// import "./components/edge"
// import "./components/avatar"
// import "./components/author"
// import "./components/div"


import "./tags/AwsTag"
import "./tags/AzureTag"
import "./tags/GcpTag"
import "./tags/SkillTag"
import "./tags/AuthorTag"
import "./tags/AvatarTag"
import "./tags/BoxTag"
import "./tags/TextTag"
import "./tags/EdgeTag"
import "./tags/SvgTag"


entry Model:
    (
    awsTags+=AwsTag | azureTags+=AzureTag | gcpTags+=GcpTag | skillTags+=SkillTag | authorTags+=AuthorTag |
    avatarTags+=AvatarTag | boxTags+=BoxTag | textTags+=TextTag | edgeTags+=EdgeTag | svgTags+=SvgTag
    )*;

