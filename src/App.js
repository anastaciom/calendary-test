import React from "react";
import { XbrainDatePicker } from "./Calendar/components/DatePicker";

const App = () => {
  const markedDates = [
    {
      label: "Dia Disponível (com agenda)",
      days: [
        {
          date: new Date("03-03-2024"),
          periods: ["20:00 até 10:00", "11:00 até 02:00"],
          disabled: false,
        },
        {
          date: new Date("03-04-2024"),
          periods: ["20:00 até 10:00", "11:00 até 02:00"],
          disabled: false,
        },
      ],
      color: "#35A4FF",
    },
    {
      // label: "STRING" //TODO: NÃO É OBRIGATÓRIO,
      days: [
        {
          date: new Date("03-01-2024"),
          periods: ["20:00 até 10:00", "11:00 até 02:00"],
          disabled: false,
        },
      ],
      color: "#35FFC6",
    },

    {
      label: "Dia disponível (Sem Agenda)",
      days: [
        {
          date: new Date("03-06-2024"),
          // periods: ["20:00 até 10:00", "11:00 até 02:00"], //TODO: NÃO É OBRIGATÓRIO,
          disabled: false,
        },
        {
          date: new Date("03-07-2024"),
          // periods: ["20:00 até 10:00", "11:00 até 02:00"], //TODO: NÃO É OBRIGATÓRIO,
          disabled: true,
        },
      ],
      color: "#FF7C35",
    },
  ];

  return (
    <XbrainDatePicker
      defaultValue={"13/03/2024 - 11:30 até 14:30"}
      markedDates={markedDates}
      primaryColor="#4CAF50"
      secondaryColor="#AB47BC"
      label={"Data / Período"}
      name="DatePickerXbrain"
      isRequired
      clearable
      // disableSaturdays={true}
      // disableSundays={true}
      // disableAllDays={true}
      // errorMessage={"Mensagem de erro teste."}
    />
  );
};

export default App;
