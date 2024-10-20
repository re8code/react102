import Panel from './Panel.js';

const iconbox_style = {
  width: '1240px',
  overflow: 'hidden',
  margin: '10px auto'
};

const element = () => {
  let box = [];
  for (let i=1; i<5; i++) box.push(<Panel index={i}/>);

  return (
    <>
      <div id="icon_title">
        "WHAT'S FOR DINNER"<br/><span>FINALLY HAS AN<br/>EASY ANWSER</span>
      </div>
      <div id='icon_box' style={iconbox_style}>
        {box}
      </div>
    </>
  );
};

export default element;