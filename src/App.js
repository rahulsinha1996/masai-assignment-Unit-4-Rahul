
import List from './Day1/List';
import JoinUs from './Day1/JoinUs';
import Settings from './Day1/Settings';
import Login from './Day1/Login';
import Search from './Day1/Search';
import Home from './Day1/Home';
import ContactUs from './Day1/ContactUs';
import Help from './Day1/Help';
import Download from './Day1/Download';
import Button from './Day1/Button';
import './App.css';

function App() {
  return (
    <>
    <div>
      <List heading="Mobile Operating System" li1="Android" li2="Blackberry" li3="iphone" li4="Windows Phone"/>
      <List heading="Mobile Manufacturers" li1="Samsung" li2="HTC" li3="Micromax" li4="Apple"/>
     </div>
     <div className='main'>
      <div className='right'>
        <JoinUs/>
        <Login/>
        <Search/>
        <Home/>
      </div>
      <div className='left'>
        <Settings/>
        <ContactUs/>
        <Help/>
        <Download/>
      </div>
     </div>
     <div className='main'>
      <div className='right'>
        <Button name="Join Us"/>
        <Button name="Login"/>
        <Button name="Search"/>
        <Button name="Home"/>
      </div>
      <div className='left'>
      <Button name="Settings"/>
      <Button name="Contact Us"/>
      <Button name="Help"/>
      <Button name="Download"/>
      </div>
     </div>
    
    </>
    
  
  );
}

export default App;
