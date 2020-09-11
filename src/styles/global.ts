import {createGlobalStyle} from 'styled-components';
import ImgBackground from '../assets/images/bg.jpg';
export default createGlobalStyle`
    *{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100vh;
  margin: 0 auto;
}

body{
  display:flex;
  flex-direction: column;
  width:1200px;
  height: 100vh;
  background-image: url(${ImgBackground});
  font-family: 'Open Sans','Helvetica','Sans-serif','Arial';
}

:root{
  --rd-green:#007F56;
  --rd-gray:#868686;
  --rd-lightgray:rgb(220,220,220);
  --rd-salmon-rose:#FE9481;
  --rd-light-orange:#FCDA92;
  --rd-purple:#9C8CB9;
}
#root {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
`;