// import { format } from "date-fns";
import { utcToZonedTime, format } from "date-fns-tz";
import { ptBR } from "date-fns/locale";
import { Container } from "./styles";

interface dateProps {
  date: string;
  options?: string;
}

const DateIndicator = ({ date, options = "dd/LL/yyyy - HH:mm" }: dateProps) => {
  // const update = new Date(formatDate);
  // let newDate = new Date(date);
  // newDate = new Date(update.valueOf() + update.getTimezoneOffset() * 60 * 1000);

  const newDate = new Date(date);
  const timeZone = "America/Sao_Paulo";
  const zonedDate = utcToZonedTime(newDate, timeZone);

  return (
    <Container>
      {date
        ? format(zonedDate, options, {
            locale: ptBR,
            timeZone: "America/Sao_Paulo",
          })
        : ""}
    </Container>
  );
};

export const DateForInput = (date: any, options = "yyyy-MM-dd") => {
  if (!date) return "";
  const newDate = new Date(date);
  const timeZone = "America/Sao_Paulo";
  const zonedDate = utcToZonedTime(newDate, timeZone);

  if (zonedDate) {
    return format(zonedDate, options, {
      locale: ptBR,
      timeZone: "America/Sao_Paulo",
    });
  }

  return "" as any;
};

export default DateIndicator;
