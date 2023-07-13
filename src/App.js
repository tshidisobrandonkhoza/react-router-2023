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

import EventList, { eventsLoader } from './components/eventsComponents/EventList';
import EventDetails, { eventLoader } from './components/eventsComponents/EventDetails';
import EventError from './components/eventsComponents/EventError';
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
      children: [
        {
          path: "faq",
          element: <Faq />
        },
        {
          path: "contact",
          element: <Contact />
        }
      ]
    }, {
      path: "events",
      element: <Events />,
      errorElement: <EventError />,
      children: [
        {
          path: "",
          element: <EventList />,
          loader: eventsLoader,
        },
        {
          path: ":idx",
          element: <EventDetails />,
          loader: eventLoader
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
