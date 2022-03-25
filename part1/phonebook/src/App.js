import { useEffect, useState } from 'react'
import Client from './Clients'
import servicesClient from './services/servicesClient';

const App = () =>
{
  const [persons, setPersons] = useState([])
  let apiUrl = `http://localhost:3001/persons`

  const fetchPersonFromDB = async () =>
  {
    const readAllResult = await servicesClient.ReadAll()
    setPersons(readAllResult.data)
  }

  const [newFilterValue, setNewFilterValue] = useState('')
  const [newFilterValueNumber, setNewFilterValueNumber] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] = useState('')

  const handleClick = async (event) =>
  {
    event.preventDefault();//neperkrauna puslapio
    console.log(event.target)
    //const arrayCopyPersons = [...persons];
    //const arrayCopyNumbers = [...persons];

    for (let i = 0; i < persons.length; i++)
    {
     // if (newName === persons[i].name && newNumber === persons[i].number) cia vardas gali kartotis numeris ne
     if (newName === persons[i].name)
      {
        let telefonoNrKeitimas = window.confirm("toks vardas yra, ar keisim jam numeri i " + event.target.value)
        if (telefonoNrKeitimas)
        {const insertValue = await servicesClient.updatePost(persons[i].id, {name : newName, number: newNumber})}
        fetchPersonFromDB();
        //alert(telefonoNrKeitimas)
        return
      }

    }
    //arrayCopyPersons.push({ name: newName, number: newNumber });
    //setPersons(arrayCopyPersons);
    const insertValue = await servicesClient.createPost({name : newName, number: newNumber})
    
    fetchPersonFromDB();
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

  useEffect(fetchPersonFromDB, [])

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
      <Client persons={persons} newFilterValue={newFilterValue} newFilterValueNumber={newFilterValueNumber} fetchPersonFromDB={fetchPersonFromDB}/>


    </div>
  )
}

export default App
