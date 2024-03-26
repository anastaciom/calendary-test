import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "styled-components";
import {
  SubtitleColor,
  SubtitleItem,
  SubtitleLabel,
  SubtitlesWrapper,
} from "./style";

const Subtitles = ({ subtitles }) => {
  const theme = useTheme();
  const subtitlesListDefault = [
    { label: "Hoje", color: theme.primaryColor },
    { label: "Dia selecionado", color: theme.primaryColor },
  ];

  return (
    <SubtitlesWrapper>
      {[...subtitlesListDefault, ...subtitles].map((item, index) => (
        <SubtitleItem key={`${item.label}-option${index}`} title={item.label}>
          <SubtitleColor
            color={
              item.label === "Hoje" ? theme.backgroundColorDay : item.color
            }
            $borderColor={item.color}
          />
          <SubtitleLabel>{item.label}</SubtitleLabel>
        </SubtitleItem>
      ))}
    </SubtitlesWrapper>
  );
};

Subtitles.defaultProps = {
  subtitles: [],
};

Subtitles.prototypes = {
  subtitles: PropTypes.array,
};

export { Subtitles };
