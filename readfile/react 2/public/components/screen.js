class Screen extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { pixels: [] };

        setTimeout(this.update, 1000);
    }

    update = () =>
    {
        const request1 = new XMLHttpRequest();
        request1.open("GET", "/api_v1/", false);
        request1.send();

        const result1 = JSON.parse(request1.responseText);

        this.setState({ pixels: result1 });

        setTimeout(this.update, 10);
    }

    render = function ()
    {
        const arr = [];

        for (let i = 0; i < 900; i++)
        {
            let result1;

            if (this.state.pixels[i] === "off")
            {
                result1 = React.createElement("div", { key: i, className: this.state.pixels[i] }, null);
            }
            else
            {
                //        <div key={i}>{this.state.pixels[i]}</div>
                result1 = React.createElement("div", { key: i }, this.state.pixels[i]);
            }
            arr.push(result1);
        }

        return React.createElement(React.Fragment, null, arr);
    }
}