import React from "react";
import PropTypes from "prop-types";
import {
  SubtitleColor,
  SubtitleItem,
  SubtitleLabel,
  SubtitlesWrapper,
} from "./style";

const Subtitles = ({ subtitles }) => {
  const subtitlesListDefault = [
    { label: "Hoje", color: "#3d8bfd" },
    { label: "Dia selecionado", color: "#3d8bfd" },
  ];

  return (
    <SubtitlesWrapper>
      {[...subtitlesListDefault, ...subtitles].map((item, index) => (
        <SubtitleItem key={`${item.label}-option${index}`} title={item.label}>
          <SubtitleColor
            color={item.label === "Hoje" ? "white" : item.color}
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
