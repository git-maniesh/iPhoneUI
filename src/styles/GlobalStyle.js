


import {createGlobalStyle} from "styled-components"
import fontLight from "../assets/fonts/SourceSansPro-Light.ttf"
import fontRegular from "../assets/fonts/SourceSansPro-Regular.ttf"


export const GlobalStyle = createGlobalStyle `

*,*::before,*::after{
        margin:0;
        padding:0;
        ${'' /* outline:1px solid red !important; */}
}
h1,h2.h3,h4,h5,h6{
    margin:0;
    padding:0;
}

@font-face{
    font-family:'Source Sans Pro Light ';
    src:local('Source Sans Pro Light'),url(${fontLight}) format("truetype");
    font-display:swap;
    font-style:normal;
}
@font-face{
    font-family:'Source Sans Pro';
    src:local('Source Sans Pro '),url(${fontRegular}) format("truetype");
    font-display:swap;
    font-style:normal;
}
body{
    font-family:"Source Sans Pro",sans-serif;
    overflow-x:hidden;
}


// "#9BB5CE", "Sierra Blue", "155, 181, 206"

// "#F9E5C9", "Gold", "249, 229, 201"

// "#505F4E", "Alpine Green", "80, 95, 78"

// "#574f6f", "Deep Purple", "87, 79, 111"

// "#A50011", "Red", "165, 0, 17"

// "#215E7C", "Blue", "33, 94, 124"



:root{
    // Fonts As per the type scale generator => https://material-io.cn/inline-tools/typography/
 --fontBig: 7em; //88 px
 --fontxxxl: 5.5em; //88 px
 --fontxxl: 3.4375em; //55 px
 --fontxl: 2.75em; //44 px
 --fontlg: 1.9375em; //31 px
 --fontmd: 1.375em; //22 px
 --fontsm: 1.125em; //18 px
 --fontxs: 1em; //16 px
 --fontxxs: 0.75em; //12 px


  // Colors
  --dark: #000000;
  --grey: #666666;
  --greyLight: #979797;
  --offWhite: #eeeeee;
  --white: #ffffff;
  --blue: #0071e3;
  --blueRgba:"0, 113, 227";

  //fonts
  --fontL: "Source Sans Pro light";
  --fontR: "Source Sans Pro";
  
  // gradient
  --gradient: #35c3f3 0%, #8b9fe8 20%, #e681d8 39%, #ffa9a4 76%, #fed2ce 100%;
}





`