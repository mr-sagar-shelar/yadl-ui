import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-CePRvBtH.js";import{M as s,C as r}from"./index-CR_Sh5K9.js";import{B as l,P as a}from"./Button.stories-BHxpCBbR.js";import"./index-DmM0KDA7.js";import"./iframe-BJjHR7yn.js";import"./index-nLeaPAJ8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function o(t){const e={code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l,title:"Button"}),`
`,n.jsx(e.h1,{id:"button",children:"Button"}),`
`,n.jsx(e.p,{children:"Button component with different props."}),`
`,n.jsx(e.h4,{id:"example",children:"Example"}),`
`,n.jsx(r,{of:a}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import {Button} from "yadl-ui";

const Example = () => {
  return (
      <Button
        size={"small"}
        text={"Button"}
        onClick={()=> console.log("Clicked")}
        primary
      />
  );
};

export default Example;
`})}),`
`,n.jsx(e.h4,{id:"arguments",children:"Arguments"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"text"})," ",n.jsx(e.em,{children:n.jsx(e.code,{children:"() => void"})})," - A string that represents the text content of the button."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"primary"})," - A boolean indicating whether the button should have a primary styling or not. Typically, a primary button stands out as the main action in a user interface."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"disabled"})," - A boolean indicating whether the button should be disabled or not. When disabled, the button cannot be clicked or interacted with."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"size"}),' - A string with one of three possible values: "small," "medium," or "large." It defines the size or dimensions of the button.']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"onClick"})," - A function that is called when the button is clicked. It receives a MouseEventHandler for handling the click event on the button element."]}),`
`]})]})}function f(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{f as default};
