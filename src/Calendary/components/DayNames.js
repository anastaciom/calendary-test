import "../calendar.css";

export const DayNames = () => {
  const dayNames = ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sáb."];
  return (
    <div className="day-names">
      {dayNames.map((dayName) => (
        <div key={dayName} className="day-name">
          {dayName}
        </div>
      ))}
    </div>
  );
};
