const Header = (props) => {
  return <h2>{props.name}</h2>;
};

const Part = ({ name, exercises }) => {
  console.log;
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  console.log(parts);
  return (
    <>
      {parts.map((part) => {
        return (
          <Part name={part.name} exercises={part.exercises} key={part.id} />
        );
      })}
    </>
  );
};

const Total = ({ parts }) => {
  console.log(parts);
  let sum = parts.reduce((acc, ex) => {
    return (acc += ex.exercises);
  }, 0);
  return <h4>total of {sum} exercises</h4>;
};

const Course = ({ name, parts }) => {
  return (
    <>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};

export default Course;
