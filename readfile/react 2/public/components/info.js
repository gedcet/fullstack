class Info extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { player_name: "vardenis", score: "100" };

        setTimeout(this.update, 1000);
    }

    update = () =>
    {
        const request1 = new XMLHttpRequest();
        request1.open("GET", "/api_v1/info", false);
        request1.send();

        const result1 = JSON.parse(request1.responseText);

        this.setState({ player_name: result1.player_name, score: result1.score });

        setTimeout(this.update, 1000);
    }

    render = function ()
    {
        const arr = [];

        const ele1 = React.createElement("div", { key: "info_1" }, this.state.player_name);
        const ele2 = React.createElement("div", { key: "info_2" }, this.state.score);

        arr.push(ele1);
        arr.push(ele2);

        return React.createElement(React.Fragment, null, arr);
    }
}