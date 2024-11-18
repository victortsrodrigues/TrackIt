import styled from "styled-components"

export default function SubtitleHabits({ setNewHabit }) {
  
  function AddHabit() {
    setNewHabit(true);
  }

  return (
    <>
      <ConteinerSubtitleHabits>Meus hábitos
        <Add onClick={AddHabit}>+</Add>
      </ConteinerSubtitleHabits>
    </>
  )
}

const ConteinerSubtitleHabits = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 22.98px;
  line-height: 28.72px;
  color: #126BA5;
  width: 100%;
  margin-bottom: 20px;
`

const Add = styled.div`
  width: 40px;
  height: 35px;
  border-radius: 4.64px;
  background-color: #52B6FF;
  color: white;
  font-size: 26.98px;
  text-align: center;
  `