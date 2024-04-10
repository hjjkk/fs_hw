import React from "react";

const Header = (x) => {
  //console.log(x)
  return (
    <div>
      <h1>{x.name}</h1>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} num={part.exercises} />
      ))}
    </div>
  );
};

const Part = (props) => (
  <p>
    {props.name} {props.num}
  </p>
);

const Total = ({ parts }) => {
  return (
    <p>
      <b>total of {parts.reduce((s, p) => s + p.exercises, 0)} exercises</b>
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
