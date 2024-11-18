import styled from "styled-components";
import BigLogo from "../components/BigLogo";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import UserContext from "../contexts/UserContext";
import TokenContext from "../contexts/TokenContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const {setToken} = useContext(TokenContext);

  const navigate = useNavigate();

  function sendLogin(event) {
    setLoading(true)
    event.preventDefault()
    const body = {
      email: email,
      password: password
    }
    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
      .then(res => {
        setLoading(false)
        setUser(res.data.image)
        setToken(res.data.token)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("image", res.data.image)
        navigate("/hoje")
      })
      .catch(err => {
        setLoading(false)
        alert(err.response.data.message)
      })
  }

  return (
    <>
      <ConteinerLogin>
        <BigLogo></BigLogo>
        <form onSubmit={sendLogin}>
          <Input
            type="email"
            placeholder="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
          />
          <Input
            type="password"
            placeholder="senha"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={loading}
          />
          <Button type="submit" disabled={loading}>
            {!loading ? "Entrar" :
              <Oval
                height="30"
                width="30"
                color="#FFFFFF"
                secondaryColor="#FFFFFF"
              />}
          </Button>
        </form>
        <Link to="/cadastro">
          <SignUpOption>Não tem uma conta? Cadastre-se!</SignUpOption>
        </Link>
      </ConteinerLogin>
    </>
  )
}

export const ConteinerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  width: 303px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #D4D4D4;
  margin-bottom: 6px;
  display: block;
  box-sizing: border-box;
  padding-left: 8px;
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 19.98px;
  color: #666666;
  &::placeholder {
    color: #DBDBDB;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 303px;
  height: 45px;
  border-radius: 5px;
  border: none;
  background-color: #52B6FF;
  color: white;
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 20.98px;
  line-height: 26.22px;
`

export const SignUpOption = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 13.98px;
  line-height: 17.47px;
  text-decoration: underline #52B6FF;
  color: #52B6FF;
  margin-top: 25px;
`