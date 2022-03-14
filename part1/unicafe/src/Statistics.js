import { render } from "react-dom";
import StatisticLine from "./StatisticLine";

const Statistics = (props) =>
{
    if (props.good === 0 && props.neutral === 0 && props.bad === 0)
    {
        return (
            <div>
                <h1>statistics</h1>
                <h1>No feedback given</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>statistics</h1>
            <table>
                <StatisticLine text={"good"} value={props.good} />
                <StatisticLine text={"neutral"} value={props.neutral} />
                <StatisticLine text={"bad"} value={props.bad} />
                <StatisticLine text={"All"} value={props.good + props.neutral + props.bad} />
                <StatisticLine text={"average"} value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
                <StatisticLine text={"positive"} value={props.good / (props.good + props.neutral + props.bad) * 100} text4={" %"} />
            </table>
        </div>
    )
}

export default Statistics;