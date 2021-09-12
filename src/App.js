import { Route } from 'react-router';
import {Header} from './components'
import {Home, Cart} from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Route exact path="/" component={Home}/>
          <Route exact path="/cart" component={Cart}/>
        </div>
      </div>
    </div>
  )
}

export default App;
