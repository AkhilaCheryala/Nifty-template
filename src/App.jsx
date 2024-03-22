import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
function App() {
  

  return (
    <Router>
      <Routes>
        <Route exact path='/' element = {<Home/>}>
        </Route>
      </Routes>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet"/>
     </Router>
  )
}

export default App
