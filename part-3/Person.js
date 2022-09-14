const Person = (props) => {
  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>
          Name:{" "}
          {props.name.length > 8 ? props.name.slice(0, 6) + `...` : props.name}
        </li>
        <li>Age: {props.age}</li>
      </ul>

      {props.age >= 18 ? <h3>Please go vote!</h3> : <h3>You must be 18.</h3>}

      <ul>
        {props.hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};
