import React from "react";
import Part from "./Part";

const Content = (props) =>
{
    const array = [];
    for (let i = 0; i < props.parts.length; i++)
    {
        array.push(<Part key={i} name={props.parts[i].name} exercises={props.parts[i].exercises} />);
    }
    return (
        <div>
            {array}
        </div>
    )
}

export default Content;