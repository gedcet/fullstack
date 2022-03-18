import { useState } from 'react'

const App = () =>
{
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '888-888'}])
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] = useState('')
  const [newFilterValue, setNewFilterValue] = useState('')
  const [newFilterValueNumber, setNewFilterValueNumber] = useState('')

  const handleClick = (event) =>
  {
    event.preventDefault();//neperkrauna puslapio
    //console.log(event.target)
    const arrayCopyPersons = [...persons];
    const arrayCopyNumbers = [...persons];

    for (let i = 0; i < persons.length; i++)
    {
      if (newName === persons[i].name && newNumber === persons[i].number)
      {
        alert("tokia reiksme yra ")
        return
      }
    }
    arrayCopyPersons.push({ name: newName, number: newNumber });
    setPersons(arrayCopyPersons);
  }
  const handleChangeName = (event) =>
  {
    //console.log(event.target.value);//
    setNewName(event.target.value);
  }

  const handleChangeNumber = (event) =>
  {
    setNewNumber(event.target.value);
  }
  
  const handleFilter = (event) =>
  {
       setNewFilterValue(event.target.value);
  }

  const handleFilterNumber = (event) =>
  {
       setNewFilterValueNumber(event.target.value);
  }
  
  const showPersonNames = [];
  for (let i = 0; i < persons.length; i++)
  {
    const regEx1 = new RegExp(newFilterValue, 'i');
    const regEx2 = new RegExp(newFilterValueNumber, 'i');
    if (regEx1.test(persons[i].name) && (regEx2.test(persons[i].number)))  
    {
      showPersonNames.push(<p key={i}>Personalijos vardas: <strong>{persons[i].name}</strong> telefonas <strong>{persons[i].number}</strong> </p>);
    }

  }
  showPersonNames.push("Nieko nerasta");

  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter by name <input onChange={handleFilter} /></p>
      <p>filter by number <input onChange={handleFilterNumber} /></p>
      <div></div>
      <form onSubmit={handleClick}>
        <div> Name: <input onChange={handleChangeName} /></div>
        <div> Number: <input onChange={handleChangeNumber} /></div>
        <div> <button type="submit" >add</button>  </div>
      </form>
      <h2>Numbers </h2>
      {showPersonNames}
      <div></div>

    </div>
  )
}

export default App
