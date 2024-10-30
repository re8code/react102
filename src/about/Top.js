import BoxItem from './BoxItem.js';

const style = {
  width: '750px',
  height: '500px',
  float: 'left',
  backgroundImage: 'url("./chef_about.png")'
};

const element = () => {
  return (
    <div id='top'>
      <div style={style}>
        <BoxItem type='text' data='Global Business, Lorem ipsum dolor sit amet' alpha='true'/>
      </div>
      <div className='top_right'>
        <BoxItem type='image' data='./right1.png' />
        <BoxItem type='image' data='./right2.png' />
      </div>
    </div>
  );
};
export default element;