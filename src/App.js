//import packages
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import components
import Home from './components/Home';
import About from './components/About';
import MainRoot from './layouts/MainRoot'

import Help from './layouts/Help';
import Faq from './components/helpComponents/Faq';
import Contact from './components/helpComponents/Contact';
import Events from './layouts/Events';
import EventsList from './components/eventsComponents/EventsList';
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
      },{
        path:"events",
        element: <Events />,
        children: [{
          path: "eventslist",
          element: <EventsList />
        }]
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
