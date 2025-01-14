import React from "react";

const ThemeContext = React.createContext("light");

const Header = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <header style={{ background: value === "dark" ? "black" : "white", color: value === "dark" ? "white" : "black" }}>
          Header
        </header>
      )}
    </ThemeContext.Consumer>
  );
};

const Footer = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <footer style={{ background: value === "dark" ? "black" : "white", color: value === "dark" ? "white" : "black" }}>
          Footer
        </footer>
      )}
    </ThemeContext.Consumer>
  );
};

export function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
      <Footer />
    </ThemeContext.Provider>
  );
}
