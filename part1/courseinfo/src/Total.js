import React from "react";

const Total = (props1) =>
{
    return (
        <div>
            <p>Total number {props1.parts[0].exercises + props1.parts[1].exercises + props1.parts[2].exercises}</p>
        </div>
    )
}

export default Total;