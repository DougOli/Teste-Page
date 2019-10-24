import { injectGlobal } from "styled-components";

import "font-awesome/css/font-awesome.css";

injectGlobal`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}
body, html {
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  height: 100%;
  width: 100%;
}


.ok{
  color: #c90004;
  height: 250px;
  border: 0px solid;
  box-shadow: 0 0 1em #ccc;
  width: 15%;
  margin: 0 auto;
  text-align: center;
  margin-top: 10%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.oktext{
  font-size: 2em;
    font-weight: 750;
    margin: 0 auto;
    text-align: center;
    position: fixed;
    display: flex;
    width: 100%;
    margin-top: 100px;
    margin-left: 110px;
}
`;
