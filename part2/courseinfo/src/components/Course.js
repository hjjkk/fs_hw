import React from 'react'

const Header = (x) => {
    //console.log(x)
    return (
        <div>
            <h1>{x.name}</h1>
        </div>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part) =>
                <Part key={part.id} name={part.name} num={part.exercises} />
            )}
        </div>
    )
}

const Part = (props) => <p>{props.name} {props.num}</p>
  


const Total = (props) => {
    let sum = 0
    props.props.forEach(element => {
        sum += element.exercises
    });
    return (
        <p><b>total of {sum} exercises</b></p>
    )
}


const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total props={course.parts} />
        </div>

    )
}

export default Course