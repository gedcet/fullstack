import { useState } from 'react'

const App = () =>
{
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const handleClick = (event) =>
  {
    event.preventDefault();//neperkrauna puslapio
    //console.log(event.target)
    const arrayCopy = [...persons];

    const dubl = 0;
    for (let i = 0; i < persons.length; i++)
    {
      if (newName === persons[i].name)
      {
        alert("tokia reiksme yra ")
        return
      }
    }
    arrayCopy.push({ name: newName });

    setPersons(arrayCopy);
  }
  const handleChange = (event) =>
  {
    //console.log(event.target.value);//
    setNewName(event.target.value);
  }
  const sAm = [];
  for (let i = 0; i < persons.length; i++)
  {
    sAm.push(<p key={i}>{persons[i].name}</p>);
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onChange={handleChange} onSubmit={handleClick}>
        <div> name: <input /></div>
        {/* <div>number: <input /></div> */}
        <div> <button type="submit" >add</button>  </div>
      </form>
      <h2>Numbers </h2>
      {sAm}
      <div></div>

    </div>
  )
}

export default App
