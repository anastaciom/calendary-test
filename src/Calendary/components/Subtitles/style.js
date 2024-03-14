import styled from "styled-components";

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
  scrollbarcolor: #888 transparent;
  height: 100%;
`;

const SubtitleItem = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 16px;
  width: 100%;
`;

const SubtitleColor = styled.span`
  width: 5%;
  height: 42%;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.$borderColor};
`;

const SubtitleLabel = styled.label`
  font-size: 13px;
  width: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { SubtitlesWrapper, SubtitleItem, SubtitleColor, SubtitleLabel };
