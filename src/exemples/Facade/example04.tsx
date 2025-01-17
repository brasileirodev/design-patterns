// App.tsx
import { useEffect, useState } from "react";
import { stateFacade } from "./example03";

function App() {
  const [theme, setTheme] = useState(stateFacade.getTheme());

  useEffect(() => {
    const unsubscribe = stateFacade.subscribe(setTheme);
    return () => unsubscribe();
  }, []);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p>Current Theme: {theme}</p>
      <button onClick={() => stateFacade.setTheme("dark")}>Dark</button>
      <button onClick={() => stateFacade.setTheme("light")}>Light</button>
    </div>
  );
}

export default App;
