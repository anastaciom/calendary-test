import styled, { css } from "styled-components";

const responsive = css`
  max-width: 350px;
  width: 350px;

  @media only screen and (max-width: 600px) {
    max-width: 300px;
    width: 300px;
  }

  @media only screen and (max-width: 400px) {
    max-width: 100%;
    width: 100%;
  }
`;

const openSubtitlesResponsive = css`
  padding: 8px;

  @media only screen and (max-width: 600px) {
    padding: 4px;
  }
`;

const CalendarWrapper = styled.div`
  font-family: Roboto, Helvetica, Arial, sans-serif;
  color: "#EEEEEE";
  border-radius: 10px;
  overflow: hidden;
  user-select: none;
  font-size: 18px;
  position: absolute;
  right: 0px;
  top: 70px;
  ${responsive}

  > div:first-of-type {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 4px;
    justify-items: center;
    background-color: ${(props) => props.theme.backgroundColorCalendar};
    padding: 8px;
  }
`;

const OpenSubtitlesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${(props) => props.theme.divider};
  background-color: ${(props) => props.theme.backgroundColorCalendar};
  cursor: pointer;
  ${openSubtitlesResponsive}
`;

export { CalendarWrapper, OpenSubtitlesWrapper };
