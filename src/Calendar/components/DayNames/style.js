import styled, { css } from "styled-components";

const responsiveWidth = css`
  padding: 8px 8px;
  background-color: ${(props) => props.theme.primaryColor};
  border-top: 1px solid ${(props) => props.theme.divider};
  font-weight: 500;
  color: white;

  @media only screen and (max-width: 600px) {
    padding: 6px 6px;
    font-size: 13px;
  }
`;

const DayNamesWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  ${responsiveWidth}
`;

export { DayNamesWrapper };
