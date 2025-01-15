import { useFetch } from "./example03";

export function App() {
    const { data, loading, error } = useFetch("https://api.example.com/data");
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return <div>{JSON.stringify(data)}</div>;
  }
  