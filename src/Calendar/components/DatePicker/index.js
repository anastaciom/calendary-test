import { CalendarDays, XIcon } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Calendar } from "../..";
import {
  InputWrapper,
  DatePickerWrapper,
  InputContentWrapper,
  InputIconWrapper,
} from "./style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../core/theme";
import { ErrorMessage } from "./components/ErrorMessage";

const XbrainDatePicker = ({
  markedDates,
  label,
  clearable,
  name,
  defaultValue,
  primaryColor,
  secondaryColor,
  disableSundays,
  disableSaturdays,
  isRequired,
  errorMessage,
  disableAllDays,
}) => {
  const [selectedDateTime, setSelectedDateTime] = useState(defaultValue ?? "");
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [touched, setTouched] = useState(false);
  const wrapperRef = useRef(null);
  const onDateChange = (value) => {
    setSelectedDateTime(value);
    setIsCalendarVisible(false);
    setTouched(false);
  };
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsCalendarVisible(false);
    }
  };
  const handleFocus = () => {
    setTouched(true);
  };

  const handleBlur = () => {
    if (!selectedDateTime) {
      setTouched(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <ThemeProvider theme={theme({ primaryColor, secondaryColor })}>
      <InputWrapper ref={wrapperRef}>
        <label htmlFor="xbrain-datePicker">
          {isRequired ? `${label}*` : label}
        </label>
        <InputContentWrapper
          $errorMode={
            (touched && !selectedDateTime && isRequired) ||
            (selectedDateTime && errorMessage)
          }
          onClick={() => setIsCalendarVisible(!isCalendarVisible)}
        >
          <DatePickerWrapper
            id="xbrain-datePicker"
            type="text"
            name={name}
            value={selectedDateTime}
            readOnly
            onFocus={handleFocus}
            onBlur={handleBlur}
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
        <ErrorMessage
          isRequired={isRequired}
          selectedDateTime={!!selectedDateTime}
          touched={touched}
          errorMessage={errorMessage}
        />
        {isCalendarVisible && (
          <Calendar
            onDateChange={onDateChange}
            markedDates={markedDates}
            disableAllDays={disableAllDays}
            selectedDateTime={selectedDateTime}
            disableSundays={disableSundays}
            disableSaturdays={disableSaturdays}
          />
        )}
      </InputWrapper>
    </ThemeProvider>
  );
};

XbrainDatePicker.defaultProps = {
  markedDates: [],
  label: "Data",
  clearable: false,
  defaultValue: "",
  disableSundays: false,
  disableSaturdays: false,
  isRequired: false,
  errorMessage: "",
  disableAllDays: false,
};

XbrainDatePicker.propTypes = {
  markedDates: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      days: PropTypes.arrayOf(
        PropTypes.shape({
          date: PropTypes.instanceOf(Date).isRequired,
          periods: PropTypes.arrayOf(PropTypes.string),
          disabled: PropTypes.bool.isRequired,
        })
      ).isRequired,
      color: PropTypes.string,
    })
  ),
  label: PropTypes.string,
  clearable: PropTypes.bool,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  disableSundays: PropTypes.bool,
  disableSaturdays: PropTypes.bool,
  isRequired: PropTypes.bool,
  errorMessage: PropTypes.string,
  disableAllDays: PropTypes.bool,
};

export { XbrainDatePicker };
