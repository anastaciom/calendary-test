import React, { useState } from "react";

import Calendar from "./Calendary";

const App = () => {
  const [selectedDateTime, setSelectedDateTime] = useState("");
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const handleDateChange = (dateTimeString) => {
    setSelectedDateTime(dateTimeString);
  };
  const markedDates = [
    {
      date: new Date("02-02-2024"),
      type: "event",
      disabled: false,
      periodos: ["20:00 até 10:00", "11:00 até 02:00"],
    },
    {
      date: new Date("02-23-2024"),
      type: "event",
      disabled: true,
      periodos: ["11:00 até 02:00"],
    },
    {
      date: new Date("02-25-2024"),
      type: "holiday",
      disabled: true,
    },
    {
      date: new Date("01-02-2024"),
      type: "event",
      disabled: false,
    },
  ];

  return (
    <>
      <input
        type="text"
        value={selectedDateTime}
        readOnly
        onClick={() => setIsCalendarVisible(!isCalendarVisible)}
      />
      <button onClick={() => setIsCalendarVisible(!isCalendarVisible)}>
        📅
      </button>
      {isCalendarVisible && (
        <Calendar onDateChange={handleDateChange} markedDates={markedDates} />
      )}
    </>
  );
};

export default App;
