import React from 'react'
import Svg, { Path, Defs, G, Use, Mask } from 'react-native-svg'

export default function (props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M38 8H34V26H8V30C8 31.1 8.9 32 10 32H32L40 40V10C40 8.9 39.1 8 38 8ZM30 20V2C30 0.9 29.1 0 28 0H2C0.9 0 0 0.9 0 2V30L8 22H28C29.1 22 30 21.1 30 20Z" fill={props.color}/>
    </Svg>
  )
}