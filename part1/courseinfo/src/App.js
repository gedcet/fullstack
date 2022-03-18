import Course from "./Course"
import { useState } from "react";

const App = () =>
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    },
    {
      name: 'Half Stack application development2',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React2',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data2',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component2',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux2',
          exercises: 11,
          id: 4
        }
      ]
    }
  ]

  let temp = [];
  for (let i = 0; i < courses.length; i++)
  {
    temp.push(<Course key={i} course={courses[i]}/>)
  }

  return (
    <div>
      {temp} 
    </div>
  )
}

export default App