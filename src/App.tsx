import React from 'react';
import './App.css';
import Website from './components';
import AuthenticationRoutes from './components/authenticatedRoutes';
import { HashRouter } from 'react-router-dom';
function App() {
 
  return (
    <div className="App">
      <HashRouter>
          <AuthenticationRoutes />
        </HashRouter>
    </div>
  );
}

export default App;
