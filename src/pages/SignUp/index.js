import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";

import { Form, Container } from "./styles";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  verificaCadastro = async e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    if (!username || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/users", { username, email, password });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.verificaCadastro}>   
        <span><b>Faça seu Cadastro</b></span>
          <hr className="hrlogin"/>          
          {this.state.error && <p>{this.state.error}</p>}
          <input type="text" placeholder="Nome de usuário" onChange={e => this.setState({ username: e.target.value })} />
          <input type="email" placeholder="Endereço de e-mail"  onChange={e => this.setState({ email: e.target.value })}/>
          <input type="password"  placeholder="Senha"   onChange={e => this.setState({ password: e.target.value })} />
          <button type="submit">Cadastrar grátis</button>  

          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
