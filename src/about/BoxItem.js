const basic_style = {
  width: '210px',
  height: '210px',
  padding: '20px',
  backgroundColor: 'red'
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
      basic_style.backgroundColor = '#386d0dc8';
      basic_style.marginTop = '250px';
      return (
        <div className='boxitem' style={basic_style}>
          <h2>Title</h2>
          {props.data}
        </div>
      );
    }
    else
      return (
        <div className='boxitem' style={basic_style}>
        </div>
      );
  }
};
export default element;