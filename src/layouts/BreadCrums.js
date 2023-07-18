import { Link } from "react-router-dom";
function BreadCrums(props) {
    let lPath = '';
    const local = props.localPathname.split('/')
        .filter(crum => crum !== '')
        .map(path => {
            lPath += `/${path}`;
            return (
                <li key={path}>
                    <Link to={lPath}>
                        {path}
                    </Link>
                </li>
            )
        });
    return (
        <>{local}</>
    )
}
export default BreadCrums
