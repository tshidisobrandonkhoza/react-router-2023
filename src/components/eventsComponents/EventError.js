import { Link, useRouteError } from "react-router-dom"


export default function EventError() {
    const eventError = useRouteError()
    return (
        <div className="event-error">
            <h2>Error</h2>
            <p>{eventError.message}</p>
            < Link to='/'>Let's Go Home</Link>
        </div>
    )
}

