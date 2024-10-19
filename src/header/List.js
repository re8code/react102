const element = (props) => {
  if (props.type == 'image')
    return (
      <li>
        <img src={props.data} alt='image' />
      </li>
    );
  else
    return <li>{props.data}</li>;
}
export default element;