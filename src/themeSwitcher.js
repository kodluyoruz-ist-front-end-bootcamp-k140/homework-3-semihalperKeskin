import React from "react"
import {ThemeContext, useContext} from "./context"

function ThemeSwitcher() {

    const {themes, setThemes} = useContext(ThemeContext)

      const switchThemes = () => {
        setThemes(themes === 'light' ? 'dark':'light')
      }

      return(
        <>
        <span>Mevcut Tema : {themes}</span>
        <button clasName="changeColor" onClick={switchThemes}>tema Değiştir</button>
        </>
      )
}

export default ThemeSwitcher;