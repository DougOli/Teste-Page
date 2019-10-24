import React, { Component } from "react";
import {Cabeçalho,Imagem} from "./styles";
import Logo from "../../assets/page.png";



class Header extends Component {
    render() {
      return (
        <div>
          <Cabeçalho /> ,
          <Imagem>
          <img src={Logo} alt="Pagé logo" />
            </Imagem> 
            
        </div>
      );
    }
  }

export default Header;