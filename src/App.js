import React from 'react'

import {Header} from './componets'
import {Home} from './pages'

function App() {
  return (
    <div className="wrapper">
      <Header/>
    <div className="content">
      <Home/>
    </div>
  </div>
  );
}

export default App;
