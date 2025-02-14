export const loadFromStorage = (key, defaultValue) => {
  const storedData = sessionStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : defaultValue;
};

export const saveToStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};
