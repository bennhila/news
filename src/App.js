import './App.css';
// import Content from './components/Content';
import Economie from './components/Economie';
// import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Sport from './components/Sport';
import WorldCrises from './components/WorldCrises';
import {BrowserRouter,Routes,Route,} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      


      {/* <Sport/>
      <WorldCrises/>
      <Economie/> */}
      <BrowserRouter>
      <Routes>
      <Route path="/" element={ <NavBar/>   }/>

      {/* <Route path="/" element={ <Content/>   }/>
      <Route path="/" element={ <Footer/>   }/> */}
      <Route path="/Sport" element={ <Sport/>   }/>
        <Route path="/WorldCrises" element={ <WorldCrises/>   }/>
        <Route path="/Economie" element={ <Economie/>    }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
