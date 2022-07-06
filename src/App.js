import { ThemeContext } from './context';
import { useEffect, useState } from 'react';
import './App.css';
import BodyTable from './components/body-table/bodyTable';
import ThemeSwitcher from './themeSwitcher';


function App() {

  // Tema useState
  const [themes, setThemes] = useState('light')
  
  useEffect(()=>{
    document.body.className= themes
  },[themes])

  const data = {
    themes,
    setThemes
  }


  return (
    <ThemeContext.Provider value={data}>
      <ThemeSwitcher/>
    <div className="App ">
      <BodyTable/>
      
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
