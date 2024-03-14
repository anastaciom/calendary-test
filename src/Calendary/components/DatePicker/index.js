import { CalendarDays, XIcon } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Calendar } from "../Calendar";
import {
  InputWrapper,
  DatePickerWrapper,
  InputContentWrapper,
  InputIconWrapper,
} from "./style";
import { ThemeProvider } from "styled-components";

function XbrainDatePicker({
  markedDates,
  label,
  clearable,
  name,
  defaultValue,
  primaryColor,
  secondaryColor,
}) {
  const [selectedDateTime, setSelectedDateTime] = useState(defaultValue ?? "");
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsCalendarVisible(false);
    }
  };

  const onDateChange = (value) => {
    setSelectedDateTime(value);
    setIsCalendarVisible(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <ThemeProvider
      theme={{
        primaryColor,
        secondaryColor,
        divider: "#dadada",
        backgroundColorCalendar: "#f0f0f0",
      }}
    >
      <InputWrapper ref={wrapperRef}>
        <label htmlFor="xbrain-datePicker">{label}</label>
        <InputContentWrapper
          onClick={() => setIsCalendarVisible(!isCalendarVisible)}
        >
          <DatePickerWrapper
            id="xbrain-datePicker"
            type="text"
            name={name}
            value={selectedDateTime}
            readOnly
            placeholder={`dd/mm/aaaa ${
              markedDates ? "- períodos (opcional)" : ""
            }`}
          />
          <InputIconWrapper>
            {clearable && !!selectedDateTime ? (
              <XIcon onClick={() => setSelectedDateTime("")} />
            ) : (
              <CalendarDays strokeWidth={1} color={"#626262"} />
            )}
          </InputIconWrapper>
        </InputContentWrapper>
        {isCalendarVisible && (
          <Calendar
            onDateChange={onDateChange}
            markedDates={markedDates}
            selectedDateTime={selectedDateTime}
          />
        )}
      </InputWrapper>
    </ThemeProvider>
  );
}

XbrainDatePicker.defaultProps = {
  markedDates: [],
  label: "Data",
  clearable: false,
  defaultValue: "",
};

XbrainDatePicker.propTypes = {
  markedDates: PropTypes.array,
  label: PropTypes.string,
  clearable: PropTypes.bool,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
};

export default XbrainDatePicker;
