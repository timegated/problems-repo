const logger = (wantToLog, fontStyle, fontColor) => {
  return console.log(`%c ${fontStyle}: ${size};${fontColor}: ${color}`, wantToLog);
};

export {
  logger
};
