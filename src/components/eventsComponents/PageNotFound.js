import { Link, useRouteError } from "react-router-dom"


export default function PageNotFound() {
    const eventError = useRouteError()
    return (
        <div className="pagenotfound-error">
            <h2>Error</h2>
            <p>{eventError.message}</p>
            < Link to='/'>Let's Go Home</Link>
        </div>
    )
}

