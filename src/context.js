import { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

export {
    ThemeContext,
    useContext
}