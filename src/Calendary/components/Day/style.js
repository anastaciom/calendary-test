import styled, { css } from "styled-components";

const responsiveWidth = css`
  height: 30px;
  padding: 4px;
  width: 70%;
  border-radius: 8px;

  @media only screen and (max-width: 600px) {
    height: 32px;
    padding: 0px;
    width: 90%;
    border-radius: 6px;
    font-size: 14px;
  }
`;

const IconResponsiveWidth = css`
  top: -4px;
  right: 3px;

  @media only screen and (max-width: 600px) {
    top: -3px;
  }
`;

const DayWrapper = styled.div`
  background-color: ${({
    $isDisabled,
    $isSelected,
    $isDateMarked,
    $markedColor,
    theme,
  }) =>
    $isDisabled
      ? "#e0e0e0"
      : $isSelected
      ? "#3d8bfd"
      : $isDateMarked
      ? $markedColor
      : "white"};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ $isCurrentDate }) =>
    $isCurrentDate ? "1px solid #007bff" : ""};
  ${responsiveWidth}
  color: ${({ $isDisabled }) => ($isDisabled ? "#a0a0a0" : "initial")};
  cursor: ${({ $isDisabled }) => ($isDisabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s;
  position: relative;

  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected ? "#5599FF" : "#d9d9d9"};
  }
`;

const IconWrapper = styled.span`
  position: absolute;
  ${IconResponsiveWidth}
`;

export { DayWrapper, IconWrapper };
