import React from "react";
import "../calendar.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

export const CalendarDay = ({
  day,
  date,
  isToday,
  isSelected,
  isMarked,
  isDisabled,
  onClick,
  dayType,
  periodos = [],
}) => {
  const handleDayClick = () => {
    if (!isDisabled) onClick(date, "");
  };

  const handlePeriodChange = (periodo) => {
    onClick(date, periodo);
  };

  return (
    <div
      className={`day ${isSelected ? "selected" : ""} ${
        isToday ? "today" : ""
      } ${isMarked ? `marked ${dayType}` : ""}`}
      onClick={handleDayClick}
      style={{ pointerEvents: isDisabled ? "none" : "auto" }}
      data-tooltip-id={`day-tooltip-${date.toISOString()}`}
    >
      {day}
      {isMarked && periodos.length > 0 && (
        <ReactTooltip
          id={`day-tooltip-${date.toISOString()}`}
          effect="solid"
          place="bottom"
          clickable={!isDisabled}
        >
          {periodos.map((periodo, index) => (
            <div
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                handlePeriodChange(periodo);
              }}
            >
              <input
                type="radio"
                id={`periodo-${day}-${index}`}
                name={`periodo-group-${day}`}
                value={periodo}
              />
              <label htmlFor={`periodo-${day}-${index}`}>{periodo}</label>
            </div>
          ))}
        </ReactTooltip>
      )}
      {isMarked && periodos.length > 0 && (
        <div data-tip data-for={`day-tooltip-${date.toISOString()}`}>
          ...
        </div>
      )}
    </div>
  );
};
