import { DayNamesWrapper } from "./style";

const DayNames = () => {
  const dayNames = ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sáb."];

  return (
    <DayNamesWrapper>
      {dayNames.map((dayName) => (
        <div key={dayName}>{dayName}</div>
      ))}
    </DayNamesWrapper>
  );
};

export { DayNames };
