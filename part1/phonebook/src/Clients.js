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
                async function ()
                {
                    const kaPaspaudem = window.confirm("Ar trinsite " + props.persons[i].name)
                    //alert(kaPaspaudem);
                    if (kaPaspaudem === true)
                    {
                        
                        await servicesClient.deletePost(props.persons[i].id)
                        props.fetchPersonFromDB()
                        props.setnotificationMessage(props.persons[i].name + " su numeriu " + props.persons[i].number + " istrintas")
                        setTimeout(() =>
                        {
                            props.setnotificationMessage(null)
                        }, 5000);

                    }
                }
            }> Delete</button></p>);
        }
    }
    if (showPersonNames.length === 0)
    {
        showPersonNames.push(<p key={0}>Nieko nera telefonu knygoje </p>);
    }
    return (
        <div>
            {showPersonNames}
        </div>)
}

export default Client