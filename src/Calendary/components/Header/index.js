import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  ChangeMonthButtonWrapper,
  HeaderWrapper,
  ListWrapper,
  MonthAndYearOptionsWrapper,
} from "./style";
import PropTypes from "prop-types";
import { months } from "../../../utils/constants";
import { ChangeDates } from "./components/ChangeDates";

const Header = ({ newDate, setNewDate }) => {
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
        monthTooltipContent={
          <ListWrapper>
            {months.map((month, index) => {
              return (
                <MonthAndYearOptionsWrapper
                  key={month}
                  onClick={() =>
                    setNewDate(new Date(newDate.getFullYear(), index))
                  }
                >
                  <button>{month}</button>
                </MonthAndYearOptionsWrapper>
              );
            })}
          </ListWrapper>
        }
        yearTooltipContent={
          <ListWrapper>
            {generateYears().map((item) => {
              return (
                <MonthAndYearOptionsWrapper
                  key={item}
                  onClick={() => setNewDate(new Date(item, newDate.getMonth()))}
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
