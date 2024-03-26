import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  ChangeMonthButtonWrapper,
  HeaderWrapper,
  ListWrapper,
  MonthAndYearOptionsWrapper,
} from "./style";
import PropTypes from "prop-types";
import { months } from "../../core/constants";
import { ChangeDates } from "./components/ChangeDates";
import { useState } from "react";

const Header = ({ newDate, setNewDate }) => {
  const [openDialog, setOpenDialog] = useState({ year: false, month: false });
  const [month, year] = newDate
    .toLocaleDateString("pt-BR", {
      month: "long",
      year: "numeric",
    })
    .split(" de ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  const onPreviousClick = () => {
    setNewDate(new Date(newDate.getFullYear(), newDate.getMonth() - 1, 1));
  };
  const onNextClick = () => {
    setNewDate(new Date(newDate.getFullYear(), newDate.getMonth() + 1, 1));
  };

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    let years = [];

    for (let i = currentYear - 3; i <= currentYear + 5; i++) {
      years.push(i);
    }

    return years;
  };

  return (
    <HeaderWrapper>
      <ChangeMonthButtonWrapper
        onClick={onPreviousClick}
        title="Voltar para o mês anterior"
      >
        <ChevronLeft />
      </ChangeMonthButtonWrapper>
      <ChangeDates
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        monthTooltipContent={
          <ListWrapper
            onMouseLeave={() => setOpenDialog({ ...openDialog, month: false })}
          >
            {months.map((month, index) => {
              return (
                <MonthAndYearOptionsWrapper
                  key={month}
                  onClick={() => {
                    setNewDate(new Date(newDate.getFullYear(), index));
                    setOpenDialog({ ...openDialog, month: false });
                  }}
                >
                  <button>{month}</button>
                </MonthAndYearOptionsWrapper>
              );
            })}
          </ListWrapper>
        }
        yearTooltipContent={
          <ListWrapper
            onMouseLeave={() => setOpenDialog({ ...openDialog, year: false })}
          >
            {generateYears().map((item) => {
              return (
                <MonthAndYearOptionsWrapper
                  key={item}
                  onClick={() => {
                    setNewDate(new Date(item, newDate.getMonth()));
                    setOpenDialog({ ...openDialog, year: false });
                  }}
                >
                  <button>{item}</button>
                </MonthAndYearOptionsWrapper>
              );
            })}
          </ListWrapper>
        }
        monthSelected={month}
        yearSelected={year}
      />
      <ChangeMonthButtonWrapper
        onClick={onNextClick}
        title="Ir para o proximo mês"
      >
        <ChevronRight />
      </ChangeMonthButtonWrapper>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  newDate: PropTypes.instanceOf(Date).isRequired,
  setNewDate: PropTypes.func.isRequired,
};

export { Header };
