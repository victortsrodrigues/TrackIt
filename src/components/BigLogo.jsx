import styled from "styled-components"

export default function BigLogo() {
  return (
    <>
      <Logo src="src\assets\logo.png" alt="logo"/>
      <Title>Trackit</Title>
    </>
  )
}

const Logo = styled.img`
  width: 150px;
  margin-top: 70px;
`
const Title = styled.p`
  font-family: "Playball", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 68.98px;
  line-height: 86.23px;
  color: #126BA5;
  margin-bottom: 30px;
`