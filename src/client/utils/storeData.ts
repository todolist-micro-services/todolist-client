function storeData(key: string, data: string) {
  localStorage.setItem(key, data);
}

function retrieveData(key: string) {
  return localStorage.getItem(key);
}

export { storeData, retrieveData };
