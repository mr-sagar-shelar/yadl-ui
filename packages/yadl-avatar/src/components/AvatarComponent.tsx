// import * as PropTypes from 'prop-types'
import * as React from 'react'
import { memo } from "react";
import Avatar, { AvatarStyle } from './avatar'
import AvatarContext, { AvatarProvider, useAvatarContext } from '../AvatarContext';
// import { OptionContext, allOptions } from './options'

export { default as Avatar, AvatarStyle } from './avatar'
export { Option, OptionContext, allOptions } from './options'
import { allOptions } from './options'

export interface AvatarProps {
  avatarStyle: string
  className?: string;
  style?: React.CSSProperties
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
}

// export default class AvatarComponent extends React.Component<AvatarProps> {
//   static childContextTypes = {
//     optionContext: PropTypes.instanceOf(OptionContext)
//   }
//   private optionContext: OptionContext = new OptionContext(allOptions)

//   getChildContext() {
//     return { optionContext: this.optionContext }
//   }

//   UNSAFE_componentWillMount() {
//     this.updateOptionContext(this.props)
//   }

//   UNSAFE_componentWillReceiveProps(nextProps: Props) {
//     this.updateOptionContext(nextProps)
//   }

//   render() {
//     const { avatarStyle, style, className } = this.props
//     return <Avatar avatarStyle={avatarStyle as AvatarStyle} style={style} className={className} />
//   }

//   private updateOptionContext(props: Props) {
//     const data: { [index: string]: string } = {}
//     for (const option of allOptions) {
//       const value = props[option.key]
//       if (!value) {
//         continue
//       }
//       data[option.key] = value
//     }
//     this.optionContext.setData(data)
//   }
// }


const AvatarComponent = (props: AvatarProps) => {
  const { avatarStyle, style, className } = props;
  // const [_, setType] = useAvatarContext();
  // const [currentData, setCurrentData] = React.useState();
  // const data: AvatarProps = {
  //   topType: "LongHairMiaWallace",
  //   avatarStyle: 'Top'
  // }

  // React.useEffect(() => {

  //   const data: { [index: string]: string } = {}
  //   for (const option of allOptions) {
  //     const value = props[option.key]
  //     if (!value) {
  //       continue
  //     }
  //     data[option.key] = value
  //   }

  //   console.log(` $$ Available Props ${JSON.stringify(data)}`);
  //   // setCurrentData(data);

  //   const payload: AvatarProps = {
  //     topType: "LongHairMiaWallace",
  //     avatarStyle: 'Top'
  //   }
  //   // if (setType) {
  //   //   setType(payload);
  //   // }
  // }, [props]);

  return (
    <AvatarContext.Provider value={props} >
      <Avatar avatarStyle={avatarStyle as AvatarStyle} style={style} className={className} />
    </AvatarContext.Provider>
    // <AvatarProvider >
    //   <Avatar avatarStyle={avatarStyle as AvatarStyle} style={style} className={className} />
    // </AvatarProvider>
  );
};
const Memo = memo(AvatarComponent);
export default Memo;