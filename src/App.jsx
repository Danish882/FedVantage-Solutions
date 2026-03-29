import React from 'react';

import Router from './routes/Router.jsx'; // UPDATED PATH


const App = () => {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans selection:bg-cyan-200 selection:text-slate-900">
      
        <Router />
      
    </div>
  );
};

export default App;