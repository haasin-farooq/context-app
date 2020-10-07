import React from 'react';

import NavBar from './components/nav-bar.component';
import BookList from './components/book-list.component';
import ThemeToggle from './components/theme-toggle.component';

import ThemeContextProvider from './contexts/theme.context';
import AuthContextProvider from './contexts/auth.context';
import BookContextProvider from './contexts/book.context';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;