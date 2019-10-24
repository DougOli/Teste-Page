import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";


import api from "../../services/api";
import { login } from "../../services/auth";
import Modal from 'react-modal';
import { Form, Container,Reactmodal} from "./styles";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  },
 
};

class SignIn extends Component {


  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    

    this.openModal = this.openModal.bind(this);
   
    this.closeModal = this.closeModal.bind(this);
  }

 

  openModal() {
    this.setState({modalIsOpen: true});
  }


  closeModal() {
    this.setState({modalIsOpen: false});
  }


  state = {
    email: "",
    password: "",
    error: ""
  };

  verificalogin = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("", { username:email, password:password });   
        login(response.data.token);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
          this.openModal()
        });
      }
    }
  };

  render() {
    return (                
      <Container>                         
        <Form onSubmit={this.verificalogin}>         
          <span><b>Faça seu Login</b></span>
          <hr className="hrlogin"/>          
          {this.state.error && <p>{this.state.error}</p>}
          <label>E-mail</label>
          <input  placeholder="Endereço de e-mail" onChange={e => this.setState({ email: e.target.value })}/>
          <label>Senha</label>
          <input type="password" placeholder="Senha"  onChange={e => this.setState({ password: e.target.value })} />
          <Link to=""> <u>Esqueci minha senha</u></Link><br/>
          <button type="submit">Continuar</button>          
          <Link to="/signup">Não tem cadastro? <u>Cadastre-se</u></Link>
        </Form>    
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        
        >
          <Reactmodal>
          <div className="icon"><p>!</p></div>
          <h5 className="textcenter">E-mail ou senha incorretos!</h5>
          <div className="texto">Verifique seus dados e tente novamente :)</div>  
          <button onClick={this.closeModal}>Ok</button>
          </Reactmodal>
        </Modal>    
      </Container>
    );
  }
}

export default withRouter(SignIn);
