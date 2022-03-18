import { useState } from 'react'
import Client from './Clients'

const App = () =>
{
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newFilterValue, setNewFilterValue] = useState('')
  const [newFilterValueNumber, setNewFilterValueNumber] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] = useState('')

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
  {//console.log(event.target.value);//
    setNewName(event.target.value);
  }

  const handleChangeNumber = (event) =>
  { setNewNumber(event.target.value); }

  const handleFilter = (event) =>
  { setNewFilterValue(event.target.value); }

  const handleFilterNumber = (event) =>
  { setNewFilterValueNumber(event.target.value); }

  const clearFilter = () =>
  {
    setNewFilterValue("")
    setNewFilterValueNumber("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <p>filter by name <input onChange={handleFilter} /></p>
      <p>filter by number <input onChange={handleFilterNumber} /></p> */}
      <div></div>
      <form onSubmit={handleClick}>
        <div>Name: <input onChange={handleChangeName} /> filter by name <input onChange={handleFilter} /></div>
        <div> Number: <input onChange={handleChangeNumber} />filter by number <input onChange={handleFilterNumber} /></div>
        <div> <button type="submit" >Add</button>  </div>
      </form>
      {/* <div> <button onClick={clearFilter} >Clear filters</button>  </div> bandziau clear butona padaryti*/}
      <hr></hr>
      <h2>Clients:</h2>
      <h1><strong>Vardas, Pavarde: </strong>     Telefonas:</h1>
      <hr size="10"></hr>
      <Client persons={persons} newFilterValue={newFilterValue} newFilterValueNumber={newFilterValueNumber} />


    </div>
  )
}

export default App
