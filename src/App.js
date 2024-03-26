import React from "react";
import XbrainDatePicker from "./Calendar/components/DatePicker";

const App = () => {
  const markedDates = [
    {
      label: "Mais um dia test", //TODO: NAO É OBRIGATORIO ENVIAR
      days: [
        {
          date: new Date("03-20-2024"),
          periods: ["11:30 até 14:30", "11:00 até 02:00"],
          disabled: false,
        },
        {
          date: new Date("03-21-2024"),
          periods: ["11:30 até 14:30", "11:00 até 02:00"],
          disabled: false,
        },
        {
          date: new Date("03-22-2024"),
          periods: ["11:30 até 14:30", "11:00 até 02:00"],
          disabled: false,
        },
      ],
      color: "brown", //TODO: NAO É OBRIGATORIO ENVIAR
    },
    {
      label: "Dia indisponivel", //TODO: NAO É OBRIGATORIO ENVIAR
      days: [
        {
          date: new Date("03-10-2024"),
          periods: ["11:30 até 14:30", "11:00 até 02:00"],
          disabled: false,
        },
        {
          date: new Date("03-11-2024"),
          periods: ["11:30 até 14:30", "11:00 até 02:00"],
          disabled: false,
        },
        {
          date: new Date("03-12-2024"),
          periods: ["11:30 até 14:30", "11:00 até 02:00"],
          disabled: false,
        },
      ],
      color: "purple", //TODO: NAO É OBRIGATORIO ENVIAR
    },
    {
      label: "Dia sem agenda disponível", //TODO: NAO É OBRIGATORIO ENVIAR
      days: [
        {
          date: new Date("03-13-2024"),
          periods: ["11:30 até 14:30", "11:00 até 02:00"],
          disabled: false,
        },
        {
          date: new Date("03-14-2024"),
          periods: ["11:30 até 14:30", "11:00 até 02:00"],
          disabled: false,
        },
        {
          date: new Date("03-15-2024"),
          disabled: false,
        },
      ],
      color: "green", //TODO: NAO É OBRIGATORIO ENVIAR
    },
    {
      label: "Dia Test",
      days: [
        {
          date: new Date("03-03-2024"),
          periods: ["20:00 até 10:00", "11:00 até 02:00"],
          disabled: true,
        },
        {
          date: new Date("03-04-2024"),
          periods: ["20:00 até 10:00", "11:00 até 02:00"],
          disabled: false,
        },
      ],
      color: "orange",
    },
  ];

  return (
    <XbrainDatePicker
      markedDates={markedDates}
      label={"Data / Período"}
      clearable
      defaultValue={"13/03/2024 - 11:30 até 14:30"}
      name="DatePickerXbrain"
      primaryColor="green"
      secondaryColor="yellow"
      disableSaturdays={true}
    />
  );
};

export default App;
