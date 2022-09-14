const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent name="Ramy" />
  </div>
);

ReactDOM.render(<App />, document.querySelector(`#root`));
