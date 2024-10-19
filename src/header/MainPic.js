let main_style = {
  height: '464px',
  backgroundImage: "url('./main.png')",
  backgroundSize: '100% 464px'
};

const res = <div style={main_style} />;

const element = () => {
  return res;
}

export default element;