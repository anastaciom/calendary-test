import styled from "styled-components";

const DateSelectedWrapper = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  height: 100%;
`;

const MonthAndYearSelectedWrapper = styled.span`
  height: 50%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0000004c;
  }
`;

export { MonthAndYearSelectedWrapper, DateSelectedWrapper };
