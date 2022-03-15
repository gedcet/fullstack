import { useEffect, useState } from 'react'

const App = () =>
{
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];



  const [selected, setSelected] = useState(0)
  const [ArrayVotes, setArrayVotes] = useState([])
  let max = anecdotes.length - 1;

  function initArrVotes()
  {
    const masyvas_votes = [];
    for (let i = 0; i < anecdotes.length; i++)
    {
      masyvas_votes.push(0);
    }
    setArrayVotes(masyvas_votes);
  }

  useEffect(initArrVotes, [])

  function getRandomInt(max)
  {
    let kint1 = Math.random() * max;
    let kint2 = Math.floor(kint1);
    console.log(kint2);
    return kint2;
  }

  function paspaudus_next()
  {
    let temp = getRandomInt(max);
    setSelected(temp)
  }

  function paspaudus_balsavima()
  {
    //1.pasidaryti masyvo kopija arrayVotes
    const arrayVotesCopy = [...ArrayVotes];
    //2.dublikuotam masyve padidinti selected reiksme
    arrayVotesCopy[selected]++;
    //3.iskviesti funkcija setArraVotes ir nurodyti modifikuota masyva (kvieciant set funkcijas bus is naujo komponentas atvaizduojamas)
    setArrayVotes(arrayVotesCopy);
    //masyvas_votes[selected]++;
  }

  function findIndexOfMaxValue()
  {//rasti didziausios reiksmes indekso numeri
    let didziausiosReiksmesIndeksas = 0;
    let didziausiosiaReiksme = ArrayVotes[0];
    for (let i = 0; i < ArrayVotes.length; i++)
    {
      if (ArrayVotes[i] > didziausiosiaReiksme)
      {
        didziausiosReiksmesIndeksas = i;
        didziausiosiaReiksme = ArrayVotes[i];
      }
    }
    return didziausiosReiksmesIndeksas;
  }
  const GeriausiasAnekdotas = findIndexOfMaxValue();
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {ArrayVotes[selected]} votes, anekdoto nr {selected}</p>
      <br></br>
      <button onClick={paspaudus_balsavima}> Vote</button>
      <button onClick={paspaudus_next}> Next anecdote</button>
      <h4>Anecdote with most votes </h4>
      <p>{anecdotes[GeriausiasAnekdotas]} has {ArrayVotes[GeriausiasAnekdotas]} votes</p>
      <p></p>
    </div>
  )
}

export default App;