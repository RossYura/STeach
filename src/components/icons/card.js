import React from 'react'
import Svg, { Path, Defs, G, Use, Mask } from 'react-native-svg'

export default function (props) {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M36 0H4C1.78 0 0.02 1.78 0.02 4L0 28C0 30.22 1.78 32 4 32H36C38.22 32 40 30.22 40 28V4C40 1.78 38.22 0 36 0ZM36 28H4V16H36V28ZM36 8H4V4H36V8Z" fill={props.color}/>
    </Svg>
  )
}