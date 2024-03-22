import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Timebtn from './components/Timebtn';
function App() {
  

  return (
    <Router>
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='./'element={<Timebtn/>}/>
      </Routes>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet"/>
     </Router>
  )
}

export default App
