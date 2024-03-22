import './Timebtn.css';
import logo from '../assets/logo.svg';
 const Timebtn =()=>{
    return(
<div className='header'>
    <div className='min-bar'>
        <p>5 min</p>
        <p>10 min</p>
        <p>15 min</p>
        <p>30 min</p>
        <p>hour</p>
        <p>1 week</p>
    </div>
<div className='logo-container'>
    <span className='bi bi-chevron-left'></span>
    <img src={logo} alt=''className='logo'/>
    <span>NIFTY 500</span>
    <p> 17568.40
   <span className='bi bi-arrow-up-short'>(+0.49)</span> </p>
</div>
</div>
    );
 }
 export default Timebtn;