import React from "react";
import PropTypes from "prop-types";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { DateSelectedWrapper, MonthAndYearSelectedWrapper } from "./style";

const tooltipStyle = {
  zIndex: 100,
  background: "#575757",
  borderRadius: 8,
  height: "220px",
  overflowY: "scroll",
  overflowX: "hidden",
  boxShadow: "0px 4px 15px 0px #292929DE",
  padding: "8px",
  WebkitOverflowScrolling: "touch",
  scrollbarWidth: "thin",
  scrollbarColor: "#888 transparent",
};

const ChangeDates = ({
  monthSelected,
  yearSelected,
  yearTooltipContent,
  monthTooltipContent,
}) => {
  const yearTooltipRef = "change-year-tooltip";
  const monthTooltipRef = "change-month-tooltip";

  return (
    <>
      <DateSelectedWrapper>
        <MonthAndYearSelectedWrapper
          data-tooltip-id={monthTooltipRef}
          title="Alterar o mês"
        >
          {monthSelected}
        </MonthAndYearSelectedWrapper>
        de
        <MonthAndYearSelectedWrapper
          data-tooltip-id={yearTooltipRef}
          title="Alterar o ano"
        >
          {yearSelected}
        </MonthAndYearSelectedWrapper>
      </DateSelectedWrapper>
      <ReactTooltip
        id={monthTooltipRef}
        effect="solid"
        place="bottom"
        clickable
        style={tooltipStyle}
        content={monthTooltipContent}
      />
      <ReactTooltip
        id={yearTooltipRef}
        effect="solid"
        place="bottom"
        clickable
        style={tooltipStyle}
        content={yearTooltipContent}
      />
    </>
  );
};

ChangeDates.defaultProps = {
  monthSelected: "",
  yearSelected: "",
};

ChangeDates.propTypes = {
  monthSelected: PropTypes.string,
  yearSelected: PropTypes.string,
  yearTooltipContent: PropTypes.node.isRequired,
  monthTooltipContent: PropTypes.node.isRequired,
};

export { ChangeDates };
