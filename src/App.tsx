import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Header = () => {
  return (
    <header>
      <img src={reactLogo} className="react-logo" alt="react logo" />
      <img src={viteLogo} className="vite-logo" alt="vite logo" />
      <h1>Hello Vite + React!</h1>
    </header>
  )
}

const MainSection = () => {
  const [count, setCount] = useState(0)

  return (
    <main>
      <button onClick={() => setCount((count) => count + 1)}>count is: {count}</button>
      <p>Edit <code>App.tsx</code> and save to test HMR updates.</p>
      <p>Learn <a href="https://reactjs.org">React</a> and <a href="https://vitejs.dev">Vite</a>.</p>
    </main>
  )
}

const Footer = () => {
  return (
    <footer>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {' | '}
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>
    </footer>
  )
}

function App() {
  return (
    <div>
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App
