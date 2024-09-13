import { createContext, useMemo, useState } from "react";

export const initialState = {
  theme: "light",
  favorites: JSON.parse(localStorage.getItem("favDentists")) || [],
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.theme);
  const [favDentists, setFavDentists] = useState(initialState.favorites);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const saveLocalStorage = (list) => {
    localStorage.setItem("favDentists", JSON.stringify(list));
    setFavDentists(list);
  };

  const addNewFav = (dentist) => {
    const onStorage = JSON.parse(localStorage.getItem("favDentists")) || [];
    onStorage.push(dentist);
    saveLocalStorage(onStorage);
  };

  const removeFav = (dentist) => {
    const onStorage = JSON.parse(localStorage.getItem("favDentists")) || [];
    const updateFavDentists = onStorage.filter((favDentist) => favDentist.id !== dentist.id);
    saveLocalStorage(updateFavDentists);
  };

  const contextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
      favDentists,
      addNewFav,
      removeFav,
    };
  }, [theme, favDentists]);

  return (
    <ContextGlobal.Provider value={{ contextValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};
