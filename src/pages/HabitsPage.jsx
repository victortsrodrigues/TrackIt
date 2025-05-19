import styled from "styled-components";
import TopBar from "../components/TopBar";
import SubtitleHabits from "../components/SubtitleHabits";
import BottomBarHabit from "../components/BottomBarHabit";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TokenContext from "../contexts/TokenContext";
import { Oval } from "react-loader-spinner";

export default function HabitsPage() {
  const [newHabit, setNewHabit] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [nameNewHabit, setNameNewHabit] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useContext(TokenContext);
  const [createdHabit, setCreatedHabit] = useState(null);
  const [noHabits, setNoHabits] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  function loadHabitsList() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        config
      )
      .then((res) => {
        if (res.data.length === 0) {
          setNoHabits(true);
        } else {
          setNoHabits(false);
        }
        setCreatedHabit(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }

  useEffect(loadHabitsList, []);

  if (createdHabit === null) {
    return (
      <LoadingOval>
        <Oval
          height="100"
          width="100"
          color="#126BA5"
          secondaryColor="#52B6FF"
        />
      </LoadingOval>
    );
  }

  function chooseDay(index) {
    setSelectedDays((prevSelectedDays) =>
      prevSelectedDays.includes(index)
        ? prevSelectedDays.filter((element) => element !== index)
        : [...prevSelectedDays, index]
    );
  }

  function cancelNewHabit() {
    setNewHabit(false);
  }

  function sendNewHabit(event) {
    setLoading(true);
    event.preventDefault();
    const body = {
      name: nameNewHabit,
      days: selectedDays,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        body,
        config
      )
      .then((res) => {
        setLoading(false);
        setNameNewHabit("");
        setSelectedDays([]);
        setNewHabit(false);
        loadHabitsList();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response.data);
      });
  }

  const isFormValid = nameNewHabit.trim() !== "" && selectedDays.length > 0;

  const days = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <BodyHabits>
      <TopBar></TopBar>
      <ConteinerHabits>
        <SubtitleHabits setNewHabit={setNewHabit}></SubtitleHabits>
        {newHabit && (
          <NewHabit>
            <InputHabit
              placeholder="nome do hábito"
              value={nameNewHabit}
              onChange={(e) => setNameNewHabit(e.target.value)}
              disabled={loading}
            />
            <Days>
              {days.map((elemento, index) => {
                return (
                  <DayOption
                    key={index}
                    $isSelected={selectedDays.includes(index)}
                    onClick={() => chooseDay(index)}
                    disabled={loading}
                  >
                    {elemento}
                  </DayOption>
                );
              })}
            </Days>
            <Buttons>
              <CancelButton onClick={cancelNewHabit} disabled={loading}>
                Cancelar
              </CancelButton>
              <SaveButton
                onClick={sendNewHabit}
                disabled={loading || !isFormValid}
                $isDisabled={!isFormValid}
              >
                Salvar
              </SaveButton>
            </Buttons>
          </NewHabit>
        )}
        {createdHabit.map((elemento) => {
          return (
            <CreatedHabit key={elemento.id}>
              <NameHabit>{elemento.name}</NameHabit>
              <Days>
                {days.map((elementoDay, indexDay) => {
                  return (
                    <DayOption
                      key={indexDay}
                      $isSelected={elemento.days.includes(indexDay)}
                    >
                      {elementoDay}
                    </DayOption>
                  );
                })}
              </Days>
            </CreatedHabit>
          );
        })}
        {noHabits && (
          <Disclaimer>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </Disclaimer>
        )}
      </ConteinerHabits>
      <BottomBarHabit></BottomBarHabit>
    </BodyHabits>
  );
}

export const BodyHabits = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #f2f2f2;
`;

export const ConteinerHabits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 91px;
  padding-bottom: 75px;
  box-sizing: border-box;
  padding-left: 17px;
  padding-right: 17px;
`;

export const Disclaimer = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 17.98px;
  line-height: 22.47px;
  color: #666666;
`;

const NewHabit = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 5px;
  padding: 18px;
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 20px;
`;

const InputHabit = styled.input`
  width: 100%;
  height: 45px;
  margin-bottom: 8px;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  padding: 9px;
  color: #666666;
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 19.98px;
  line-height: 24.97px;
  &::placeholder {
    font-family: "Lexend Deca", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 19.98px;
    line-height: 24.97px;
    color: #dbdbdb;
  }
`;

const Days = styled.div`
  display: flex;
`;

const DayOption = styled.button`
  background-color: ${(props) => (props.$isSelected ? "#CFCFCF" : "#FFFFFF")};
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 19.98px;
  line-height: 24.97px;
  color: ${(props) => (props.$isSelected ? "#FFFFFF" : "#DBDBDB")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 25px;
`;

const CancelButton = styled.button`
  border: none;
  background-color: white;
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 15.98px;
  line-height: 19.97px;
  color: #52b6ff;
  margin-right: 15px;
`;

const SaveButton = styled.button`
  border: none;
  width: 84px;
  height: 35px;
  border-radius: 4.64px;
  background-color: ${(props) => (props.$isDisabled ? "#CFCFCF" : "#52B6FF")};
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 15.98px;
  line-height: 19.97px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$isDisabled ? "0.7" : "1")};
  cursor: ${(props) => (props.$isDisabled ? "not-allowed" : "pointer")};
`;

const CreatedHabit = styled.div`
  width: 100%;
  height: 91px;
  border-radius: 5px;
  padding: 18px;
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 12px;
`;

export const NameHabit = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 19.98px;
  line-height: 24.97px;
  color: #666666;
  margin-bottom: 8px;
`;

export const LoadingOval = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;
