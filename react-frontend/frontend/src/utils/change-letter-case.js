export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function removeDashAndCapitalize(string) {
  var noDashes = string.replace(/-/g, " ");
  return noDashes.replace(/(^\w{1})|(\s+\w{1})/g, noDashes => noDashes.toUpperCase());
}