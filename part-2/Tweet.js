const Tweet = (props) => {
  return (
    <ul>
      <li>Username: {props.username}</li>
      <li>Name: {props.name}</li>
      <li>Date: {props.date}</li>
      <li>Message: {props.message}</li>
    </ul>
  );
};
