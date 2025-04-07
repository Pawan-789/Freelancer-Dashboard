import { useState } from "react";

const STORAGE_VERSION = "1.0";
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      const version = window.localStorage.getItem(`${key}_version`);
      
      if (version !== STORAGE_VERSION) {
        window.localStorage.removeItem(key);
        return initialValue;
      }
      
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.localStorage.setItem(`${key}_version`, STORAGE_VERSION);
    setStoredValue(value);
  };

  return [storedValue, setValue];
}