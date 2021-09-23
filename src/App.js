import React from 'react';
import { Route } from 'react-router';
import { useDispatch } from 'react-redux'
import { Header } from './components'
import { Home, Cart } from './pages';
import axios from 'axios'

import { setPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data))
    })
  }, [dispatch])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     items: state.pizzas.items
//   }
// }

// const mapDispatchToProps =  {
//   setPizzas
//   // return {
//   //   setPizzas: (items) => dispatch(setPizzasAction(items))
//   // }
// }


export default App
