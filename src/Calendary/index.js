import React, { useState, useMemo, useCallback } from "react";
import "./calendar.css";
import { CalendarHeader } from "./components/Header";
import { DayNames } from "./components/DayNames";
import { CalendarDay } from "./components/Day";

const Calendar = ({ onDateChange, markedDates = [] }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleDayClick = useCallback(
    (date, periodo) => {
      const dateString = `${date.toLocaleDateString("pt-BR")}${
        periodo ? ` - ${periodo}` : ""
      }`;
      onDateChange(dateString);
    },
    [onDateChange]
  );

  const daysArray = useMemo(() => {
    const today = new Date();
    const daysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();
    const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        i
      );
      const isToday = today.toDateString() === date.toDateString();
      const markedDate = markedDates.find(
        (d) => d.date.toDateString() === date.toDateString()
      );
      const isMarked = !!markedDate;
      const isDisabled = isMarked && markedDate.disabled;
      const dayType = isMarked ? markedDate.type : "";
      const periodos = isMarked ? markedDate.periodos || [] : [];

      days.push(
        <CalendarDay
          key={date.toISOString()}
          day={i}
          date={date}
          periodos={periodos}
          isToday={isToday}
          isMarked={isMarked}
          isDisabled={isDisabled}
          dayType={dayType}
          onClick={handleDayClick}
        />
      );
    }

    return days;
  }, [currentMonth, markedDates, handleDayClick]);

  return (
    <div className="calendar">
      <CalendarHeader
        currentMonth={currentMonth}
        onPreviousClick={() =>
          setCurrentMonth(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
          )
        }
        onNextClick={() =>
          setCurrentMonth(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
          )
        }
      />
      <DayNames />
      <div className="days">{daysArray}</div>
    </div>
  );
};

export default Calendar;
