import Home from './components/Home'
import NotFound from './components/NotFound'
import {Switch, Route} from 'react-router-dom'
import './App.css'

//This is the list (static data) used in the application. You can move it to any component if needed.

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" > <Home catList={categoriesList} /></Route>
    <Route > <NotFound /> </Route>
  </Switch>
)

export default App
