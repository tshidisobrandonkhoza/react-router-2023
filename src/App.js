//import packages
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';


//import assests


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header></Header>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="About" element={<About />}></Route>
        </Routes>


      </BrowserRouter>
    </div>

  );
}

export default App;
