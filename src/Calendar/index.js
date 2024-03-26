import React, { useState, useMemo, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { DayNames } from "./components/DayNames";
import { CalendarDay } from "./components/Day";
import { Header } from "./components/Header";
import { CalendarWrapper, OpenSubtitlesWrapper } from "./style";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Subtitles } from "./components/Subtitles";
import { generateDaysOfTheMonth } from "./core/utils/generateDaysInMonth";
import { today } from "./core/constants";
import { getFirstDayOfTheMonth } from "./core/utils/getFirstDayOfTheMonth";
import { useTheme } from "styled-components";

const Calendar = ({ onDateChange, markedDates = [], selectedDateTime }) => {
  const theme = useTheme();
  const [showSubtitles, setShowSubtitles] = useState(false);
  const [currentInputValue, setCurrentInputValue] = useState({
    date: "",
    period: "",
  });
  const [newDate, setNewDate] = useState(
    selectedDateTime
      ? new Date(
          selectedDateTime.split(" - ")[0].split("/").reverse().join("-")
        )
      : new Date()
  );

  useEffect(() => {
    if (selectedDateTime) {
      const [dateString, period] = selectedDateTime.split(" - ");
      const [day, month, year] = dateString.split("/").map(Number);

      setCurrentInputValue({
        date: new Date(year, month - 1, day),
        period: period ?? "",
      });
      setNewDate(new Date(year, month - 1, day));
    }
  }, [selectedDateTime]);

  const handleDayClick = useCallback(
    (date, period) => {
      const formattedValue = `${date.toLocaleDateString("pt-BR")}${
        period ? ` - ${period}` : ""
      }`;

      setCurrentInputValue({ date, period });
      onDateChange(formattedValue);
    },
    [onDateChange]
  );

  const getSubtitles = useMemo(() => {
    return markedDates
      .filter((item) => item.label)
      .map((item) => ({
        label: item.label,
        color: item.color ?? "",
      }));
  }, [markedDates]);

  const processedMarkedDates = useMemo(
    () =>
      markedDates.flatMap((item) =>
        item.days.map((day) => ({
          ...day,
          color: item.color,
        }))
      ),
    [markedDates]
  );

  const days = useMemo(() => {
    const days = [];
    const daysInMonth = generateDaysOfTheMonth(newDate);
    const firstDayOfMonth = getFirstDayOfTheMonth(newDate);

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`}></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(newDate.getFullYear(), newDate.getMonth(), day);
      const isCurrentDate = today.toDateString() === date.toDateString();
      const markedDate = processedMarkedDates.find(
        (item) => item.date.toDateString() === date.toDateString()
      );
      const isDateMarked = !!markedDate;
      const isDisabled = isDateMarked && markedDate.disabled;
      const markedColor =
        isDateMarked && markedDate.color ? markedDate.color : "white";
      const periods = isDateMarked ? markedDate.periods || [] : [];
      const isSelected = Boolean(
        currentInputValue.date &&
          new Date(currentInputValue.date).toLocaleDateString("pt-BR") ===
            date.toLocaleDateString("pt-BR")
      );

      days.push(
        <CalendarDay
          key={date.toISOString()}
          selectedDay={day}
          isSelected={isSelected}
          selectedDate={date}
          periods={periods}
          isCurrentDate={isCurrentDate}
          isDateMarked={isDateMarked}
          isDisabled={isDisabled}
          currentInputValue={currentInputValue}
          markedColor={markedColor}
          onClick={handleDayClick}
        />
      );
    }

    return days;
  }, [newDate, processedMarkedDates, currentInputValue, handleDayClick]);

  return (
    <CalendarWrapper>
      <Header newDate={newDate} setNewDate={setNewDate} />
      <DayNames />
      <div>{days}</div>
      <OpenSubtitlesWrapper
        onClick={() => setShowSubtitles(!showSubtitles)}
        title={showSubtitles ? "Fechar as legendas" : "Abrir as legendas"}
      >
        {showSubtitles ? (
          <ArrowUp size={14} color={theme.primaryColor} />
        ) : (
          <ArrowDown size={14} color={theme.primaryColor} />
        )}
      </OpenSubtitlesWrapper>
      {showSubtitles && <Subtitles subtitles={getSubtitles} />}
    </CalendarWrapper>
  );
};

Calendar.defaultProps = {
  markedDates: [],
  selectedDateTime: "",
};

Calendar.propTypes = {
  onDateChange: PropTypes.func.isRequired,
  markedDates: PropTypes.array,
  selectedDateTime: PropTypes.string,
};

export { Calendar };
