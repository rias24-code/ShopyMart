import {createContext, useState } from 'react'

export const ThemeContext = createContext();
const ThemeProvider = ({children}) => {
    const [mode, setMode] = useState('light');
    const toggleTheme = () => {
        setMode(prev => (prev === "light" ? "dark" : "light"));
    }
    
  return (
    <ThemeContext.Provider value={{mode, toggleTheme}} >
        <div className={mode}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;