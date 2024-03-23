import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Timebtn from './components/Timebtn';
import Random from './components/Random';
import Values from './components/Values';
import Parent from './components/Parent';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='./Components/Timebtn'element={<Timebtn/>}/>
        <Route exact path ='./Components/Random' element={<Random/>}/>
         <Route exact path='./Components/Values' element ={<Values/>}/>
         <Route exact path='./Component/Parent' element ={<Parent/>}/>
      </Routes>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet"/>
     </Router>
  );
}
export default App;
