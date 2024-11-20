import { Link, useNavigate } from "react-router-dom";
import BigLogo from "../components/BigLogo";
import { ConteinerLogin } from "./LoginPage";
import { Input } from "./LoginPage";
import { Button } from "./LoginPage";
import { SignUpOption } from "./LoginPage";
import { useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function createAccount(event) {
    setLoading(true)
    event.preventDefault()
    const body = {
      email: email,
      name: name,
      image: image,
      password: password
    }
    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
      .then(() => {
        setLoading(false)
        navigate("/")
      })
      .catch(err => {
        alert(err.response.data.message)
        setLoading(false)
      })
  }

  return (
    <>
      <ConteinerLogin>
        <BigLogo></BigLogo>
        <form onSubmit={createAccount}>
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
          <Input
            type="text"
            placeholder="nome"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            disabled={loading}
          />
          <Input
            type="url"
            placeholder="foto"
            required
            value={image}
            onChange={e => setImage(e.target.value)}
            disabled={loading}
          />
          <Button type="submit" disabled={loading}>
            {!loading ? "Cadastrar" :
              <Oval
                height="30"
                width="30"
                color="#FFFFFF"
                secondaryColor="#FFFFFF"
              />}
          </Button>
        </form>
        <Link to="/">
          <SignUpOption>Já tem uma conta? Faça login!</SignUpOption>
        </Link>
      </ConteinerLogin>
    </>
  )
}