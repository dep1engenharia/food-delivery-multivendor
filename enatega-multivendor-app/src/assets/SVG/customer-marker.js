import * as React from 'react'
import Svg, { Path, Circle, Defs, Pattern, Use, Image } from 'react-native-svg'

const CustomerMarker = props => (
  <Svg
    width={34}
    height={37}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Path fill="url(#a)" d="M0 0h34v37H0z" />
    <Circle cx={17} cy={17} r={9} fill="#90EA93" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#b" transform="matrix(.00658 0 0 .00605 0 -.005)" />
      </Pattern>
      <Image
        id="b"
        width={152}
        height={167}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
)

export default CustomerMarker
