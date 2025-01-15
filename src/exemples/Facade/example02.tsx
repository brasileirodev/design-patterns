import { useEffect } from "react";
import { apiFacade } from "./example01";

export function App() {
  useEffect(() => {
    apiFacade.fetchUser('1').then(console.log).catch(console.error);
  }, []);

  return <div>Check the console for user data!</div>;
}
