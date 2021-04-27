import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #312e38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Poppins';
    font-size: 16px;
  }
  button {
    cursor: pointer;
  }

  @font-face {
    font-family: 'Poppins';
    src: local('Poppins') url(../assets/fonts/Poppins-Thin.ttf) format('woff');
    font-weight: 100;
  }

  @font-face {
    font-family: 'Poppins';
    src: local('Poppins') url(../assets/fonts/Poppins-ExtraLight.ttf) format('woff');
    font-weight: 200;
  }

  @font-face {
    font-family: 'Poppins';
    src: local('Poppins') url(../assets/fonts/Poppins-Light.ttf) format('woff');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Poppins';
    src: local('Poppins') url(../assets/fonts/Poppins-Regular.ttf) format('woff');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Poppins';
    src: local('Poppins') url(../assets/fonts/Poppins-Medium.ttf) format('woff');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Poppins';
    src: local('Poppins') url(../assets/fonts/Poppins-SemiBold.ttf) format('woff');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Poppins';
    src: local('Poppins') url(../assets/fonts/Poppins-Bold.ttf) format('woff');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Poppins';
    src: local('Poppins') url(../assets/fonts/Poppins-ExtraBold.ttf) format('woff');
    font-weight: 800;
  }

  @font-face {
    font-family: 'Poppins';
    src: local('Poppins') url(../assets/fonts/Poppins-Black.ttf) format('woff');
    font-weight: 900;
  }
`;
