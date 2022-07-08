import { ThemeContext } from './context';
import { useEffect, useState } from 'react';
import './App.css';
import BodyTable from './components/body-table/bodyTable';
import ThemeSwitcher from './themeSwitcher';


function App() {

  // Tema useState
  const [themes, setThemes] = useState('Light')

  useEffect(() => {
    document.body.className = themes
  }, [themes])

  const data = {
    themes,
    setThemes
  }


  return (
    <ThemeContext.Provider value={data}>
      <nav className="navbar">
        Bootcamp Homework 3
      </nav>
      <div className="container">
        <ThemeSwitcher />
        <div className="App">
          <BodyTable />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;