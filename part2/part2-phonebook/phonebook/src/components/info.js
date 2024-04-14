import React from "react";

const Persons = ({ persons, filterName }) => {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(filterName.toLowerCase())
        )
        .map((person) => (
          <p key={person.name}>
            {person.name} {person.phone}
          </p>
        ))}
    </div>
  );
};

export default Persons;
