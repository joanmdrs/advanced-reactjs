import { createContext, useContext } from 'react'

export const themes = {
    primary: {
        background: "#000",
        color: "#fefefe"
    },
    secondary: {
        background: '#fefefe',
        color: '#000'
    }
}

export const ThemeContext = createContext(themes.secondary)