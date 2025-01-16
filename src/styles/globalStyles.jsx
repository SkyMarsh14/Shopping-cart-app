import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`  
/* 1. Use a more-intuitive box-sizing model */
*, *::before, *::after {
  box-sizing: border-box;
}
html {
    font-size: 16px;
}
@media (min-width:768px) {
  html{
    font-size: 18px;
  }
}
@media (min-width:1024px) {
  html{
    font-size: 19px;
  }
}
@media (min-width:1280px) {
  html{
    font-size: 20px;
  }
}
/* 2. Remove default margin */
* {
  margin: 0;
}

body {
  /* 3. Add accessible line-height */
  line-height: 1.5;
  /* 4. Improve text rendering */
  -webkit-font-smoothing: antialiased;
}

/* 5. Improve media defaults */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/* 6. Inherit fonts for form controls */
input, button, textarea, select {
  font: inherit;
}

/* 7. Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* 8. Improve line wrapping */
p {
  text-wrap: pretty;
}
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}

/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`;

export default GlobalStyle;
