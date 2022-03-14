import { render } from "react-dom";

const Statistics = (props) =>
{
    return (
        <div>
            <h1>statistics</h1>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>All {props.good + props.neutral + props.bad}</p>
            <p>average {(props.good - props.bad) / (props.good + props.neutral + props.bad)}</p>
            <p> positive {props.good / (props.good + props.neutral + props.bad) * 100} %</p>
        </div>
    )

}

export default Statistics;