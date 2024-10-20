import './home.css';

const element = (props) => {
  let path = `./icon${props.index}.png`;

  return (
    <p>
      <img src={path} alt="icon image" /><br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>
  );
}

export default element;