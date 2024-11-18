import styled from "styled-components";
import BottomBarToday from "../components/BottomBarToday";
import SubtitleToday from "../components/SubtitleToday";
import TopBar from "../components/TopBar";
import { BodyHabits, ConteinerHabits, Disclaimer, NameHabit, LoadingOval } from "./HabitsPage";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TokenContext from "../contexts/TokenContext";
import { Oval } from "react-loader-spinner";

export default function TodayPage() {
  const navigate = useNavigate();
  const { token } = useContext(TokenContext);
  const [noHabits, setNoHabits] = useState(false);
  const [todayHabit, setTodayHabit] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [])

  function loadHabitsList() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
      .then(res => {
        if (res.data.length === 0) {
          setNoHabits(true)
        } else {
          setNoHabits(false)
        }
        setTodayHabit(res.data)
      })
      .catch(err => console.log(err.response.data))
  }

  useEffect(loadHabitsList, [])

  if (todayHabit === null) {
    return <LoadingOval><Oval
      height="100"
      width="100"
      color="#126BA5"
      secondaryColor="#52B6FF"
    /></LoadingOval>
  }

  function toggleHabit(habitID, habitDone) {
    const body = {}
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    if (habitDone) {
      axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitID}/uncheck`, body, config)
        .then(loadHabitsList)
        .catch(err => console.log(err.response.data))
    } else {
      axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitID}/check`, body, config)
        .then(loadHabitsList)
        .catch(err => console.log(err.response.data))
    }

  }

  return (
    <>
      <BodyHabits>
        <TopBar></TopBar>
        <ConteinerHabits>
          <SubtitleToday></SubtitleToday>
          {todayHabit.map((elemento) => {
            return (
              <TodayHabit key={elemento.id}>
                <TextConteiner>
                  <NameHabit>{elemento.name}</NameHabit>
                  <SubText>Sequência atual: {elemento.currentSequence}</SubText>
                  <SubText>Seu recorde: {elemento.highestSequence}</SubText>
                </TextConteiner>
                <Check $isChecked={elemento.done} onClick={() => toggleHabit(elemento.id, elemento.done)}>
                  <CheckRoundedIcon style={{ fontSize: '50px', color: 'white' }} />
                </Check>
              </TodayHabit>
            )
          })}
          {noHabits &&
            <Disclaimer>Você não tem nenhum hábito cadastrado hoje!</Disclaimer>
          }
        </ConteinerHabits>
        <BottomBarToday></BottomBarToday>
      </BodyHabits>
    </>
  )
}

const TodayHabit = styled.div`
  width: 100%;
  height: 94px;
  border-radius: 5px;
  padding: 13px;
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TextConteiner = styled.div`
  display: flex;
  flex-direction: column;
`

const SubText = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 12.98px;
  line-height: 16.22px;
  color: #666666;
`

const Check = styled.div`
  width: 69px;
  height: 69px;
  border-radius: 5px;
  background-color: ${(props) => props.$isChecked ? "#8FC549" : "#EBEBEB"};
  display: flex;
  align-items: center;
  justify-content: center; 
`