import styled from "styled-components";


export const Reactmodal = styled.div`
.icon{
  color: #307dd5;
  height: 45px;
  border: 4px solid #307dd5;
  border-radius: 500px;
  width: 15%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 20px;
  justify-content: center
}
p{
  font-size: 2em;
  font-weight: 750;
}

.textcenter{
  color:#307dd6;
  text-align: center;
}

.texto{
    text-align: center;
}

button {
  color: #fff;
  font-size: 16px;
  background: #307dd5;
  height: 36px;
  border: 0;
  border-radius: 25px;
  width: 100%;
  margin: 20px 0;
  cursor: pointer;
}

`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:3%;
`;


export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;    
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: auto;
    height: 35px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #87de74;
    border-radius: 7px;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #307dd5;
    height: 36px;
    border: 0;
    border-radius: 25px;
    width: 100%;
    margin: 20px 0;
    cursor: pointer;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 12;
    color: #999;
    text-decoration: none;
  }

  span {
    color:#c90004;
    margin-right: 50%;
    font-size: x-large;
  }
 .hrlogin {
  border: 1px solid #c90004;
}

label {
  
  margin-right: 85%;
  font-size: small;
  padding: 2px;
  color: #999;
}
`;
