import { createContext, useState, useContext, ReactNode } from 'react';

interface ThemeContextProps {
    isLightTheme: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLightTheme, setIsLightTheme] = useState(false);

    const toggleTheme = () => {
        setIsLightTheme((prevTheme) => !prevTheme);
    };

    return (
        <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
