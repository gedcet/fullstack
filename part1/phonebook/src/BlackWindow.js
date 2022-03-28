import React from "react"
import './index.css'

const BlackWindow = (props) =>
{
    if (props.BlackWin !== "show")
        return null

    return (
        <div className='dark'>
            <span> 'Nieko nedarykite as kraunuosi :))' </span>
        </div>
    )
}

export default BlackWindow