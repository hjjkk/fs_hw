import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", phone: "040-123456"}])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState('')

  const handleNewName = (e) => {
    setNewName(e.target.value)
  };

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleConcat = (e) => {
    e.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return
    }
    setPersons(
      persons.concat({
        name: newName,
        phone: newNumber
      })
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>

        <div>
          <button type="submit" onClick={handleConcat}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name} {person.phone}</p>
      ))}
    </div>
  );
};

export default App;
