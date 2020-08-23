import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --white-color: #FFF;
  --black-color: #2B2E37;
  --gray-color: #68768E;
  --background-color: #F2F6F9;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialised;
  background: var(--background-color);
}

button {
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
}

`;
