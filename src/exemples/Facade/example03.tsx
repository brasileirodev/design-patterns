type Listener = (theme: string) => void;

export const stateFacade = (() => {
  let theme = "light"; 
  const listeners: Listener[] = [];

  const setTheme = (newTheme: string) => {
    theme = newTheme;
    listeners.forEach((listener) => listener(theme));
  };

  const subscribe = (listener: Listener) => {
    listeners.push(listener);

    return () => {
      const index = listeners.indexOf(listener);
      if (index !== -1) listeners.splice(index, 1);
    };
  };

  return {
    getTheme: () => theme,
    setTheme,
    subscribe,
  };
})();
