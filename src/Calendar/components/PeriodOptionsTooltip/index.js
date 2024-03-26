import React from "react";
import PropTypes from "prop-types";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Content } from "./component/Content";

const tooltipStyle = {
  zIndex: 100,
  background: "#575757",
  borderRadius: 8,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  boxShadow: "0px 4px 15px 0px #292929DE",
  padding: "6px 0px",
};

const PeriodOptionsTooltip = ({
  parentElementReference,
  isDisabled,
  periods,
  selectedDate,
  handlePeriodChange,
  currentInputValue,
  isSelected,
}) => {
  return (
    <ReactTooltip
      id={parentElementReference}
      effect="solid"
      place="bottom-end"
      clickable={!isDisabled}
      style={tooltipStyle}
      content={periods.map((period, index) => (
        <Content
          key={`key-${selectedDate.toISOString()}${index}`}
          handlePeriodSelection={(e) => {
            e.stopPropagation();
            handlePeriodChange(selectedDate, e.target.value);
          }}
          inputName={`option-${selectedDate.toISOString()}-${index}`}
          id={`${index}-${selectedDate.toISOString()}`}
          value={period}
          isChecked={
            currentInputValue.period && isSelected
              ? currentInputValue.period === period
              : false
          }
        />
      ))}
    />
  );
};

PeriodOptionsTooltip.defaultProps = {
  periods: [],
};

PeriodOptionsTooltip.propTypes = {
  parentElementReference: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  periods: PropTypes.arrayOf(PropTypes.string),
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  handlePeriodChange: PropTypes.func.isRequired,
  currentInputValue: PropTypes.shape({
    period: PropTypes.string,
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
      .isRequired,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export { PeriodOptionsTooltip };
