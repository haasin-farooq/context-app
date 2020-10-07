import React, { Component, useContext } from 'react';

import { ThemeContext } from '../contexts/theme.context';
import { AuthContext } from '../contexts/auth.context';

// const NavBar = () => {
//     return (
//         <AuthContext.Consumer>
//             {
//                 (authContext) => (
//                     <ThemeContext.Consumer>
//                         {
//                             (themeContext) => {
//                                 const { isAuthenticated, toggleAuth } = authContext;
//                                 const { isLightTheme, light, dark } = themeContext;
//                                 const theme = isLightTheme ? light : dark; 
//                                 return (
//                                     <nav style={{ background: theme.ui, color: theme.syntax }}>
//                                         <h1>Context App</h1>
//                                         <div onClick={toggleAuth}>
//                                             {
//                                                 isAuthenticated ? 'Logged In' : 'Logged Out'
//                                             }
//                                         </div>
//                                         <ul>
//                                             <li>Home</li>
//                                             <li>About</li>
//                                             <li>Contact</li>
//                                         </ul>
//                                     </nav>
//                                 )
//                             }
//                         }
//                     </ThemeContext.Consumer>
//                 )
//             }
//         </AuthContext.Consumer>
//     );
// }

const NavBar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                {
                    isAuthenticated ? 'Logged In' : 'Logged Out'
                }
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default NavBar;