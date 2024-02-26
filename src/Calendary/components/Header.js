import { ChevronLeft, ChevronRight } from "lucide-react";
import "../calendar.css";

export const CalendarHeader = ({
  currentMonth,
  onPreviousClick,
  onNextClick,
}) => (
  <div className="calendar-header">
    <button onClick={onPreviousClick}>
      <ChevronLeft />
    </button>
    <p>
      {currentMonth.toLocaleDateString("pt-BR", {
        month: "long",
        year: "numeric",
      })}
    </p>
    <button onClick={onNextClick}>
      <ChevronRight />
    </button>
  </div>
);
