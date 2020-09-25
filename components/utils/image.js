const urlExtractRegex = /^(?:https?|localhost):(?:\d+)?\/\/.+(http(?:s)?:(\d+)?\/\/.+)$/;
export const getCannonicalURI = (source) => {
  const match = urlExtractRegex.exec(source);
  if (match) {
    // return the source URI which follows the CDN transform URI
    return match[1];
  }
  // we assume the URI references the image directly
  return source;
};
