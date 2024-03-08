
import './App.css';
import { Banner } from './Component/Banner';
import { NavBar } from './Component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './Component/Skill';
import { Projects } from './Component/Project';
import { Contact } from './Component/Contact';
import { Footer } from './Component/Footer';
import Co from './Component/Contacts/Co';

function App() {
  return (
    <div >
       <NavBar/>
       <Banner/>
       <Skills/>
       <Projects/>
       <Co/>
       <Footer/>
    </div>
  );
}

export default App;
