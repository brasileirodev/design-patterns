function Welcome({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>;
}
  
export function App() {
  return <Welcome name="Marcel" />;
}