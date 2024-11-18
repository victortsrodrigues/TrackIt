import { useContext } from "react"
import styled from "styled-components"
import UserContext from "../contexts/UserContext"

export default function TopBar() {
  const [user] = useContext(UserContext)
  
  return (
    <>
      <Header>TrackIt
        <img src={user} />
      </Header>
    </>
  )
}

const Header = styled.div`
  width: 100%;
  height: 70px;
  background-color: #126BA5;
  box-shadow: 0px 4px 4px 0px #00000026;
  position: fixed;
  top: 0px;
  left: 0px;
  font-family: "Playball", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 38.98px;
  line-height: 48.73px;
  color: white;
  box-sizing: border-box;
  padding-left: 18px;
  padding-right: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`