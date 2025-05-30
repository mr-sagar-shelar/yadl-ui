import * as React from 'react'
import AvatarContext from '../../AvatarContext';
import { memo, useContext } from "react";

import Option from './Option'
function getComponentOptionValue(component: React.ComponentClass) {
  const optionValue = (component as any).optionValue
  if (!optionValue) {
    throw new Error(`optionValue should be provided for ${component}`)
  }
  return optionValue
}

export interface SelectorProps {
  option: Option
  defaultOption: React.ComponentClass | string
  children: React.ReactNode;
}

const SelectorComponent: React.FC<SelectorProps> = ({
  option,
  // defaultOption,
  children
}) => {
  // const [values] = useAvatarContext();
  const values = useContext(AvatarContext);
  const [components, setComponents] = React.useState<React.ReactNode | null>(null);
  React.useEffect(() => {
    let result: React.ReactNode | null = null
    React.Children.forEach(children, child => {
      // @ts-ignore
      if (getComponentOptionValue((child as any).type) === values[option.key]) {
        result = child
      }
    })
    setComponents(result);
  }, [values]);

  return (
    <>
      {components}
    </>
  );
};

const Memo = memo(SelectorComponent);
export default Memo;

// export interface Props {
//   option: Option
//   defaultOption: React.ComponentClass | string
// }

// export default class Selector extends React.Component<Props> {
//   static contextTypes = {
//     optionContext: PropTypes.instanceOf(OptionContext)
//   }

//   private get optionContext(): OptionContext {
//     return this.context.optionContext
//   }

//   UNSAFE_componentWillMount() {
//     const { option, defaultOption } = this.props
//     const { optionContext } = this
//     const defaultValue = (
//       typeof defaultOption === 'string' ?
//         defaultOption : getComponentOptionValue(defaultOption)
//     )
//     optionContext?.addStateChangeListener(this.optionContextUpdate)
//     optionContext?.optionEnter(option.key)
//     const optionState = optionContext?.getOptionState(option.key)
//     this.updateOptionValues()
//     if (optionState) {
//       optionContext?.setDefaultValue(option.key, defaultValue)
//     }
//   }

//   UNSAFE_componentWillUpdate(nextProps: Props & { children?: React.ReactNode }) {
//     this.updateOptionValues(nextProps)
//   }

//   componentWillUnmount() {
//     this.optionContext.removeStateChangeListener(this.optionContextUpdate)
//     this.optionContext.optionExit(this.props.option.key)
//   }

//   render() {
//     let result: React.ReactNode | null = null
//     const { option, children } = this.props
//     const value = this.optionContext?.getValue(option.key)!
//     React.Children.forEach(children, child => {
//       if (getComponentOptionValue((child as any).type) === value) {
//         result = child
//       }
//     })
//     return result
//   }

//   private optionContextUpdate = () => {
//     this.forceUpdate()
//   }

//   private updateOptionValues(
//     nextProps?: Props & { children?: React.ReactNode }
//   ) {
//     if (nextProps && this.props.children === nextProps.children) {
//       return
//     }
//     const { option, children } = this.props
//     const values = React.Children.map(
//       children,
//       // TODO: also validate and throw error if we don't see optionValue
//       child => getComponentOptionValue((child as any).type)
//     )
//     if (new Set(values).size !== values?.length) {
//       throw new Error('Duplicate values')
//     }
//     this.optionContext?.setOptions(option.key, values)
//   }
// }
