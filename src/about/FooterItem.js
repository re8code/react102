const element = (props) => {
  let arr = props.data;
  let index = props.index;
  let string = index<0 ? "|" : arr[index];

  return (
    <li>{string}</li>
  );
};

export default element;