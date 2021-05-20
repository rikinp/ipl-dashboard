import { Link } from "react-router-dom"

import "./TeamTile.scss" 


export const TeamTile = ({teamName}) => {

    const someVariable = teamName ;

    return(
        <div className="TeamTile">
            <div>
                <Link to={`teams/${teamName}`}>
                    <img src={`../images/${someVariable}.svg`} alt="Logo" width="240" height="145"/>
                </Link>
            </div>
            <div>
            <h1>
                <Link to={`teams/${teamName}`}>
                    {teamName}
                </Link>
            </h1>
            </div>
        </div>
    )

}