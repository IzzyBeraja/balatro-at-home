import React from "react";
import Svg, {
  Defs,
  FeBlend,
  FeColorMatrix,
  FeComposite,
  FeFlood,
  FeOffset,
  Filter,
  G,
  Path,
  Rect,
} from "react-native-svg";

type Props = {
  height?: number;
  fillColor?: string;
};

export default function RedDeck({ height = 95 }: Props) {
  return (
    <Svg fill="none" height={height} viewBox="0 0 69 95" width={(69 * height) / 95}>
      <Defs>
        <Filter
          // colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="95"
          id="filter0_d_12_8001"
          width="69"
          x="0"
          y="0"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <FeOffset dy="2" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
          <FeBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_12_8001" />
          <FeBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_12_8001"
            mode="normal"
            result="shape"
          />
        </Filter>
      </Defs>
      <G filter="url(#filter0_d_12_8001)">
        <Path d="M0 2V91H1V92H2V93H67V92H68V91H69V2H68V1H67V0H2V1H1V2H0Z" fill="white" />
      </G>
      <Path d="M4 4V3H65V4H66V89H65V90H4V89H3V4H4Z" fill="#FE5F55" />
      <Rect fill="white" height="1" width="1" x="7" y="5" />
      <Rect fill="white" height="1" width="1" x="5" y="7" />
      <Rect fill="white" height="1" width="1" x="5" y="10" />
      <Rect fill="white" height="1" width="1" x="5" y="13" />
      <Rect fill="white" height="1" width="1" x="5" y="16" />
      <Rect fill="white" height="1" width="1" x="5" y="19" />
      <Rect fill="white" height="1" width="1" x="5" y="22" />
      <Rect fill="white" height="1" width="1" x="5" y="25" />
      <Rect fill="white" height="1" width="1" x="5" y="28" />
      <Rect fill="white" height="1" width="1" x="5" y="31" />
      <Rect fill="white" height="1" width="1" x="5" y="34" />
      <Rect fill="white" height="1" width="1" x="5" y="37" />
      <Rect fill="white" height="1" width="1" x="5" y="40" />
      <Rect fill="white" height="1" width="1" x="5" y="43" />
      <Rect fill="white" height="1" width="1" x="5" y="46" />
      <Rect fill="white" height="1" width="1" x="5" y="49" />
      <Rect fill="white" height="1" width="1" x="5" y="52" />
      <Rect fill="white" height="1" width="1" x="5" y="55" />
      <Rect fill="white" height="1" width="1" x="5" y="58" />
      <Rect fill="white" height="1" width="1" x="5" y="61" />
      <Rect fill="white" height="1" width="1" x="5" y="64" />
      <Rect fill="white" height="1" width="1" x="5" y="67" />
      <Rect fill="white" height="1" width="1" x="5" y="70" />
      <Rect fill="white" height="1" width="1" x="5" y="73" />
      <Rect fill="white" height="1" width="1" x="5" y="76" />
      <Rect fill="white" height="1" width="1" x="5" y="79" />
      <Rect fill="white" height="1" width="1" x="5" y="82" />
      <Rect fill="white" height="1" width="1" x="5" y="85" />
      <Rect fill="white" height="1" width="1" x="10" y="5" />
      <Rect fill="white" height="1" width="1" x="13" y="5" />
      <Rect fill="white" height="1" width="1" x="16" y="5" />
      <Rect fill="white" height="1" width="1" x="19" y="5" />
      <Rect fill="white" height="1" width="1" x="22" y="5" />
      <Rect fill="white" height="1" width="1" x="25" y="5" />
      <Rect fill="white" height="1" width="1" x="28" y="5" />
      <Rect fill="white" height="1" width="1" x="40" y="5" />
      <Rect fill="white" height="1" width="1" x="43" y="5" />
      <Rect fill="white" height="1" width="1" x="46" y="5" />
      <Rect fill="white" height="1" width="1" x="49" y="5" />
      <Rect fill="white" height="1" width="1" x="52" y="5" />
      <Rect fill="white" height="1" width="1" x="55" y="5" />
      <Rect fill="white" height="1" width="1" x="58" y="5" />
      <Rect fill="white" height="1" width="1" x="61" y="5" />
      <Rect fill="white" height="1" width="1" x="7" y="87" />
      <Rect fill="white" height="1" width="1" x="10" y="87" />
      <Rect fill="white" height="1" width="1" x="13" y="87" />
      <Rect fill="white" height="1" width="1" x="16" y="87" />
      <Rect fill="white" height="1" width="1" x="19" y="87" />
      <Rect fill="white" height="1" width="1" x="22" y="87" />
      <Rect fill="white" height="1" width="1" x="25" y="87" />
      <Rect fill="white" height="1" width="1" x="28" y="87" />
      <Rect fill="white" height="1" width="1" x="31" y="87" />
      <Rect fill="white" height="1" width="1" x="40" y="87" />
      <Rect fill="white" height="1" width="1" x="43" y="87" />
      <Rect fill="white" height="1" width="1" x="46" y="87" />
      <Rect fill="white" height="1" width="1" x="49" y="87" />
      <Rect fill="white" height="1" width="1" x="52" y="87" />
      <Rect fill="white" height="1" width="1" x="55" y="87" />
      <Rect fill="white" height="1" width="1" x="58" y="87" />
      <Rect fill="white" height="1" width="1" x="61" y="87" />
      <Rect fill="white" height="1" width="1" x="63" y="85" />
      <Rect fill="white" height="1" width="1" x="63" y="82" />
      <Rect fill="white" height="1" width="1" x="63" y="79" />
      <Rect fill="white" height="1" width="1" x="63" y="76" />
      <Rect fill="white" height="1" width="1" x="63" y="73" />
      <Rect fill="white" height="1" width="1" x="63" y="70" />
      <Rect fill="white" height="1" width="1" x="63" y="67" />
      <Rect fill="white" height="1" width="1" x="63" y="64" />
      <Rect fill="white" height="1" width="1" x="63" y="61" />
      <Rect fill="white" height="1" width="1" x="63" y="58" />
      <Rect fill="white" height="1" width="1" x="63" y="55" />
      <Rect fill="white" height="1" width="1" x="63" y="52" />
      <Rect fill="white" height="1" width="1" x="63" y="49" />
      <Rect fill="white" height="1" width="1" x="63" y="46" />
      <Rect fill="white" height="1" width="1" x="63" y="43" />
      <Rect fill="white" height="1" width="1" x="63" y="40" />
      <Rect fill="white" height="1" width="1" x="63" y="37" />
      <Rect fill="white" height="1" width="1" x="63" y="34" />
      <Rect fill="white" height="1" width="1" x="63" y="31" />
      <Rect fill="white" height="1" width="1" x="63" y="28" />
      <Rect fill="white" height="1" width="1" x="63" y="25" />
      <Rect fill="white" height="1" width="1" x="63" y="22" />
      <Rect fill="white" height="1" width="1" x="63" y="19" />
      <Rect fill="white" height="1" width="1" x="63" y="16" />
      <Rect fill="white" height="1" width="1" x="63" y="13" />
      <Rect fill="white" height="1" width="1" x="63" y="10" />
      <Rect fill="white" height="1" width="1" x="63" y="7" />
      <Path
        clipRule="evenodd"
        d="M38 10V11H45V10H46V9H47V10H48V11H58V34H61V9H60V8H36V9H37V10H38ZM48 10H49V9H48V10ZM45 10V9H44V10H45ZM43 9H42V10H43V9ZM51 9H50V10H51V9ZM52 9H53V10H52V9ZM55 9H54V10H55V9ZM56 9H57V10H56V9ZM59 9H58V10H59V11H60V10H59V9ZM59 12H60V13H59V12ZM60 14H59V15H60V14ZM59 16H60V17H59V16ZM60 18H59V19H60V18ZM59 20H60V21H59V20ZM60 22H59V23H60V22ZM59 24H60V25H59V24ZM60 26H59V27H60V26ZM59 28H60V29H59V28ZM60 30H59V31H60V30ZM59 32H60V33H59V32Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M33 8H9V9H8V34H11V11H21V10H22V9H23V10H24V11H31V10H32V9H33V8ZM24 10H25V9H24V10ZM21 10V9H20V10H21ZM9 10H10V11H9V10ZM10 10H11V9H10V10ZM10 12H9V13H10V12ZM9 14H10V15H9V14ZM10 16H9V17H10V16ZM9 18H10V19H9V18ZM10 20H9V21H10V20ZM9 22H10V23H9V22ZM10 24H9V25H10V24ZM9 26H10V27H9V26ZM10 28H9V29H10V28ZM9 30H10V31H9V30ZM10 32H9V33H10V32ZM13 9H12V10H13V9ZM14 9H15V10H14V9ZM17 9H16V10H17V9ZM18 9H19V10H18V9ZM26 9H27V10H26V9Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M38 83V82H45V83H44V84H45V83H46V84H47V83H48V84H49V83H48V82H58V59H61V84H60V85H36V84H37V83H38ZM43 83H42V84H43V83ZM51 83H50V84H51V83ZM52 83H53V84H52V83ZM55 83H54V84H55V83ZM56 83H57V84H56V83ZM59 83H58V84H59V83ZM59 83H60V82H59V83ZM60 60H59V61H60V60ZM59 62H60V63H59V62ZM60 64H59V65H60V64ZM59 66H60V67H59V66ZM60 68H59V69H60V68ZM59 70H60V71H59V70ZM60 72H59V73H60V72ZM59 74H60V75H59V74ZM60 76H59V77H60V76ZM59 78H60V79H59V78ZM60 80H59V81H60V80Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M33 85H9V84H8V59H11V82H21V83H20V84H21V83H22V84H23V83H24V84H25V83H24V82H31V83H32V84H33V85ZM9 60H10V61H9V60ZM10 62H9V63H10V62ZM9 64H10V65H9V64ZM10 66H9V67H10V66ZM9 68H10V69H9V68ZM10 70H9V71H10V70ZM9 72H10V73H9V72ZM10 74H9V75H10V74ZM9 76H10V77H9V76ZM10 78H9V79H10V78ZM9 80H10V81H9V80ZM10 82H9V83H10V84H11V83H10V82ZM13 83H12V84H13V83ZM14 83H15V84H14V83ZM17 83H16V84H17V83ZM18 83H19V84H18V83ZM26 83H27V84H26V83Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M58 37H61V56H58V37ZM59 38H60V39H59V38ZM60 40H59V41H60V40ZM59 42H60V43H59V42ZM60 44H59V45H60V44ZM59 46H60V47H59V46ZM59 50H60V51H59V50ZM60 52H59V53H60V52ZM59 54H60V55H59V54Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M11 56V37H8V56H11ZM10 38H9V39H10V38ZM9 40H10V41H9V40ZM10 42H9V43H10V42ZM9 44H10V45H9V44ZM10 46H9V47H10V46ZM9 48H10V49H9V48ZM10 50H9V51H10V50ZM9 52H10V53H9V52ZM10 54H9V55H10V54Z"
        fill="white"
        fillRule="evenodd"
      />
      <Rect fill="white" height="1" width="1" x="9" y="57" />
      <Rect fill="white" height="1" width="1" x="59" y="57" />
      <Rect fill="white" height="1" width="1" x="9" y="35" />
      <Rect fill="white" height="1" width="1" x="59" y="35" />
      <Rect fill="white" height="3" width="1" x="7" y="34" />
      <Rect fill="white" height="3" width="1" x="57" y="34" />
      <Rect fill="white" height="3" width="1" x="7" y="56" />
      <Rect fill="white" height="3" width="1" x="57" y="56" />
      <Rect fill="white" height="3" width="1" x="11" y="34" />
      <Rect fill="white" height="3" width="1" x="61" y="34" />
      <Rect fill="white" height="3" width="1" x="11" y="56" />
      <Rect fill="white" height="3" width="1" x="61" y="56" />
      <Path
        clipRule="evenodd"
        d="M35 3H34V4H33V5H31V7H30V8H34V7H35V8H39V7H38V5H36V4H35V3ZM33 7H32V6H33V7ZM36 7H37V6H36V7Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M35 90H34V89H33V88H31V86H30V85H34V86H35V85H39V86H38V88H36V89H35V90ZM33 86H32V87H33V86ZM36 86H37V87H36V86Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path
        d="M16 11H19V12H18V13H17V14H16V16H15V17H14V19H13V21H12V24H11V18H12V16H13V15H14V13H15V12H16V11Z"
        fill="white"
      />
      <Path
        d="M16 82H19V81H18V80H17V79H16V77H15V76H14V74H13V72H12V69H11V75H12V77H13V78H14V80H15V81H16V82Z"
        fill="white"
      />
      <Path
        d="M53 11H50V12H51V13H52V14H53V16H54V17H55V19H56V21H57V24H58V18H57V16H56V15H55V13H54V12H53V11Z"
        fill="white"
      />
      <Path
        d="M53 82H50V81H51V80H52V79H53V77H54V76H55V74H56V72H57V69H58V75H57V77H56V78H55V80H54V81H53V82Z"
        fill="white"
      />
      <Path
        clipRule="evenodd"
        d="M13 37H11V38H12V55H11V56H13V54H14V52H15V51H16V49H17V48H18V47H19V46H18V45H17V44H16V42H15V41H14V39H13V37ZM14 42H13V51H14V48H15V47H16V46H15V45H14V42Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M56 37H58V38H57V55H58V56H56V54H55V52H54V51H53V49H52V48H51V47H50V46H51V45H52V44H53V42H54V41H55V39H56V37ZM55 42H56V51H55V48H54V47H53V46H54V45H55V42Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M35 10H34V11H33V12H32V13H31V14H30V17H31V18H32V19H33V20H36V19H37V18H38V17H39V14H38V13H37V12H36V11H35V10ZM34 12V13H33V14H32V15H33V16H34V17H35V16H36V15H37V14H36V13H35V12H34ZM35 18H34V19H35V18Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M35 83H34V82H33V81H32V80H31V79H30V76H31V75H32V74H33V73H36V74H37V75H38V76H39V79H38V80H37V81H36V82H35V83ZM34 81V80H33V79H32V78H33V77H34V76H35V77H36V78H37V79H36V80H35V81H34ZM35 75H34V74H35V75Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path d="M20 24V22H21V23H22V24H20Z" fill="white" />
      <Path d="M24 25H22V24H23V23H24V25Z" fill="white" />
      <Path d="M24 25H25V26H24V25Z" fill="white" />
      <Path d="M23 23H22V22H21V20H22V21H23V23Z" fill="white" />
      <Path
        clipRule="evenodd"
        d="M18 26V32H19V30H21V27H22V26H21V25H19V26H18ZM19 26H21V27H20V29H19V26Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M22 31V28H23V27H27V31H22ZM23 29V30H26V28H24V29H23Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M21 31H20V33H19V34H20V36H21V38H22V36H23V34H24V33H25V32H21V31ZM21 33H22V35H21V33Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path d="M50 26H51V32H50V30H48V27H49V29H50V26Z" fill="white" />
      <Path d="M48 26V25H50V26H48Z" fill="white" />
      <Path d="M48 26H47V27H48V26Z" fill="white" />
      <Path
        clipRule="evenodd"
        d="M47 28V31H42V27H46V28H47ZM46 29V30H43V28H45V29H46Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path d="M48 22H49V24H47V23H48V22Z" fill="white" />
      <Path d="M46 23V21H47V20H48V22H47V23H46Z" fill="white" />
      <Path d="M45 25V23H46V24H47V25H45Z" fill="white" />
      <Path d="M45 25V26H44V25H45Z" fill="white" />
      <Path
        clipRule="evenodd"
        d="M48 31H49V33H50V34H49V36H48V38H47V36H46V34H45V33H44V32H48V31ZM47 33H48V35H47V33Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path d="M36 36H33V37H36V36Z" fill="white" />
      <Path d="M37 42H32V43H37V42Z" fill="white" />
      <Path d="M30 39V38H34V41H30V40H33V39H30Z" fill="white" />
      <Path d="M35 38V39H38V40H35V41H39V38H35Z" fill="white" />
      <Path d="M25 71V73H24V71H25Z" fill="white" />
      <Path d="M26 69V71H25V69H26Z" fill="white" />
      <Path d="M27 68V69H26V68H27Z" fill="white" />
      <Path
        clipRule="evenodd"
        d="M27 68H29V67H31V66H33V65H34V63H33V62H31V61H29V60H27V59H26V57H25V55H24V57H25V59H26V60H27V61H28V63H29V65H28V67H27V68ZM33 63V65H31V63H33Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path d="M44 57V55H45V57H44Z" fill="white" />
      <Path d="M43 59V57H44V59H43Z" fill="white" />
      <Path d="M42 60V59H43V60H42Z" fill="white" />
      <Path
        clipRule="evenodd"
        d="M42 60H40V61H38V62H36V63H35V65H36V66H38V67H40V68H42V69H43V71H44V73H45V71H44V69H43V68H42V67H41V65H40V63H41V61H42V60ZM36 65V63H38V65H36Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M20 69V71H21V73H22V72H23V70H24V68H25V67H24V68H22V69H20ZM22 69H23V70H22V69ZM22 70V71H21V70H22Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path d="M18 67V61H19V63H21V66H20V64H19V67H18Z" fill="white" />
      <Path d="M21 67V68H19V67H21Z" fill="white" />
      <Path d="M21 67H22V66H21V67Z" fill="white" />
      <Path
        clipRule="evenodd"
        d="M22 62V65H23V66H27V62H22ZM23 64V63H26V65H24V64H23Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M21 62H20V60H19V59H20V57H21V55H22V57H23V59H24V60H25V61H21V62ZM21 60H22V58H21V60Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M50 67H51V61H50V63H48V66H47V67H48V68H50V67ZM50 67H48V66H49V64H50V67Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M47 65V62H42V66H46V65H47ZM46 64V63H43V65H45V64H46Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M48 71H49V69H47V68H45V67H44V68H45V70H46V72H47V73H48V71ZM47 70H46V69H47V70ZM47 70V71H48V70H47Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M48 62H49V60H50V59H49V57H48V55H47V57H46V59H45V60H44V61H48V62ZM47 60H48V58H47V60Z"
        fill="white"
        fillRule="evenodd"
      />
      <Path d="M37 51H32V50H37V51Z" fill="white" />
      <Path d="M36 57H33V56H36V57Z" fill="white" />
      <Path d="M39 55V54H36V53H39V52H35V55H39Z" fill="white" />
      <Path d="M34 55V54H31V53H34V52H30V55H34Z" fill="white" />
      <Path
        clipRule="evenodd"
        d="M30 11H23V12H22V13H20V14H19V15H18V17H17V18H16V20H15V22H14V25H13V33H14V36H15V38H16V40H17V41H18V43H19V44H20V45H21V46H22V47H21V48H20V49H19V50H18V52H17V53H16V55H15V57H14V60H13V68H14V71H15V73H16V75H17V76H18V78H19V79H20V80H22V81H23V82H30V81H29V79H28V76H29V74H30V73H31V72H32V71H37V72H38V73H39V74H40V76H41V79H40V81H39V82H46V81H47V80H49V79H50V78H51V76H52V75H53V73H54V71H55V68H56V60H55V57H54V55H53V53H52V52H51V50H50V49H49V48H48V47H47V46H48V45H49V44H50V43H51V41H52V40H53V38H54V36H55V33H56V25H55V22H54V20H53V18H52V17H51V15H50V14H49V13H47V12H46V11H39V12H40V14H41V17H40V19H39V20H38V21H37V22H32V21H31V20H30V19H29V17H28V14H29V12H30V11ZM44 45H43V40H42V38H41V44H40V45H38V46H31V45H29V44H28V38H27V40H26V45H25V48H26V53H27V55H28V49H29V48H31V47H38V48H40V49H41V55H42V53H43V48H44V45ZM28 12H27V13H28V12ZM42 12H41V13H42V12ZM45 17V20H44V22H43V24H42V25H40V26H38V27H36V28H35V30H36V31H38V32H40V33H42V34H43V36H44V38H45V43H44V39H43V37H42V35H41V34H39V33H37V32H35V31H34V32H32V33H30V34H28V35H27V37H26V39H25V43H24V38H25V36H26V34H27V33H29V32H31V31H33V30H34V28H33V27H31V26H29V25H27V24H26V22H25V20H24V17H25V19H26V21H27V23H28V24H30V25H32V26H34V27H35V26H37V25H39V24H41V23H42V21H43V19H44V17H45ZM24 20V22H25V24H26V25H27V26H28V28H29V30H28V32H27V33H26V34H25V36H24V38H23V41H22V40H21V39H20V37H19V35H18V33H17V25H18V23H19V21H20V19H21V18H22V17H23V20H24ZM33 28V30H31V28H33ZM45 38V36H44V34H43V33H42V32H41V30H40V28H41V26H42V25H43V24H44V22H45V20H46V17H47V18H48V19H49V21H50V23H51V25H52V33H51V35H50V37H49V39H48V40H47V41H46V38H45ZM36 30V28H38V30H36ZM27 19H28V20H27V19ZM28 20H29V21H30V22H31V23H29V22H28V20ZM42 19H41V20H40V21H39V22H38V23H40V22H41V20H42V19ZM27 14H26V15H25V16H26V17H27V14ZM42 14H43V15H44V16H43V17H42V14ZM36 24V23H33V24H34V25H35V24H36ZM43 13V12H45V13H46V14H44V13H43ZM50 18H49V17H48V16H47V15H46V14H48V15H49V16H50V18ZM50 40V38H51V36H52V34H53V24H52V22H51V20H50V18H51V19H52V21H53V23H54V26H55V32H54V35H53V37H52V39H51V40H50ZM50 40V42H49V43H48V44H47V45H46V43H47V42H48V41H49V40H50ZM21 17V16H22V15H23V14H25V13H26V12H24V13H23V14H21V15H20V16H19V18H18V19H17V21H16V23H15V26H14V32H15V35H16V37H17V39H18V40H19V42H20V43H21V44H22V45H23V43H22V42H21V41H20V40H19V38H18V36H17V34H16V24H17V22H18V20H19V18H20V17H21ZM33 34V33H36V34H35V35H37V36H39V37H40V42H39V43H38V44H31V43H30V42H29V37H30V36H32V35H34V34H33ZM28 81H27V80H28V81ZM42 81H41V80H42V81ZM45 76V73H46V76H47V75H48V74H49V72H50V70H51V68H52V60H51V58H50V56H49V54H48V53H47V52H46V55H45V50H44V54H43V56H42V58H41V59H39V60H37V61H35V62H34V61H32V60H30V59H28V58H27V56H26V54H25V50H24V55H23V52H22V53H21V54H20V56H19V58H18V60H17V68H18V70H19V72H20V74H21V75H22V76H23V73H24V76H25V74H26V72H27V70H28V69H30V68H32V67H34V66H35V67H37V68H39V69H41V70H42V72H43V74H44V76H45ZM27 74H28V73H29V72H30V71H31V70H29V71H28V73H27V74ZM42 74H41V73H42V74ZM41 73H40V72H39V71H38V70H40V71H41V73ZM27 79H26V78H25V77H26V76H27V79ZM42 79H43V78H44V77H43V76H42V79ZM36 69V70H33V69H34V68H35V69H36ZM43 80V81H45V80H46V79H48V78H49V77H50V75H51V74H52V72H53V70H54V67H55V61H54V58H53V56H52V54H51V53H50V51H49V50H48V49H47V48H46V50H47V51H48V52H49V53H50V55H51V57H52V59H53V69H52V71H51V73H50V75H49V76H48V77H47V78H46V79H44V80H43ZM21 76V77H22V78H23V79H21V78H20V77H19V75H20V76H21ZM19 73V75H18V74H17V72H16V70H15V67H14V61H15V58H16V56H17V54H18V53H19V55H18V57H17V59H16V69H17V71H18V73H19ZM19 53V51H20V50H21V49H22V48H23V50H22V51H21V52H20V53H19ZM23 80V79H25V80H26V81H24V80H23ZM33 59V60H36V59H35V58H37V57H39V56H40V51H39V50H38V49H31V50H30V51H29V56H30V57H32V58H34V59H33Z"
        fill="white"
        fillRule="evenodd"
      />
    </Svg>
  );
}
