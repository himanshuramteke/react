//Create a component named "Person" that takes two props - "name" and "age". The component should display the person's name and age in a paragraph element.

function Person(props){
    return (
        <>
            {props.name} is  {props.age} years old.
        </>
    );
}

//Usage

<Person name = "Himanshu" age ="23" />