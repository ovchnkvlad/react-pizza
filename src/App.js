import React from 'react'

import {Header} from './componets'
import {Home, Cart} from './pages'
import axios from 'axios';
import { Route } from 'react-router-dom';

function App() {

  const [pizzas, setPizzas] = React.useState([])

 React.useEffect(() => { 
  axios.get('http://localhost:3000/db.json').then(({data}) => {
    setPizzas(data.pizzas)
  });
 }, [])


  return (
    <div className="wrapper">
      <Header />
    <div className="content">
      <Home items = {pizzas}/>
    </div>
  </div>
  );
}

export default App;
