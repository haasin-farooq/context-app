import React, { Component, useContext } from 'react';

import { ThemeContext } from '../contexts/theme.context';

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext); 
    return (
        <button onClick={toggleTheme}>Toggle Theme</button>
    )
}

export default ThemeToggle;