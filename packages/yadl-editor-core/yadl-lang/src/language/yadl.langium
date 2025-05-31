grammar Yadl
import "./common"
// import "./icons/awsIcons"
// import "./icons/gcpIcons"
// import "./icons/azureIcons"
// import "./icons/skillIcons"
// import "./icons/themeisleIcons"
// import "./icons/undrawIcons"
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
import "./tags/ThemeisleTag"
import "./tags/UndrawTag"
import "./tags/AuthorTag"
import "./tags/AvatarTag"
import "./tags/BoxTag"
import "./tags/TextTag"
import "./tags/EdgeTag"
import "./tags/SvgTag"


entry Model:
    (
    awsTags+=AwsTag | azureTags+=AzureTag | gcpTags+=GcpTag | skillTags+=SkillTag | themeisleTags+=ThemeisleTag | undrawTags+=UndrawTag |
    authorTags+=AuthorTag | avatarTags+=AvatarTag | boxTags+=BoxTag | textTags+=TextTag | edgeTags+=EdgeTag | svgTags+=SvgTag
    )*;

