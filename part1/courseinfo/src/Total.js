import React from "react";

const Total = (props1) =>
{
    let totalSk = 0;
    for (let i = 0; i < props1.parts.length; i++)
    {
        totalSk = totalSk + props1.parts[i].exercises;
    }
    
    let total = props1.parts.reduce((pre, cur, i) =>  pre + cur.exercises, 0);

    return (
        <div>
            <p>Total number {totalSk}</p>
            <p>Total number with reduce {total}</p>
        </div>
    )
}

export default Total;