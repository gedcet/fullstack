//import http from "http"
import express, { request } from "express"
import morgan from "morgan"
import cors from "cors"

const app = express()

let persons = [
  {
    "id": 1,
    "name": "Arto Hellas petras",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  },
  {
    "id": 5,
    "name": "Marija cvikk",
    "number": "39-23-6425873122"
  }
]

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'text/plain' })
//   response.end('Hello World 2')
// })

let laikas = `\n${new Date()}`

let ieskomasis = function (request, responce)
{
  //  console.log(request.params)
  for (let i = 0; i < persons.length; i++)
  {
    if (request.params.id == persons[i].id)
    {
      responce.write("Asmens vardas: " + persons[i].name)
      responce.write("\n")
      responce.write("Asmens telefono numeris: " + persons[i].number)
      //responce.json(persons[i].name)
    }
    // if (request.params.id > persons.length)
    // {
    //   responce.write("nera tokio elemento " + `${request.params.id}`)
    // }
  }
  responce.end()
}

let ieskomasisTrinamas = function (request, responce)
{
  for (let i = 0; i < persons.length; i++)
  {
    //console.log(request.params)
    //trinam elemnta is masyvo
    let lostElement = persons[i].name
    if (request.params.id == persons[i].id)
    {
      persons.splice(i, 1)
      console.log("po trinimo: ", persons)
      responce.write("Istrintas " + lostElement + " asmuo")
      responce.end()
    }
  }
}

let IdedamasNaujasPersonas = function (request, responce)
{
  const id = Math.floor(Math.random() * 1000)
  const futureName = request.body.name
  const futureNumber = request.body.number
  const formuojamNaujaElementa =
  {
    "id": id,
    "name": request.body.name,
    "number": request.body.number
  }

  if (futureName === "")//jei tuscias vardas
  {
    console.log("Vardo laukas tuscias, ivedimas nutrauktas")
    responce.end("Vardo laukas tuscias del to ivedimas nutrauktas ")
    return
  }
  if (futureNumber === "")//jei tuscias numeris
  {
    console.log("Numerio laukas tuscias, ivedimas nutrauktas")
    responce.end("Numerio laukas tuscias del to ivedimas nutrauktas ")
    return
  }

//cikle ieskom pasikartojancio vardo ir numerio
  for (let i = 0; i < persons.length; i++)
  {
    if (futureName === persons[i].name)
    {
      console.log("Toks asmuo jau yra, negalimas ivedimas")
      responce.end("Nauju asmenu idejimas nutrauktas del to kad vardai kartojosi ")
      return
    }
    if (futureNumber === persons[i].number)
    {
      console.log("Toks numeris jau yra, negalimas ivedimas")
      responce.end("Nauju numeriu idejimas nutrauktas del to kad numeriai kartojosi ")
      return
    }
  }
  //neradus vienodu vardu pridedam
  let idetasis = persons.push(formuojamNaujaElementa)
  //console.log("visas masyvas", request.params)
  responce.write("idetas naujas " + idetasis + "-asis asmuo: " + request.body.name + "jo id: " + id) 
  responce.end()
}
//middle wear pradzia
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))
app.use(express.static("./build"))//mokina noda dirbti su build direktorija


//end points
app.get('/api/persons/:id', ieskomasis)
app.post('/api/persons/', IdedamasNaujasPersonas)
app.delete('/api/persons/:id', ieskomasisTrinamas)
app.get('/api/persons', (request, response) =>
{
  response.json(persons)
  response.end()
})

app.get('/info', (request, response) =>
{
  response.write("viso: " + persons.length + " vnt. personu ")
  response.write(laikas)
  response.end()
})

const PORT = 3001
app.listen(PORT, () =>
{
  console.log(`Server running on port ${PORT}`)
})

