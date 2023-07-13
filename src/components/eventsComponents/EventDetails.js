//import packages  

import { useLoaderData, useParams } from "react-router-dom";


//import components

// import assests

export default function EventDetails() {
    const { idxs } = useParams()
    const eventLog = useLoaderData()


    return (

        <div className="enCover">
            <h2>The Event Details</h2>
            <div className="events-title">

                <h5>{eventLog.title}</h5>
                <p>{eventLog.location} - {eventLog.date}</p>
            </div>
        </div>
    )
}

export const eventLoader = async ({ params }) => {
    const { idx } = params
    const response = await fetch('http://localhost:4000/events/' + idx)
        .catch(err => {
            // throw Error(err);
            throw Error('Couldnt connect to the Server')
        });

    if (!response.ok) {
        throw Error('Couldnt finish your request')
    }

    return response.json()
}