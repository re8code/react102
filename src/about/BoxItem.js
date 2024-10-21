const basic_style = {
  width: '210px',
  height: '210px',
  padding: '20px',
  backgroundColor: 'orange',
  index: 1
};

const element = (props) => {
  if (props.type == 'image')
    return (
      <div className='boxitem'>
        <img src={props.data} alt='image' />
      </div>
    );
  else {
    if (props.alpha == 'true') {
      const style = {...basic_style};
      style.backgroundColor = '#386d0dc8';
      style.marginTop = '250px';
      return (
        <div className='boxitem' style={style}>
          <h2>Title</h2>
          {props.data}
        </div>
      );
    }
    else {
      const style = {...basic_style};
      style.float = 'left';
      if (props.index%2 == 0) style.backgroundColor = 'lightgreen';
      return (
        <div className='boxitem' style={style}>
          <h2>Item Box {props.index+1}</h2>
          {props.data}
        </div>
      );
    }
  }
};
export default element;