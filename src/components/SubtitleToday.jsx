import styled from "styled-components"
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/pt-br"; // Importa o idioma português

export default function SubtitleToday() {
  dayjs.extend(localizedFormat);
  dayjs.locale("pt-br");
  // Obtém o nome do dia, remove "-feira" e ajusta a primeira letra para maiúscula
  const dayOfWeek = dayjs().format("dddd").replace("-feira", "");
  const formattedDayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
  // Formata a data no formato desejado
  const formattedDate = `${formattedDayOfWeek}, ${dayjs().format("DD/MM")}`;
  
  return (
    <>
      <ConteinerSubtitleToday>{formattedDate}</ConteinerSubtitleToday>
    </>
  )
}

const ConteinerSubtitleToday = styled.div`
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