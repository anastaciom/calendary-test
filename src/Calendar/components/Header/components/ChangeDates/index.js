import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { DateSelectedWrapper, MonthAndYearSelectedWrapper } from "./style";
import { useTheme } from "styled-components";

const ChangeDates = ({
  monthSelected,
  yearSelected,
  yearTooltipContent,
  monthTooltipContent,
  openDialog,
  setOpenDialog,
}) => {
  const [activeBackground, setActiveBackground] = useState({
    year: false,
    month: false,
  });

  const yearTooltipRef = "change-year-tooltip";
  const monthTooltipRef = "change-month-tooltip";

  const theme = useTheme();
  const tooltipStyle = {
    zIndex: 100,
    borderRadius: 8,
    height: "220px",
    overflowY: "scroll",
    overflowX: "hidden",
    boxShadow: "0px 26px 73px -29px rgba(0,0,0,1)",
    padding: "8px",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "thin",
    scrollbarColor: `${theme.scrollbarColor} transparent`,
    backgroundColor: theme.primaryColor,
  };

  return (
    <>
      <DateSelectedWrapper>
        <MonthAndYearSelectedWrapper
          data-tooltip-id={monthTooltipRef}
          title="Alterar o mês"
          onMouseEnter={() =>
            setOpenDialog({
              month: true,
              year: openDialog.year ? false : openDialog.year,
            })
          }
          onClick={() =>
            setOpenDialog({
              month: !openDialog.month,
              year: openDialog.year ? false : openDialog.year,
            })
          }
          style={{
            backgroundColor: activeBackground.month
              ? theme.backgroundColorArrowChangeMonthAndYear
              : "inherit",
          }}
        >
          {monthSelected}
        </MonthAndYearSelectedWrapper>
        de
        <MonthAndYearSelectedWrapper
          data-tooltip-id={yearTooltipRef}
          onMouseEnter={() =>
            setOpenDialog({
              year: true,
              month: openDialog.month ? false : openDialog.month,
            })
          }
          onClick={() =>
            setOpenDialog({
              year: !openDialog.year,
              month: openDialog.month ? false : openDialog.month,
            })
          }
          title="Alterar o ano"
          style={{
            backgroundColor: activeBackground.year
              ? theme.backgroundColorArrowChangeMonthAndYear
              : "inherit",
          }}
        >
          {yearSelected}
        </MonthAndYearSelectedWrapper>
      </DateSelectedWrapper>
      <ReactTooltip
        id={monthTooltipRef}
        effect="solid"
        place="bottom"
        isOpen={openDialog.month}
        clickable
        opacity={100}
        afterShow={() => setActiveBackground({ ...openDialog, month: true })}
        afterHide={() => setActiveBackground({ ...openDialog, month: false })}
        style={tooltipStyle}
        content={monthTooltipContent}
      />
      <ReactTooltip
        id={yearTooltipRef}
        isOpen={openDialog.year}
        effect="solid"
        place="bottom"
        clickable
        opacity={100}
        style={tooltipStyle}
        afterShow={() => setActiveBackground({ ...openDialog, year: true })}
        afterHide={() => setActiveBackground({ ...openDialog, year: false })}
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
  openDialog: PropTypes.shape({
    month: PropTypes.bool.isRequired,
    year: PropTypes.bool.isRequired,
  }).isRequired,
  setOpenDialog: PropTypes.func.isRequired,
};

export { ChangeDates };
