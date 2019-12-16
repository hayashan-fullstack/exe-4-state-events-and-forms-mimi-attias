import React, { useState } from 'react'
import ReactDOM from "react-dom";


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
     number: '025678767' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNunber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = { name: newName, number: newNumber }
    setPersons(persons.concat(personObject))
    setNewName(event.target.value)
    setNewNunber(event.target.value)
    // console.log(persons)
  }


  const handlePName = (event) => {
    setNewName(event.target.value)
  }

  const handlePNumber = (event) => {
    setNewNunber(event.target.value)
  }

  const print = () => { return (persons.map(person => <h5>name: {person.name}<div>number: {person.number}</div></h5>)) }

  return (
    <div style={{ margin: '15%', color: 'darkred', padding: 150, background: 'whiteblue', fontSize: 30, textAlign: 'center' }}>
      <h2>Phonebook</h2>
      <form>
        <div>
          <form onSubmit={addPerson}>
          </form>
          Name:<input value={newName} onChange={handlePName} />
          Number:<input value={newNumber} onChange={handlePNumber} />
          <div>
            <button type="submit" onClick={addPerson}>add</button>
          </div>
        </div>
      </form>
      <h2>Numbers:</h2>
      <ul>
        {print()}
      </ul>
    </div>
  )
}

export default App
ReactDOM.render(<App />, document.getElementById("root"));

