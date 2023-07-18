//import packages 
import { Outlet, useLocation } from "react-router-dom";
//import components
import BreadCrums from "./BreadCrums";
//import assests
import '../assets/css/Events.css'


export default function Events() {
    //get some data that has been loaded (',')
    const localUrl = useLocation();
    const localPath = localUrl.pathname;


    return (<>
      <div className="enCover">
            <ul className="breadcrums">
                {/* {local} */}
                <BreadCrums localPathname={localPath} />
            </ul>

        <Outlet />
        </div>
    </>
    )
}

