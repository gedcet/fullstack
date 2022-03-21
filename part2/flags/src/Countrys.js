import React from "react";

const Countrys = (props) =>
{
    const showCountrys = [];
    const regEx = new RegExp(props.filterValue, 'i');

    for (let i = 0; i < props.countrys.length; i++)
    {
        if (regEx.test(props.countrys[i].name.common))  
        {
            showCountrys.push(props.countrys[i]);
        }
    }

    if (showCountrys.length > 10)
    {
        return <p>Per mazai raidziu filtre</p>
        //showCountrys.push(<p key={0}>Per mazai parametru </p>);
    }

    if (showCountrys.length === 1)//atvaizduojam viena sali su visais atributais
    {
        const OneCountryLangugeValue = Object.values(showCountrys[0].languages)
        //console.log(OneCountryLangugeValue);
        return (
            <div>
                <h2>{showCountrys[0].name.common}</h2>
                <h6>Capital: {showCountrys[0].capital}</h6>
                <p>{showCountrys[0].flag}</p>
                <h6>Area: {showCountrys[0].area} m2</h6>
                <h5>Languages: </h5>
                {OneCountryLangugeValue.map(function (ele, i)
                {
                    return (
                        <ul>
                            <h6><li keys={i}>{ele}</li></h6>
                        </ul>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            {showCountrys.map(function (ele, i)
            {
                return <p key={i}>{ele.name.common} <button onClick={() => {props.setfilterValue(ele.name.common)}}>Select</button></p>
            })}
        </div>)
}

export default Countrys