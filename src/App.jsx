import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Timebtn from './components/Timebtn';
import Random from './components/Random';
import Values from './components/Values';
import Parent from './components/Parent';
import Nav from './components/Nav';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='./Components/Timebtn'element={<Timebtn/>}/>
        <Route exact path ='./Components/Random' element={<Random/>}/>
         <Route exact path='./Components/Values' element ={<Values/>}/>
         <Route exact path='./Component/Parent' element ={<Parent/>}/>
         <Route exact path='./Component/Nav' element ={<Nav/>}/>
      </Routes>
     
     {/* Bootstrap Icons */}
     <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet" />
     
     {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
     
     {/* Popper.js */}
     <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
     
     {/* Bootstrap JS */}
     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-KyZXEAg3QhqLMpG8r+Knujsl5+gbg2Jj13KBOePhv7ta9tk+1O6wlsVdeux0lf1r" crossOrigin="anonymous"></script>

     </Router>
  );
}
export default App;
