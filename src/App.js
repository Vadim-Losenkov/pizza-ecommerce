import React from 'react';
import { Route } from 'react-router';
import {Header} from './components'
import {Home, Cart} from './pages';
import axios from 'axios'

function App() {
  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => setPizzas(data.pizzas))
    // fetch('http://localhost:3000/db.json')
    //     .then((resp) => resp.json())
    //     .then((json) => setPizzas(json.pizzas))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Route exact path="/" render={() => <Home items={pizzas} />}/>
          <Route exact path="/cart" component={Cart}/>
        </div>
      </div>
    </div>
  )
}

export default App;
