import { useState } from 'react'
import servicesClient from './services/servicesClient';

const Client = function (props)
{
    //console.log(props);
    const showPersonNames = [];
    const regEx1 = new RegExp(props.newFilterValue, 'i');
    const regEx2 = new RegExp(props.newFilterValueNumber, 'i');

    for (let i = 0; i < props.persons.length; i++)
    {
        if (regEx1.test(props.persons[i].name) && (regEx2.test(props.persons[i].number)))  
        {
            showPersonNames.push(<p key={i}><strong>{props.persons[i].name}</strong>{props.persons[i].number}<button onClick={
                function ()
                {
                    const kaPaspaudem = window.confirm("Ar trinsite " + props.persons[i].name)
                    //alert(kaPaspaudem);
                    if (kaPaspaudem === true)
                    {
                        servicesClient.deletePost(props.persons[i].id)
                        props.fetchPersonFromDB()
                   }
                }
            }> Delete</button></p>);
        }
    }
    if (showPersonNames.length === 0)
    {
        showPersonNames.push(<p key={0}>Nieko nerasta </p>);
    }
    return (
        <div>
            {showPersonNames}
        </div>)
}

export default Client