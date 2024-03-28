import styled, { css } from "styled-components";

const responsiveWidth = css`
  font-size: 14px;
  width: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const SubtitlesWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColorCalendar};
  padding: 8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
  grid-column-gap: 20px;
  justify-items: center;
  max-height: 60px;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbarcolor: ${(props) => props.theme.scrollbarColor} transparent;
  height: 100%;
`;

const SubtitleItem = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 14px;
  width: 100%;
`;

const SubtitleColor = styled.span`
  width: 4%;
  height: 40%;
  border-radius: 100%;
  margin-right: 10px;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.$borderColor};
`;

const SubtitleLabel = styled.label`
  ${responsiveWidth}
`;

export { SubtitlesWrapper, SubtitleItem, SubtitleColor, SubtitleLabel };
