import React from 'react'
import Svg, { Path, Defs, G, Use, Mask } from 'react-native-svg'

export default function (props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M27 0H3C1.35 0 0.015 1.35 0.015 3L0 30L6 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM6 10.5H24V13.5H6V10.5ZM18 18H6V15H18V18ZM24 9H6V6H24V9Z" fill={props.color}/>
    </Svg>
  )
}