import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TopHead from './Components/TopHead';
import TopImg from './Components/TopImg';
import Topcards from './Components/Topcards';
import MidImg from './Components/MidImg';
import Midcards from './Components/Midcards';
import BotImg from './Components/BotImg';
import Botcards from './Components/Botcards';
import LargeWithNewsletter from './Components/Footer';


function App() {
  return (
    <div className="App">
      <TopHead/>
       <Navbar/>
       <TopImg/>
       <Topcards/>
       <MidImg/>
       <Midcards/>
       <BotImg/>
      <Botcards/>
      <LargeWithNewsletter/>

    </div>
  );
}

export default App;
