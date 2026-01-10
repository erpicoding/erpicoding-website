function StackItem(props) {
  return (
    <div className="stackItem">
      <img src={props.img} />
      <div className="line"></div>
      <p>{props.name}</p>
    </div>
  );
}

export default StackItem;
