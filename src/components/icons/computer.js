import React from 'react'
import Svg, { Path, Defs, G, Use, Mask } from 'react-native-svg'

export default function (props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" fill={props.color}/>
    </Svg>
  )
}