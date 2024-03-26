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
      ? theme.disabledBackground
      : $isSelected
      ? theme.primaryColor
      : $isDateMarked
      ? $markedColor
      : theme.backgroundColorDay};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ $isCurrentDate, theme }) =>
    $isCurrentDate ? `1px solid ${theme.primaryColor}` : ""};
  ${responsiveWidth}
  color: ${({ $isDisabled, theme }) =>
    $isDisabled ? theme.disabledColor : "initial"};
  cursor: ${({ $isDisabled }) => ($isDisabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s;
  position: relative;

  &:hover {
    background-color: ${({ $isSelected, theme }) =>
      $isSelected ? `${theme.secondaryColor}` : `${theme.divider}`};
  }
`;

const IconWrapper = styled.span`
  position: absolute;
  ${IconResponsiveWidth}
`;

export { DayWrapper, IconWrapper };
