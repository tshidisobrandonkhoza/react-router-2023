//import packages
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
//import components
import Home from './components/Home';
import About from './components/About';
import MainRoot from './layouts/MainRoot'

import Help from './layouts/Help';
import Faq from './components/Faq';
import Contact from './components/Contact';
//import assests

const router = createBrowserRouter([{
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "help",
        element: <Help />,
        children:[
          {
            path:"faq",
            element:<Faq />
          },
          {
            path:"contact",
            element:<Contact />
          }
        ]
      }]
  }]);

     // Optional for not found path
      // {
      //   path: "*",
      //   element: <NotFound />
      // }
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
