import styled from "styled-components"
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from "react-router-dom";

export default function BottomBarToday() {
  return (
    <>
      <Footer>
        <FooterHabits to={"/habitos"}>
          <CalendarMonthIcon />
          Hábitos
        </FooterHabits>
        <FooterToday>
          <EventAvailableOutlinedIcon />
          Hoje
        </FooterToday>
      </Footer>
    </>
  )
}

const Footer = styled.div`
  width: 100%;
  height: 65px;
  position: fixed;
  bottom: 0;
  display: flex;
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 17.98px;
  line-height: 22.47px;
`

const FooterHabits = styled(Link)`
  width: 50%;
  height: 100%;
  background-color: #FFFFFF;
  color: #D4D4D4;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FooterToday = styled.div`
  width: 50%;
  height: 100%;
  background-color: #52B6FF;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
`