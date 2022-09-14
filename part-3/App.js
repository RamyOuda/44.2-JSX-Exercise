const App = () => (
  <div>
    <Person name="Ramy" age={27} hobbies={[`Gaming`, `Music`, `Programming`]} />
    <Person
      name="AVeryLongName"
      age={10}
      hobbies={[`Having a very long name`, `Being young`, `Playing Fortnite`]}
    />
    <Person
      name="John"
      age={40}
      hobbies={[`Walks on the beach`, `Reading`, `Playing Fortnite`]}
    />
  </div>
);

ReactDOM.render(<App />, document.querySelector(`#root`));
