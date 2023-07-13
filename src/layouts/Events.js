//import packages 
import { Link, Outlet, useLoaderData } from "react-router-dom";
//import components

//import assests
 import '../assets/css/Events.css'


export default function Events() {
    //get some data that has been loaded (',')
    const events = useLoaderData();
    const eventsList = events.map(event => {
        return (
            <li>
                <Link to='/'>
                    {event.title}
                </Link>
            </li>
        )
    });
    return (
        <div className="enCover">
            <h2>Events</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <ul className="events-title">
                {eventsList}
            </ul>

            <Outlet />

        </div>)
}


//data loader to be exported for Events Layout loader Hook
//create a async fuction to fetch data
export const eventsLoader = async () => {
    const response = await fetch('http://localhost:4000/events')
    return response.json()
}

