const App = () => (
  <div>
    <Tweet
      username="testUser1"
      name="Ramy"
      date="2022-09-14"
      message="Hello Alex!"
    />
    <Tweet
      username="testUser2"
      name="Alex"
      date="2022-08-27"
      message="Hello Ramy!"
    />
    <Tweet
      username="testUser3"
      name="Kyle"
      date="2022-09-05"
      message="Hello world!"
    />
  </div>
);

ReactDOM.render(<App />, document.querySelector(`#root`));
