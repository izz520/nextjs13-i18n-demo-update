export function getPath(url:string) {
  const languagePattern = /\/(en|zh-CN)(\/.*)?/;
  const match = url.match(languagePattern);

  if (match) {
    return match[2] || "";
  } else {
    return url;
  }
}