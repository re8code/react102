import { Link } from 'react-router-dom';

const element = (props) => {
  if (props.type == 'image')
    return (
      <li>
        <img src={props.data} alt='image' />
      </li>
    );
  else {
    if (props.link != '')
      return <li><Link to={props.link}>{props.data}</Link></li>;
    else
      return <li>{props.data}</li>;
  }
}
export default element;