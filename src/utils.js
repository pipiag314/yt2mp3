export const parseIdFromLink = (url) => {
  if(!url) return undefined;
  const splittedUrl = url.split("=")[1];
  const id = splittedUrl.slice(0, 11);
  return id;
};