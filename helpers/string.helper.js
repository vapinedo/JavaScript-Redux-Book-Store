export const getXCharFromText = (text, countChar) => {
  const blackList = [null, undefined, ""];
  if (blackList.includes(text) || Number.isNaN(text)) {
    return "";
  }
  const extract = text.substring(0, countChar);
  return extract;
};
