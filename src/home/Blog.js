const iconbox_style = {
  width: '1240px',
  overflow: 'hidden',
  margin: '10px auto',
  backgroundColor: 'pink',
  height: '500px'
};

const element = () => {
  return (
    <>
      <div id="icon_title">
        "WHAT'S FOR DINNER"<br/><span>FINALLY HAS AN<br/>EASY ANWSER</span>
      </div>
      <div id='icon_box' style={iconbox_style}>

      </div>
    </>
  );
};

export default element;