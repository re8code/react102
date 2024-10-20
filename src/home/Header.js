import './home.css';
import List from './List.js';

const element = () => {
  return (
    <div id='header'>
      <ul>
        <List type='text' data='How it works' />
        <List type='text' data='Gifts' />
        <List type='text' data='About' link='/about'/>
        <List type='image' data='./logo.png' />
        <List type='text' data='Login' />
        <List type='text' data='Members' />
        <List type='text' data='Contacts' />
      </ul>
    </div>
  )
}

export default element;