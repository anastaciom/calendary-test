import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DayWrapper, IconWrapper } from "./style";
import { Clock } from "lucide-react";
import { PeriodOptionsTooltip } from "../PeriodOptionsTooltip";

const CalendarDay = ({
  selectedDay,
  selectedDate,
  isCurrentDate,
  currentInputValue,
  isDateMarked,
  isDisabled,
  onClick,
  markedColor,
  isSelected,
  periods,
}) => {
  const tooltipRef = `day-tooltip-${selectedDate.toISOString()}`;
  const [iconWidth, setIconWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIconWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDayClick = () => {
    if (!isDisabled) onClick(selectedDate, "");
  };

  return (
    <>
      <DayWrapper
        $isSelected={isSelected}
        $isCurrentDate={isCurrentDate}
        $isDateMarked={isDateMarked}
        $isDisabled={isDisabled}
        $markedColor={markedColor}
        onClick={
          !((isDateMarked && !!periods.length) || isDisabled)
            ? handleDayClick
            : undefined
        }
        data-tooltip-id={!isDisabled && tooltipRef}
      >
        {selectedDay}
        {isDateMarked && !!periods.length && (
          <IconWrapper>
            <Clock size={iconWidth > 600 ? 10 : 8} color="#000" />
          </IconWrapper>
        )}
      </DayWrapper>

      {isDateMarked && !!periods.length && (
        <PeriodOptionsTooltip
          currentInputValue={currentInputValue}
          handlePeriodChange={onClick}
          isDisabled={isDisabled}
          isSelected={isSelected}
          parentElementReference={tooltipRef}
          periods={periods}
          selectedDate={selectedDate}
        />
      )}
    </>
  );
};

CalendarDay.defaultProps = {
  periods: [],
};

CalendarDay.propTypes = {
  selectedDay: PropTypes.number.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  isCurrentDate: PropTypes.bool.isRequired,
  currentInputValue: PropTypes.shape({
    period: PropTypes.string,
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
      .isRequired,
  }).isRequired,
  isDateMarked: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  markedColor: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  periods: PropTypes.array,
};

export { CalendarDay };
