export const apiCall = (url: string) =>
  fetch(url).then(response => response.json())