const isRgb = (color) => /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/i.test(color);

const getRgbString = (themeColor) => {
  if (isRgb(themeColor)) {
    return themeColor.match(/rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/i)[0];
  } else {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(themeColor);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : null;
  }
};

export { isRgb, getRgbString };
